(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const hamburgerIcon = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.nav-items__mobile');
        const scrollToTop = document.getElementById('to-top');

        hamburgerIcon.addEventListener('click', (event) => {
            event.preventDefault();

            hamburgerIcon.classList.toggle('open');
            mobileMenu.classList.toggle('is-none');
            document.body.classList.toggle('noscroll');
        });

        if (scrollToTop !== undefined) {
            scrollToTop.addEventListener('click', (event) => {
                event.preventDefault();
                zenscroll.toY(0);
            });
        }
    });
}());