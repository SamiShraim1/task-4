const hamburger= document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const overlayH = document.querySelector(".overlay-hamburger");


hamburger.onclick = ()=> {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    overlayH.style.display="none";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    overlayH.style.display="block";
  }
}

