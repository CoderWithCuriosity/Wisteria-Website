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
