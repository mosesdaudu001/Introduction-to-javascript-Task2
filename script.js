var sign = window.prompt("+, -, *, /");
var num1 = window.prompt("Num1: ");
var num2 = window.prompt("Num2: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if(sign == "*"){
    alert(num1 * num2);
} else if(sign == "+"){
    alert(num1 + num2);
} else if(sign == "-"){
    alert(num1 - num2);
} else if(sign == "/"){
    alert(num1 / num2);
}