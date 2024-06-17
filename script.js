let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let userClicked = document.querySelectorAll("#userClicked");
let winUser1Show = document.querySelector(".winUser1");
let winUser2Show = document.querySelector(".winUser2");

function allThRemOn() {
  let allThRemoveOnclick = document.querySelectorAll(".th");
  for (let i = 0; i < allThRemoveOnclick.length; i++) {
    allThRemoveOnclick[i].removeAttribute("onclick");
  }
}

function winUser1() {
  let multiplicationLine1 = document.querySelectorAll(".multiplicationLine1");
  let multiplicationLine2 = document.querySelectorAll(".multiplicationLine2");
  let circle = document.querySelectorAll(".circle");
  winUser1Show.setAttribute("class", "winShow");
  user1.style = "display : none";
  user2.style = "display : none";
  allThRemOn();
  for (let i = 0; i < multiplicationLine2.length; i++) {
    multiplicationLine1[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
    multiplicationLine2[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
  }
  for (let i = 0; i < circle.length; i++) {
    circle[i].style = "border-color : rgba(255, 255, 255, 0.36)";
  }
}

function winUser2() {
  let circle = document.querySelectorAll(".circle");
  let multiplicationLine1 = document.querySelectorAll(".multiplicationLine1");
  let multiplicationLine2 = document.querySelectorAll(".multiplicationLine2");
  winUser2Show.setAttribute("class", "winShow");
  user1.style = "display : none";
  user2.style = "display : none";
  allThRemOn();
  for (let i = 0; i < circle.length; i++) {
    circle[i].style = "border-color : rgba(255, 255, 255, 0.36)";
  }
  for (let i = 0; i < multiplicationLine1.length; i++) {
    multiplicationLine1[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
    multiplicationLine2[i].style =
      "background-color : rgba(255, 255, 255, 0.36)";
  }
}

function reloadPage() {
  location.reload();
}

function thClicked(event) {
  let th = event.target;
  let allTh = document.querySelectorAll(".th");
  if (allTh.length % 2 != 0) {
    let div = document.createElement("div");
    div.setAttribute("class", "circle");
    th.appendChild(div);
    th.setAttribute("class", "insideCircle");
    th.removeAttribute("onclick");
    user1.style = "display : none;";
    user2.style = "display : block;";
    if (
      userClicked[0].className == "insideCircle" &&
      userClicked[1].className == "insideCircle" &&
      userClicked[2].className == "insideCircle"
    ) {
      userClicked[0].lastChild.setAttribute("class", "circleWin");
      userClicked[1].lastChild.setAttribute("class", "circleWin");
      userClicked[2].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    } else if (
      userClicked[3].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[5].className == "insideCircle"
    ) {
      userClicked[3].lastChild.setAttribute("class", "circleWin");
      userClicked[4].lastChild.setAttribute("class", "circleWin");
      userClicked[5].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    } else if (
      userClicked[6].className == "insideCircle" &&
      userClicked[7].className == "insideCircle" &&
      userClicked[8].className == "insideCircle"
    ) {
      userClicked[6].lastChild.setAttribute("class", "circleWin");
      userClicked[7].lastChild.setAttribute("class", "circleWin");
      userClicked[8].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    } else if (
      userClicked[0].className == "insideCircle" &&
      userClicked[3].className == "insideCircle" &&
      userClicked[6].className == "insideCircle"
    ) {
      userClicked[0].lastChild.setAttribute("class", "circleWin");
      userClicked[3].lastChild.setAttribute("class", "circleWin");
      userClicked[6].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    } else if (
      userClicked[1].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[7].className == "insideCircle"
    ) {
      userClicked[1].lastChild.setAttribute("class", "circleWin");
      userClicked[4].lastChild.setAttribute("class", "circleWin");
      userClicked[7].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    } else if (
      userClicked[2].className == "insideCircle" &&
      userClicked[5].className == "insideCircle" &&
      userClicked[8].className == "insideCircle"
    ) {
      userClicked[2].lastChild.setAttribute("class", "circleWin");
      userClicked[5].lastChild.setAttribute("class", "circleWin");
      userClicked[8].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    } else if (
      userClicked[2].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[6].className == "insideCircle"
    ) {
      userClicked[2].lastChild.setAttribute("class", "circleWin");
      userClicked[4].lastChild.setAttribute("class", "circleWin");
      userClicked[6].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    } else if (
      userClicked[0].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[8].className == "insideCircle"
    ) {
      userClicked[0].lastChild.setAttribute("class", "circleWin");
      userClicked[4].lastChild.setAttribute("class", "circleWin");
      userClicked[8].lastChild.setAttribute("class", "circleWin");
      setTimeout(winUser1, 500);
    }
  } else if (allTh.length % 2 == 0) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.setAttribute("class", "multiplicationLine1");
    div2.setAttribute("class", "multiplicationLine2");
    th.appendChild(div1);
    th.appendChild(div2);
    th.setAttribute("class", "insideMulti");
    th.removeAttribute("onclick");
    user2.style = "display : none;";
    user1.style = "display : block;";
    if (
      userClicked[0].className == "insideMulti" &&
      userClicked[1].className == "insideMulti" &&
      userClicked[2].className == "insideMulti"
    ) {
      userClicked[0].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[1].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[2].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[0].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[1].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[2].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    } else if (
      userClicked[3].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[5].className == "insideMulti"
    ) {
      userClicked[3].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[4].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[5].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[3].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[4].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[5].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    } else if (
      userClicked[6].className == "insideMulti" &&
      userClicked[7].className == "insideMulti" &&
      userClicked[8].className == "insideMulti"
    ) {
      userClicked[6].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[7].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[8].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[6].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[7].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[8].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    } else if (
      userClicked[0].className == "insideMulti" &&
      userClicked[3].className == "insideMulti" &&
      userClicked[6].className == "insideMulti"
    ) {
      userClicked[0].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[3].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[6].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[0].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[3].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[6].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    } else if (
      userClicked[1].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[7].className == "insideMulti"
    ) {
      userClicked[1].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[4].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[7].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[1].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[4].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[7].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    } else if (
      userClicked[2].className == "insideMulti" &&
      userClicked[5].className == "insideMulti" &&
      userClicked[8].className == "insideMulti"
    ) {
      userClicked[2].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[5].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[8].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[2].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[5].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[8].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    } else if (
      userClicked[2].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[6].className == "insideMulti"
    ) {
      userClicked[2].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[4].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[6].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[2].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[4].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[6].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    } else if (
      userClicked[0].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[8].className == "insideMulti"
    ) {
      userClicked[0].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[4].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[8].children[0].setAttribute(
        "class",
        "multiplicationLine1Win"
      );
      userClicked[0].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[4].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      userClicked[8].children[1].setAttribute(
        "class",
        "multiplicationLine2Win"
      );
      setTimeout(winUser2, 500);
    }
  }
}
