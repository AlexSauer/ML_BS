// Load the list of true and fake titles here
let trueTitles = ['TT1', 'TT2', 'TT3']
let falseTitles = ['FT1', 'FT2', 'FT3']

let ButtonState = {
    trueButton: 1
}

let loadButtons = function() {
    let but1 = document.getElementById('Button1');
    let but2 = document.getElementById('Button2');

    let idTrue = Math.round(Math.random() * (trueTitles.length -1));
    let idFalse = Math.round(Math.random() * (falseTitles.length -1));

    let trueButton = Number(Math.random() < 0.5) + 1;
    ButtonState.trueButton = trueButton;

    if (trueButton === 1) {
        but1.innerText = trueTitles[idTrue];
        but2.innerText = falseTitles[idFalse];
    } else {
        but1.innerText = falseTitles[idFalse];
        but2.innerText = trueTitles[idTrue];
    }
}

window.onload = function(e) {
    loadButtons();
}

function ButtonClick(button){
    let result = document.getElementById('result');
    if (ButtonState.trueButton === button) {
        result.innerText = 'Correct!';
    } else {
        result.innerText = 'False!';
    }
    loadButtons();
}

function Button1Click(){
    ButtonClick(1);
}

function Button2Click(){
    ButtonClick(2);
}