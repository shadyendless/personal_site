(function () {
    const hamburgerIcon = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-items__mobile');

    hamburgerIcon.addEventListener('click', (event) => {
        event.preventDefault();

        hamburgerIcon.classList.toggle('open');
        mobileMenu.classList.toggle('is-none');
    });
}());