import {findAll, find} from "../scrollable-elements"


const rootScrollable = find("html, body");

function setScrollPosition() {

  // scrollable
  findAll(".scrollable").forEach((el) => {
    el.scrollTop = el.scrollHeight / 2 - el.clientHeight / 2;
    el.scrollLeft = el.scrollWidth / 2 - el.clientWidth / 2;
  });

  // screen
  setTimeout(() => {
    rootScrollable.scrollTop = document.body.clientHeight / 2 - window.innerHeight / 2;
  }, 1);
}

document.addEventListener("DOMContentLoaded", setScrollPosition, false);
document.getElementById("set").addEventListener("click", setScrollPosition, false);