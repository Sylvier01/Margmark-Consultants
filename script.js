const backToTopBtn = document.querySelector(".back-to-top-btn")
const navLinks = document.querySelectorAll("nav a")
const menuIcon = document.querySelector(".menu-icon")
const navList = document.querySelector(".nav-list")
const width = window.innerWidth 
const copyrightYear = document.querySelector(".copyright-year")

/**
 * Menu icon & Navbar
 */

// Hide/show menu icon
if(width < 768){
    menuIcon.style.display = "block"
}
else{
    menuIcon.style.display = "none"
}

// Menu icon click events
menuIcon.addEventListener("click", () => {
    if(navList.style.display === "block"){
        navList.style.display = "none"
    } else{
        navList.style.display = "block"
    }
})

// Active NavLink
navLinks.forEach(function (link){
    link.addEventListener("click", function(){

        navLinks.forEach(function(l){
            l.classList.remove("active")
        })

        this.classList.add("active")        
    })    
})

// Back to top Btn
window.addEventListener("scroll", function (){
    if (window.scrollY > 100){
        backToTopBtn.classList.add("show")
    }
    else{
        backToTopBtn.classList.remove("show")
    }
})

//Copyright year
 copyrightYear.textContent = new Date().getFullYear()
