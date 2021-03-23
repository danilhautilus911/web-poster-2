$(document).ready(function() {
    var count = 1;
    $('.item div, .item2 div, .item3 div').on('click', function() {
    if (count == 1) {
    $(this).css('background-color', '#FFD42F');
    count++;
} else if (count == 2) {
    $(this).css('background-color', '#0038FF');
    count++;
} else if (count == 3) {
    $(this).css('background-color', '#FF0000');
    count++;
} else if (count == 4) {
    $(this).css('background-color', '#00B6F5');
    count++;
} else if (count == 5) {
    $(this).css('background-color', '#11DA00');
    count++;
} else if (count == 6) {
    $(this).css('background-color', 'black');
    count++;
} else if (count == 7) {
    $(this).css('background-color', '#F656A0');
    count = 1;
    }

    });
});


$(document).ready(function() {
$('.vpered1').click(function () {
  $('.wrapper2').addClass('wrapper2_action1');
  $('.oval1, .stop_signal, .oval2, .wait_signal, .oval3, .go_signal, .part2_footer2, .phrase1, .phrase1_part1, .phrase1_part2, .phrase2, .phrase2_part1, .phrase2_part2, .phrase3').addClass('animation_start');
  $('.slider1').clone().appendTo('.slider1_second_slider_wrapper');
  $('.slider2').clone().appendTo('.slider2_second_slider_wrapper');
  $('.slider3').clone().appendTo('.slider3_second_slider_wrapper');
  $('.slider1, .slider2, .slider3').css('height', '100%');
  $('.slider1, .slider2, .slider3').css('border', 'none');

  $('.slider1').clone().appendTo('.slider1_third_slider_wrapper');
  $('.slider2').clone().appendTo('.slider2_third_slider_wrapper');
  $('.slider3').clone().appendTo('.slider3_third_slider_wrapper');

});
});

$(document).ready(function() {
$('.vpered2').click(function () {
  $('.wrapper2').addClass('wrapper2_action2');
  $('.car1').addClass('animation_start');
  $('.car2').addClass('animation_start');
});
});

$(document).ready(function() {
$('.vpered3').click(function () {
  $('.wrapper2').addClass('wrapper2_action3');
});
});

$(document).ready(function() {
$('.vpered4').click(function () {
  $('.wrapper2').toggleClass('wrapper2_action4');
});
});


$(document).ready(function() {
$('.part1_footer3').click(function () {
    $('.second_slider_wrapper').css('animation-play-state','running, running');
    $('.second_slider_wrapper').css('animation-duration','6s, 1s');

    // $('.second_slider_wrapper').css('animation-duration','6s, 1s');

    // $('.second_slider_wrapper').css('animation-timing-function','linear, ease-in');
});
});

$(document).ready(function() {
$('.part2_footer3').click(function () {
  $('.second_slider_wrapper').css('animation-play-state', 'paused, running');
});
});


$(document).ready(function() {
$('.part3_footer3').click(function () {
   $('.second_slider_wrapper').css('animation-duration','3s, 1s');
   // $('.second_slider_wrapper').css('animation-duration','2s, 1s');

    // $('.second_slider_wrapper').css('animation-timing-function', 'cubic-bezier(.06,1.04,.86,.93), ease-in');
});
});

$(document).ready(function() {
$('.bip_bip_button, .bip_bip_button2').mouseover(function () {
  $('.bip_bip_img, .bip_bip_img2').addClass('bip_bip_display');
  // $('.bip_bip_button').addClass('bip_bip_button_img');
});

$('.bip_bip_button, .bip_bip_button2').mouseout(function () {
  $('.bip_bip_img, .bip_bip_img2').removeClass('bip_bip_display');
  // $('.bip_bip_button').removeClass('bip_bip_button_img');
});
});

// $(document).ready(function() {
// $('.next_button_part4').click(function () {
//   $('.third_slider_wrapper').css('animation-play-state', 'running');
// });
// });

// $(document).ready(function() {
// $('.next_button_part4').click(function () {
//   $('.slider_block4_part2_wrapper').css({
//     position: function(index, value) {
//       return parseFloat (value) +100%
//     };
// });
// });
// });


$(document).ready(function(){
  let slider_block4 = 0;
	$('.next_button_part4, .previous_button_part4').click(function(){
    if ($(this).hasClass('next_button_part4')) {
      slider_block4++;
    } else {slider_block4--}
    console.log(slider_block4);

    if (0 <= slider_block4 <= 12) {
      $('.slider_block4_part2_wrapper').css('left', -100 * slider_block4 + '%');
    } else {slider_block4 = 0}
	});

  // $('.previous_button_part4').click(function(){
  //   if ($(this).hasClass('next_button_part4')) {
  //     slider_block4++;
  //   } else {slider_block4--}
  //   console.log(slider_block4);
  //   if (0 <= slider_block4 <= 12) {
  //     $('.slider_block4_part2_wrapper').css('left', -100 * slider_block4);
  //   } else {slider_block4 = 0}
  // });


});


// $(document).ready(function() {
//   var left = parseInt($('.slider_block4_part2_wrapper').css("left"));
//
//   $('.next_button_part4').click(function () {
//   $('.slider_block4_part2_wrapper').css('left', left-=100);
// });
// });

// $(document).ready(function() {
//   var left = parseInt($('.slider_block4_part2_wrapper').css("left"));
//
//   $('.previous_button_part4').click(function () {
//   $('.slider_block4_part2_wrapper').css('left', left+=100);
// });
// });

// $(document).ready(function() {
//   var left = parseInt($('.slider_block4_part2_wrapper').css("left"));
//
//   $('.next_button_part4').click(function () {
//   $('.slider_block4_part2_wrapper').css('left', 0 + parseInt(x) + '% ');
//   // $('.slider_block4_part2_wrapper').css('transition', 'all 0.4s ease');
// });
// });

// $(document).ready(function() {
// $('.previous_button_part4').click(function () {
//   $('.slider_block4_part2_wrapper').css('left', '0%');
//   $('.slider_block4_part2_wrapper').css('transition', 'all 0.4s ease');
// });
// });


// $(document).ready(function() {
//   var slideIndex2 = 1;
//   showSlides(slideIndex2);
//
//   function plusSlides(n) {
//     showSlides(slideIndex2 += n);
//   }
//
//   function currentSlide(n) {
//     showSlides(slideIndex2 = n);
//   }
//
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("slider_block4");
//     var dots = document.getElementsByClassName("circle");
//
//     if (n > slides.length) {
//       slideIndex2 = 1
//     }
//     if (n < 1) {
//       slideIndex2 = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.lenght; i++) {
//       dots[i].className = dots[i].className.replace("active", "")
//   }
//    slides[slideIndex2 - 1].style.display = "block";
//    dots[slideIndex2 - 1].className += "active";
// }
// });


// $(document).ready(function() {
// $('.part3_footer3').click(function () {
//   $('.second_slider_wrapper').css('animation', 'edut_tachki4 7s infinite running, edut_tachki5 7s infinite running');
// });
// });

/* _______________________________________________ */

var slideIndex = [1, 1, 1];
var slideId = ["item", "item2", "item3"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1
  }
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "inline-block";
}

/* _______________________________________________ */
