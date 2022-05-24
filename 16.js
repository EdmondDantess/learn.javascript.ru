// Переведите текст вида border-left-width в borderLeftWidth

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string»
//  в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
//  потом переделайте всё как нужно и методом join соедините обратно.
/*
let camelize = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "-") {
      str.splice(i, 2, str[i + 1].toUpperCase());
    }
  }
  return str.join("");
};

console.log(camelize("list-style-image"));
*/
// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }

// Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и
//отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
/*
function filterRange(arr, a, b) {
  let result = [];

  for (let elem of arr) {
    if (a <= elem && elem <= b) {
      result.push(elem);
    }
  }
  return result.join(", ");
}

console.log(filterRange([5, 3, 8, 1, 77, 23, 6], 1, 10));
*/

// Фильтрация по диапазону "на месте"

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
//  которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]
/*
let arr = [33, 42, 123, 16, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (a > val || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join(", ");
}
console.log(filterRangeInPlace(arr, 1, 5));
console.log(arr);
*/

let arr = [5, 2, 1, -10, 8];

console.log(arr.sort((a, b) => b - a));
