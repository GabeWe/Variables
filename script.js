var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is your bill?"));
var num2 = 0.07;
var num3 = 0.05;
var sum = (num1*num2)+num1;
sum = (num3*sum)+sum;

containerEle.innerHTML="Your final bill $" +sum;