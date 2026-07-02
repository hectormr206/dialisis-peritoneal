// glossary: clinical/brand term definitions for the tap-to-expand glossary
// primitive (R4.3). Seed entries added in PR3 (exsept, mupirocina); expanded
// in PR5b (heparina, peritonitis) alongside the TermTooltip component itself.
// PR6 adds sitioSalida/cateter/clorhexidina for the hygiene deep-dive page —
// populated further as PR7-9 add their own real medical-content pages.
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
  },
  sitioSalida: {
    term: 'Sitio de salida',
    plainDefinition:
      'El lugar de tu piel por donde sale el catéter de tu cuerpo. Necesita limpieza diaria para prevenir infecciones.'
  },
  cateter: {
    term: 'Catéter',
    plainDefinition:
      'Un tubo suave que tu médico coloca en tu abdomen, casi siempre cerca del ombligo. Por él entra y sale el líquido de diálisis.'
  },
  clorhexidina: {
    term: 'Clorhexidina',
    plainDefinition:
      'Un antiséptico (un líquido que ayuda a evitar infecciones) que se usa para limpiar el sitio de salida de tu catéter. Tu clínica te indica cómo y cuándo usarlo.'
  }
}
