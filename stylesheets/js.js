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
  x[slideIndex[no] - 1].style.display = "block";
}

/* _______________________________________________ */
$(document).ready(function() {
            var count = 1;
            $('.p1').on('click', function() {
                if (count === 1) {
                    $('.p1').css('background-color', 'green');
                    count++;
                } else if (count === 2) {
                    $('.p1').css('background-color', 'pink');
                    count++;
                } else if (count === 3) {
                    $('.p1').css('background-color', 'purple');
                    count++;
                } else if (count === 4) {
                    $('.p1').css('background-color', 'blue');
                    count++;
                } else if (count === 5) {
                    $('.p1').css('background-color', 'red');
                    count = 1;
                }
            });
        });
/* _______________________________________________ */
