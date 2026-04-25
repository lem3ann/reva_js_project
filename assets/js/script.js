// !Header little navbar functionality
let headerCaretIcon = document.getElementsByClassName("border-and-color")[0];
let backgroundImg = document.getElementsByClassName("right-mainpage")[0];
let ulListIcons = document.querySelectorAll(".navbar ul li p");
let leftVertical = document.getElementsByClassName("left-vertical")[0];
let allLinksAndBtn = document.getElementsByClassName(
  "all-links-and-btn-hidden",
)[0];
let boxImg = document.querySelectorAll(".back-z div img");
let portfolioModal = document.getElementsByClassName("portfolio-modal")[0];
let picImgTag = document.querySelectorAll(".pathImg img")[0];
let setBgColor = document.getElementsByClassName("black-bg-effect-relative")[0];

// left side icon content change
let rightSideClass = document.querySelector(".border-and-color i");
let navbarFlag = true;
headerCaretIcon.addEventListener("click", function () {
  headerCaretIcon.style.marginRight = "35%";
  headerCaretIcon.style.marginBottom = "40px";
  if (navbarFlag) {
    allLinksAndBtn.style.visibility = "hidden";
    rightSideClass.classList.remove("fa-angle-left");
    rightSideClass.classList.add("fa-angle-right");
    for (let i = 0; i < ulListIcons.length; i++) {
      ulListIcons[i].style.display = "none";
      leftVertical.style.width = "6%";
      backgroundImg.style.width = "94%";
    }
    navbarFlag = false;
  } else {
    allLinksAndBtn.style.visibility = "visible";
    headerCaretIcon.style.marginRight = "0";
    headerCaretIcon.style.marginBottom = "0";
    rightSideClass.classList.remove("fa-angle-right");
    rightSideClass.classList.add("fa-angle-left");
    for (let i = 0; i < ulListIcons.length; i++) {
      ulListIcons[i].style.display = "flex";
      leftVertical.style.width = "12%";
      backgroundImg.style.width = "88%";
      navbarFlag = true;
    }
  }
});

