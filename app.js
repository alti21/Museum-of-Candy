$(function(){
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
});

document.querySelector(".nav-link").addEventListener("click",function()
{
    alert("clicked!");
});