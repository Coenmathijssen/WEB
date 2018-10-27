/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var filterLaden = document.querySelector(".filterLaden");
var drukKnop = document.querySelector(".filter");

function kleurWissel() {
    setTimeout(function () {
    filterLaden.classList.add("bgColor");
    filterLaden.value = "Resultaten laden...";
}, 200);

    setTimeout(function () {
    filterLaden.classList.remove("bgColor");
    filterLaden.value = "21 resultaten";
}, 2300);

}

drukKnop.addEventListener('click', kleurWissel);




///////********* FILTER UITKLAP ********////////


var filter = document.querySelector(".filter");
var filterToggleUit = document.querySelector(".filterToggleUit");

function toggleUitklap() {
    filter.classList.toggle("hide");
}


filterToggleUit.addEventListener('click', toggleUitklap);


