// Aparece — constantes del sitio.
// TODO antes de lanzar: reemplazar `whatsapp` por el número real
// (formato internacional sin "+", sin espacios) y `domain` cuando
// el dominio esté registrado. Ambos se usan en toda la página.

export const SITE = {
  name: "Aparece",
  legalName: "WEBFUTURA SPA",
  rut: "77.343.042-K",
  whatsapp: "569XXXXXXXX", // ÚNICO placeholder pendiente
  domain: "aparece.cl", // placeholder hasta registrar el dominio
  pixelOn: false,
};

export const PRECIOS = {
  piloto: "$890.000",
  pilotoSemanas: 6,
  pautaDesde: "$500.000",
  retainerDesde: "$590.000/mes",
  fundador: "40%",
  cuposFundador: 3,
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}`;
