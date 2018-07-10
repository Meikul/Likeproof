function toggle() {
    var like = document.querySelector('#info .ytd-menu-renderer ytd-toggle-button-renderer');
    var bar = document.querySelector('#info #menu-container #sentiment');
    if( like && like.style.display == 'none'){
      like.style.display = 'block';
      bar.style.transform = '';
    }
    else if( like ){
      var offset = -like.offsetWidth;
      like.style.display = 'none';
      if(offset){
        bar.style.transform = 'translateX('+ offset +'px)';
      }
    }
}

toggle();
