var frontinvale = function() {

  var init = function() {
    removeLoading();
    mapScrollOnClick();
    closeNavOnClick();
  },

  removeLoading = function() {
    document.body.classList.remove('loading');
  },

  closeNavOnClick = function() {
    var nav = document.getElementsByTagName('nav')[0];
    var ul = nav.getElementsByTagName('ul')[0];
    console.log(ul);
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
