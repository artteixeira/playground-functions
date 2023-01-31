// Desafio 11 - Crie a função generatePhoneNumber

const verifyQtyNumber = (arr) => {
  let qty = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let numApp = 1;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        numApp += 1;
      }
      if (numApp > qty) {
        qty = numApp;
      }
    }
  }
  return qty;
};

const generatePhoneNumber = (phone) => {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < phone.length; i += 1) {
    if (phone[i] < 0 || phone[i] > 9 || verifyQtyNumber(phone) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
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

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
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
  let numbers = string.match(/\d+/g).reduce((x, y) => parseInt(x, 0) + parseInt(y, 0));

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
