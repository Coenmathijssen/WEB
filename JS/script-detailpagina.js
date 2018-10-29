/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var downloadKnop = document.querySelector(".downloadknop");
var gif = document.querySelector(".gif");
var gifBeweeg = document.querySelector(".gifbeweeg");

function gifAfspelen() {
    downloadKnop.classList.add("hide");
    gif.classList.remove("hide");
    gifBeweeg.classList.add("visible");


}





downloadKnop.addEventListener('click', gifAfspelen, false);






var favorietKnop = document.querySelector(".favorietknop");
var gif2 = document.querySelector(".gif2");
var gifBeweeg2 = document.querySelector(".gifbeweeg2");

function gifAfspelen2() {
    favorietKnop.classList.add("hide");
    gif2.classList.remove("hide");
    gifBeweeg2.classList.add("visible");

}





favorietKnop.addEventListener('click', gifAfspelen2, false);
