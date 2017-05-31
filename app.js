function greet () {
  var text = 'Hi, and welcome to my site'.split('');
  var para = $('.welcome');
  var time = 0;

  $.each(text, function (index, letter) {
    let audio = document.querySelector('audio');
    audio.currentTime = 5;
    audio.play();
      setTimeout(function() {
        para.append(letter);
      }, time)
      time += 100;
  });
}

setTimeout(function () {
  if (screen.width >= 768) {
    $('.about-menu').fadeIn(2000).css({ "display": "inline-block" });
  }
}, 2600);

$(document).ready(greet);

$('.hamburger').click(function() {
  if ($('.about-menu').css('display') == 'none') {
    $('.about-menu').show();
  } else {
    $('.about-menu').hide();
  }
});


$('.about').click(function () {
  updateCurrent();
  hideDropdown();
  $('.about-para').fadeIn(1000).css({ "display": "inline-block" }).addClass('current');
  $('.about').css({ "color": "gray"}).addClass('current-menu');
});

$('.projects').click(function () {
  updateCurrent();
  hideDropdown();
  $('.projects-para').fadeIn(1000).css({ "display": "inline-block" }).addClass('current');
  $('.projects').css({ "color": "gray"}).addClass('current-menu');;
});

$('.resume').click(function () {
  updateCurrent();
  hideDropdown();
  $('.resume-para').fadeIn(1000).css({ "display": "inline-block" }).addClass('current');
  $('.resume').css({ "color": "gray"}).addClass('current-menu');;
});

$('.contact').click(function () {
  updateCurrent();
  hideDropdown();
  $('.contact-para').fadeIn(1000).css({ "display": "inline-block" }).addClass('current');
  $('.contact').css({ "color": "gray"}).addClass('current-menu');;
});

function updateCurrent () {
  $('.current-menu').css({ "color": "#F71735" }).removeClass('current-menu');
  $('.current').hide().removeClass('current');
}

function hideDropdown () {
  if (screen.width < 768) {
    $('.about-menu').hide();
  }
}
