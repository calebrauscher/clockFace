/******************************************************
 * Clock Face with current browser time.
 * H1 title shows the full date and time.
 ******************************************************/
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const CLOCKBOX = document.querySelector(".clockbox");

let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let h1 = document.createElement("h1");
h1.innerHTML = date;
CLOCKBOX.prepend(h1);
const TITLE = document.querySelector("h1");


let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 60);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

const updateTitle = () => {
    TITLE.innerHTML = new Date()
}

const runTheClock = () => {
    hrPosition += (30 / 3600);
    minPosition += (6 / 60);
    secPosition += 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

let interval = setInterval(() => {
    runTheClock();
    updateTitle();
}, 1000);