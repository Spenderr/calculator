//numbers of answer and input and operation selected with a number
var inputNum = "";
var outputNum ="";
var command = 0;

//input output delete buttons
const output = document.getElementById("output");
const input = document.getElementById("input");
const del = document.getElementById("delete");
const erase = document.getElementById("erase");

//number buttons query
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const dot = document.getElementById(".");

//operation buttons query
const minus = document.getElementById("-");
const equals = document.getElementById("=");
const plus = document.getElementById("+");
const multiplication = document.getElementById("x");
const division = document.getElementById("/");


//calculator part when pressed enter or '='
function operate(command)
{
    switch(command)
    {
    case 1 :
        outputNum = add(outputNum,inputNum);
        break;
    case 2 :
        outputNum = subtract(outputNum,inputNum);
        break;
    case 3 :
        outputNum = multiply(outputNum,inputNum);
        break;
    case 4 : 
        outputNum = divide(outputNum,inputNum);
        break;
    }
    output.innerHTML = outputNum;
    input.innerHTML = " ";
    inputNum = "";
}


//funtions of math, string converted to int and then operated
function add(num1, num2)
{
    return Number(num1)+Number(num2);
}
function subtract(num1, num2)
{
    return Number(num1)-Number(num2);
}
function multiply(num1,num2)
{
    return Number(num1)*Number(num2);
}
function divide(num1,num2)
{
    return Number(num1)/Number(num2);
}


//-------------------ONCLICK EVENTS BELOW----------------------//

//keyboard events

document.body.addEventListener('keydown',e => 
{
    if(e.key === "Enter"){operate(command);}
    else if(e.key === "0"){inputNum+="0";input.innerHTML = inputNum;}
    else if(e.key === "1"){inputNum+="1";input.innerHTML = inputNum;}
    else if(e.key === "2"){inputNum+="2";input.innerHTML = inputNum;}
    else if(e.key === "3"){inputNum+="3";input.innerHTML = inputNum;}
    else if(e.key === "4"){inputNum+="4";input.innerHTML = inputNum;}
    else if(e.key === "5"){inputNum+="5";input.innerHTML = inputNum;}
    else if(e.key === "6"){inputNum+="6";input.innerHTML = inputNum;}
    else if(e.key === "7"){inputNum+="7";input.innerHTML = inputNum;}
    else if(e.key === "8"){inputNum+="8";input.innerHTML = inputNum;}
    else if(e.key === "9"){inputNum+="9";input.innerHTML = inputNum;}
    else if(e.key === "0"){inputNum+="0";input.innerHTML = inputNum;}
    else if(e.key === "+"){command=1;input.innerHTML = "+";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='blue';minus.style.backgroundColor='white';multiplication.style.backgroundColor='white';division.style.backgroundColor='white';}
    else if(e.key === "-"){command=2;input.innerHTML = "-";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='white';minus.style.backgroundColor='blue';multiplication.style.backgroundColor='white';division.style.backgroundColor='white';}
    else if(e.key === "*"){command=3;input.innerHTML = "x";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='white';minus.style.backgroundColor='white';multiplication.style.backgroundColor='blue';division.style.backgroundColor='white';}
    else if(e.key === "/"){command=4;input.innerHTML = "/";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='white';minus.style.backgroundColor='white';multiplication.style.backgroundColor='white';division.style.backgroundColor='blue';}
    else if(e.key === "."){inputNum+=".";input.innerHTML = inputNum;}
    else if(e.key === "Backspace"){inputNum = inputNum.slice(0,-1);input.innerHTML = inputNum;} 
    else if(e.key === "Delete"){outputNum = "";inputNum = "", input.innerHTML=inputNum;output.innerHTML=outputNum}
    
});


//on click of number buttons, added to string and displayed on screen
zero.onclick = function(){inputNum+="0";input.innerHTML = inputNum;};
one.onclick = function(){inputNum+="1";input.innerHTML = inputNum;};
two.onclick = function(){inputNum+="2";input.innerHTML = inputNum;};
three.onclick = function(){inputNum+="3";input.innerHTML = inputNum;};
four.onclick = function(){inputNum+="4";input.innerHTML = inputNum;};
five.onclick = function(){inputNum+="5";input.innerHTML = inputNum;};
six.onclick = function(){inputNum+="6";input.innerHTML = inputNum;};
seven.onclick = function(){inputNum+="7";input.innerHTML = inputNum;};
eight.onclick = function(){inputNum+="8";input.innerHTML = inputNum;};
nine.onclick = function(){inputNum+="9";input.innerHTML = inputNum;};
dot.onclick = function(){inputNum+=".";input.innerHTML = inputNum;};

// operations functions
plus.onclick = function(){command=1;input.innerHTML = "+";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='blue';minus.style.backgroundColor='white';multiplication.style.backgroundColor='white';division.style.backgroundColor='white';};
minus.onclick = function(){command=2;input.innerHTML = "-";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='white';minus.style.backgroundColor='blue';multiplication.style.backgroundColor='white';division.style.backgroundColor='white';}
multiplication.onclick = function(){command=3;input.innerHTML = "x";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='white';minus.style.backgroundColor='white';multiplication.style.backgroundColor='blue';division.style.backgroundColor='white';}
division.onclick = function(){command=4;input.innerHTML = "/";outputNum = inputNum;inputNum = "";plus.style.backgroundColor='white';minus.style.backgroundColor='white';multiplication.style.backgroundColor='white';division.style.backgroundColor='blue';}

del.onclick = function(){outputNum = "";inputNum = "", input.innerHTML=inputNum;output.innerHTML=outputNum};
erase.onclick = function(){inputNum = inputNum.slice(0,-1);input.innerHTML = inputNum;} 

equals.onclick = function(){operate(command)};



