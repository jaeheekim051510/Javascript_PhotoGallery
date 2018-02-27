var $body = $('.body-container');

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
var $imgContainer =  $(".body-container");
var $lightBoxContainer = $(".light-box");

//function for opening and closing light box.
var openLightBox = function() {
    $lightBoxContainer.addClass('active');
}
var closeLightBox = function(){
    $lightBoxContainer.removeClass('active');
}

var currentImage;
var $lightBoxElement = $(".light-box-image")

//Click the image to open the lightbox
imgArray.forEach(function (picture) {
    var $imgElement = $("<img>", {
        'src': picture.im
    });
    $imgContainer.append($imgElement);

    $imgElement.on('click', function(event){
        $lightBoxElement.attr("src", picture.im);
        openLightBox();
    currentImage = imgArray.indexOf(picture);
        });
    });

//closing the light box
var $closeButton = $('.close-button');
$closeButton.on('click', function(event) {
    event.preventDefault();
    closeLightBox();
});

//left button 
var $leftButton = $('.left-button');
$leftButton.on('click',function(event){
    currentImage--;
    //way to set source of image in jquery .attr
    $lightBoxElement.attr('src', imgArray[currentImage].im);
});

//right button
var $rightButton = $('.right-button');
    $rightButton.on('click',function(event){
        currentImage++;
        $lightBoxElement.attr('src', imgArray[currentImage].im);
    })


