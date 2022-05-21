// Повторять цикл, пока ввод неверен

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число
//  – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче
// необязательно.

/*
let num = prompt("Введите число > 100", "");

while (true) {
  num = prompt("Попробуйте ещё раз. Введите число > 100", "");
  if (num > 100 || num == null) break;
  }
if (num == Number) {
console.log(`Число ${num} принято!`);
}
 */

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

/*
Цикл do..while повторяется, пока верны две проверки:
Проверка num <= 100 – то есть, введённое число всё ещё меньше 100.
Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить.
Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима*/
