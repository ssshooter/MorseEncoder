const normal = {
  '−−−−−': '0',
  '·−−−−': '1',
  '··−−−': '2',
  '···−−': '3',
  '····−': '4',
  '·····': '5',
  '−····': '6',
  '−−···': '7',
  '−−−··': '8',
  '−−−−·': '9',
  '     ': ' ',
  '·−−−−·': "'",
  '−−··−−': ',',
  '·−·−·−': '.',
  '··−−··': '?',
  '−·−·−−': '!',
  '−··−·': '/',
  '−·−−·': '(',
  '−·−−·−': ')',
  '·−···': '&',
  '−−−···': ':',
  '−·−·−·': ';',
  '−···−': '=',
  '·−·−·': '+',
  '−····−': '-',
  '··−−·−': '_',
  '·−··−·': '"',
  '···−··−': '$',
  '·−−·−·': '@',
  '·−': 'A',
  '−···': 'B',
  '−·−·': 'C',
  '−··': 'D',
  '·': 'E',
  '··−·': 'F',
  '−−·': 'G',
  '····': 'H',
  '··': 'I',
  '·−−−': 'J',
  '−·−': 'K',
  '·−··': 'L',
  '−−': 'M',
  '−·': 'N',
  '−−−': 'O',
  '·−−·': 'P',
  '−−·−': 'Q',
  '·−·': 'R',
  '···': 'S',
  '−': 'T',
  '··−': 'U',
  '···−': 'V',
  '·−−': 'W',
  '−··−': 'X',
  '−·−−': 'Y',
  '−−··': 'Z'
}

const diDah = {
  'dah-dah-dah-dah-dah': '0',
  'di-dah-dah-dah-dah': '1',
  'di-di-dah-dah-dah': '2',
  'di-di-di-dah-dah': '3',
  'di-di-di-di-dah': '4',
  'di-di-di-di-dit': '5',
  'dah-di-di-di-dit': '6',
  'dah-dah-di-di-dit': '7',
  'dah-dah-dah-di-dit': '8',
  'dah-dah-dah-dah-dit': '9',
  ',': ' ',
  'di-dah-dah-dah-dah-dit': "'",
  'dah-dah-di-di-dah-dah': ',',
  'di-dah-di-dah-di-dah': '.',
  'di-di-dah-dah-di-dit': '?',
  'dah-di-dah-di-dah-dah': '!',
  'dah-di-di-dah-dit': '/',
  'dah-di-dah-dah-dit': '(',
  'dah-di-dah-dah-di-dah': ')',
  'di-dah-di-di-dit': '&',
  'dah-dah-dah-di-di-dit': ':',
  'dah-di-dah-di-dah-dit': ';',
  'dah-di-di-di-dah': '=',
  'di-dah-di-dah-dit': '+',
  'dah-di-di-di-di-dah': '-',
  'di-di-dah-dah-di-dah': '_',
  'di-dah-di-di-dah-dit': '"',
  'di-di-di-dah-di-di-dah': '$',
  'di-dah-dah-di-dah-dit': '@',
  'di-dah': 'A',
  'dah-di-di-dit': 'B',
  'dah-di-dah-dit': 'C',
  'dah-di-dit': 'D',
  dit: 'E',
  'di-di-dah-dit': 'F',
  'dah-dah-dit': 'G',
  'di-di-di-dit': 'H',
  'di-dit': 'I',
  'di-dah-dah-dah': 'J',
  'dah-di-dah': 'K',
  'di-dah-di-dit': 'L',
  'dah-dah': 'M',
  'dah-dit': 'N',
  'dah-dah-dah': 'O',
  'di-dah-dah-dit': 'P',
  'dah-dah-di-dah': 'Q',
  'di-dah-dit': 'R',
  'di-di-dit': 'S',
  dah: 'T',
  'di-di-dah': 'U',
  'di-di-di-dah': 'V',
  'di-dah-dah': 'W',
  'dah-di-di-dah': 'X',
  'dah-di-dah-dah': 'Y',
  'dah-dah-di-dit': 'Z'
}

const onoff10 = {
  ' ': ' ',
  '1': 'E',
  '101': 'I',
  '111': 'T',
  '10101': 'S',
  '10111': 'A',
  '11101': 'N',
  '1010101': 'H',
  '1010111': 'U',
  '1011101': 'R',
  '1110101': 'D',
  '1110111': 'M',
  '101010101': '5',
  '101010111': 'V',
  '101011101': 'F',
  '101110101': 'L',
  '101110111': 'W',
  '111010101': 'B',
  '111010111': 'K',
  '111011101': 'G',
  '1110111011101110111': '0',
  '10111011101110111': '1',
  '101011101110111': '2',
  '1010101110111': '3',
  '10101010111': '4',
  '11101010101': '6',
  '1110111010101': '7',
  '111011101110101': '8',
  '11101110111011101': '9',
  '1011101110111011101': "'",
  '1110111010101110111': ',',
  '10111010111010111': '.',
  '101011101110101': '?',
  '1110101110101110111': '!',
  '1110101011101': '/',
  '111010111011101': '(',
  '1110101110111010111': ')',
  '10111010101': '&',
  '11101110111010101': ':',
  '11101011101011101': ';',
  '1110101010111': '=',
  '1011101011101': '+',
  '111010101010111': '-',
  '10101110111010111': '_',
  '101110101011101': '"',
  '10101011101010111': '$',
  '10111011101011101': '@',
  '11101011101': 'C',
  '1011101110111': 'J',
  '11101110111': 'O',
  '10111011101': 'P',
  '1110111010111': 'Q',
  '11101010111': 'X',
  '1110101110111': 'Y',
  '11101110101': 'Z'
}

module.exports = {
  normal,
  onoff10,
  diDah
}
