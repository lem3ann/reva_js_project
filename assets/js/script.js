// #################### SEKIL DEYISME VE YAZI FUNKSIONALLIGI
// BG image
let backgroundImg = document.getElementsByClassName("right-mainpage")[0];
let moveableTextNode = document.getElementsByClassName("moveable-text")[0];
// sekil deyisme hissesi
let bgPicArray = ["../assets/images/1.jpg", "../assets/images/2.jpg", "../assets/images/3.jpg"]
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

// ##########################  CARET ICONU ILE NAVBAR KICILMESI ##########################
let leftCaretIcon = document.getElementsByClassName("border-and-color")[0];
leftCaretIcon.addEventListener("click", function () {
    backgroundImg.style.width = "3000px";
    backgroundImg.style.overflow = "hidden";
})