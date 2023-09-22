document.addEventListener('contextmenu', 

event => event.preventDefault() 

)

document.addEventListener("keydown", function (event){

    if (event.ctrlKey){
  
       event.preventDefault();
  
    }
  
    if(event.keyCode == 123){
  
       event.preventDefault();
  
    }
  
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 100);
})

function toggle(){
    var header = document.getElementById("header")
    header.classList.toggle('active')
}

$('.carousel').carousel({
    interval: 4000,
})

$('#myCarousel').on('slide.bs.carousel', function () {
    direction: right
})

$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".tag");

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible");
    } else {
    $(tag).removeClass("visible");
    }
}
});

$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".tag1");

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible");
    } else {
    $(tag).removeClass("visible");
    }
}
});

$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".tag2");

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible");
    } else {
    $(tag).removeClass("visible");
    }
}
});