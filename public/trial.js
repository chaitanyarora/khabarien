var inscribe = function(img, frame) {
    var imgRatio = img.width / img.height;
    var frameRatio = frame.offsetWidth / frame.offsetHeight;

    if (imgRatio > frameRatio) { // image is wider than frame; letterbox
        img.style.width = '100%';
        img.style.height = 'auto';
    } else {                     // image is taller than frame; pillarbox
        img.style.width = 'auto';
        img.style.height = '100%';
    }
}

inscribe(document.getElementById('img1'),
         document.getElementById('frame1'));