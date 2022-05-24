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
