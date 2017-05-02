var frontinvale = function() {

  var init = function() {
    removeLoading();
    mapScrollOnClick();
  },

  removeLoading = function() {
    document.body.classList.remove('loading');
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