// #################### SEKIL DEYISME VE YAZI FUNKSIONALLIGI
// BG image

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
    allTab.forEach((element) => element.classList.remove("active"));

    allListContent.forEach((content) => {
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
let mainTab = document.querySelectorAll("nav ul li.flex-center");
let tabUnderline = document.querySelectorAll("nav ul li");
let sectionTab = document.querySelectorAll(".section-tab");
for (let i = 0; i < mainTab.length; i++) {
  mainTab[i].addEventListener("click", function () {
    mainTab.forEach((element) => element.classList.remove("active"));
    tabUnderline.forEach((element) => {
      element.classList.remove("active-border");
    });

    sectionTab.forEach((content) => {
      content.style.display = "none";
    });
    tabUnderline[i].classList.add("active-border");

    mainTab[i].classList.add("active");

    sectionTab[i].style.display = "block";
  });
}

// ****************PORTFOLIO SEHIFESI UCUN JS   ***************************
// esas navtabda reng funksionalligi
let allImagesButton = document.querySelectorAll(".portfolio-btn button");
let allPicContainer = document.querySelectorAll(".img-container");
for (let i = 0; i < allImagesButton.length; i++) {
  allImagesButton[i].addEventListener("click", function () {
    allImagesButton.forEach((element) => {
      element.classList.remove("portfolio-bg");
    });
    allPicContainer.forEach((element) => {
      element.style.display = "none";
    });
    allImagesButton[i].classList.add("portfolio-bg");
    allPicContainer[i].style.display = "block";
  });
}
// 
// ! *********************************************************change all buttons color
let orangeBtn = document.querySelectorAll(".color-btn div button")[0];
let purpleBtn = document.querySelectorAll(".color-btn div button")[1];
let greenBtn = document.querySelectorAll(".color-btn div button")[2];
let body = document.getElementsByTagName("body")[0];
// let allBgColorButton=document.querySelectorAll(".color-btn div button");
let colorNewButton = document.getElementsByClassName("change-color");
orangeBtn.addEventListener("click", function () {
  // allImagesButton.forEach((element) => {
  //   element.classList.remove("portfolio-bg", "change-color");
  // });
  for (let i = 0; i < colorNewButton.length; i++) {
    colorNewButton[i].style.backgroundColor = "#FA6868";
    body.style.backgroundColor = "#ffffff";
  }
});
purpleBtn.addEventListener("click", function () {
  for (let i = 0; i < colorNewButton.length; i++) {
    colorNewButton[i].style.backgroundColor = "#CA5995";
    body.style.backgroundColor = "#e5e3fa";
  }
});
greenBtn.addEventListener("click", function () {
  for (let i = 0; i < colorNewButton.length; i++) {
    colorNewButton[i].style.backgroundColor = "#088395";
    body.style.backgroundColor = "#ffffff";
  }
});
// PORTFOLIO IMG EFFECT

// her modal acilanda uygin content gorunsun deye
const imgPathArr = [
  "../assets/images/p-1.jpg",
  "../assets/images/p-2.jpg",
  "../assets/images/p-3.jpeg",
  "../assets/images/p-4.jpg",
  "../assets/images/p-5.jpg",
  "../assets/images/p-6.jpg",
  "../assets/images/p-7.jpg",
  "../assets/images/p-8.jpg",
  "../assets/images/p-9.jpg"
];
let defineOpacity = document.getElementsByClassName("opacity-class");
let textVisible = document.querySelectorAll(".back-z div div");
let mainPortfolioImg = document.getElementsByClassName("portfolio-absolute");
// all back-z class
let allImgTextContainers = document.querySelectorAll(".back-z");
// for da image e gelende scale ile deyis
// ! OPACITY OLAN ELEMENTLERDE HOVER ISLEMESIN

for (let i = 0; i < mainPortfolioImg.length; i++) {
  if (allImgTextContainers[i].querySelector(".opacity-class")) {
    allImgTextContainers[i].style.cursor = "no-drop";
    continue;
  }
  allImgTextContainers[i].addEventListener("mouseover", function () {
    mainPortfolioImg[i].classList.add("dark-blur");
    boxImg[i].style.transform = "scale(1.3,1.3)";
    textVisible[i].style.display = "block";
  });
  allImgTextContainers[i].classList.remove("dark-blur");
  mainPortfolioImg[i].addEventListener("mouseout", function () {
    mainPortfolioImg[i].classList.remove("dark-blur");
    boxImg[i].style.transform = "scale(1,1)";
    textVisible[i].style.display = "none";
  });
}

// modal ucun hisse
let iClass = document.querySelectorAll("div i.fa-arrows-alt");
for (let index = 0; index < iClass.length; index++) {

  iClass[index].addEventListener("click", function () {
    portfolioModal.style.display = "block";
    picImgTag.setAttribute("src", `${imgPathArr[index%9]}`);
    setBgColor.classList.add("black-bg-effect");
  });
}
// clear icon ucun hisse
let xClear = document.getElementsByClassName("x-clear-icon");
for (let i = 0; i < xClear.length; i++) {
  xClear[i].addEventListener("click", function () {
    portfolioModal.style.display = "none";
    setBgColor.classList.remove("black-bg-effect");
  });
}

// ! ******************************************************************** CONTACT PAGE ---maps functionality ************************************
let mapButton = document.getElementsByClassName("app-length")[0];
let mapButtonTextContent = document.querySelector(".app-length span");
let circleArrowMap = document.querySelector(".app-length i");
let mapIframe = document.querySelector(".map-frame iframe");
let mapHeight = document.querySelector(".map-frame");
let myFlag = false;
mapButton.addEventListener("click", function () {
  if (myFlag === false) {
    circleArrowMap.classList.replace(
      "fa-arrow-circle-down",
      "fa-arrow-circle-up",
    );
    mapButtonTextContent.textContent = "Close Map";
    mapIframe.style.display = "block";
    mapHeight.style.height = "450px";
    myFlag = true;
  } else {
    circleArrowMap.classList.replace(
      "fa-arrow-circle-up",
      "fa-arrow-circle-down",
    );
    mapButtonTextContent.textContent = "Open Map";
    mapIframe.style.display = "none";
    mapHeight.style.height = "0";
    myFlag = false;
  }
});

// send message button
let sendMessageBtn = document.getElementsByClassName("message-btn")[0];
sendMessageBtn.addEventListener("mouseenter", function () {
  sendMessageBtn.textContent = " SEND MESSAGE →";
});
sendMessageBtn.addEventListener("mouseleave", function () {
  sendMessageBtn.textContent = " SEND MESSAGE";
});

//! SERVICES PAGE MODAL
let servicesModal = document.getElementsByClassName("services-modal")[0];
let playBtn = document.getElementsByClassName("play-btn")[0];
let serviceSection = document.getElementsByTagName("main")[0];
playBtn.addEventListener("click", function () {
  servicesModal.style.display = "block";
  setBgColor.classList.add("black-bg-effect");
});
// clear button
let clearButton = document.getElementsByClassName("clear-x")[0];
clearButton.addEventListener("click", function () {
  servicesModal.style.display = "none";
  setBgColor.classList.remove("black-bg-effect");
});
// bg color dark

// ! ****************************************************************** round image changer
let roundImgArr;
const squareContentArr = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum minus, cum soluta asperiores quae necessitatibus.",
  "Vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolor.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.",
  "Duis aute irure dolor in relore eu fugiat nulla pariatur. Excepteur.",
  "Dlum dolore eu fugiat nulla pariatur. Excepteur",
];
const nameArr = [
  "Matthew Dix",
  "Joshua Earle",
  "Mike Petrucci",
  "John Doe",
  "Lauren Dix",
];
let mainImg = document.querySelector(".round-pic-absolute img");
let squareFrameContent = document.querySelector(".round-area-text p");
let allRoundPics = document.querySelectorAll(".round-imgs img");
let picBorder = document.querySelectorAll(".round-imgs");
let namesForContent = document.querySelector(".round-area-text span");
// picBorder[0].classList.remove("round-imgs");
picBorder[1].classList.add = "round-class-yellow";
for (let i = 0; i < allRoundPics.length; i++) {
  // console.log(allRoundPics[i].getAttribute("src"));
  allRoundPics[i].addEventListener("click", function () {
    mainImg.setAttribute("src", allRoundPics[i].getAttribute("src"));
    squareFrameContent.textContent = squareContentArr[i];
    namesForContent.textContent = nameArr[i];
  });
}



// input placeholder font size
let personInputs = document.querySelectorAll(".personal-info input");
for (let i = 0; i < personInputs.length; i++) {
  personInputs[i].placeholder.style.fontSize = "24px";
}