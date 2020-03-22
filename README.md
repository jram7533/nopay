# nopay
a little script for non-paying clients

/*
    add this script to client's landing page as needed
*/

var daysDeadline = 30;

var body = document.getElementsByTagName('body')[0];

body.style.opacity = 1;

var interval = setInterval(function(){ 
    daysDeadline--;<br/>    
    body.style.opacity -= .03;  // reduce page's opacity<br/>    
    if (daysDeadline <= 0) { clearInterval(interval); }<br/>    
}, 86400000);   // one day
