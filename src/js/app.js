"use strict";

var navigation = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation-toggle");
var hamburger = document.querySelector(".hamburger");

navToggle.addEventListener("click", function (e) {

    if (navigation.classList.contains('is-open') && hamburger.classList.contains('is-open')) {
        navigation.classList.remove('is-open');
        hamburger.classList.remove('is-open');
    } else {
        navigation.classList.add("is-open");
        hamburger.classList.add('is-open');
    }
    e.preventDefault();
}, false);

function toggleSubMenu(e) {
    var subListing = e.target.parentNode.children[2];
    subListing.classList.toggle('displaySub');
}

document.addEventListener('click', function (event) {
    var isClickInside = navToggle.contains(event.target);
    if (!isClickInside && navigation.classList.contains('is-open') && event.target.localName === "a") {
        navigation.classList.remove('is-open');
        hamburger.classList.remove('is-open');
    }
});