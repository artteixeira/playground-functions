// Desafio 1 - Crie a função compareTrue

const compareTrue = (x, y) => x && y;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount

const highValue = (result) => {
  let z = Object.values(result).reduce((x, y) =>
    (result[x] > result[y] ? x : y));
  return parseInt(z, 0);
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

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  let gatito1 = Math.abs(cat2 - mouse);
  let gatito2 = Math.abs(cat1 - mouse);

  if (gatito1 === gatito2) {
    return 'os gatos trombam e o rato foge';
  } if (gatito1 < gatito2) {
    return 'cat2';
  } if (gatito2 < gatito1) {
    return 'cat1';
  }
};

// Desafio 8 - Crie a função fizzBuzz

const div3 = (number) => number % 3 === 0;
const div5 = (number) => number % 5 === 0;
const div3e5 = (number) => div5(number) && div3(number);
const bug = (number) => number % 3 !== 0 && number % 5 !== 0;
const verificaBuzz = (array, i) => {
  if (bug(array[i])) {
    return 'bug!';
  } if (div3e5(array[i])) {
    return 'fizzBuzz';
  } if (div5(array[i])) {
    return 'buzz';
  }
  return 'fizz';
};

const fizzBuzz = (array) => {
  let resultado = [];

  for (let i = 0; i < array.length; i += 1) {
    resultado.push(verificaBuzz(array, i));
  }

  return resultado;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
  let resultado = '';

  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case 'a':
      resultado += 1;
      break;
    case 'e':
      resultado += 2;
      break;
    case 'i':
      resultado += 3;
      break;
    case 'o':
      resultado += 4;
      break;
    case 'u':
      resultado += 5;
      break;
    default:
      resultado += string[i];
      break;
    }
  }
  return resultado;
};

const decode = (string) => {
  let resultado = '';

  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case '1':
      resultado += 'a';
      break;
    case '2':
      resultado += 'e';
      break;
    case '3':
      resultado += 'i';
      break;
    case '4':
      resultado += 'o';
      break;
    case '5':
      resultado += 'u';
      break;
    default:
      resultado += string[i];
      break;
    }
  }
  return resultado;
};

// Desafio 10 - Crie a função techList

const techList = (tech, name) => {
  let resultado = [];
  tech.sort();

  if (tech.length === 0) {
    return resultado;
  }
  for (let i = 0; i < tech.length; i += 1) {
    resultado.push({ tech: tech[i], name });
  }
  return resultado;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
