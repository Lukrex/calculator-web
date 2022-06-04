const input = document.getElementById('input');
const body = document.getElementById('body');
const header = document.getElementById('header');
const pTheme = document.getElementById('pTheme');
const screen = document.getElementById('screen');
const digits = document.getElementById('digits');
const pad = document.getElementById('pad');
const red = document.getElementById('red');
const numbers = document.getElementsByClassName('numbers1');
const btns = document.getElementsByClassName('btn1');
const grey = document.getElementsByClassName('grey1');

input.addEventListener('input', changeTheme);

function changeTheme() {
    let theme = input.value;
    if (theme === "1") {
        theme1();
    } else if (theme === "2") {
        theme2();
    } else if (theme === "3") {
        theme3();
    } else { return; }
}

function theme1() {
    input.classList.remove('input2'); input.classList.remove('input3');
    body.classList.remove('body2'); body.classList.remove('body3');
    header.classList.remove('header2'); header.classList.remove('header3');
    pTheme.classList.remove('p-theme2'); pTheme.classList.remove('p-theme3');
    screen.classList.remove('screen2'); screen.classList.remove('screen3');
    digits.classList.remove('digits2'); digits.classList.remove('digits3');
    pad.classList.remove('pad2'); pad.classList.remove('pad3');
    red.classList.remove('red2'); red.classList.remove('red3');
    for (let i = 0; i < numbers.length; i++) { numbers[i].classList.remove('numbers2');
    numbers[i].classList.remove('numbers3'); }
    for (let i = 0; i < btns.length; i++) { btns[i].classList.remove('btn2');
    btns[i].classList.remove('btn3'); }
    for (let i = 0; i < grey.length; i++) { grey[i].classList.remove('grey2');
    grey[i].classList.remove('grey3'); }
}
function theme2() {
    input.classList.add('input2'); input.classList.remove('input3');
    body.classList.add('body2'); body.classList.remove('body3');
    header.classList.add('header2'); header.classList.remove('header3');
    pTheme.classList.add('p-theme2'); pTheme.classList.remove('p-theme3');
    screen.classList.add('screen2'); screen.classList.remove('screen3');
    digits.classList.add('digits2'); digits.classList.remove('digits3');
    pad.classList.add('pad2'); pad.classList.remove('pad3');
    red.classList.add('red2'); red.classList.remove('red3');
    for (let i = 0; i < numbers.length; i++) { numbers[i].classList.add('numbers2');
    numbers[i].classList.remove('numbers3'); }
    for (let i = 0; i < btns.length; i++) { btns[i].classList.add('btn2'); 
    btns[i].classList.remove('btn3'); }
    for (let i = 0; i < grey.length; i++) { grey[i].classList.add('grey2');
    grey[i].classList.remove('grey3'); }
}
function theme3() {
    input.classList.remove('input2'); input.classList.add('input3');
    body.classList.remove('body2'); body.classList.add('body3');
    header.classList.remove('header2'); header.classList.add('header3');
    pTheme.classList.remove('p-theme2'); pTheme.classList.add('p-theme3');
    screen.classList.remove('screen2'); screen.classList.add('screen3');
    digits.classList.remove('digits2'); digits.classList.add('digits3');
    pad.classList.remove('pad2'); pad.classList.add('pad3');
    red.classList.remove('red2'); red.classList.add('red3');
    for (let i = 0; i < numbers.length; i++) { numbers[i].classList.remove('numbers2');
    numbers[i].classList.add('numbers3'); }
    for (let i = 0; i < btns.length; i++) { btns[i].classList.remove('btn2');
    btns[i].classList.add('btn3'); }
    for (let i = 0; i < grey.length; i++) { grey[i].classList.remove('grey2');
    grey[i].classList.add('grey3'); }
}

function writeDigits(btn) {
    if (digits.innerHTML.length >= 15) { return; }
    else if (digits.innerHTML === '' && btn.innerHTML === '0') { return; }
    else if (digits.innerHTML === '' && btn.innerHTML === '.') { digits.innerHTML = '0'; }
    digits.innerHTML = digits.innerHTML.replaceAll(" ", "");
    digits.innerHTML += btn.innerHTML;
    digits.innerHTML = numberWithSpaces(digits.innerHTML);
}
function deleteDigit() {
    digits.innerHTML = digits.innerHTML.slice(0, -1);
}
function reset() {
    digits.innerHTML = "";
}
function calculate() {
    var optimizedDigits = digits.innerHTML.replaceAll("x", "*").replaceAll(" ", "");
    digits.innerHTML = numberWithSpaces(eval(optimizedDigits));
    if (digits.innerHTML.includes(".")) {
        digits.innerHTML = numberWithSpaces(Math.round((eval(optimizedDigits) + Number.EPSILON) * 1000) / 1000);
    }
    //http://mikemcl.github.io/decimal.js/ maybe
}

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

function clickAnimation(btn) {
    btn.classList.add("btn-click");
    setTimeout(function(){btn.classList.remove("btn-click")}, 300);
}