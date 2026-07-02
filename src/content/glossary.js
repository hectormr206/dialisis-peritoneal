// glossary: clinical/brand term definitions for the tap-to-expand glossary
// primitive (R4.3). Seed entries added in PR3 (exsept, mupirocina); expanded
// in PR5b (heparina, peritonitis) alongside the TermTooltip component itself.
// PR6 adds sitioSalida/cateter/clorhexidina for the hygiene deep-dive page.
// PR7 adds efluente/hiporexia for the warning-signs + escalation page. PR8
// adds sodio/ultrafiltracion for the fluid-management + swelling page. PR9
// adds potasio/fosforo for the nutrition page — the final medical-content
// page in the PR6-9 chain.
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
  },
  efluente: {
    term: 'Efluente (líquido turbio)',
    plainDefinition:
      'El líquido de diálisis que sale de tu abdomen después de un intercambio. Si sale turbio (nublado) o de un color distinto al habitual, puede ser señal de peritonitis. No esperes: llama a tu clínica de inmediato.'
  },
  hiporexia: {
    term: 'Hiporexia',
    plainDefinition: 'Tener poco apetito o ganas de comer.'
  },
  sodio: {
    term: 'Sodio',
    plainDefinition:
      'Un mineral que forma parte de la sal. Se encuentra en grandes cantidades en alimentos enlatados, empaquetados, congelados y de comida rápida, y en los condimentos. Hace que tu cuerpo retenga agua y aumenta la sed.'
  },
  ultrafiltracion: {
    term: 'Ultrafiltración',
    plainDefinition:
      'El proceso con el que se saca líquido de tu cuerpo durante un intercambio de diálisis peritoneal. Depende de la concentración de dextrosa (azúcar) del líquido de diálisis que usas.'
  },
  potasio: {
    term: 'Potasio',
    plainDefinition:
      'Un mineral que ayuda a que tus nervios y músculos funcionen bien, incluyendo que tu corazón lata de forma constante. La diálisis peritoneal puede sacar el exceso de potasio de tu cuerpo, así que algunas personas necesitan comer más alimentos con potasio (a diferencia de lo que se indica en otras etapas de la enfermedad renal).'
  },
  fosforo: {
    term: 'Fósforo',
    plainDefinition:
      'Un mineral que, en exceso en tu sangre, puede debilitar tus huesos (haciendo que se rompan más fácil) y causarte comezón en la piel. La diálisis peritoneal no siempre saca suficiente fósforo, así que muchas veces se necesita cuidar cuánto comes, y algunas personas necesitan medicamentos llamados quelantes de fósforo.'
  }
}
