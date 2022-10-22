//I created an observer to observe for intersection
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
//Make Opacity as a transition when it intersects with it's viewport
hiddenElements.forEach((el) => {
    observer.observe(el)
});

//Checking if the user scrolls the page and perform a function
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//Navigate through pages
function goto(page){
    window.location.href = page;
}


//Nav, Body and Footer Theme Changer

//Keep the theme changer in check
function toggleThemeChanger(){
    document.getElementById("theme-changer-container").classList.toggle("d-none");
}

//Listening for each theme changer btn and performing an action
const navbar = document.getElementById('navbar');
const themeChangerBtn = document.getElementById("theme-changer-btn");
const body = document.getElementsByTagName("body")[0];
const navbarTogglerBtn = document.getElementsByClassName('navbar-toggler')[0];;
const footer = document.getElementById("footer-holder");
const emailSubmitBtn = document.getElementById("emailSubmitBtn");
const footDesc = document.getElementById("foot-desc");
const footDescText = document.getElementsByClassName("foot-desc-text");
const footerIcon = document.getElementsByClassName("footer-icon");

function changeTheme(theme){
    //Specifing that the navigation btn changes color on theme change using ternary operator.
    navbarTogglerBtn.style.backgroundColor = (theme === "light") ? "rgb(0,0,0,0)" : "white";
    if(theme === "light"){
        navbar.style.backgroundColor = "var(--light-theme-header-color)";
        themeChangerBtn.style.color = "var(--light-theme-text-color)";
        body.style.backgroundColor = "var(--light-theme-bg-color)";
        footer.style.backgroundColor = "var(--light-theme-bg-color)";
        emailSubmitBtn.style.backgroundColor = "var(--light-theme-header-color)";
        emailSubmitBtn.style.color = "var(--light-theme-text-color)";
        footDesc.style.color = "var(--light-theme-text-color)";

        for(let i = 0; i < footDescText.length; i++){
            footDescText[i].style.color = "var(--light-theme-text-color)";
        }
        for(let i = 0; i < footerIcon.length; i++){
            footerIcon[i].style.color = "var(--light-theme-header-color)";
        }
    }
    else if(theme === "dark"){
        navbar.style.backgroundColor = "var(--dark-theme-header-color)";
        themeChangerBtn.style.color = "var(--dark-theme-text-color)";
        body.style.backgroundColor = "var(--dark-theme-bg-color)";
        footer.style.backgroundColor = "var(--dark-theme-bg-color)";
        emailSubmitBtn.style.backgroundColor = "var(--dark-theme-header-color)";
        emailSubmitBtn.style.color = "var(--dark-theme-text-color)";
        footDesc.style.color = "var(--dark-theme-text-color)";

        for(let i = 0; i < footDescText.length; i++){
            footDescText[i].style.color = "var(--dark-theme-text-color)";
        }
        for(let i = 0; i < footerIcon.length; i++){
            footerIcon[i].style.color = "var(--dark-theme-header-color)";
        }
    }
    else if(theme === "primary"){
        navbar.style.backgroundColor = "var(--primary-theme-header-color)";
        themeChangerBtn.style.color = "var(--primary-theme-text-color)";
        body.style.backgroundColor = "var(--pimary-theme-bg-color)";
        footer.style.backgroundColor = "var(--primary-theme-bg-color)";
        emailSubmitBtn.style.backgroundColor = "var(--primary-theme-header-color)";
        emailSubmitBtn.style.color = "var(--primary-theme-text-color)";
        footDesc.style.color = "var(--primary-theme-text-color)";

        for(let i = 0; i < footDescText.length; i++){
            footDescText[i].style.color = "var(--primary-theme-text-color)";
        }
        for(let i = 0; i < footerIcon.length; i++){
            footerIcon[i].style.color = "var(--primary-theme-header-color)";
        }
    }
    else if(theme === "success"){
        navbar.style.backgroundColor = "var(--success-theme-header-color)";
        themeChangerBtn.style.color = "var(--success-theme-text-color)";
        body.style.backgroundColor = "var(--success-theme-bg-color)";
        footer.style.backgroundColor = "var(--success-theme-bg-color)";
        emailSubmitBtn.style.backgroundColor = "var(--success-theme-header-color)";
        emailSubmitBtn.style.color = "var(--success-theme-text-color)";
        footDesc.style.color = "var(--success-theme-text-color)";

        for(let i = 0; i < footDescText.length; i++){
            footDescText[i].style.color = "var(--success-theme-text-color)";
        }
        for(let i = 0; i < footerIcon.length; i++){
            footerIcon[i].style.color = "var(--success-theme-header-color)";
        }
    }
    else if(theme === "danger"){
        navbar.style.backgroundColor = "var(--danger-theme-header-color)";
        themeChangerBtn.style.color = "var(--danger-theme-text-color)";
        body.style.backgroundColor = "var(--danger-theme-bg-color)";
        footer.style.backgroundColor = "var(--danger-theme-bg-color)";
        emailSubmitBtn.style.backgroundColor = "var(--danger-theme-header-color)";
        emailSubmitBtn.style.color = "var(--danger-theme-text-color)";
        footDesc.style.color = "var(--danger-theme-text-color)";

        for(let i = 0; i < footDescText.length; i++){
            footDescText[i].style.color = "var(--danger-theme-text-color)";
        }
        for(let i = 0; i < footerIcon.length; i++){
            footerIcon[i].style.color = "var(--danger-theme-header-color)";
        }
    }
}