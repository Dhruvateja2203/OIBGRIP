let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let value = this.innerHTML;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      display.value = eval(display.value);
    } 
    else if (value === "mod") {
      let numbers = display.value.split(" ");
      let num1 = parseFloat(numbers[0]);
      let num2 = parseFloat(numbers[2]);
      display.value = num1 % num2;
    } 
    else if (value==="del"){
      display.value=display.value.slice(0,-1);
    }else {
      display.value += value;
    }
  });
}
