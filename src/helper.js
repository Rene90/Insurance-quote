export function obtenerDiferenciaYear(year){
  return new Date().getFullYear()-year;
}

export function calcularMarca(marca){
  let incremento
  switch(marca){
    case 'european':
      incremento = 1.30;
      break;
    case 'american':
      incremento = 1.15;
      break;
    case 'asian':
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento
}
export function obtenerPlan(plan){
  return (plan === 'basic')? 1.20:1.50;
}

export function primerMayuscula(texto ){

  return texto.charAt(0).toUpperCase()+texto.slice(1);
}
