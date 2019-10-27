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
//var tickets = [0,0,0,0,0,0,0,0,0,0];
var subtractTickets = document.querySelectorAll(".subtract");
var addTickets = document.querySelectorAll(".add");



// subtractTickets[0].addEventListener("click",function(){
//     if(tickets[0] === 0)
//     {
//         alert("Cannot have negative amount of tickets");
//     }
//     else if(tickets[0] > 0)
//     { 
//         tickets[0]--;
//         ticketDisplay[0].innerHTML = tickets[0];
//     }
// });
// addTickets[0].addEventListener("click",function(){
//         tickets[0]++;
        
//         ticketDisplay[0].innerHTML = tickets[0]; 
// });

// subtractTickets[1].addEventListener("click",function(){
//     if(tickets[1] === 0)
//     {
//         alert("Cannot have negative amount of tickets");
//     }
//     else if(tickets[1] > 0)
//     { 
//         tickets[1]--;
//         ticketDisplay[1].innerHTML = tickets[1];
//     }
// });
// addTickets[1].addEventListener("click",function(){
//         tickets[1]++;
        
//         ticketDisplay[1].innerHTML = tickets[1]; 
// });

// subtractTickets[4].addEventListener("click",function(){
//     if(tickets[4] === 0)
//     {
//         alert("Cannot have negative amount of tickets");
//     }
//     else if(tickets[4] > 0)
//     { 
//         tickets[4]--;
//         ticketDisplay[4].innerHTML = tickets[4];
//     }
// });
// addTickets[4].addEventListener("click",function(){
//         tickets[4]++;
        
//         ticketDisplay[4].innerHTML = tickets[4]; 
// });

// subtractTickets[2].addEventListener("click",function(){
//     if(tickets[2] === 0)
//     {
//         alert("Cannot have negative amount of tickets");
//     }
//     else if(tickets[2] > 0)
//     { 
//         tickets[2]--;
//         ticketDisplay[2].innerHTML = tickets[2];
//     }
// });
// addTickets[2].addEventListener("click",function(){
//         tickets[2]++;
        
//         ticketDisplay[2].innerHTML = tickets[2]; 
// });

// subtractTickets[3].addEventListener("click",function(){
//     if(tickets[3] === 0)
//     {
//         alert("Cannot have negative amount of tickets");
//     }
//     else if(tickets[3] > 0)
//     { 
//         tickets[3]--;
//         ticketDisplay[3].innerHTML = tickets[3];
//     }
// });
// addTickets[3].addEventListener("click",function(){
//         tickets[3]++;
        
//         ticketDisplay[3].innerHTML = tickets[3]; 
// });

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
            console.log( tickets );
            //console.log(event.target);parentNode.nextSibling
            //console.log(event.target.parentNode.previousElementSibling.innerHTML);
            event.target.parentNode.previousElementSibling.innerHTML = tickets;
    });
}

