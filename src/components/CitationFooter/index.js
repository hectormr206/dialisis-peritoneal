import React from 'react'
import { SourceBadge } from '../SourceBadge'
import {
  FooterWrapper,
  FooterHeading,
  SourceList,
  SourceListItem,
  Disclaimer
} from './styles'

// CitationFooter: resolves sourceIds -> src/content/sources.js and renders
// visible citations plus the standing "this is not a substitute for your
// clinic/nephrologist" disclaimer — R5.1, R5.2. The disclaimer always
// renders, even with zero sourceIds, since every medical-content page must
// carry it regardless of how many sources it cites. Used by TopicPage
// (design section 3) and, later, any PR6-9 page carrying medical claims.
export const CitationFooter = ({ sourceIds = [] }) => (
  <FooterWrapper role='contentinfo' aria-label='Fuentes y aviso'>
    {sourceIds.length > 0 && (
      <>
        <FooterHeading>Fuentes</FooterHeading>
        <SourceList>
          {sourceIds.map((sourceId) => (
            <SourceListItem key={sourceId}>
              <SourceBadge sourceId={sourceId} />
            </SourceListItem>
          ))}
        </SourceList>
      </>
    )}
    <Disclaimer>
      Esta información no reemplaza las indicaciones de tu clínica ni de tu
      nefrólogo.
    </Disclaimer>
  </FooterWrapper>
)
