
//Keep the theme changer in check
function toggleThemeChanger(){
    document.getElementById("theme-changer-container").classList.toggle("d-none");
}

//Listening for each theme changer btn and performing an action
const navbar = document.getElementById('navbar');
const themeChangerBtn = document.getElementById("theme-changer-btn");
const autoTypingText = document.getElementsByClassName("auto")[0];
const body = document.getElementsByTagName("body")[0];
const navbarTogglerBtn = document.getElementsByClassName('navbar-toggler')[0];
const descTitle = document.getElementsByClassName("desc-title");
const desc = document.getElementsByClassName("desc");
const descBtn = document.getElementsByClassName("desc-btn");

function changeTheme(theme){
    //Specifing that the navigation btn changes color on theme change using ternary operator.
    navbarTogglerBtn.style.backgroundColor = (theme === "light") ? "rgb(0,0,0,0)" : "white";
    if(theme === "light"){
        navbar.style.backgroundColor = "var(--light-theme-header-color)";
        themeChangerBtn.style.color = "var(--light-theme-text-color)";
        autoTypingText.style.color = "var(--light-theme-text-color)";
        body.style.backgroundColor = "var(--light-theme-bg-color)";
        for(let i = 0; i < descTitle.length; i++){
            descTitle[i].style.color = "var(--light-theme-header-color)";
        }
        for(let i = 0; i < desc.length; i++){
            desc[i].style.color = "var(--light-theme-text-color)";
        }
        for(let i = 0; i < descBtn.length; i++){
            descBtn[i].style.borderColor = "var(--light-theme-header-color)";
        }
    }
    else if(theme === "dark"){
        navbar.style.backgroundColor = "var(--dark-theme-header-color)";
        themeChangerBtn.style.color = "var(--dark-theme-text-color)";
        autoTypingText.style.color = "var(--dark-theme-text-color)";
        body.style.backgroundColor = "var(--dark-theme-bg-color)";
        for(let i = 0; i < descTitle.length; i++){
            descTitle[i].style.color = "var(--dark-theme-text-color)";
        }
        for(let i = 0; i < desc.length; i++){
            desc[i].style.color = "var(--dark-theme-text-color)";
        }
        for(let i = 0; i < descBtn.length; i++){
            descBtn[i].style.borderColor = "var(--dark-theme-header-color)";
        }
    }
    else if(theme === "primary"){
        navbar.style.backgroundColor = "var(--primary-theme-header-color)";
        themeChangerBtn.style.color = "var(--primary-theme-text-color)";
        autoTypingText.style.color = "var(--primary-theme-text-color)";
        body.style.backgroundColor = "var(--pimary-theme-bg-color)";
        for(let i = 0; i < descTitle.length; i++){
            descTitle[i].style.color = "var(--primary-theme-header-color)";
        }
        for(let i = 0; i < desc.length; i++){
            desc[i].style.color = "var(--primary-theme-text-color)";
        }
        for(let i = 0; i < descBtn.length; i++){
            descBtn[i].style.borderColor = "var(--light-theme-header-color)";
        }
    }
    else if(theme === "success"){
        navbar.style.backgroundColor = "var(--success-theme-header-color)";
        themeChangerBtn.style.color = "var(--success-theme-text-color)";
        autoTypingText.style.color = "var(--success-theme-text-color)";
        body.style.backgroundColor = "var(--success-theme-bg-color)";
        for(let i = 0; i < descTitle.length; i++){
            descTitle[i].style.color = "var(--success-theme-header-color)";
        }
        for(let i = 0; i < desc.length; i++){
            desc[i].style.color = "var(--success-theme-text-color)";
        }
        for(let i = 0; i < descBtn.length; i++){
            descBtn[i].style.borderColor = "var(--success-theme-header-color)";
        }
    }
    else if(theme === "danger"){
        navbar.style.backgroundColor = "var(--danger-theme-header-color)";
        themeChangerBtn.style.color = "var(--danger-theme-text-color)";
        autoTypingText.style.color = "var(--danger-theme-text-color)";
        body.style.backgroundColor = "var(--danger-theme-bg-color)";
        for(let i = 0; i < descTitle.length; i++){
            descTitle[i].style.color = "var(--danger-theme-header-color)";
        }
        for(let i = 0; i < desc.length; i++){
            desc[i].style.color = "var(--danger-theme-text-color)";
        }
        for(let i = 0; i < descBtn.length; i++){
            descBtn[i].style.borderColor = "var(--danger-theme-header-color)";
        }
    }
}