// Desafio 11 - Crie a função generatePhoneNumber

const highValue = (result) => {
  let z = Object.values(result);
  let x = z.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return x;
};

const highestCount = (array) => {
  let result = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!result[array[i]]) {
      result[array[i]] = 0;
    }
    result[array[i]] += 1;
  }
  return highValue(result);

  // https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
};

const generateNumber = (phone) => {
  let fPart = '(';
  let sPart = '';
  let tPart = '';
  for (let i = 0; i < 2; i += 1) {
    fPart += phone[i];
  }
  fPart += ') ';
  for (let i = 2; i < 7; i += 1) {
    sPart += phone[i];
  }
  sPart += '-';
  for (let i = 7; i < phone.length; i += 1) {
    tPart += phone[i];
  }
  return `${fPart}${sPart}${tPart}`;
};

const valida = (phone, i) => phone[i] < 0 || phone[i] > 9 || highestCount(phone) >= 3;

const generatePhoneNumber = (phone) => {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < phone.length; i += 1) {
    if (valida(phone, i)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return generateNumber(phone);
};

// Desafio 12 -  Crie a função triangleCheck

const verifyTriangle = (x, y, z) => (x > y + z || y > x + z || z > x + y);

const triangleCheck = (lineA, lineB, lineC) => {
  if (verifyTriangle(lineA, lineB, lineC)) {
    return false;
  } if (
    lineA > Math.abs(lineB) - Math.abs(lineC)
    && lineB > Math.abs(lineA) - Math.abs(lineC)
    && lineC > Math.abs(lineA) - Math.abs(lineC)
  ) {
    return true;
  }
};

// Desafio 13 - Crie a função hydrate

const hydrate = (string) => {
  let numbers = string.match(/\d+/g).reduce((x, y) => parseInt(x, 0) + parseInt(y, 0)); // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript

  if (numbers > 1) {
    return `${numbers} copos de água`;
  }
  return `${numbers} copo de água`;
};

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
