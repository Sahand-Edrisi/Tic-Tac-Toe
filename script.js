let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let userClicked = document.querySelectorAll("#userClicked");
let winUser1Show = document.querySelector(".winUser1");
let winUser2Show = document.querySelector(".winUser2");
let _th;

function oneUser() {
  twoUserPlay.style = "display :block";
  oneUserPlay.style = "display :none";
  reloadPage();
}
function twoUser() {
  twoUserPlay.style = "display :none";
  oneUserPlay.style = "display :block";
  reloadPage();
}

function allThRemOn() {
  let allThRemoveOnclick = document.querySelectorAll(".th");
  for (let i = 0; i < allThRemoveOnclick.length; i++) {
    allThRemoveOnclick[i].removeAttribute("onclick");
  }
}

function createCircle() {
  let div = document.createElement("div");
  div.setAttribute("class", "circle");
  _th.appendChild(div);
  _th.setAttribute("class", "insideCircle");
  _th.removeAttribute("onclick");
  // user1.style = "display : none;";
  // user2.style = "display : block;";
}

function CreateMultiplication() {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  div1.setAttribute("class", "multiplicationLine1");
  div2.setAttribute("class", "multiplicationLine2");
  _th.appendChild(div1);
  _th.appendChild(div2);
  _th.setAttribute("class", "insideMulti");
  _th.removeAttribute("onclick");
  // user2.style = "display : none;";
  // user1.style = "display : block;";
}

function user2Auto() {
  let allTh = document.querySelectorAll(".th");
  function getRandomNumber(allTh) {
    return allTh[Math.floor(Math.random() * allTh.length)];
  }
  if (allTh.length > 0) {
    let random = getRandomNumber(allTh);
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.setAttribute("class", "multiplicationLine1");
    div2.setAttribute("class", "multiplicationLine2");
    random.appendChild(div1);
    random.appendChild(div2);
    random.setAttribute("class", "insideMulti");
    random.removeAttribute("onclick");
    // user2.style = "display : none;";
    // user1.style = "display : block;";
    User2();
  } else {
    reloadWhenNOWin();
  }
}

function thClicked(event) {
  _th = event.target;
  let allTh = document.querySelectorAll(".th");
  if (oneUserPlay.style.display == "block") {
    createCircle();
    if (User1() == false) {
      user2Auto();
    }
  } else {
    if (allTh.length % 2 != 0) {
      createCircle();
      User1();
    } else if (allTh.length % 2 == 0) {
      CreateMultiplication();
      User2();
    }
    reloadWhenNOWin();
  }
}

function reloadPage() {
  let insideCircle = document.querySelectorAll(".insideCircle");
  let insideMulti = document.querySelectorAll(".insideMulti");
  let allTh = document.querySelectorAll(".th");
  for (let i = 0; i < insideMulti.length; i++) {
    let child = insideMulti[i].children;
    child[0].remove();
    child[0].remove();
    insideMulti[i].setAttribute("class", "th");
    insideMulti[i].setAttribute("onclick", "thClicked(event)");
  }
  for (let i = 0; i < insideCircle.length; i++) {
    insideCircle[i].firstChild.remove();
    insideCircle[i].setAttribute("class", "th");
    insideCircle[i].setAttribute("onclick", "thClicked(event)");
  }
  for (let i = 0; i < allTh.length; i++) {
    allTh[i].setAttribute("onclick", "thClicked(event)");
  }
}

function reloadWhenNOWin() {
  let allTh = document.querySelectorAll(".th");
  if (allTh.length == 0) {
    setTimeout(reloadPage, 3000);
  }
}

