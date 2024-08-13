// Element Catcher Function
function $(e){
  return document.querySelector(e);
}

// notice
function widget() {
  $("#popup").style.display = "block";
  $("#overlay").style.display = "block";
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

let preloader = $("#loading");

function myFunction() {
  preloader.style.display = "none";
}

// Menu
function mnu() {
  $("#sideNav").style.transform = "translateX(0px)";
  $("#overlay").style.display = "block";
}

function mnu2() {
  $("#sideNav").style.transform = "translateX(-200px)";
  $("#overlay").style.display = "none";
}

function overlay() {
  $("#sideNav").style.transform = "translateX(-200px)";
  $("#overlay").style.display = "none";
  $("#popup").style.display = "none";
}
 
//quiz
function q1() {
  $("#q1").style.display = "block";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "flex";

  mnu2();
}

function q2() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "block";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "flex";
  mnu2();
}
function q3() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "block";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "flex";
  mnu2();
}
function q4() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "block";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "flex";
  mnu2();
}
function q5() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "block";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "flex";
  mnu2();
}

function f1() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "block";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "flex";
  mnu2();
}
function f2() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "block";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "flex";
  mnu2();
}
function f3() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "block";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "flex";
  mnu2();
}
function f4() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "block";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "flex";
  mnu2();
}
function f5() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "block";
  $("#b6").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "flex";
  mnu2();
}
function QUIZ() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "none";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "none";
  $("#about").style.display = "none";
  $("#contact").style.display = "none";
  $("#activeQuiz").style.background = "#000";
  $("#activeBlog").style.background = "transparent";
  $("#activeStudy").style.background = "transparent";
  
  $("#b6").style.display = "block";
  $("#main").style.display = "block";
  mnu2();
}

function blog() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "block";
  $("#b8").style.display = "none";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "none";
  $("#activeBlog").style.background = "#000";
  $("#activeStudy").style.background = "transparent";
  $("#activeQuiz").style.background = "transparent";
  $("#main").style.display = "block";
  $("#about").style.display = "none";
  $("#contact").style.display = "none";
  mnu2();
}

function study() {
  $("#q1").style.display = "none";
  $("#q2").style.display = "none";
  $("#q3").style.display = "none";
  $("#q4").style.display = "none";
  $("#q5").style.display = "none";
  // menu
  $("#b1").style.display = "none";
  $("#b2").style.display = "none";
  $("#b3").style.display = "none";
  $("#b4").style.display = "none";
  $("#b5").style.display = "none";
  $("#b6").style.display = "none";
  $("#b7").style.display = "none";
  $("#b8").style.display = "block";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "none";
  $("#activeStudy").style.background = "#000";
  $("#activeBlog").style.background = "transparent";
  $("#activeQuiz").style.background = "transparent";
  $("#main").style.display = "block";
  $("#about").style.display = "none";
  $("#contact").style.display = "none";

  mnu2();
}

function about() {
  $("#main").style.display = "none";
  $("#about").style.display = "block";
  $("#activeStudy").style.background = "transparent";
  $("#activeBlog").style.background = "transparent";
  $("#activeQuiz").style.background = "transparent";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "none";
  $("#contact").style.display = "none";
  mnu2();
}

function contact() {
  $("#main").style.display = "none";
  $("#about").style.display = "none";
  $("#activeStudy").style.background = "transparent";
  $("#activeBlog").style.background = "transparent";
  $("#activeQuiz").style.background = "transparent";
  $("#goback").style.display = "none";
  $("#goback2").style.display = "none";
  $("#contact").style.display = "block";
  mnu2();
}
