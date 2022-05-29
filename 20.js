// Создайте дату

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.
/*
let fixTime = new Date(2012, 1, 20, 3, 12);
console.log(fixTime);
*/

// Покажите день недели

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
/*
let getWeekDay = (day) => {
  switch (day.getDay()) {
    case 0:
      alert("ВС");
      break;
    case 1:
      alert("ПН");
      break;
    case 2:
      alert("ВТ");
      break;
    case 3:
      alert("СР");
      break;
    case 4:
      alert("ЧТ");
      break;
    case 5:
      alert("ПТ");
      break;
    case 6:
      alert("СБ");
      break;
  }
};

let date = new Date(); //3 января 2012 года
getWeekDay(date);
*/

// Какой день месяца был много дней назад?

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2)
//  – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.
/*
let getDateAgo = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

let date = new Date();
console.log(getDateAgo(date, 2));
*/

// Сколько сегодня прошло секунд?

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
/*
let getSecondsToday = () => {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};

console.log(getSecondsToday());
*/

// Сколько секунд осталось до завтра?

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
/*
let getSecondsToTomorrow = () => {
  let date = new Date();
  let resultTime = Math.round(
    (new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1) - date) /
      1000
  );

  return resultTime;
};

console.log(getSecondsToTomorrow());
*/
