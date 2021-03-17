$(document).ready(function() {
    var count = 1;
    $('.element1_slide1, .element1_slide1_slider2, .element1_slide3_slider3, .element2_slide3_slider3, .element3_slide3_slider3').on('click', function() {
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
    count = 1;
    }
    });
});

$(document).ready(function() {
$('.vpered1').click(function () {
  $('.wrapper2').addClass('wrapper2_action1');
  $('.oval1, .stop_signal, .oval2, .wait_signal, .oval3, .go_signal, .part2_footer2, .phrase1_part1, .phrase2, .phrase3, .phrase4, .phrase5').addClass('animation_start')
});
});
$(document).ready(function() {
$('.vpered2').click(function () {
  $('.wrapper2').addClass('wrapper2_action2');
});
});
$(document).ready(function() {
$('.vpered3').click(function () {
  $('.wrapper2').addClass('wrapper2_action3');
});
});
// $(document).ready(function() {
// $('.part1_footer3').click(function () {
//     var x= $('.second_slider_wrapper').css('animation-play-state');
//     if (x == 'paused') {
//     $('.second_slider_wrapper').css('animation-play-state', 'running');
//   }
// });
// });

$(document).ready(function() {
$('.part1_footer3').click(function () {
    $('.second_slider_wrapper').css('animation', 'edut_tachki3 2s linear, edut_tachki4 7s 2s infinite running, maschiny_v_probke 1s infinite ease-in');
});
});

$(document).ready(function() {
$('.part2_footer3').click(function () {
  $('.second_slider_wrapper').css('animation-play-state', 'paused');
});
});

$(document).ready(function() {
$('.bip_bip_button').mouseover(function () {
  $('.bip_bip_img').addClass('bip_bip_display');
  // $('.bip_bip_button').addClass('bip_bip_button_img');
});
$('.bip_bip_button').mouseout(function () {
  $('.bip_bip_img').removeClass('bip_bip_display');
  // $('.bip_bip_button').removeClass('bip_bip_button_img');
});
});

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
