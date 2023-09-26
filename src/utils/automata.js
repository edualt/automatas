function validarEntrada(entrada) {
  let estado = 0;
  const recorrido = [];

  const estados = {
    0: { 'i': 1, 'C': 39, 'P': 45 },
    1: { '3': 2, '5': 10, '7': 22, '9': 31 },
    2: { '-': 3 },
    3: { '1': 4 },
    4: { '1': 5 },
    5: { '1': 6 },
    6: { '5': 7 },
    7: { 'G': 8 },
    8: { '4': 9 },
    10: { '-': 11 },
    11: { '1': 12 },
    12: { '3': 13, '1': 17 },
    13: { '4': 14 },
    14: { '5': 15 },
    15: { 'U': 16 },
    17: { '4': 18, '3': 18 },
    18: { '5': 19 },
    19: { 'G': 20 },
    20: { '7': 21 },
    22: { '-': 23 },
    23: { '1': 24 },
    24: { '1': 25 },
    25: { '6': 18, '8': 26 },
    26: { '5': 27 },
    27: { 'G': 28 },
    28: { '7': 29 },
    29: { '7': 30 },
    31: { '-': 32 },
    32: { '1': 33 },
    33: { '2': 34 },
    34: { '9': 35 },
    35: { '0': 36 },
    36: { '0': 37 },
    37: { 'H': 38 },
    39: { '-': 40 },
    40: { '6': 41 },
    41: { '3': 42 },
    42: { '0': 43 },
    43: { '5': 44 },
    45: { '-': 46 },
    46: { 'G': 47 },
    47: { 'o': 48 },
    48: { 'l': 49 },
    49: { 'd': 50 },
    50: { '7': 51 },
    51: { '5': 52 },
    52: { '0': 53 },
    53: { '5': 54 }
  };

  for (let i = 0; i < entrada.length; i++) {
    const caracter = entrada[i];

    recorrido.push(estado);

    if (estados[estado] && estados[estado][caracter] !== undefined) {
      estado = estados[estado][caracter];
    } else {
    return { estado, esValido: false, recorrido: recorridoToString(recorrido) };
    }
  }

  const estadosFinales = [9, 16, 21, 30, 38, 44, 54];
  if (estadosFinales.includes(estado)) {
    recorrido.push(estado);
    return { estado, esValido: true, recorrido: recorridoToString(recorrido) };
  } else {
    recorrido.push(estado);
    return { estado, recorrido: recorridoToString(recorrido) } // La entrada es inválida
  }
}

export default validarEntrada;

const recorridoToString = (recorrido) => {
  let str = '';
  for (let i = 0; i < recorrido.length; i++) {
    str += `q${recorrido[i]}`;
    if (i < recorrido.length - 1) {
      str += ' -> ';
    }
  }
  return str;
}

  