// Проверка на спам

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

//Для поиска без учёта регистра символов переведём всю строку в нижний регистр,
//а потом проверим, есть ли в ней искомые подстроки:
let checkSpam = (string) => {
  string = string.toLowerCase();
  let result = string.includes("rabbit") || string.includes("grabber");
  return result;
};

console.log(checkSpam("jsahfjka ikujsdagberhgfhdsa raBbitfdhfd"));