function countUser1(){
  let user1 = document.getElementById("user1")
  let changeTypeOf = Number(user1.innerText)
  let result = changeTypeOf + 1 
  user1.innerHTML = result
}
function countUser2(){
  let user2 = document.getElementById("user2")
  let changeTypeOf = Number(user2.innerText)
  let result = changeTypeOf + 1 
  user2.innerHTML = result
}
function User1() {
  if (
    userClicked[0].className == "insideCircle" &&
    userClicked[1].className == "insideCircle" &&
    userClicked[2].className == "insideCircle"
  ) {
    userClicked[0].lastChild.setAttribute("class", "circleWin");
    userClicked[1].lastChild.setAttribute("class", "circleWin");
    userClicked[2].lastChild.setAttribute("class", "circleWin");
    winUser1();  
    countUser1()  
  } else if (
    userClicked[3].className == "insideCircle" &&
    userClicked[4].className == "insideCircle" &&
    userClicked[5].className == "insideCircle"
  ) {
    userClicked[3].lastChild.setAttribute("class", "circleWin");
    userClicked[4].lastChild.setAttribute("class", "circleWin");
    userClicked[5].lastChild.setAttribute("class", "circleWin");
    winUser1();
    countUser1()
  } else if (
    userClicked[6].className == "insideCircle" &&
    userClicked[7].className == "insideCircle" &&
    userClicked[8].className == "insideCircle"
  ) {
    userClicked[6].lastChild.setAttribute("class", "circleWin");
    userClicked[7].lastChild.setAttribute("class", "circleWin");
    userClicked[8].lastChild.setAttribute("class", "circleWin");
    winUser1();
    countUser1()
  } else if (
    userClicked[0].className == "insideCircle" &&
    userClicked[3].className == "insideCircle" &&
    userClicked[6].className == "insideCircle"
  ) {
    userClicked[0].lastChild.setAttribute("class", "circleWin");
    userClicked[3].lastChild.setAttribute("class", "circleWin");
    userClicked[6].lastChild.setAttribute("class", "circleWin");
    winUser1();
    countUser1()
  } else if (
    userClicked[1].className == "insideCircle" &&
    userClicked[4].className == "insideCircle" &&
    userClicked[7].className == "insideCircle"
  ) {
    userClicked[1].lastChild.setAttribute("class", "circleWin");
    userClicked[4].lastChild.setAttribute("class", "circleWin");
    userClicked[7].lastChild.setAttribute("class", "circleWin");
    winUser1();
    countUser1()
  } else if (
    userClicked[2].className == "insideCircle" &&
    userClicked[5].className == "insideCircle" &&
    userClicked[8].className == "insideCircle"
  ) {
    userClicked[2].lastChild.setAttribute("class", "circleWin");
    userClicked[5].lastChild.setAttribute("class", "circleWin");
    userClicked[8].lastChild.setAttribute("class", "circleWin");
    winUser1();
    countUser1()
  } else if (
    userClicked[2].className == "insideCircle" &&
    userClicked[4].className == "insideCircle" &&
    userClicked[6].className == "insideCircle"
  ) {
    userClicked[2].lastChild.setAttribute("class", "circleWin");
    userClicked[4].lastChild.setAttribute("class", "circleWin");
    userClicked[6].lastChild.setAttribute("class", "circleWin");
    winUser1();
    countUser1()
  } else if (
    userClicked[0].className == "insideCircle" &&
    userClicked[4].className == "insideCircle" &&
    userClicked[8].className == "insideCircle"
  ) {
    userClicked[0].lastChild.setAttribute("class", "circleWin");
    userClicked[4].lastChild.setAttribute("class", "circleWin");
    userClicked[8].lastChild.setAttribute("class", "circleWin");
    winUser1();
    countUser1()
  } else {
    return false;
  }
}

function User2() {
  if (
    userClicked[0].className == "insideMulti" &&
    userClicked[1].className == "insideMulti" &&
    userClicked[2].className == "insideMulti"
  ) {
    userClicked[0].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[1].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[2].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[0].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[1].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[2].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  } else if (
    userClicked[3].className == "insideMulti" &&
    userClicked[4].className == "insideMulti" &&
    userClicked[5].className == "insideMulti"
  ) {
    userClicked[3].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[4].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[5].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[3].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[4].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[5].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  } else if (
    userClicked[6].className == "insideMulti" &&
    userClicked[7].className == "insideMulti" &&
    userClicked[8].className == "insideMulti"
  ) {
    userClicked[6].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[7].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[8].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[6].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[7].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[8].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  } else if (
    userClicked[0].className == "insideMulti" &&
    userClicked[3].className == "insideMulti" &&
    userClicked[6].className == "insideMulti"
  ) {
    userClicked[0].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[3].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[6].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[0].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[3].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[6].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  } else if (
    userClicked[1].className == "insideMulti" &&
    userClicked[4].className == "insideMulti" &&
    userClicked[7].className == "insideMulti"
  ) {
    userClicked[1].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[4].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[7].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[1].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[4].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[7].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  } else if (
    userClicked[2].className == "insideMulti" &&
    userClicked[5].className == "insideMulti" &&
    userClicked[8].className == "insideMulti"
  ) {
    userClicked[2].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[5].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[8].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[2].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[5].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[8].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  } else if (
    userClicked[2].className == "insideMulti" &&
    userClicked[4].className == "insideMulti" &&
    userClicked[6].className == "insideMulti"
  ) {
    userClicked[2].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[4].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[6].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[2].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[4].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[6].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  } else if (
    userClicked[0].className == "insideMulti" &&
    userClicked[4].className == "insideMulti" &&
    userClicked[8].className == "insideMulti"
  ) {
    userClicked[0].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[4].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[8].children[0].setAttribute("class", "multiplicationLine1Win");
    userClicked[0].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[4].children[1].setAttribute("class", "multiplicationLine2Win");
    userClicked[8].children[1].setAttribute("class", "multiplicationLine2Win");
    winUser2();
    countUser2()
  }
}

function winUser1() {
  allThRemOn();
  let multiplicationLine1 = document.querySelectorAll(".multiplicationLine1");
  let multiplicationLine2 = document.querySelectorAll(".multiplicationLine2");
  let circle = document.querySelectorAll(".circle");
  // user1.style = "display : block";
  // user2.style = "display : none";
  for (let i = 0; i < multiplicationLine2.length; i++) {
    multiplicationLine1[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
    multiplicationLine2[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
  }
  for (let i = 0; i < circle.length; i++) {
    circle[i].style = "border-color : rgba(255, 255, 255, 0.36)";
  }
  setTimeout(reloadPage, 3000);
}

function winUser2() {
  allThRemOn();
  let circle = document.querySelectorAll(".circle");
  let multiplicationLine1 = document.querySelectorAll(".multiplicationLine1");
  let multiplicationLine2 = document.querySelectorAll(".multiplicationLine2");
  // user1.style = "display : none";
  // user2.style = "display : block";
  for (let i = 0; i < circle.length; i++) {
    circle[i].style = "border-color : rgba(255, 255, 255, 0.36)";
  }
  for (let i = 0; i < multiplicationLine1.length; i++) {
    multiplicationLine1[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
    multiplicationLine2[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
  }
  setTimeout(reloadPage, 3000);
}
