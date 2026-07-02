// glossary: clinical/brand term definitions for the tap-to-expand glossary
// primitive (R4.3). Seed entries added in PR3 (exsept, mupirocina); expanded
// in PR5b (heparina, peritonitis) alongside the TermTooltip component itself
// — populated further as PR6-9 add real medical-content pages.
//
// Shape: { [termKey]: { term, plainDefinition } }

export const glossary = {
  exsept: {
    term: 'Exsept',
    plainDefinition:
      'Un líquido desinfectante que se usa para limpiar la salida del catéter.'
  },
  mupirocina: {
    term: 'Mupirocina',
    plainDefinition:
      'Una pomada antibiótica que a veces se receta para prevenir infecciones en la salida del catéter. Solo se usa si tu médico la indicó.'
  },
  heparina: {
    term: 'Heparina',
    plainDefinition:
      'Un medicamento que ayuda a evitar que se formen coágulos (tapones) de sangre. En diálisis peritoneal, a veces se agrega al líquido de diálisis solo si tu médico lo indicó.'
  },
  peritonitis: {
    term: 'Peritonitis',
    plainDefinition:
      'Una infección dentro del abdomen (panza) que puede pasar si entran microbios durante el intercambio de líquido. Si tu líquido de diálisis sale turbio (nublado), o tienes dolor de panza, fiebre, náusea o diarrea, llama a tu clínica de inmediato.'
  }
}
