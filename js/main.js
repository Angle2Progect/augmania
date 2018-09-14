$(document).ready(function() {
  $('.question').tooltip();
  $('.modal').modal();
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

  $('#toggleHeadDropdown').click(function() {
    $('#headDropdown').slideToggle();
    $('.sidebar').toggleClass('dropdown-active');
  });
});
