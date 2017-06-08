var frontinvale = function() {

  var init = function() {
    removeLoading();
    resizeSection();
    watchResize();
    mapScrollOnClick();
    closeNavOnClick();
  },

  removeLoading = function() {
    setTimeout(function () {
      document.body.classList.remove('loading');
    }, 2000);
  },

  resizeSection = function() {
    var sec = document.querySelectorAll('section:not(.welcome)');
    for (var i = 0; i < sec.length; i++) {
      sec[i].style.minHeight = (window.innerHeight+0) + 'px';
    };
  },

  watchResize = function() {
    var timeOut = null;
    window.onresize = function(){
      if (timeOut != null)
        clearTimeout(timeOut);
      timeOut = setTimeout(function(){
        resizeSection();
      }, 100);
    };
  },

  closeNavOnClick = function() {
    var nav = document.getElementsByTagName('nav')[0];
    var ul = nav.getElementsByTagName('ul')[0];
    ul.addEventListener('click', function (e) {
      document.getElementById('menu-control').checked = false;
    });
  },

  mapScrollOnClick = function(){
    var box = document.getElementById('iframe-box');
    if (box) {
      box.addEventListener('click', function() {
        var iframe = document.getElementById('iframe');
        iframe.style.pointerEvents = 'auto';
      }, false);
      box.addEventListener('mouseleave', function() {
        var iframe = document.getElementById('iframe');
        iframe.style.pointerEvents = 'none';
      }, false);
    }
  };

  return {
    init
  };

}();

window.onload = frontinvale.init;
