// !Header little navbar functionality
let headerCaretIcon = document.getElementsByClassName("border-and-color")[0];
let backgroundImg = document.getElementsByClassName("right-mainpage")[0];
let ulListIcons = document.querySelectorAll(".navbar ul li p");
let leftVertical = document.getElementsByClassName("left-vertical")[0];
let allLinksAndBtn = document.getElementsByClassName(
  "all-links-and-btn-hidden",
)[0];
// left side icon content change
let rightSideClass = document.querySelector(".border-and-color i");
console.log(rightSideClass);
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
      leftVertical.style.width = "14%";
      backgroundImg.style.width = "86%";
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
// HOVE ROLAN SEHIFEDE RULER
// ELE ELE KI 1 MS FERQ ILE BIRINCI HOVER ISLESIN CLASS OLARAQ AT SONRA ISE QARA MODAL ATILSIN
// DARK BLUR CLASS KIMI HOVERDEN SONRA AT MUEYYEN MUDDET KECDIKDEN Sonra
// MAIN POSITIONUN ICINDEKI 2C- DIVI GOTUR
let mainPositionSecond = document.querySelectorAll(
  ".main-position div:nth-child(2)",
);
// console.log(mainPositionSecond);
let addBlurContent = document.querySelectorAll(".portfolio-first div ");

let allPortfolioPics = document.querySelectorAll(
  ".portfolio-first :nth-child(1)",
);
// ikinci divlere dark-blur classin elave edebn function
// function adddarkBlur() {
//   for (let i = 0; i < mainPositionSecond.length; i++) {
//     mainPositionSecond[i].addEventListener("click", function () {
//       mainPositionSecond[i].classList.remove("dark-blur");
//     });
//   }
//   mainPositionSecond[i].classList.add("dark-blur");
// }

// setTimeout(adddarkBlur, 90);

// for (let j = 0; j < allPortfolioPics.length; j++) {
//   allPortfolioPics[j].addEventListener("click", function () {
//     addBlurContents[j].classList.remove("back-z");
//   });

// }

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
  serviceSection.classList.add("modal-bg-gradient");
});
// clear button
let clearButton = document.getElementsByClassName("clear-x")[0];
clearButton.addEventListener("click", function () {
  servicesModal.style.display = "none";
  serviceSection.classList.remove("modal-bg-gradient");
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

// ! *********************************************************change all buttons color
let orangeBtn = document.querySelectorAll(".color-btn div button")[0];
let purpleBtn = document.querySelectorAll(".color-btn div button")[1];
let greenBtn = document.querySelectorAll(".color-btn div button")[2];
// let allBgColorButton=document.querySelectorAll(".color-btn div button");
let colorNewButton = document.getElementsByClassName("change-color");
console.log(colorNewButton);
orangeBtn.addEventListener("click", function () {
  for (let i = 0; i < colorNewButton.length; i++) {
    colorNewButton[i].style.backgroundColor = "#FA6868";
  }
});
purpleBtn.addEventListener("click", function () {
  for (let i = 0; i < colorNewButton.length; i++) {
    colorNewButton[i].style.backgroundColor = "#CA5995";
  }
});
greenBtn.addEventListener("click", function () {
  for (let i = 0; i < colorNewButton.length; i++) {
    colorNewButton[i].style.backgroundColor = "#088395";
  }
});

// input placeholder font size
let personInputs = document.querySelectorAll(".personal-info input");
for (let i = 0; i < personInputs.length; i++) {
  personInputs[i].placeholder.style.fontSize = "24px";
}
