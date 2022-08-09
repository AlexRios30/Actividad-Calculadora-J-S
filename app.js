const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const dividir = document.getElementById("dividir");
const multiplicar = document.getElementById("multiplicar");
const modulo = document.getElementById("modulo");
const n1 = document.getElementById("number1");
const n2 = document.getElementById("number2");
const signo = document.getElementById("signo");
const total = document.getElementById("total");
const body = document.getElementById("myBody");

// sumar.addEventListener("click", sum);
// restar.addEventListener("click", rest);
// dividir.addEventListener("click", div);
// multiplicar.addEventListener("click", mult);
// modulo.addEventListener("click", mod);

body.addEventListener("keydown", () => {
  number1 = Number(n1.value);
  number2 = Number(n2.value);

  if (signo.value === "+") {
    let operation = number1 + number2;
    total.value = `Su resultado es ${operation}`;
  }
  else if (signo.value === "-") {
    let operation = number1 - number2;
    total.value = `Su resultado es ${operation}`;
  }
  else if (signo.value === "/") {
    let operation = number1 / number2;
    total.value = `Su resultado es ${operation}`;
  }
  else if (signo.value === "*") {
    let operation = number1 * number2;
    total.value = `Su resultado es ${operation}`;
  }
  else {
    signo.value === "%"
    let operation = number1 % number2;
    total.value = `Su resultado es ${operation}`;
  }
})
