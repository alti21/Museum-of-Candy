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

let all = document.querySelectorAll(".days > * > * ");

//Array.from(all).forEach(cur => cur.innerHTML = 5);

console.log(tomorrow.getDay());
let year = tomorrow.getFullYear();
let currentMonth = tomorrow.getMonth();
let today= new Date(months[currentMonth] +  " 1, "+ year);
let start_day = today.getDay() + 1;   // starts with 0

console.log(`start day is ${start_day}`);//start_day is 4, January 1st of 2020 is on 4th day of the week

const fillDays = () => {
    for(let i=start_day; i <= 31; i++)
    {//display days of the month
        document.querySelectorAll('td')[i-1].innerHTML = i-(start_day - 1);//7
        //document.querySelectorAll(".days > * > * ")[i].innerHTML = i;
    }
};

fillDays();


Array.from(document.querySelectorAll('td')).forEach(el => {
    //console.log(el.textContent);
    if(el.textContent !== '')
    {
        //console.log('test');
        el.classList.add('color');
    }
    el.addEventListener('click', () => {
        el.classList.toggle('selected');
    });
});


// for(const cur of months)
// {
//     fillDays(cur);
// }
//use array of size 365, loop through each month, for each month, loop to correct spot in array of size 365
