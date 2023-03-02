//Hamburger menu scripts

const menu = document.querySelector("hamburger-menu");
const navbarcontainer = document.querySelector("nav")
const navbarlist = document.querySelector("nav ul");
const links = document.querySelector("nav-link")


menu.addEventListener("click", ()=> {
    navbarlist.classList.toggle("show");
});

links.forEach((link) => 
    link.addEventListener("click", () => {
        navbarlist.classList.remove("show");
    })
)