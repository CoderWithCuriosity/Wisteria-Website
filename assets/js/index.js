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
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
});

//Navigate through pages
function goto(page){
    window.location.href = page;
}
console.log(window.innerWidth)

const commentSection = document.querySelector(".comment_sec");



function commentbox() {
  commentSection.style.display = "block";
}



$(".bb-text").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  
  