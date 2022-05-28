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
