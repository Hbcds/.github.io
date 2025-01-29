'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if (document.body.classList.contains('dark-theme')){
        this.textContent = "Dark";    
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + document.body.className);
});

//poo-up

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}
//popover
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

document.addEventListener("DOMContentLoaded", function() {
    $('[data-toggle="popover"]').popover();
});