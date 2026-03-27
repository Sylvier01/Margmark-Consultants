const backToTopBtn = document.querySelector(".back-to-top-btn")
const navLinks = document.querySelectorAll("nav a")

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
