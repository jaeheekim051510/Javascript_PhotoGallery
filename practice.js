images.forEach(
    function(image){
        var imageTag = document.createElement('img');
        imageTag. src = image.src;
        container.appendChild(imageTag);

        imageTag.addEventListener('click', function(event){
            lightbox.src = image.url;
            lightboxCaption.texContent = image.cpation;
        })
    });

var forEach = function (fn, array) {
    for (var i = 0; i < array.length; i++) {
        var image = array[i];
        fn(image);
        
    }
}