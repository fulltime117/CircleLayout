$(document).ready(function(){
   
  /**
 * Apply a class to each child
 * Required for IE8-
 */
    $('.circle-container').children().each(function() {
    $(this).addClass('item'+($(this).index() + 1));
  });

});


/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
    var s,
    spanizeLetters = {
      settings: {
        letters: $('.js-spanize'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  })(jQuery);
  