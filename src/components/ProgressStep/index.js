import React, { useState, useEffect } from "react";
import {
  ProgressContainer,
  MigrationNotice,
  MigrationNoticeText,
  MigrationNoticeDismiss,
  StepCard,
  StepHeader,
  StepNumber,
  StepTitle,
  StepContent,
  StepActions,
  CompleteButton,
  NextButton,
  ResetButton,
  ProgressBar,
  ProgressFill,
  HeaderActions,
  ConfirmModal,
  ModalOverlay,
  ModalContent,
  ModalButtons,
  ConfirmButton,
  CancelButton,
} from "./styles";
import { StepBody } from "../StepBody";
import { loadProgress, saveProgress } from "../../utils/progressStorage";

export const ProgressStep = ({
  steps,
  pageId,
  title = "Lista de verificación",
  icon,
}) => {
  // Dual-mode step identity (R3.4, gate-review item #2): schema-based steps
  // already carry a stable `id` (see src/content/). The `step.id ?? index`
  // fallback below exists so any step array WITHOUT an `id` field (e.g. a
  // hand-authored/legacy shape) still renders and persists progress via the
  // same ID-based path instead of throwing.
  //
  // As of PR4b (accessible-redesign), all 3 procedure pages (GeneralCleaning,
  // WoundHealing, WaterRecycling) are migrated to the content schema and
  // always pass steps with real `id`s — there is no first-party consumer of
  // this fallback anymore. Kept intentionally as defensive code for
  // corrupt/unknown data rather than removed; do not delete the "legacy
  // (index-fallback) mode" test coverage in __tests__/ProgressStep.test.js
  // that exercises this path.
  const normalizedSteps = steps.map((step, index) => ({
    ...step,
    id: step.id ?? String(index),
  }));

  const procedure = { id: pageId, steps: normalizedSteps };

  const [currentId, setCurrentId] = useState(normalizedSteps[0]?.id);
  const [completedIds, setCompletedIds] = useState(new Set());
  const [allCompleted, setAllCompleted] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [migrationNotice, setMigrationNotice] = useState(false);

  // Cargar progreso desde localStorage (versioned v2, with legacy migration
  // and append/reorder reconciliation — R2.3, R3.4)
  useEffect(() => {
    const result = loadProgress(procedure);
    const completed = new Set(result.completedIds);

    setCompletedIds(completed);
    setCurrentId(result.currentId || normalizedSteps[0]?.id);
    setAllCompleted(
      normalizedSteps.length > 0 && completed.size === normalizedSteps.length
    );

    if (result.migrated === "reset") {
      setMigrationNotice(true);
      // Persist the reset immediately so the notice only ever shows once —
      // the next load will see a v2 record whose stepIds already match the
      // current schema and won't detect a mismatch again.
      saveProgress(procedure, {
        completedIds: [],
        currentId: normalizedSteps[0]?.id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId, normalizedSteps.length]);

  // Scroll automático al cambiar de paso
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Pequeño delay para que el contenido se renderice
    const timer = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timer);
  }, [currentId]);

  const currentIndex = normalizedSteps.findIndex(
    (step) => step.id === currentId
  );
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;
  const currentStep = normalizedSteps[activeIndex];

  // Marcar paso como completado
  const completeStep = (stepId) => {
    const newCompleted = new Set(completedIds);
    newCompleted.add(stepId);
    setCompletedIds(newCompleted);

    // 🎯 Plausible Event: Paso completado
    if (window.plausible) {
      window.plausible("Paso Completado", {
        props: {
          procedimiento: pageId,
          paso: activeIndex + 1,
          total_pasos: normalizedSteps.length,
        },
      });
    }

    if (newCompleted.size === normalizedSteps.length) {
      setAllCompleted(true);

      // 🎯 Plausible Event: Procedimiento completado
      if (window.plausible) {
        window.plausible("Procedimiento Completado", {
          props: { procedimiento: pageId },
        });
      }
    }

    saveProgress(procedure, { completedIds: newCompleted, currentId });
  };

  // Ir al siguiente paso
  const goToNextStep = () => {
    if (activeIndex < normalizedSteps.length - 1) {
      const nextId = normalizedSteps[activeIndex + 1].id;
      setCurrentId(nextId);
      saveProgress(procedure, { completedIds, currentId: nextId });
    }
  };

  // Mostrar confirmación de reinicio
  const handleResetClick = () => {
    setShowConfirmReset(true);
  };

  // Confirmar reinicio
  const confirmReset = () => {
    // 🎯 Plausible Event: Proceso reiniciado
    if (window.plausible) {
      window.plausible("Proceso Reiniciado", {
        props: {
          procedimiento: pageId,
          progreso_previo: completedIds.size,
        },
      });
    }

    const firstStepId = normalizedSteps[0]?.id;
    setCompletedIds(new Set());
    setCurrentId(firstStepId);
    setAllCompleted(false);
    setShowConfirmReset(false);
    saveProgress(procedure, { completedIds: [], currentId: firstStepId });

    // Scroll al inicio
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Cancelar reinicio
  const cancelReset = () => {
    setShowConfirmReset(false);
  };

  const dismissMigrationNotice = () => {
    setMigrationNotice(false);
  };

  const progressPercentage =
    normalizedSteps.length > 0
      ? (completedIds.size / normalizedSteps.length) * 100
      : 0;

  return (
    <ProgressContainer>
      {migrationNotice && (
        <MigrationNotice role="status">
          <MigrationNoticeText>
            Actualizamos esta guía; tu progreso en esta sección se reinició.
          </MigrationNoticeText>
          <MigrationNoticeDismiss
            onClick={dismissMigrationNotice}
            aria-label="Cerrar aviso"
          >
            ✕
          </MigrationNoticeDismiss>
        </MigrationNotice>
      )}

      <StepHeader>
        <div>
          <StepTitle>
            {icon && <span aria-hidden="true">{icon}</span>} {title}
          </StepTitle>
          <ProgressBar>
            <ProgressFill percentage={progressPercentage} />
          </ProgressBar>
          <div>
            {completedIds.size} de {normalizedSteps.length} pasos completados
            ({Math.round(progressPercentage)}%)
          </div>
        </div>

        {/* Botón reiniciar solo si hay progreso */}
        {(completedIds.size > 0 || activeIndex > 0) && (
          <HeaderActions>
            <ResetButton
              onClick={handleResetClick}
              aria-label="Reiniciar el proceso"
              title="Reiniciar proceso"
            >
              ↻
            </ResetButton>
          </HeaderActions>
        )}
      </StepHeader>

      {/* Mostrar solo el paso actual */}
      {!allCompleted && currentStep && (
        <StepCard isActive={true} isCompleted={false} isFullScreen={true}>
          <StepNumber isCompleted={false} isActive={true}>
            {activeIndex + 1}
          </StepNumber>

          <StepContent>
            <h3>{currentStep.title}</h3>
            <p>{currentStep.description}</p>
            <StepBody step={currentStep} />
          </StepContent>
        </StepCard>
      )}

      {/* Mostrar mensaje de completado */}
      {allCompleted && (
        <StepCard isCompleted={true} isFullScreen={true}>
          <StepContent>
            <h3>🎉 ¡Proceso completado!</h3>
            <p>Has completado todos los pasos del aseo general exitosamente.</p>
            <p>Tu progreso se ha guardado automáticamente.</p>
          </StepContent>
        </StepCard>
      )}

      {/* Resumen de pasos completados (opcional, colapsado) */}
      {completedIds.size > 0 && !allCompleted && (
        <details
          style={{
            marginTop: "var(--spacing-md)",
            opacity: 0.7,
            padding: "0 var(--spacing-lg)",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              padding: "var(--spacing-sm)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-secondary)",
            }}
          >
            📋 Ver pasos completados ({completedIds.size})
          </summary>
          {normalizedSteps
            .map((step, index) => ({ step, index }))
            .filter(({ step }) => completedIds.has(step.id))
            .map(({ step, index }) => (
              <div
                key={step.id}
                style={{
                  padding: "var(--spacing-xs)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-secondary)",
                }}
              >
                ✅ {index + 1}. {step.title}
              </div>
            ))}
        </details>
      )}

      {/* Botón fijo con lógica correcta */}
      <StepActions>
        {!allCompleted && currentStep && !completedIds.has(currentId) && (
          <CompleteButton
            onClick={() => completeStep(currentId)}
            aria-label={`Marcar como completado: ${
              currentStep ? currentStep.title : "paso actual"
            }`}
          >
            ✓ Completar paso
          </CompleteButton>
        )}

        {!allCompleted &&
          currentStep &&
          completedIds.has(currentId) &&
          activeIndex < normalizedSteps.length - 1 && (
            <NextButton
              onClick={goToNextStep}
              aria-label="Ir al siguiente paso"
            >
              Siguiente paso →
            </NextButton>
          )}

        {allCompleted && (
          <CompleteButton
            onClick={handleResetClick}
            aria-label="Reiniciar el proceso para comenzar de nuevo"
            style={{
              background: "linear-gradient(135deg, #64748b, #475569)",
              color: "white",
            }}
          >
            🔄 Empezar de nuevo
          </CompleteButton>
        )}
      </StepActions>

      {/* Modal de confirmación */}
      {showConfirmReset && (
        <ModalOverlay onClick={cancelReset}>
          <ConfirmModal onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              <h3>⚠️ Confirmar reinicio</h3>
              <p>¿Estás seguro de que quieres reiniciar el proceso?</p>
              <p>
                <strong>Se perderá todo el progreso actual.</strong>
              </p>
            </ModalContent>
            <ModalButtons>
              <CancelButton onClick={cancelReset}>Cancelar</CancelButton>
              <ConfirmButton onClick={confirmReset}>
                Sí, reiniciar
              </ConfirmButton>
            </ModalButtons>
          </ConfirmModal>
        </ModalOverlay>
      )}
    </ProgressContainer>
  );
};
