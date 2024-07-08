// notice
function widget() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

///// Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

///////////

let preloader = document.getElementById("loading");

function myFunction() {
  preloader.style.display = "none";
}

// Menu
function mnu() {
  document.getElementById("sideNav").style.transform = "translateX(0px)";
  document.getElementById("overlay").style.display = "block";
}

function mnu2() {
  document.getElementById("sideNav").style.transform = "translateX(-200px)";
  document.getElementById("overlay").style.display = "none";
}

function overlay() {
  document.getElementById("sideNav").style.transform = "translateX(-200px)";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

//quiz
function q1() {
  document.getElementById("q1").style.display = "block";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "flex";

  mnu2();
}

function q2() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "block";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "flex";
  mnu2();
}
function q3() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "block";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "flex";
  mnu2();
}
function q4() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "block";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "flex";
  mnu2();
}
function q5() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "block";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "flex";
  mnu2();
}

function f1() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "block";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "flex";
  mnu2();
}
function f2() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "block";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "flex";
  mnu2();
}
function f3() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "block";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "flex";
  mnu2();
}
function f4() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "block";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "flex";
  mnu2();
}
function f5() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "block";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "flex";
  mnu2();
}
function QUIZ() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "block";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "none";
  document.getElementById("activeBlog").style.background = "transparent";
  document.getElementById("activeStudy").style.background = "transparent";
  document.getElementById("activeQuiz").style.background = "#000";
  document.getElementById("main").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";

  mnu2();
}

function blog() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "block";
  document.getElementById("b8").style.display = "none";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "none";
  document.getElementById("activeBlog").style.background = "#000";
  document.getElementById("activeStudy").style.background = "transparent";
  document.getElementById("activeQuiz").style.background = "transparent";
  document.getElementById("main").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
  mnu2();
}

function study() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  // menu
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "block";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "none";
  document.getElementById("activeStudy").style.background = "#000";
  document.getElementById("activeBlog").style.background = "transparent";
  document.getElementById("activeQuiz").style.background = "transparent";
  document.getElementById("main").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";

  mnu2();
}

function about() {
  document.getElementById("main").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("activeStudy").style.background = "transparent";
  document.getElementById("activeBlog").style.background = "transparent";
  document.getElementById("activeQuiz").style.background = "transparent";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "none";
  document.getElementById("contact").style.display = "none";
  mnu2();
}

function contact() {
  document.getElementById("main").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("activeStudy").style.background = "transparent";
  document.getElementById("activeBlog").style.background = "transparent";
  document.getElementById("activeQuiz").style.background = "transparent";
  document.getElementById("goback").style.display = "none";
  document.getElementById("goback2").style.display = "none";
  document.getElementById("contact").style.display = "block";
  mnu2();
}
