const html = document.getElementsByTagName('html')[0];
var mode = 'light';
const sunMoon = document.getElementById('sunMoon');
//sun.style.display = "none";
//const moon = document.getElementById('moon');
//moon.style.display = "none";
const lightDarkToggle = document.getElementById('lightDarkToggle');
const introText = document.getElementById('intro-text');
const introTitle = document.getElementById('intro-title');
const intro = document.getElementById('intro');
const moreAboutMeTitle = document.getElementById('more-about-me-title');
const moreAboutMeTxt = document.getElementById('more-about-me-div')

//html.dataset.theme = light;
//Hamburger menu scripts

const hamburgermenu = document.getElementById("hamburger-menu");
const navbarlist = document.querySelector("nav ul");
const navbarcontainer = document.querySelector("nav")
const links = document.querySelector("nav-link")
const body = document.getElementById("body")

hamburgermenu.addEventListener("click", toggleMenu())
document.addEventListener("click", hideMenu())

function toggleMenu() {
    navbarlist.classList.toggle("show")
}

function hideMenu() {
    if (navbarlist.classList.contains("show")) {
        navbarlist.classList.remove("show")
    }
}

function toggleLightDarkMode() {
    console.log("testing...")
    if (mode == 'light') {
        mode = 'dark';
        sunMoon.classList.add("fa-regular");
        sunMoon.classList.remove("fa-solid");
        html.style.backgroundColor = "#0e0833";
        lightDarkToggle.innerHTML
        introText.style.color = "white";
        introTitle.style.color = "white";
        intro.style.boxShadow = "none";
        moreAboutMeTitle.style.color = "white";
        moreAboutMeTxt.style.color = "white";
    }
    
    else if (mode == 'dark') {
        mode = 'light'
        sunMoon.classList.remove("fa-regular");
        sunMoon.classList.add("fa-solid");
        html.style.backgroundColor = "white";
        introText.style.color = "black";
        introTitle.style.color = "black";
        intro.style.boxShadow = "0px 2px 15px 2px var(--primary-shadow)"
        moreAboutMeTitle.style.color= "black"
        moreAboutMeTxt.style.color = "black";
    }

    


    // if (mode == 'dark') {mode = 'light';}
    // else if (mode == 'light') {mode = 'dark';}

    // html.dataset.theme = mode;
    // console.log("Switching mode")
    // console.log(mode);  
}



/*
const toggleLightDarkMode = (mode) => {
    if (mode == 'dark') {mode = 'light';}
    else if (mode == 'light') {mode = 'dark';}

    console.log("switching mode");
    console.log(mode)
    html.dataset.theme = mode;
}*/