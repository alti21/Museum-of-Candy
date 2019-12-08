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


const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];   
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];    
let tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));       
document.getElementById("spanDate").innerHTML = days[tomorrow.getDay()] + ", " + months[tomorrow.getMonth()] + " " + tomorrow.getDate() + ", " + tomorrow.getFullYear();
console.log(tomorrow.getDate());
let tickets = 0;
for(let i=0;i<document.querySelectorAll(".no_of_tickets").length;i++)
{
    document.querySelectorAll(".subtract")[i].addEventListener("click",function(){
        tickets = parseInt(event.target.parentNode.nextElementSibling.innerHTML);
        //event.target returns the button because the click event
        //originally occured on the button (clicked on button)
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
    document.querySelectorAll(".add")[i].addEventListener("click",function(){
            tickets = parseInt(event.target.parentNode.previousElementSibling.innerHTML);
            tickets++;
            event.target.parentNode.previousElementSibling.innerHTML = tickets;
    });
}

<<<<<<< HEAD
let all = document.querySelectorAll(".days > * > * ");

Array.from(all).forEach(cur => cur.innerHTML = 5);

tomorrow.

//use array of size 365, loop through each month, for each month, loop to correct sport in array of size 365
=======
document.querySelectorAll(".class")[0].innerHTML = <h1>5</h1>;

>>>>>>> 939dec2db0fc3d0f235cbf01eb48dead1f716941
