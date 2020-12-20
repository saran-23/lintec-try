//background scroll
$(function () {
  "use strict";
  var view = $(window).height();
  $(".part")
    .height(view)
    .scrollie({
      scrollOffset: -50,
      scrollingInView: function (elem) {
        var bgColor = elem.data("background");
        $("body").css("background-color", bgColor);
      },
    });
});

// fab

// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $("button.back-to-top").addClass("show");
  } else {
    $("button.back-to-top").removeClass("show");
  }
});

$("button.back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});

// Add waves effect
Waves.attach("button.back-to-top", "waves-effect");
Waves.init();

//fixed  navbar
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

// const VideoController = function(isHovering, videoElement)
// {
// 	if (isHovering == true)
//     {
//         videoElement.play();
//     }
//     else if (isHovering == false)
//     {
//         videoElement.pause();

//     }
// }

var $myVideo = $("#myVideo"),
  $myBtn = $("#play_btn");

$myBtn.hover(
  function () {
    $myVideo[0].play();
  },
  function () {
    $myVideo[0].pause();
  }
);

// hover video
var video = src['../img/videoplayback.mp4'];

function setNewImage() {
    document.getElementById('img1').video.play;   
}

function setOldImage() {
    // alert();
    document.getElementById('img1').src = "../img/left.png";    
}
