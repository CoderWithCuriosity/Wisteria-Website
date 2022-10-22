

//Listening for each theme changer btn and performing an action
const autoTypingText = document.getElementsByClassName("auto")[0];
const descTitle = document.getElementsByClassName("desc-title");
const desc = document.getElementsByClassName("desc");
const descBtn = document.getElementsByClassName("desc-btn");

function changeTheme(theme){
    if(theme === "light"){
        autoTypingText.style.color = "var(--light-theme-text-color)";

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
        autoTypingText.style.color = "white";
        console.log(autoTypingText);
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
        autoTypingText.style.color = "var(--primary-theme-text-color)";

        for(let i = 0; i < descTitle.length; i++){
            descTitle[i].style.color = "var(--primary-theme-header-color)";
        }
        for(let i = 0; i < desc.length; i++){
            desc[i].style.color = "var(--primary-theme-text-color)";
        }
        for(let i = 0; i < descBtn.length; i++){
            descBtn[i].style.borderColor = "var(--primary-theme-header-color)";
        }
    }
    else if(theme === "success"){
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