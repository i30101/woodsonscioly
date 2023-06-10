$(document).ready(function() {
    $('.click-to-expand').click(function() {
      var imageSrc = $(this).attr('src');
      var overlay = $('<div class="overlay"><img src="' + imageSrc + '"></div>');
      overlay.click(function() {
        $(this).remove();
      });
      $('#image-overlay').html(overlay);
      overlay.appendTo('body');
    });
  });
  