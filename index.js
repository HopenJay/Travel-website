const menu = document.querySelector('.menu-icon'); //for hamburger
const mobileNav = document.querySelector('.mobile-nav'); //for mobile nav
const closeMenu = document.querySelector('.close-menu-icon');//for closing hamburger
const nav = document.querySelector('nav');//for nav
const chevron = document.getElementById("chevron");
const select  = document.getElementById("select");
const selectGuest = document.querySelector(".selected-guest");
const guestList = document.querySelector(".guest-list");
const guestListItem = document.querySelectorAll(".guest-list li");
let selectedValue = "";//for storing seleced values


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


// for guest select
selectGuest.addEventListener('click', () => {
    guestList.classList.toggle('open');
    guestListItem.forEach((list) => {
        list.addEventListener('click', () => {
            selectGuest.textContent = list.textContent;
            selectedValue = list.textContent;
            select.value = list.dataset.value;
            guestList.classList.remove('open');

            // For php database
            // const selectValue = list.dataset.value;
            // const formData = new FormData();
            // formData.append("guests", selectValue);
            // fetch("index.php", {
            //     method: "POST",
            //     body: formData
            // }).then(res => res.json()).then(data => {
            //     console.log("Only what I need:", data.guests)
            // })
        })
    })
})


chevron.addEventListener("click", () => {
    guestList.classList.toggle('open');
    guestListItem.forEach((list) => {
        list.addEventListener('click', () => {
            selectGuest.textContent = list.textContent;
            selectedValue = list.textContent;
            select.value = list.dataset.value;
            guestList.classList.remove('open');

            // For php database
            // const selectValue = list.dataset.value;
            // const formData = new FormData();
            // formData.append("guests", selectValue);
            // fetch("index.php", {
            //     method: "POST",
            //     body: formData
            // }).then(res => res.json()).then(data => {
            //     console.log("Only what I need:", data.guests)
            // })
        })
    })
});