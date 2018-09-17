$(document).ready(function() {
  $('.question').tooltip();
  $('.tabs').tabs();
  $('.modal').modal({
    opacity: 0.8
  });
  $('select').formSelect();
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
  // show change password inputs
  $('#btnChangePassword').on('click', function() {
    $(this)
      .closest('.password-wrap')
      .find('.input-field')
      .fadeIn();
    $(this)
      .parent()
      .animate({ height: 0, opacity: 0, margin: '-24px 0 0 0', width: 0 }, 300);
  });
  // file upload with thumbnail
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      // $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}

// on page load...
moveProgressBar();
// on browser resize...
$(window).resize(function() {
  moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
  console.log('moveProgressBar');
  var getPercent = $('.progress-wrap').data('progress-percent') / 100;
  var getProgressWrapWidth = $('.progress-wrap').width();
  var progressTotal = getPercent * getProgressWrapWidth;
  $('.progress-bar').width(progressTotal);
  console.log(progressTotal);
}
