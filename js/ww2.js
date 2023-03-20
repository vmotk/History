const hamburger=document.querySelector(".hamburger");
const navLinks =document.querySelector(".nav-links");
const links =document.querySelector(".nav-links li");

hamburger.addEventListener('click', ()=>{
    //Link
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });

    //Animation

    hamburger.classList.toggle("toggle");

});


