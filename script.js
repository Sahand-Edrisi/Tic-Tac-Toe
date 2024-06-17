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
  winUser1Show.setAttribute("class", "winShow");
  user1.style = "display : none";
  user2.style = "display : none";
  allThRemOn();
}

function winUser2() {
  winUser2Show.setAttribute("class", "winShow");
  user1.style = "display : none";
  user2.style = "display : none";
  allThRemOn();
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
      setTimeout(winUser1, 500);
    } else if (
      userClicked[3].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[5].className == "insideCircle"
    ) {
      setTimeout(winUser1, 500);
    } else if (
      userClicked[6].className == "insideCircle" &&
      userClicked[7].className == "insideCircle" &&
      userClicked[8].className == "insideCircle"
    ) {
      setTimeout(winUser1, 500);
    } else if (
      userClicked[0].className == "insideCircle" &&
      userClicked[3].className == "insideCircle" &&
      userClicked[6].className == "insideCircle"
    ) {
      setTimeout(winUser1, 500);
    } else if (
      userClicked[1].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[7].className == "insideCircle"
    ) {
      setTimeout(winUser1, 500);
    } else if (
      userClicked[2].className == "insideCircle" &&
      userClicked[5].className == "insideCircle" &&
      userClicked[8].className == "insideCircle"
    ) {
      setTimeout(winUser1, 500);
    } else if (
      userClicked[2].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[6].className == "insideCircle"
    ) {
      setTimeout(winUser1, 500);
    } else if (
      userClicked[0].className == "insideCircle" &&
      userClicked[4].className == "insideCircle" &&
      userClicked[8].className == "insideCircle"
    ) {
      setTimeout(winUser1, 500);
    }
  } else if (allTh.length % 2 == 0) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.setAttribute("class", "line1");
    div2.setAttribute("class", "line2");
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
      setTimeout(winUser2, 500);
    } else if (
      userClicked[3].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[5].className == "insideMulti"
    ) {
      setTimeout(winUser2, 500);
    } else if (
      userClicked[6].className == "insideMulti" &&
      userClicked[7].className == "insideMulti" &&
      userClicked[8].className == "insideMulti"
    ) {
      setTimeout(winUser2, 500);
    } else if (
      userClicked[0].className == "insideMulti" &&
      userClicked[3].className == "insideMulti" &&
      userClicked[6].className == "insideMulti"
    ) {
      setTimeout(winUser2, 500);
    } else if (
      userClicked[1].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[7].className == "insideMulti"
    ) {
      setTimeout(winUser2, 500);
    } else if (
      userClicked[2].className == "insideMulti" &&
      userClicked[5].className == "insideMulti" &&
      userClicked[8].className == "insideMulti"
    ) {
      setTimeout(winUser2, 500);
    } else if (
      userClicked[2].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[6].className == "insideMulti"
    ) {
      setTimeout(winUser2, 500);
    } else if (
      userClicked[0].className == "insideMulti" &&
      userClicked[4].className == "insideMulti" &&
      userClicked[8].className == "insideMulti"
    ) {
      setTimeout(winUser2, 500);
    }
  }
}
