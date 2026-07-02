// sources: citation registry resolved by SourceBadge/CitationFooter (R5.2).
// Seed entry added in PR3 (imss-797-16, url unverified at the time); PR5b
// fills in the verified URL for that entry and adds the remaining sources
// named in spec R5.2 (ISPD 2022/2023, NKF, NIDDK) using the exact
// URLs/dates captured during exploration (sdd/accessible-redesign/explore).
// PR6-9 attach these sourceIds to real medical claims — currency should be
// re-checked at that point per R5.7 (e.g. IMSS-797-16 is flagged in the
// explore doc as possibly superseded by a newer edition).
//
// Shape: { [sourceId]: { name, org, url, published, accessed } }

export const sources = {
  'imss-797-16': {
    name: 'Guía de práctica clínica IMSS-797-16: Intervenciones de enfermería para la atención y prevención de peritonitis infecciosa en adultos con diálisis peritoneal ambulatoria',
    org: 'IMSS',
    url: 'http://www.imss.gob.mx/sites/all/statics/guiasclinicas/797GER.pdf',
    published: '2016',
    accessed: '2026-07-01'
  },
  'ispd-peritonitis-2022': {
    name: 'Peritonitis guideline recommendations: 2022 update on prevention and treatment',
    org: 'ISPD (International Society for Peritoneal Dialysis)',
    url: 'https://journals.sagepub.com/doi/10.1177/08968608221080586',
    published: '2022',
    accessed: '2026-07-01'
  },
  'ispd-catheter-2023': {
    name: 'Catheter-related Infection Recommendations: 2023 Update',
    org: 'ISPD (International Society for Peritoneal Dialysis)',
    url: 'https://ispd.org/wp-content/uploads/ISPD-Catheter-related-Infection-Recommendations-2023-Update.pdf',
    published: '2023',
    accessed: '2026-07-01'
  },
  'nkf-peritonitis': {
    name: 'Peritonitis',
    org: 'National Kidney Foundation (NKF)',
    url: 'https://www.kidney.org/kidney-topics/peritonitis',
    published: null,
    accessed: '2026-07-01'
  },
  'niddk-nutrition-pd': {
    // Exact URL path was not captured verbatim during exploration (only the
    // niddk.nih.gov domain + title were recorded) — verify this path before
    // citing it in real PR6-9 content per R5.7.
    name: 'Eating & Nutrition for Peritoneal Dialysis',
    org: 'NIDDK (National Institute of Diabetes and Digestive and Kidney Diseases)',
    url: null,
    published: '2018-08',
    accessed: '2026-07-01'
  }
}
