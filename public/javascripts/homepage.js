var Homepage = (function() {
  function Homepage() {
    // bind click handlers
    $('.content [data-open]').click(function() {
      var section = $(this).data('open');
      $('[data-section="'+section+'"]').slideDown();
    });
  }

  return Homepage;
})();