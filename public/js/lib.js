"use strict";

// Подключение модуля с табами
tabs();
formHover();
canvasing();
"use strict";
'use strict';

;

(function (window, document) {
  'use strict';

  var file = 'svg/sprite.svg',
      revision = 1;
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
      request,
      data,
      insertIT = function insertIT() {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
      insert = function insert() {
    if (document.body) insertIT();else document.addEventListener('DOMContentLoaded', insertIT);
  };

  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');

    if (data) {
      insert();
      return true;
    }
  }

  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();

        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    };

    request.send();
  } catch (e) {}
})(window, document);
"use strict";

function tabs() {
  var items = document.querySelectorAll('.list__item');
  var tabs = document.querySelectorAll('.tab');

  for (var i = 0, max = items.length; i < max; i += 1) {
    items[i].addEventListener('click', function (e) {
      var target = e.target;

      for (var _i = 0, _max = items.length; _i < _max; _i += 1) {
        items[_i].classList.remove('active');

        tabs[_i].classList.remove('active');
      }

      this.classList.add('active');

      if (target.innerHTML === 'Финансы') {
        tabs[0].classList.add('active');
      } else if (target.innerHTML === 'Задачи') {
        tabs[1].classList.add('active');
      } else if (target.innerHTML === 'Привычки') {
        tabs[2].classList.add('active');
      }
    });
  }
}
"use strict";

function formHover() {
  var form = document.getElementsByClassName('form-finance')[0];
  var tab = document.getElementsByClassName('tab')[0];
  form.addEventListener('mouseover', function () {
    tab.classList.add('dark-bg');
  });
  form.addEventListener('mouseout', function () {
    tab.classList.remove('dark-bg');
  });
}
"use strict";

function canvasing() {
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'lightgreen';
  ctx.fillRect(0, 0, 248, 50);
  ctx.fillStyle = 'tomato';
  ctx.fillRect(0, 70, 150, 50);
}