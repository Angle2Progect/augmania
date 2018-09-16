$(document).ready(function() {
  $('.question').tooltip();
  $(document).ready(function() {
    $('.tabs').tabs();
  });
  $('.modal').modal({
    opacity: 0.8
  });
  $('.top-search__input input').keyup(function(e) {
    if ($(this).val().length) {
      $(this)
        .closest('.top-search__input')
        .find('.clear')
        .fadeIn(100);
    } else {
      $(this)
        .closest('.top-search__input')
        .find('.clear')
        .fadeOut(100);
    }
  });
  // toggle account dropdown
  $('#toggleHeadDropdown').click(function() {
    $('#headDropdown').slideToggle();
    $('.sidebar').toggleClass('dropdown-active');
  });

  // toggle switcher label color
  $('.switch').on('click', function() {
    if (
      $(this)
        .find('input')
        .is(':checked')
    ) {
      $(this).addClass('turned-on');
    } else {
      $(this).removeClass('turned-on');
    }
  });
});
