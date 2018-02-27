const toArray = function (arrayLike) {
    return Array.prototype.slice.call(arrayLike);
};

const isLandscape = function () {
    return (window.orientation !== undefined &&
        (window.orientation === 90 || window.orientation === -90)) ||
        (window.innerHeight < 500 && window.innerWidth > window.innerHeight);
};

const isPortrait = function () {
    return (window.orientation !== undefined &&
        (window.orientation === 0 || window.orientation === 180)) ||
        (window.innerWidth < 768 && window.innerHeight > window.innerWidth);
};