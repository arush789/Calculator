var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var zero = document.getElementById("zero")
var plus = document.getElementById("plus")
var sub = document.getElementById("sub")
var divide = document.getElementById("divide")
var multi = document.getElementById("multi")
var clear = document.getElementById("clear")
var clear2 = document.getElementById("clear2")
var equal = document.getElementById("equal")
var del = document.getElementById("del")
var deci = document.getElementById("deci")
var prev1 = document.getElementById("prev")
var prev = document.getElementById("his")
var result = document.getElementById("currNum")
var history;

one.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "1"
    } else {
        result.innerHTML += 1
    }
}
two.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "2"
    } else {
        result.innerHTML += 2
    }
}
three.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "3"
    } else {
        result.innerHTML += 3
    }
}
four.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "4"
    } else {
        result.innerHTML += 4
    }
}
five.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "5"
    } else {
        result.innerHTML += 5
    }
}
six.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "6"
    } else {
        result.innerHTML += 6
    }
}
seven.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "7"
    } else {
        result.innerHTML += 7
    }
}
eight.onclick = function () {
    if (result.innerHTML == "ERROR") {
         result.innerHTML = "8"
    } else {
        result.innerHTML += 8
    }
}
nine.onclick = function () {
    if (result.innerHTML == "ERROR") {
         result.innerHTML = "9"
    } else {
        result.innerHTML += 9
    }
}
zero.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "0"
    } else {
        result.innerHTML += 0
    }
}
plus.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "+"
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "*") {
        result.innerHTML = result.innerHTML.replace("*", "+")
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "/") {
        result.innerHTML = result.innerHTML.replace("/", "+")
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "-") {
        result.innerHTML = result.innerHTML.replace("-", "+")
    }else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "+") {
        result.innerHTML = result.innerHTML.replace("", "")
    }else{
        result.innerHTML += "+"
    }
}
sub.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "-"
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "+") {
        result.innerHTML = result.innerHTML.replace("+", "-")
    }else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "-") {
        result.innerHTML = result.innerHTML.replace("", "")
    } else {
        result.innerHTML += "-"
    }
}
multi.onclick = function () {    
    if (result.innerHTML == "") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML == "+") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML == "-") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML == "ERROR") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "+") {
        result.innerHTML = result.innerHTML.replace("+", "*")
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "-") {
        result.innerHTML = result.innerHTML.replace("-", "*")
    }else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "/") {
        result.innerHTML = result.innerHTML.replace("/", "*")
    }else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "*") {
        result.innerHTML = result.innerHTML.replace("", "")
    } else {
        result.innerHTML += "*"
    }
}
divide.onclick = function () {
    if (result.innerHTML == "") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML == "+") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML == "-") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML == "ERROR") {
        result.innerHTML = "ERROR"
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "+") {
        result.innerHTML = result.innerHTML.replace("+", "/")
    } else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "-") {
        result.innerHTML = result.innerHTML.replace("-", "/")
    }else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "*") {
        result.innerHTML = result.innerHTML.replace("*", "/")
    }else if (result.innerHTML.charAt(result.innerHTML.length - 1) == "/") {
        result.innerHTML = result.innerHTML.replace("", "")
    } else {
        result.innerHTML += "/"
    }
}

equal.onclick = function () {
    if(result.innerHTML == ""){
       result.innerHTML = "KHALI HAI"
    }
    prev1.innerHTML = ""
    var result2 = result.innerHTML
    result.innerHTML = eval(result.innerHTML)
    prev.innerText = prev.innerText +=  result2 + " = " + result.innerHTML
    prev1.innerHTML = prev1.innerHTML +=  result2 + " = " + result.innerHTML
    let node = document.createElement("br");
    prev.appendChild(node)
}
clear2.onclick = function (){
    prev.innerHTML = ""
}
deci.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = "ERROR"
    } else {
        result.innerHTML += "."
    }
}
del.onclick = function () {
    if (result.innerHTML == "ERROR") {
        result.innerHTML = ""
    } else {
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
    }
}
clear.onclick = function () {
    result.innerHTML = ""
    prev1.innerHTML = ""
}
// 3. getting buttons on keypress
document.addEventListener("keypress", function (e) {
    23
    switch (e.key) {
        case "1":
            result.innerHTML += 1;
            break;
        case "2":
            result.innerHTML += 2;
            break;
        case "3":
            result.innerHTML += 3;
            break;
        case "4":
            result.innerHTML += 4;
            break;
        case "5":
            result.innerHTML += 5;
            break;
        case "6":
            result.innerHTML += 6;
            break;
        case "7":
            result.innerHTML += 7;
            break;
        case "8":
            result.innerHTML += 8;
            break;
        case "9":
            result.innerHTML += 9;
            break;
        case "0":
            result.innerHTML += 0;
            break;
        case "+":
            result.innerHTML += " + ";
            break;
        case "-":
            result.innerHTML += " - ";
            break;
        case "/":
            result.innerHTML += " / ";
            break;
        case "*":
            result.innerHTML += " * ";
            break;
        case ".":
            result.innerHTML += ".";
            break;
        case "Enter":
            if(result.innerHTML == ""){
                result.innerHTML = "KHALI HAI"
             }
             prev1.innerHTML = ""
             var result2 = result.innerHTML
             result.innerHTML = eval(result.innerHTML)
             prev.innerText = prev.innerText +=  result2 + " = " + result.innerHTML
             prev1.innerHTML = prev1.innerHTML +=  result2 + " = " + result.innerHTML
             let node = document.createElement("br");
             prev.appendChild(node)
            break;
    }
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
    }
});