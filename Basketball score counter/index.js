let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
//for home
let somethingHome = 0;
let somethingGuest = 0;

function one() {
    oneplus = somethingHome += 1
    homeEl.textContent = oneplus
}
function two() {
    twoplus = somethingHome += 2
    homeEl.textContent = twoplus
}
function three() {
    threeplus = somethingHome += 3
    homeEl.textContent = threeplus
}
//guest
function one1() {
    onepplus = somethingGuest += 1
    guestEl.textContent = onepplus
}
function two2() {
    twopplus = somethingGuest += 2
    guestEl.textContent = twopplus
}
function three3() {
    threepplus = somethingGuest += 3
    guestEl.textContent = threepplus
}
//resrt
function reset() {
    homeEl.innerText = 0
    somethingHome = 0;
    guestEl.innerText = 0
    somethingGuest = 0;
}