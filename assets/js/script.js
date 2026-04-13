// #################### SEKIL DEYISME VE YAZI FUNKSIONALLIGI
// BG image
let backgroundImg = document.getElementsByClassName("right-mainpage")[0];
let moveableTextNode = document.getElementsByClassName("moveable-text")[0];
// sekil deyisme hissesi
let bgPicArray = [
  "../assets/images/1.jpg",
  "../assets/images/2.jpg",
  "../assets/images/3.jpg",
];
let imgIndex = 0;

function changeBackground() {
  backgroundImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${bgPicArray[imgIndex]})`;
  imgIndex++;
  if (imgIndex === bgPicArray.length) {
    imgIndex = 0;
  }
}
setInterval(changeBackground, 5000);

let textVar = moveableTextNode.textContent;
let secondLine = "Graphic Designer";
let flag = true;

// tek-tek string silen function
function removeTextString() {
  if (textVar.length > 0) {
    textVar = textVar.slice(0, -1);
    showText(textVar);
  } else {
    flag = false;
  }
}
// elementi gostermek ucun function
function showText(text) {
  moveableTextNode.textContent = text;
}
// function write forward

let k = 0;

function writeForward() {
  if (k < secondLine.length) {
    textVar = textVar + secondLine[k];
    showText(textVar);
    k++;
  }
  if (k === secondLine.length) {
    setTimeout(removeTextString, 1000);
  }
}
setInterval(() => {
  if (flag) {
    removeTextString();
  } else {
    writeForward();
  }
}, 100);
// LEFT AND RIGHT CARET ICON FUNCTIONALITY
let leftArrow = document.querySelectorAll(".positions-arrow button")[0];
let rightArrow = document.querySelectorAll(".positions-arrow button")[1];
leftArrow.addEventListener("click", changeBackground);
rightArrow.addEventListener("click", changeBackground);

// !       ##########################   NAVTABS MENTIQI ####################################

let allTab = document.querySelectorAll(".flex-ul-list li");
let allListContent = document.querySelectorAll(".about-navtab-content");

for (let i = 0; i < allTab.length; i++) {
  allTab[i].addEventListener("click", function () {

    allTab.forEach(element => element.classList.remove("active"));

    allListContent.forEach(content => {
      content.style.display = "none";
    });

    allTab[i].classList.add("active");

    allListContent[i].style.display = "block";
  });
}

// ul listde click olunanda bordere top vermek
let ulListTopBorder = document.querySelectorAll(".flex-ul-list li ");
for (let i = 0; i < ulListTopBorder.length; i++) {
  ulListTopBorder[i].addEventListener("click", function () {
    ulListTopBorder.forEach((element) => {
      element.classList.remove("style-top-border");
    });
    ulListTopBorder[i].classList.add("style-top-border");
  });
}

// ? ******************* MAIN NAVTABS ********************************8
// let mainTab = document.querySelectorAll("nav ul li.flex-center");
// let sectionTab = document.querySelectorAll(".section-tab");
// for (let i = 0; i < mainTab.length; i++) {
//   mainTab[i].addEventListener("click", function () {

//     mainTab.forEach(element => element.classList.remove("active"));

//     sectionTab.forEach(content => {
//       content.style.display = "none";
//     });

//     mainTab[i].classList.add("active");

//     sectionTab[i].style.display = "block";
//   });
// }