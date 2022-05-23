// Сделать первый символ заглавным

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

let ucFirst = (str) => {
  firstLetter = str.slice(0, 1);
  let result = firstLetter.toUpperCase() + str.slice(1);
  return result;
};

console.log(ucFirst("моё слово"));
