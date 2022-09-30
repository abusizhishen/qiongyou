"use strict";

window.onload = function () {
  var leftbutton = document.getElementById("leftbutton");
  var rightbutton = document.getElementById("rightbutton");
  var ulele = document.getElementById("banner-ul");
  var li_clone = ulele.firstElementChild.cloneNode(true);
  ulele.appendChild(li_clone);
  var trans5s = 'transform .5s ease 0s';
  var left = 0;
  var step = 16.67;
  var childrenLength = ulele.children.length;
  var idx = 0;
  var lock = false;

  leftbutton.onclick = function () {
    if (lock) {
      return;
    }

    lock = true;

    if (idx == 0) {
      ulele.style.transition = 'none';
      idx = childrenLength - 1;
      left = idx * step;
      ulele.style.transform = 'translateX(-' + left + '%)';
      setTimeout(function () {
        ulele.style.transition = trans5s;
        idx--;
        left = idx * step;
        ulele.style.transform = 'translateX(-' + left + '%)';
      }, 0);
    } else {
      ulele.style.transition = trans5s;
      idx--;
      left = idx * step;
      ulele.style.transform = 'translateX(-' + left + '%)';
    }

    console.log(idx);
    setCrycle(idx);
    unlock();
  };

  rightbutton.onclick = function () {
    if (lock) {
      return;
    }

    lock = true;
    ulele.style.transition = trans5s;
    idx++;
    left = idx * step;
    ulele.style.transform = 'translateX(-' + left + '%)';
    setCrycle(idx);

    if (idx >= childrenLength - 1) {
      setTimeout(function () {
        ulele.style.transition = 'none';
        ulele.style.transform = 'none';
        idx = 0;
      }, 500);
    }

    console.log(idx);
    unlock();
  };

  var crycleUl = document.getElementById('little-cryclr');

  var setCrycle = function setCrycle(idx) {
    idx %= childrenLength - 1;
    var children = crycleUl.children;

    for (i = 0; i < children.length; i++) {
      if (i != idx) {
        // console.log('idx', idx)
        children[i].className = '';
      } else {
        children[i].className = 'active';
      }
    }
  };

  setCrycle(idx);
  var crycle = document.getElementById('little-cryclr');

  crycle.onclick = function (ele) {
    idx = Array.from(crycleUl.children).indexOf(ele.target);
    console.log(idx);
    setCrycle(idx);
    ulele.style.transition = trans5s;
    ulele.style.transform = 'translateX(-' + idx * step + '%)';
  };

  var totopEle = document.getElementsByClassName('totop')[0];

  totopEle.onclick = function (ele) {
    var totopinter = setInterval(function () {
      document.documentElement.scrollTop -= 200;

      if (document.documentElement.scrollTop <= 0) {
        clearInterval(totopinter);
      }
    }, 10);
  };

  window.onscroll = function (e) {
    var top = document.documentElement.scrollTop || window.scrollY;
    var totopEle = document.getElementsByClassName('totop')[0];

    if (top <= 10) {
      totopEle.style.display = 'none';
    } else {
      totopEle.style.display = 'block';
    }
  };

  var unlock = function unlock() {
    setTimeout(function () {
      lock = false;
    }, 500);
  };

  var bannerNav = document.querySelector('.banner-nav');
  var bannerNavUl = document.querySelector('.banner-nav ul');
  var menu_box = document.querySelector(".menus-box");

  bannerNavUl.onmouseover = function (ele) {
    menu_box.style.display = "block";
    var target = ele.target;

    if (target.tagName == "ul") {
      return;
    }

    if (target.tagName != "li") {
      target = target.closest("li");
    }

    var idx = Array.from(target.parentNode.children).indexOf(target);
    console.log(idx);

    for (var _i = 0; _i < menu_box.children.length; _i++) {
      if (idx == _i) {
        menu_box.children[_i].style.display = "block";
      } else {
        menu_box.children[_i].style.display = "none";
      }
    }
  };

  bannerNav.onmouseleave = function (ele) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = menu_box.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;
        child.style.display = "none";
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    menu_box.style.display = "none";
  };
};