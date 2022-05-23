// Ввод числового значения

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
//  пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
//  В этом случае функция должна вернуть null.

function readNumber() {
  let num;
  do {
    num = prompt("Число?", "");
    if (num == null) break;
    num = +num;
    if (num || typeof num == null) break;
    if (!num) continue;
  } while (true);
  return alert(num);
}

readNumber();

// function readNumber() {
//     let num;

//     do {
//       num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );

//     if (num === null || num === '') return null;

//     return +num;
//   }

//   alert(`Число: ${readNumber()}`);
