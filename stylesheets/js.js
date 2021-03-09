<script type="text/javascript">

/* _______________________________________________ */
  (function() {

    init(); //on page load - show first slide, hide the rest

    function init() {

      parents = document.getElementsByClassName('slider1');

      for (j = 0; j < parents.length; j++) {
        var slides = parents[j].getElementsByClassName("item");
        slides[0].classList.add('active-slide');
      }
    }
    /* _______________________________________________ */

  //prev/next functionality
    links = document.querySelectorAll('.slider1 a');

    for (i = 0; i < links.length; i++) {
      links[i].onclick = function() {
        current = this.parentNode;

        var slides = current.getElementsByClassName("item");
        curr_slide = current.getElementsByClassName('active-slide')[0];
        curr_slide.classList.remove('active-slide');
        if (this.className == 'next1') {

          if (curr_slide.nextElementSibling.classList.contains('item')) {
            curr_slide.nextElementSibling.classList.add('active-slide');
          } else {
            slides[0].classList.add('active-slide');
          }

        }

        if (this.className == 'previous1') {

          if (curr_slide.previousElementSibling) {
            curr_slide.previousElementSibling.classList.add('active-slide');
          } else {
            slides[slides.length - 1].classList.add('active-slide');
          }

        }

      }

    }
  })();

</script>
