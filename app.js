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
  $('.about-para').fadeIn(2000).css({ "display": "inline-block" }).addClass('current');
  $('.about').css({ "color": "#3C4F76"}).addClass('current-menu');
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
  removeCurrent();
  hideDropdown();
  showPara($('.about-para'));
  changeMenuItem($('.about'));
});

$('.projects').click(function () {
  removeCurrent();
  hideDropdown();
  showPara($('.projects-para'));
  changeMenuItem($('.projects'));
});

$('.contact').click(function () {
  removeCurrent();
  hideDropdown();
  showPara($('.contact-para'));
  changeMenuItem($('.contact'));
  if (screen.width < 768) {
    $('.email').hide();
  }
});

function removeCurrent () {
  $('.current-menu').css({ "color": "#008BF8" }).removeClass('current-menu');
  $('.current').hide().removeClass('current');
}

function hideDropdown () {
  if (screen.width < 768) {
    $('.about-menu').hide();
  }
}

function showPara (para) {
  para.fadeIn(1000).css({ "display": "inline-block" }).addClass('current');
}

function changeMenuItem (menuItem) {
  menuItem.css({ "color": "#3C4F76"}).addClass('current-menu');
}
