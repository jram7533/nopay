/*
    add this script to client's landing page as needed
*/

var daysDeadline = 30;
var body = document.getElementsByTagName('body')[0];

//this can make it a little more dramatic:
// body.style.background = '#000';

body.style.opacity = 1;

var interval = setInterval(function(){ 
    daysDeadline--;
    body.style.opacity -= .03;  // reduce page's opacity
    if (daysDeadline <= 0){ clearInterval(interval); }
}, 86400000);   // one day
