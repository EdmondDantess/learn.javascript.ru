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

// Оставить уникальные элементы массива

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O
/*
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
*/

// Получить средний возраст

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let arrAge = [];
  for (let i = 0; i < arr.length; i++) {
    arrAge[i] = users[i].age;
  }

  return arrAge.reduce((sum, current) => sum + current) / arrAge.length;
}

console.log(getAverageAge(arr));
*/
