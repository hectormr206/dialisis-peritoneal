import React from 'react'
import { PageContainer } from '../PageContainer'
import { UrgentWarningCallout } from '../UrgentWarningCallout'
import { EscalationTable } from '../EscalationTable'
import { CitationFooter } from '../CitationFooter'
import {
  TopicHeader,
  TopicIntro,
  TopicSection,
  SectionHeading,
  SectionBody
} from './styles'

// TopicPage: shared composition template for the 4 medical-content pages
// (PR6-9) — design section 1's topic shape
// `{ sections: [{ heading, body, warning?, table?, sourceIds }] }`. Each
// section follows intro -> core guidance -> warning/escalation, and the
// page always ends with one CitationFooter that aggregates every sourceId
// referenced anywhere (page-level `sourceIds` plus each section's own) so
// PR6-9 authors don't have to hand-merge citation lists — R5.1.
//
// No real medical content ships in this PR — this is the reusable shell
// only; PR6-9 pass real `sections`/`sourceIds`.
//
// Heading levels: the page's own <h1> always belongs to Layout (every page
// in this app follows that convention — see CuidadosIndex, ProcedimientosIndex,
// TopicComingSoon, ProgressStep's StepTitle). TopicPage is always composed
// inside Layout, so `title` renders as <h2> here (not <h1>, fixed in PR6 —
// the PR5b version rendered <h1>, which produced two identical <h1>s once a
// real page wrapped it in Layout) and each section heading renders as <h3>.
export const TopicPage = ({ title, intro, sections = [], sourceIds = [] }) => {
  const allSourceIds = [
    ...sourceIds,
    ...sections.flatMap((section) => section.sourceIds || [])
  ]
  const uniqueSourceIds = [...new Set(allSourceIds)]

  return (
    <PageContainer>
      <TopicHeader>
        <h2>{title}</h2>
        {intro && <TopicIntro>{intro}</TopicIntro>}
      </TopicHeader>

      {sections.map((section, index) => (
        <TopicSection key={section.heading || index}>
          {section.heading && (
            <SectionHeading>{section.heading}</SectionHeading>
          )}
          {section.body && <SectionBody>{section.body}</SectionBody>}
          {section.warning && (
            <UrgentWarningCallout level={section.warning.level}>
              {section.warning.text}
            </UrgentWarningCallout>
          )}
          {section.table && <EscalationTable {...section.table} />}
        </TopicSection>
      ))}

      <CitationFooter sourceIds={uniqueSourceIds} />
    </PageContainer>
  )
}
