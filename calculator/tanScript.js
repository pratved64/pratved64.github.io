let buttons = [];
document.addEventListener("DOMContentLoaded", init)
var disp;

function init() {
   disp = document.getElementById("resultBox");
   buttons = document.getElementsByClassName('button');
   //alert(buttons[0]);
   for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", clk);
      console.log("ran");
   }
}

/*
function getButtons() {
   buttons = document.getElementsByClassName('button');
   //alert(buttons[0]);
   for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", clk);
      console.log("ran");
   }
}
*/

function clk(evt) {
   var num = evt.currentTarget.innerHTML;
   if (!isNaN(num)) {
      //let p = parseInt(num);
      disp.innerHTML += num;
   }
   else {
      if (num === '+' || num === '-' || num === '÷' || num === 'x') {
         disp.innerHTML += " " + num + " ";
      }
      else if (num === '.') {
         disp.innerHTML += num;
      }
      else if (num === '=') {
         /*let x = Math.round(Math.random() * 2);
         if (x == 2) {
            interpret(disp.innerHTML);
         }
         else if (x == 1) {
            scream();
         }
         else if (x == 0) {
            captcha(disp.innerHTML);
         }
         openPopup();*/
         interpret(disp.innerHTML);
      }
      else if (num === 'C' || num === 'AC') {
         disp.innerHTML = "";
      }
   }
}

function interpret(exp) {
   //alert(disp.innerHTML);
   for (var i = 0; i < exp.length; i++) {
    if (exp[i] == '+') {
         n1 = parseFloat(exp.slice(0, (i-1)));
         n2 = parseFloat(exp.slice((i+1), (exp.length)));
         disp.innerHTML = n1 + n2;
     }
    else if (exp[i] == '-') {
         n1 = parseFloat(exp.slice(0, (i-1)));
         n2 = parseFloat(exp.slice((i+1), (exp.length)));
         disp.innerHTML = n1 - n2;
    }
    else if (exp[i] == '÷') {
         n1 = parseFloat(exp.slice(0, (i-1)));
         n2 = parseFloat(exp.slice((i+1), (exp.length)));
         disp.innerHTML = n1 / n2;
    }
    else if (exp[i] == 'x') {
         n1 = parseFloat(exp.slice(0, (i-1)));
         n2 = parseFloat(exp.slice((i+1), (exp.length)));
         disp.innerHTML = n1 * n2;
      }
      
   }
}
/*
function captcha(line) {
   var response = prompt("Please solve the following captcha before proceeding \n \n " + line.trim());
   if (isNaN(response)) {
      alert("ROBOT DETECTED, TERMINATING WINDOW");
      window.location.replace("https://google.com");
   }
   else {
      disp.innerHTML = response;
   }
   
}

function scream() {
   var box = document.getElementById("resultBox");
   box.style.fontSize = 24;
   insults = [
      "these questions are giving me EMOTIONAL DAMAGE",
      "AREN'T YOU ASIAN DO IT YOURSELF HAIYAA",
      "This is why you don't get marks in your Maths exams",
      "Lamentable.",
      //"Do it yourself mf",
      "WHAT DO I LOOK LIKE PANDA EXPRESS TO YOU",
      "My 5 year old son can do that in his head",
      "WHY CAN'T YOU DO IT HUH",
      "Placing an order for Maths for Dummies...",
      //"Dissatisfied? Now you know what she feels like",
      "you're a joke",
   ];

   var i = Math.round(Math.random() * (insults.length - 1))
   disp.innerHTML = insults[i];
   setTimeout(function() {disp.innerHTML = "";}, 3000);
}

function subscribe() {
   window.location.replace('/error.html');
}

function tanSpecial() {
   alert("i made special theme for you <3");
   window.location.replace('/tan.html');
}
*/