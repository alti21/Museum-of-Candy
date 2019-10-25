$(function(){
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
});

// document.querySelector(".nav-link").addEventListener("click",function()
// {
//     alert("clicked!");
// });


var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];   
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];    
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));       
document.getElementById("spanDate").innerHTML = days[tomorrow.getDay()] + ", " + months[tomorrow.getMonth()] + " " + tomorrow.getDate() + ", " + tomorrow.getFullYear();

var ticketDisplay = document.querySelector("#no_of_tickets");
var tickets = 0;
var subtractTickets = document.querySelector("#subtract");
var addTickets = document.querySelector("#add");
subtractTickets.addEventListener("click",function(){
    if(tickets === 0)
    {
        alert("Cannot have negative amount of tickets");
    }
    else if(tickets > 0)
    {
        tickets--;
        ticketDisplay.innerHTML = tickets;
    }
});
addTickets.addEventListener("click",function(){
    tickets++;
    ticketDisplay.innerHTML = tickets; 
});