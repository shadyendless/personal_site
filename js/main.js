(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const hamburgerIcon = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.nav-items__mobile');

        hamburgerIcon.addEventListener('click', (event) => {
            event.preventDefault();

            hamburgerIcon.classList.toggle('open');
            mobileMenu.classList.toggle('is-none');
        });

        document.querySelector('.copyright-year').innerHTML = (new Date()).getFullYear();
    });
}());