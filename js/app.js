$(document).ready(function(){

// HOVER CONFIG FOR PROJECTS MOSAIC
  var nodes  = document.querySelectorAll('li'),
    _nodes = [].slice.call(nodes, 0);

  var getDirection;
  getDirection = function (ev, obj) {
    var w, h, x, y, d;
    w = obj.offsetWidth;
    h = obj.offsetHeight;
    x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1));
    y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1));
    d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return d;
  };

  var addingClass = function ( ev, obj, state ) {
    var direction = getDirection( ev, obj ),
      class_suffix = "";

    obj.className = "";

    switch ( direction ) {
      case 0 : class_suffix = '-top';    break;
      case 1 : class_suffix = '-right';  break;
      case 2 : class_suffix = '-bottom'; break;
      case 3 : class_suffix = '-left';   break;
    }

    obj.classList.add( state + class_suffix );
  };

// bind events
  _nodes.forEach(function (el) {
    el.addEventListener('mouseover', function (ev) {
      addingClass( ev, this, 'rn' );
    }, false);

    el.addEventListener('mouseout', function (ev) {
      addingClass( ev, this, 'out' );
    }, false);
  });


  /*
  var _li = $('.projects_wrapper li');

  var liW =  _li.width();

  _li.attr('style', 'perspective:' + (liW * 2) + 'px' );
  _li.height(liW);*/


  /* ------ END OF HOVER CONFIG ------ */

/* PROGRESS BAR CONFIG */

  /* HTML SKILL */
  document.querySelector('#htmlSkill').addEventListener('mouseenter', function () {
    document.querySelector('#htmlSkill img').classList.add('hide_skill_icon');
    var htmlItem = new ProgressBar.Circle(htmlSkill, {
      color: '#FCFCFC',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 3,
      trailColor: '#E56450',
      trailWidth: 0.4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#E56450', width: 1 },
      to: { color: '#1B998B', width: 3 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + '%');
        }

      }
    });

    htmlItem.text.style.fontFamily = '"Roboto Condensed", sans-serif';
    htmlItem.text.style.fontWeight = '300';
    htmlItem.text.style.fontSize = '2rem';
    htmlItem.text.style.color = '#002224';
    htmlItem.animate(0.9);  // Number from 0.0 to 1.0
  }, false);

  document.querySelector('#htmlSkill').addEventListener('mouseleave', function (el) {
    document.querySelector('#htmlSkill img').classList.remove('hide_skill_icon');
    el.fromElement.childNodes[4].remove();
    el.fromElement.childNodes[3].remove();
    console.log();
  }, false);


  /* CSS SKILL */
  document.querySelector('#cssSkill').addEventListener('mouseenter', function () {
    document.querySelector('#cssSkill img').classList.add('hide_skill_icon');
    var htmlItem = new ProgressBar.Circle(cssSkill, {
      color: '#FCFCFC',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 3,
      trailColor: '#E56450',
      trailWidth: 0.4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#E56450', width: 1 },
      to: { color: '#1B998B', width: 3 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + '%');
        }

      }
    });

    htmlItem.text.style.fontFamily = '"Roboto Condensed", sans-serif';
    htmlItem.text.style.fontWeight = '300';
    htmlItem.text.style.fontSize = '2rem';
    htmlItem.text.style.color = '#002224';
    htmlItem.animate(0.9);  // Number from 0.0 to 1.0
  }, false);

  document.querySelector('#cssSkill').addEventListener('mouseleave', function (el) {
    document.querySelector('#cssSkill img').classList.remove('hide_skill_icon');
    el.fromElement.childNodes[4].remove();
    el.fromElement.childNodes[3].remove();
    console.log();
  }, false);

  /* JS SKILL */
  document.querySelector('#jsSkill').addEventListener('mouseenter', function () {
    document.querySelector('#jsSkill img').classList.add('hide_skill_icon');
    var htmlItem = new ProgressBar.Circle(jsSkill, {
      color: '#FCFCFC',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 3,
      trailColor: '#E56450',
      trailWidth: 0.4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#E56450', width: 1 },
      to: { color: '#1B998B', width: 3 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + '%');
        }
      }
    });

    htmlItem.text.style.fontFamily = '"Roboto Condensed", sans-serif';
    htmlItem.text.style.fontWeight = '300';
    htmlItem.text.style.fontSize = '2rem';
    htmlItem.text.style.color = '#002224';
    htmlItem.animate(0.6);  // Number from 0.0 to 1.0
  }, false);

  document.querySelector('#jsSkill').addEventListener('mouseleave', function (el) {
    document.querySelector('#jsSkill img').classList.remove('hide_skill_icon');
    el.fromElement.childNodes[4].remove();
    el.fromElement.childNodes[3].remove();
    console.log();
  }, false);


/* ------ END OF PROGRESS BAR CONFIG ------ */

/* SHOW MORE SKILLS */

  $(".extra_icon").click(function() {
    $('.extra_icon').toggleClass('extra_icon-rotated');
    $('.skills_extra-row').toggleClass('skills_extra-row_open');
  });

/* ------ CAROUSEL ------- */

  $('.skill_carousel').slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 9,
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    speed: 2500,
    pauseOnHover:false,
    pauseOnFocus:false
  });

});