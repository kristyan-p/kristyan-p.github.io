/* 
1) create click handlers for all buttons except center
2) write either math or color functions 
3) math function:
- user .innerHTML to get the value inside div #out
- parse the text into a number using parseInt
- use .innerHTML to write the new value to the div #out
4) color function:
- change background color to either red or blue 
*/

// click handlers for addition
const a10 = document.querySelector('#a10');
a10.onclick = add10;

const a20 = document.querySelector('#a20');
a20.onclick = add20;

const a30 = document.querySelector('#a30');
a30.onclick = add30;

// click handlers for subtraction 
const n10 = document.querySelector('#n10');
n10.onclick = neg10;

const n20 = document.querySelector('#n20');
n20.onclick = neg20;

const n30 = document.querySelector('#n30');
n30.onclick = neg30;

// click handlers for color change 
const red = document.querySelector('#red');
red.onclick = changeRed;

const blue = document.querySelector('#blue');
blue.onclick = changeBlue;


// functions for addition
function add10() {
  let out = document.querySelector('#out');
  let num = out.innerHTML;
  out.innerHTML = parseInt(num) +10;
};

function add20() {
  let out = document.querySelector('#out');
  let num = out.innerHTML;
  out.innerHTML = parseInt(num) +20;
};

function add30() {
  let out = document.querySelector('#out');
  let num = out.innerHTML;
  out.innerHTML = parseInt(num) +30;
};

// functions for subtraction 
function neg10() {
  let out = document.querySelector('#out');
  let num = out.innerHTML;
  out.innerHTML = parseInt(num) -10;
};

function neg20() {
  let out = document.querySelector('#out');
  let num = out.innerHTML;
  out.innerHTML = parseInt(num) -20;
}

function neg30() {
  let out = document.querySelector('#out');
  let num = out.innerHTML;
  out.innerHTML = parseInt(num) -30;
};

// functions for color change
function changeRed() {
  document.querySelector('#out').style.background = "red";
  document.querySelector('#out').style.color = "#000000"; 
};

function changeBlue() {
  document.querySelector('#out').style.background = "#4C4CFF";
  document.querySelector("#out").style.color = "#FFFFFF";
};

