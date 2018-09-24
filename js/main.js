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
if (dragContainers.length > 0) {
  let dragContainersArray = Array.from(dragContainers);

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

// Resize and Drag and Drop with interact.js http://interactjs.io/
if (document.querySelector('.resize-drag')) {
  interact('.resize-drag')
    .draggable({
      onmove: window.dragMoveListener,
      restrict: {
        restriction: 'parent',
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      }
    })
    .resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },

      // keep the edges inside the parent
      restrictEdges: {
        outer: 'parent',
        endOnly: true
      },

      // minimum size
      restrictSize: {
        min: { width: 100, height: 50 }
      },

      inertia: true,
      // call this function on every dragmove event
      onmove: dragMoveListener,
      // call this function on every dragend event
      onend: function(event) {
        var textEl = event.target.querySelector('p');

        textEl &&
          (textEl.textContent =
            'moved a distance of ' +
            Math.sqrt(
              (Math.pow(event.pageX - event.x0, 2) +
                Math.pow(event.pageY - event.y0, 2)) |
                0
            ).toFixed(2) +
            'px');
      }
    })
    .on('resizemove', function(event) {
      var target = event.target,
        x = parseFloat(target.getAttribute('data-x')) || 0,
        y = parseFloat(target.getAttribute('data-y')) || 0;

      // update the element's style
      target.style.width = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      // translate when resizing from top or left edges
      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
      target.textContent =
        Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
    });
}
function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;
// end Resize and Drag and Drop with interact.js

// Credit card validation
/* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */

$('.edit-credit-form').card({
  container: '.card-wrapper',
  width: 280,

  formSelectors: {
    nameInput: 'input[name="first-name"], input[name="last-name"]'
  }
});
