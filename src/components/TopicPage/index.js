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
export const TopicPage = ({ title, intro, sections = [], sourceIds = [] }) => {
  const allSourceIds = [
    ...sourceIds,
    ...sections.flatMap((section) => section.sourceIds || [])
  ]
  const uniqueSourceIds = [...new Set(allSourceIds)]

  return (
    <PageContainer>
      <TopicHeader>
        <h1>{title}</h1>
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
