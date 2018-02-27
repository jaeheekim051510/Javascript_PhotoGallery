var body = document.querySelector('.body-container');

var imgArray = [ 
    {
    im: 'Photos/1.jpg'
    },
    {
    im:'Photos/3.jpg'
    },
    { 
    im: 'Photos/2.jpg'
    },
    {
    im:'Photos/7.jpg'
    }, 
    {
    im:'Photos/9.jpg'
    },
    {
    im: 'Photos/6.jpg'
    },
    {
    im:'Photos/4.jpg'
    },
    {
    im:'Photos/8.jpg'
    },
    {
    im:'Photos/5.jpg'
    }
]
//Images of the Gallery
var imgContainer =  document.querySelector('.body-container');
var lightBoxContainer = document.querySelector('.light-box');

//function for opening and closing light box.
var openLightBox = function() {
    lightBoxContainer.classList.add('active');
}
var closeLightBox = function(){
    lightBoxContainer.classList.remove('active');
}

var currentImage;
var lightBoxElement = document.querySelector('.light-box-image')

//Click the image to open the lightbox
imgArray.forEach(function (picture) {
    var imgElement = document.createElement('img');
    imgElement.src = picture.im;
    var source = imgElement.src;
    imgContainer.appendChild(imgElement);

    imgElement.addEventListener('click', function(event){
        lightBoxElement.src = source;
        openLightBox();
    currentImage = imgArray.indexOf(picture);
        });
    });

//closing the light box
var closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    closeLightBox();
});

//left button 
var leftButton = document.querySelector('.left-button');
leftButton.addEventListener('click',function(event){
    currentImage--;
    lightBoxElement.src = imgArray[currentImage].im;
});

//right button
var rightButton = document.querySelector('.right-button');
    rightButton.addEventListener('click',function(event){
        currentImage++;
        lightBoxElement.src = imgArray[currentImage].im;
    })
