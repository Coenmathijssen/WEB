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
    setTimeout(loadaway, 3000);

}





downloadKnop.addEventListener('click', gifAfspelen, false);



