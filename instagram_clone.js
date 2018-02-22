var body = document.querySelector('.body-container');

var imgArray = [ 
    {
    im: 'Photos/1.jpg'
    },
    {
    im: 'Photos/3.jpg'
    },
    { 
    im: 'Photos/2.jpg'
    },
    {
    im: 'Photos/4.jpg'
    }, 
    {
    im: 'Photos/5.jpg'
    },
    {
    im: 'Photos/6.jpg'
    }
]
//Images of the Gallery
var imgContainer =  document.querySelector('.body-container');
var lightBoxContainer = document.querySelector('.light-box');
imgArray.forEach(function (picture, index) {
    var imgElement = document.createElement('img');
    imgElement.src = picture.im;
    var source = imgElement.src;
    imgContainer.appendChild(imgElement);
    if (index === 1){
        var lightBoxElement = document.createElement('img'); 
        lightBoxElement.src = source;
        lightBoxContainer.appendChild(lightBoxElement);
    }
});

var featuredImage = document.querySelector('.light-box img');
var allImages = document.querySelectorAll('.body-container img');

var openLightBox = function() {
    lightBoxContainer.classList.add('active');
}
var closeLightBox = function(){
    lightBoxContainer.classList.remove('active');
}

//open light box
allImages.forEach(function(nav){
    nav.addEventListener('click', function(event){
        event.preventDefault();
        var source = nav.src;
        featuredImage.src = source;
        openLightBox();
    }
  );
});
//close light box
var closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    closeLightBox();
});




// Method 1: Simple for-loop
// for(var i = 0; i < imgArray.length; i++) {
//     var picture = imgArray[i];
//     var imgElement = document.createElement('img');
//     imgElement.src = picture.link;
//     imgContainer.appendChild(imgElement);
//   }



