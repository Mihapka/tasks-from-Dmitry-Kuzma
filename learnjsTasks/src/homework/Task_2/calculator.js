function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      operationSign = split[1],
      b = +split[2]

    if (!this.methods[operationSign] && isNaN(a) && isNaN(b)) {
      return NaN;
    }

    return this.methods[operationSign](a, b);
  }
}

let calculator = new Calculator;

alert( calculator.calculate("1000000000000000000000000 + 7") );         //1e+24
alert( calculator.calculate("2 * 3") );                                 //6
alert( calculator.calculate("9 / 3") );                                 //3
alert( calculator.calculate("3 + -7") );                                //-4