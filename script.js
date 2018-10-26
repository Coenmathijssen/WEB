/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var formKnop = document.querySelector(".formknop");
var formAanroep = document.querySelector(".formAanroep");
var verdwijn = document.querySelector(".verdwijn");


function formWissel() {

formAanroep.classList.add("verdwijn");
verdwijn.classList.remove("verdwijn");
formKnop.textContent = '';

}



formKnop.addEventListener('click',formWissel, false);

