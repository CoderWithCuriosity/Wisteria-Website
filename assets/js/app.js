const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el)=>{
    observer.observe(el)
});

window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        document.getElementById('navbar').classList.add('scrolled');
    } else{
        document.getElementById('navbar').classList.remove('scrolled');
    }
});

