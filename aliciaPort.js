let hamburger = document.querySelector('#hamburger_menu');


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

ScrollReveal({ reset: false });

ScrollReveal().reveal('header', { 
    delay: 1000,

});
ScrollReveal().reveal('h2', { 
    delay: 1500,
});
ScrollReveal().reveal('.box', { 
    delay: 2000,
});

