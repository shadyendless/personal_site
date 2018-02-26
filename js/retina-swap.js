(function () {
  const fileExtensionRegEx = /.*(\.[^\.]+)/;
  // Let's get the pixel ratio and default it to 1.
  const pixelRatio = (window.devicePixelRatio ? Math.ceil(window.devicePixelRatio) : 1);
  // If the pixel ratio is 1, then just return out.
  if (pixelRatio === 1) return;

  document.addEventListener('DOMContentLoaded', () => {
    const imagesToSwap = document.querySelectorAll('[has-retina]');
    imagesToSwap.forEach(img => {
      const fileExtension = img.src.match(fileExtensionRegEx)[1];
      const newFilePath = img.src.replace(fileExtension, `@${pixelRatio}x${fileExtension}`);
      replaceImageIfExists(img, newFilePath);
    });
  });

  function replaceImageIfExists(imageTag, newImagePath) {
    const image = new Image();
    image.onload = () => {
      imageTag.src = newImagePath;
    };
    image.src = newImagePath;
  }
}());