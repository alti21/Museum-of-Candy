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

var ticketDisplay = document.querySelectorAll(".no_of_tickets");
var subtractTickets = document.querySelectorAll(".subtract");
var addTickets = document.querySelectorAll(".add");
var tickets = 0;
for(var i=0;i<ticketDisplay.length;i++)
{
    subtractTickets[i].addEventListener("click",function(){
        tickets = parseInt(event.target.parentNode.nextElementSibling.innerHTML);
        if(tickets === 0)
        {
            alert("Cannot have negative amount of tickets");
        }
        else if(tickets > 0)
        { 
            tickets--;
            event.target.parentNode.nextElementSibling.innerHTML = tickets;
        }
    });
    addTickets[i].addEventListener("click",function(){
            tickets = parseInt(event.target.parentNode.previousElementSibling.innerHTML);
            tickets++;
            event.target.parentNode.previousElementSibling.innerHTML = tickets;
    });
}

let all = document.querySelectorAll(".days > * > * ");

Array.from(all).forEach(cur => cur.innerHTML = 5);

tomorrow.

//use array of size 365, loop through each month, for each month, loop to correct sport in array of size 365