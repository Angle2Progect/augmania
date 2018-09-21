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
  $('.modal').addClass('scroll-y');
  // toggle account dropdown
  $('#toggleHeadDropdown').click(function() {
    $('#headDropdown').slideToggle();
    $('.sidebar').toggleClass('dropdown-active');
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
  var getPercent = $('.progress-wrap').data('progress-percent') / 100;
  var getProgressWrapWidth = $('.progress-wrap').width();
  var progressTotal = getPercent * getProgressWrapWidth;
  $('.progress-bar').width(progressTotal);
}
// Custom color picker
var color_picker = document.querySelectorAll('.color-picker');
color_picker.forEach(function(item) {
  item.parentNode.style.backgroundColor = item.value;
  item.addEventListener('change', function() {
    item.parentNode.style.backgroundColor = item.value;
  });
});

// Drag and Drop via Dragula https://github.com/bevacqua/dragula
var dragContainers = document.querySelectorAll('.dragContainer');
let dragContainersArray = Array.from(dragContainers);

if (dragContainersArray) {
  dragula(dragContainersArray)
    .on('drag', function(el) {
      // add 'is-moving' class to element being dragged
      el.classList.add('is-moving');
    })
    .on('dragend', function(el) {
      // remove 'is-moving' class from element after dragging has stopped
      el.classList.remove('is-moving');

      // add the 'is-moved' class for 600ms then remove it
      window.setTimeout(function() {
        el.classList.add('is-moved');
        window.setTimeout(function() {
          el.classList.remove('is-moved');
        }, 600);
      }, 100);
    });
}
