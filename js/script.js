/* 
==================TypingTextAnimation=============================
*/ 

{
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["keeping group sizes small, so you don't feel shy to speak.", "having a wide range of discussion topics, so you can talk about what you’re passionate about.", "valuing trust and accountability in our community, so you get to enjoy high-quality experiences.", "providing a wide range of videos and discussion questions to help you keep things on topic."];

    const typingDelay = 50;
    const erasingDelay = 20;
    const newTextDelay = 2000;
    let charIndex = 0;
    let textArrayIndex = 0;

    function type(){
        if (charIndex < textArray[textArrayIndex].length){
            if(!cursorSpan.classList.contains("typing")){
                cursorSpan.classList.add("typing")
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex ++;
            setTimeout(type, typingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase(){
        if (charIndex > 0){
            if(!cursorSpan.classList.contains("typing")){
                cursorSpan.classList.add("typing")
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex --;
            setTimeout(erase, erasingDelay);
        }
        else{
            cursorSpan.classList.remove("typing");
            textArrayIndex ++;
            if (textArrayIndex >= textArray.length){
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 300);
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        if (textArray.length){
            setTimeout(type, newTextDelay +300);
        }
    })
}

/* ===========Carousel============================== */

const btnPrev = document.querySelector(".Prev");
const btnNext = document.querySelector(".Next");
const cards = document.querySelectorAll(".join__card");
const cardsLine = document.querySelector(".join__content");
const cardWidth = document.querySelector(".join__card").offsetWidth;
let count = 0;
let width;

function init(){
    console.log("resize");
    width = document.querySelector(".join__content-block").offsetWidth;
    cardsLine.style.width = width * cards.length + "px";
    cards.forEach(item => {
        item.style.width = width + "px";
        item.style.height = "auto";
    })
    rollCards();
}

function rollCards(){
    cardsLine.style.transform = "translate(-" + count * (width) + "px)";
}

btnNext.addEventListener("click", function(){
    count++;
    if(count >= cards.length){
        count = 0;
    }
    rollCards();
})

btnPrev.addEventListener("click", function(){
    count--;
    if(count < 0){
        count = cards.length - 1;
    }
    rollCards();
})

window.addEventListener("resize", init);
init();

/* =============PopUp Video============================== */

const btnPlay = document.querySelector(".button__video");
const popup = document.querySelector(".popup__overlay");
const close = document.querySelector(".close-button");

btnPlay.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".iframe").src = "https://www.youtube.com/embed/GNqZYOsZlUI";
    popup.classList.remove("hidden");
})

popup.addEventListener("click", function(event){
    e = event || window.event;
    if(e.target == this){
        popup.classList.add("hidden");
        document.querySelector(".iframe").src = "";
    }
})

close.addEventListener("click", function(event){
    e = event || window.event;
    if(e.target == this){
        popup.classList.add("hidden");
        document.querySelector(".iframe").src = "";
    }
})