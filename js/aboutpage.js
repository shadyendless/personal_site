(function () {
    if (!window.location.pathname.includes('/about')) return;
    const myAge = document.getElementById('my-age');
    if (myAge !== undefined) {
        myAge.innerHTML = moment().diff(moment('07-05-1991', 'MM-DD-YYYY'), 'years');
    }

    const headers = toArray(document.getElementsByClassName('about-header'));
    const headerMap = headers
        .reduce((headerMap, header) => {
            headerMap[header.id] = header;
            return headerMap;
        }, {});
    const tocLinks = toArray(document.querySelectorAll('.about-left__link'));
    const tocMap = tocLinks
        .reduce((tocMap, tocLink) => {
            tocMap[tocLink.dataset.scrollTo] = tocLink;
            return tocMap;
        }, {});
    const tocContainers = document.querySelectorAll('.about-left__toc');
    let activeLink = document.querySelector('.about-left__link.active');

    tocLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            activeLink.classList.remove('active');
            link.classList.toggle('active');
            activeLink = link;
            zenscroll.center(headerMap[event.target.dataset.scrollTo], 999, (isLandscape() ? 50 : 250));
        });
    });

    (function configureTOCObserver() {
        const tocObserver = new IntersectionObserver((entries, observer) => {
            // If this is a landscape phone, then we won't add fixed.
            if (isLandscape() || isPortrait()) return;

            const intersectionEntry = entries[0];
            // If we are intersecting then we are on the page.
            if (intersectionEntry.isIntersecting) {
                tocContainers.forEach(container => container.classList.remove('fixed'));
            } else {
                tocContainers.forEach(container => container.classList.add('fixed'));
            }
        });
        tocObserver.observe(document.querySelector('.about-image'));

        const headerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeLink.classList.remove('active');
                    tocMap[entry.target.id].classList.add('active');
                    activeLink = tocMap[entry.target.id];
                }
            });
        }, {
                rootMargin: '0% 0% -60% 0%'
            });
        headers.forEach(header => headerObserver.observe(header));
    }());
}());