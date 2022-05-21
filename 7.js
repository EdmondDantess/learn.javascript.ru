// Создайте калькулятор

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
  read(a, b) {
    return (this.firstNum = a), (this.SecondNum = b);
  },
  sum() {
    return console.log(this.firstNum + this.SecondNum);
  },
  mul() {
    return console.log(this.firstNum * this.SecondNum);
  },
};

calculator.read(2, 6);
calculator.sum();
calculator.mul();
