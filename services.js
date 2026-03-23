const slider = document.getElementById('sliderr');
const slides = document.querySelectorAll('.slidee');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
// Hamburer n nav
const menu = document.querySelector('.menu-icon'); //for hamburger
const mobileNav = document.querySelector('.mobile-nav'); //for mobile nav
const closeMenu = document.querySelector('.close-menu-icon');//for closing hamburger
const nav = document.querySelector('nav');//for nav

// Mobile-nav
// Hamburger
// for opening hamburger
menu.addEventListener('click', () => {
    if(menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        const isOpen = menu.classList.toggle('open');
        const clicked = mobileNav.classList.toggle('mobile-nav-active');
        nav.classList.toggle('nav-active');
        // const isclose = closeMenu.classList.toggle('close');
        if (isOpen && clicked) {
            document.getElementById('globalnav-anim-menutrigger-bread-top-open').beginElement();
            document.getElementById('globalnav-anim-menutrigger-bread-bottom-open').beginElement();
            document.getElementById('globalnav-anim-menutrigger-bread-top-open1').beginElement();
            document.getElementById('globalnav-anim-menutrigger-bread-bottom-open1').beginElement();
        } else {
            return;
        }
    }
})

// for closing hamburger
closeMenu.addEventListener('click', () => {
    
    mobileNav.classList.toggle('mobile-nav-active');
    nav.classList.toggle('nav-active');
    if(menu.classList.contains('open')) {
        menu.classList.remove('open');
        document.getElementById('globalnav-anim-menutrigger-bread-top-close').beginElement();
        document.getElementById('globalnav-anim-menutrigger-bread-bottom-close').beginElement();
        document.getElementById('globalnav-anim-menutrigger-bread-top-close1').beginElement();
        document.getElementById('globalnav-anim-menutrigger-bread-bottom-close1').beginElement();
    } else {
        return
    }
})



//for carousel
let slideIndex = 0;
const totalSlides = slides.length;

// Helper function to get current width on the fly
const getSlideWidth = () => slider.offsetWidth;

slider.addEventListener('scroll', () => {
    // We recalculate width here so it works even if the user resizes mid-scroll
    slideIndex = Math.round(slider.scrollLeft / getSlideWidth());
});

rightBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    slider.scrollTo({
        left: slideIndex * getSlideWidth(),
        behavior: 'smooth'
    });
});

leftBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    slider.scrollTo({
        left: slideIndex * getSlideWidth(),
        behavior: 'smooth'
    });
});

// For scroll fading
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Fade In
        } else {
            entry.target.classList.remove('show'); //Fade out
        }
    });
}, {
    threshold : 0.1 // 20% of element visible = trigger
});

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
})
/*
// everything under is my code
const slideWidth = slider.clientWidth; // container width

// Update slideIndex after manual swipe
slider.addEventListener('scroll', () => {
    slideIndex = Math.round(slider.scrollLeft / slideWidth);
});

// Arrow click handlers
rightBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides; // wrap to first
    slider.scrollLeft = slideIndex * slideWidth;
});

leftBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // wrap to last
    slider.scrollLeft = slideIndex * slideWidth;
})
*/