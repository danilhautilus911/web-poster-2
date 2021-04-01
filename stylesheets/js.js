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

    $('.button1_block1').click(function () {
      // $('.text1_part1').addClass('animation_start');
      $('.text2_part1').addClass('animation_start');
    });

    $('.button1_block1, .button2_block1, .button3_block1').mouseover(function () {
      $('.text1_part1').addClass('disappearing');
    });

    $('.button1_block1').mouseover(function () {
      $('.text3_part1, .text4_part1').removeClass('bip_bip_display');
      $('.text2_part1').addClass('bip_bip_display');
      $('.text2_part1').css('animation-play-state', 'running');
    });
    $('.button1_block1').mouseout(function () {
      $('.text2_part1').css('animation-play-state', 'paused');
    });

    $('.button2_block1').mouseover(function () {
      $('.text2_part1, .text4_part1').removeClass('bip_bip_display');
      $('.text3_part1').addClass('bip_bip_display');
      $('.text3_part1').css('animation-play-state', 'running');
    });
    $('.button2_block1').mouseout(function () {
      $('.text3_part1').css('animation-play-state', 'paused');
    });

    $('.button3_block1').mouseover(function () {
      $('.text2_part1, .text3_part1').removeClass('bip_bip_display');
      $('.text4_part1').addClass('bip_bip_display');
      $('.text4_part1').css('animation-play-state', 'running');
    });
    $('.button3_block1').mouseout(function () {
      $('.text4_part1').css('animation-play-state', 'paused');
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
});
});

$(document).ready(function() {
$('.bip_bip_button, .bip_bip_button2').click(function () {
  $('.bip_bip_img, .bip_bip_img2').addClass('bip_bip_display');
});

$('.bip_bip_button, .bip_bip_button2').mouseout(function () {
  $('.bip_bip_img, .bip_bip_img2').removeClass('bip_bip_display');
});
});


$(document).ready(function(){
  let slider_block4 = 0;
  $('.next_button_part4, .previous_button_part4').click(function(){
    if ($(this).hasClass('next_button_part4') && slider_block4 < 12) {
      slider_block4++;
    } else if ($(this).hasClass('previous_button_part4') && slider_block4 > 0) {
      slider_block4--;
    }
      $('.slider_block4_part2_wrapper').css('left', -100 * slider_block4 + '%');
      console.log(slider_block4);
    });

  let city_name_block4 = 0;
  $('.next_button_part4, .previous_button_part4').click(function(){
    if ($(this).hasClass('next_button_part4') && city_name_block4 < 12) {
      city_name_block4++;
    } else if ($(this).hasClass('previous_button_part4') && city_name_block4 > 0) {
      city_name_block4--;
    }
      $('.city_name_wrapper').css('left', -100 * city_name_block4 + '%');
      console.log(city_name_block4);
    });

});

$(document).ready(function() {
$('.next_button_part4, .previous_button_part4').click(function () {
  $('.third_slider_wrapper').css('animation-play-state','running');
});

$('.next_button_part4, .previous_button_part4').click(function() {
  var el     = $('.third_slider_wrapper'),
      newone = el.clone(true);
  el.before(newone);
  $("." + el.attr("class") + ":last").remove();
});

$('.button1_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text1_part4').addClass('bip_bip_display');
  $('.text1_part4').css('animation-play-state', 'running');
});
$('.button1_block4').mouseout(function () {
  $('.text1_part4').css('animation-play-state', 'paused');
});

$('.button2_block4').mouseover(function () {
  $('.text2_part4, .text1_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text2_part4').addClass('bip_bip_display');
  $('.text2_part4').css('animation-play-state', 'running');
});
$('.button2_block4').mouseout(function () {
  $('.text2_part4').css('animation-play-state', 'paused');
});

$('.button3_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text1_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text3_part4').addClass('bip_bip_display');
  $('.text3_part4').css('animation-play-state', 'running');
});
$('.button3_block4').mouseout(function () {
  $('.text3_part4').css('animation-play-state', 'paused');
});

$('.button4_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text1_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text4_part4').addClass('bip_bip_display');
  $('.text4_part4').css('animation-play-state', 'running');
});
$('.button4_block4').mouseout(function () {
  $('.text4_part4').css('animation-play-state', 'paused');
});

$('.button5_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text1_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text5_part4').addClass('bip_bip_display');
  $('.text5_part4').css('animation-play-state', 'running');
});
$('.button5_block4').mouseout(function () {
  $('.text5_part4').css('animation-play-state', 'paused');
});

$('.button6_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text1_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text6_part4').addClass('bip_bip_display');
  $('.text6_part4').css('animation-play-state', 'running');
});
$('.button6_block4').mouseout(function () {
  $('.text6_part4').css('animation-play-state', 'paused');
});

$('.button7_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text1_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text7_part4').addClass('bip_bip_display');
  $('.text7_part4').css('animation-play-state', 'running');
});
$('.button7_block4').mouseout(function () {
  $('.text7_part4').css('animation-play-state', 'paused');
});

$('.button8_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text1_part4, .text9_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text8_part4').addClass('bip_bip_display');
  $('.text8_part4').css('animation-play-state', 'running');
});
$('.button8_block4').mouseout(function () {
  $('.text8_part4').css('animation-play-state', 'paused');
});

$('.button9_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text1_part4, .text10_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text9_part4').addClass('bip_bip_display');
  $('.text9_part4').css('animation-play-state', 'running');
});
$('.button9_block4').mouseout(function () {
  $('.text9_part4').css('animation-play-state', 'paused');
});

$('.button10_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text1_part4, .text11_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text10_part4').addClass('bip_bip_display');
  $('.text10_part4').css('animation-play-state', 'running');
});
$('.button10_block4').mouseout(function () {
  $('.text10_part4').css('animation-play-state', 'paused');
});

$('.button11_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text1_part4, .text12_part4').removeClass('bip_bip_display');
  $('.text11_part4').addClass('bip_bip_display');
  $('.text11_part4').css('animation-play-state', 'running');
});
$('.button11_block4').mouseout(function () {
  $('.text11_part4').css('animation-play-state', 'paused');
});

$('.button12_block4').mouseover(function () {
  $('.text2_part4, .text2_part4, .text3_part4, .text4_part4, .text5_part4, .text6_part4, .text7_part4, .text8_part4, .text9_part4, .text10_part4, .text11_part4, .text1_part4').removeClass('bip_bip_display');
  $('.text12_part4').addClass('bip_bip_display');
  $('.text12_part4').css('animation-play-state', 'running');
});
$('.button12_block4').mouseout(function () {
  $('.text12_part4').css('animation-play-state', 'paused');
});

});

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
