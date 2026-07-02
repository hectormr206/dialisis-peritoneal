import React, { useEffect, useState } from 'react'
import { MdArrowUpward, MdArrowDownward, MdRemove } from 'react-icons/md'
import { PageContainer } from '../PageContainer'
import { CitationFooter } from '../CitationFooter'
import {
  loadEntries,
  saveEntry,
  clearAll,
  todayISO,
  computeDelta
} from '../../utils/healthLog'
import {
  IntroText,
  PrivacyNote,
  Form,
  Field,
  FieldLabel,
  NumberInput,
  TextInput,
  ErrorText,
  SaveButton,
  StatusMessage,
  HistorySection,
  HistoryList,
  HistoryItem,
  HistoryDate,
  HistoryWeight,
  HistoryNotes,
  DeltaRow,
  DeltaIcon,
  EmptyState,
  DeleteAllButton,
  ModalOverlay,
  ModalBox,
  ModalButtons,
  ConfirmDeleteButton,
  CancelDeleteButton
} from './styles'

// HealthLog: private daily weight/notes log — design section 7 sketch,
// "Weight/fluid log" (PR11, the final optional slice of accessible-redesign).
// No accounts, no servers: everything reads/writes localStorage via
// src/utils/healthLog.js. Because the app is offline-capable since PR10
// (src/utils/registerServiceWorker.js precaches the app shell), this whole
// page — form, history, and localStorage reads/writes — works the same with
// no network connection; nothing here required any network-awareness code.
//
// R5.5 hard rule for this page (the log's own version of PR8/PR9's "no
// invented threshold" rule): the log NEVER judges a weight value as
// good/bad/normal/dangerous, and never computes a derived index like BMI.
// day-over-day deltas (computeDelta) are plain arithmetic, shown with
// neutral wording ("subiste"/"bajaste"/"se mantuvo igual"). The one
// clinic-contact reminder below is a *static* callout (design section 7 +
// content-research #5086 section 3c, NKF fluid-overload source) — it always
// renders, regardless of the data, so it can never read as a per-value
// alert. See __tests__/HealthLog.test.js's VALUE_JUDGMENT_PATTERN guard.
const formatDate = (isoDate, options) =>
  new Intl.DateTimeFormat('es-MX', { ...options, timeZone: 'UTC' }).format(
    new Date(`${isoDate}T00:00:00Z`)
  )

const formatWeight = (weightKg) => `${weightKg.toFixed(1)} kg`

const DeltaIndicator = ({ current, previous }) => {
  const delta = computeDelta(current, previous)
  if (!delta) return null

  const rounded = Math.round(Math.abs(delta.kg) * 10) / 10
  const when = delta.isConsecutiveDay
    ? 'desde ayer'
    : `desde tu registro anterior (${formatDate(previous.date, { day: 'numeric', month: 'long' })})`

  if (rounded === 0) {
    return (
      <DeltaRow>
        <DeltaIcon aria-hidden='true'><MdRemove /></DeltaIcon>
        <span>Tu peso se mantuvo igual {when}</span>
      </DeltaRow>
    )
  }

  const verb = delta.kg > 0 ? 'subiste' : 'bajaste'
  const Icon = delta.kg > 0 ? MdArrowUpward : MdArrowDownward

  return (
    <DeltaRow>
      <DeltaIcon aria-hidden='true'><Icon /></DeltaIcon>
      <span>{verb} {rounded.toFixed(1)} kg {when}</span>
    </DeltaRow>
  )
}

