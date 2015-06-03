(function() {

  var snippet     = document.querySelector('.code-snippet');
  var showCodeBtn = document.querySelector('.show-code');
  var close       = document.querySelector('.close');
  var cssOption   = document.querySelector('.opt-css');
  var htmlOption  = document.querySelector('.opt-html');

  var htmlDisplay = document.querySelector('.language-html');
  var cssDisplay  = document.querySelector('.language-css');

  showCodeBtn.addEventListener('click', function() {
      snippet.className = 'code-snippet';
  });

  close.addEventListener('click', function() {
    snippet.className += ' hidden';
  });

  htmlOption.addEventListener('click', function(e) {
    e.preventDefault();

    if(cssOption.className === 'opt-css active') {
      cssOption.className = 'opt-css';
    }

    if (htmlOption.className === 'opt-html') {
      htmlOption.className += ' active'
    }

    if (cssDisplay.className === 'language-css') {
      cssDisplay.className += ' hidden';
    }

    if (htmlDisplay.className === 'language-html hidden') {
      htmlDisplay.className = 'language-html';
    }
  });

  cssOption.addEventListener('click', function(e) {
    e.preventDefault();

    if(htmlOption.className === 'opt-html active') {
      htmlOption.className = 'opt-html';
    }

    if (cssOption.className === 'opt-css') {
      cssOption.className += ' active'
    }

    if (htmlDisplay.className === 'language-html') {
      htmlDisplay.className += ' hidden';
    }

    if(cssDisplay.className === 'language-css hidden') {
      cssDisplay.className = 'language-css';
    }
  });

})();