export const HealthLog = () => {
  const [entries, setEntries] = useState([])
  const [weightValue, setWeightValue] = useState('')
  const [notesValue, setNotesValue] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(null)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const today = todayISO()

  useEffect(() => {
    const loaded = loadEntries()
    setEntries(loaded)

    const todayEntry = loaded.find((entry) => entry.date === today)
    if (todayEntry) {
      setWeightValue(todayEntry.weightKg != null ? String(todayEntry.weightKg) : '')
      setNotesValue(todayEntry.notes || '')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasTodayEntry = entries.some((entry) => entry.date === today)

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(null)

    const trimmedWeight = weightValue.trim()
    let weightKg
    if (trimmedWeight === '') {
      weightKg = undefined
    } else {
      const parsed = Number(trimmedWeight)
      if (!Number.isFinite(parsed) || parsed <= 0) {
        setError('Ingresa un peso válido en kilogramos, por ejemplo 70.5.')
        return
      }
      weightKg = parsed
    }

    const updated = saveEntry({ date: today, weightKg, notes: notesValue })
    setEntries(updated)
    setStatus(hasTodayEntry ? 'Registro actualizado.' : 'Registro guardado.')
  }

  const handleConfirmDelete = () => {
    clearAll()
    setEntries([])
    setWeightValue('')
    setNotesValue('')
    setShowConfirmDelete(false)
    setStatus(null)
  }

  return (
    <PageContainer>
      <IntroText>
        Aquí puedes anotar tu peso y cómo te sientes cada día. Pesarte todos
        los días, a la misma hora, es parte del autocuidado en diálisis
        peritoneal y ayuda a ti y a tu clínica a detectar cambios a tiempo.
      </IntroText>
      <PrivacyNote>
        Tu información se guarda únicamente en este teléfono; no se envía a
        internet ni se comparte con nadie. Como esta app funciona sin
        conexión, puedes usar tu registro aunque no tengas internet.
      </PrivacyNote>

      <h2>{hasTodayEntry ? 'Actualiza el registro de hoy' : 'Registra tu peso de hoy'}</h2>
      <Form onSubmit={handleSubmit} aria-label='Formulario de registro diario'>
        <Field>
          <FieldLabel htmlFor='health-log-weight'>Peso de hoy (kg)</FieldLabel>
          <NumberInput
            id='health-log-weight'
            type='number'
            inputMode='decimal'
            step='0.1'
            min='0'
            value={weightValue}
            onChange={(event) => setWeightValue(event.target.value)}
            aria-describedby={error ? 'health-log-weight-error' : undefined}
          />
          {error && <ErrorText id='health-log-weight-error'>{error}</ErrorText>}
        </Field>

        <Field>
          <FieldLabel htmlFor='health-log-notes'>Nota (opcional)</FieldLabel>
          <TextInput
            id='health-log-notes'
            type='text'
            maxLength={140}
            value={notesValue}
            onChange={(event) => setNotesValue(event.target.value)}
          />
        </Field>

        <SaveButton type='submit'>
          {hasTodayEntry ? 'Actualizar registro de hoy' : 'Guardar registro de hoy'}
        </SaveButton>

        {status && <StatusMessage role='status'>{status}</StatusMessage>}
      </Form>

      <HistorySection aria-labelledby='health-log-history-heading'>
        <h2 id='health-log-history-heading'>Tu historial</h2>

        {entries.length === 0
          ? (
            <EmptyState>
              Aún no tienes registros. Pesarte todos los días te ayuda, junto
              con tu clínica, a detectar cambios en tu retención de líquido.
            </EmptyState>
            )
          : (
            <HistoryList aria-label='Historial de registros'>
              {entries.map((entry, index) => (
                <HistoryItem key={entry.date}>
                  <HistoryDate>
                    {formatDate(entry.date, { day: 'numeric', month: 'long', year: 'numeric' })}
                  </HistoryDate>
                  {entry.weightKg != null && (
                    <HistoryWeight>{formatWeight(entry.weightKg)}</HistoryWeight>
                  )}
                  <DeltaIndicator current={entry} previous={entries[index + 1]} />
                  {entry.notes && <HistoryNotes>{entry.notes}</HistoryNotes>}
                </HistoryItem>
              ))}
            </HistoryList>
            )}
      </HistorySection>

      {/* Static reminder, R5.6-style non-behavioral framing but for this
          page's own rule (R5.5): always renders, regardless of the data —
          never a per-value alert triggered by a specific weight/delta. */}
      <IntroText>
        Si notas que tu peso sube varios días seguidos o te hinchas más,
        llama a tu clínica. No es necesario esperar a que un número te
        parezca "muy alto" para preguntar.
      </IntroText>

      {entries.length > 0 && (
        <DeleteAllButton type='button' onClick={() => setShowConfirmDelete(true)}>
          Borrar todo mi registro
        </DeleteAllButton>
      )}

      {showConfirmDelete && (
        <ModalOverlay onClick={() => setShowConfirmDelete(false)}>
          <ModalBox onClick={(event) => event.stopPropagation()} role='dialog' aria-modal='true' aria-labelledby='health-log-delete-heading'>
            <h3 id='health-log-delete-heading'>¿Borrar todo tu registro?</h3>
            <p>Esta acción borra todos los días guardados en este teléfono y no se puede deshacer.</p>
            <ModalButtons>
              <CancelDeleteButton type='button' onClick={() => setShowConfirmDelete(false)}>
                Cancelar
              </CancelDeleteButton>
              <ConfirmDeleteButton type='button' onClick={handleConfirmDelete}>
                Sí, borrar todo
              </ConfirmDeleteButton>
            </ModalButtons>
          </ModalBox>
        </ModalOverlay>
      )}

      <CitationFooter sourceIds={['imss-797-16', 'nkf-fluid-overload']} />
    </PageContainer>
  )
}
