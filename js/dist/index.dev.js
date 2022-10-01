"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

    _toConsumableArray(crycleUl.children).forEach(function (child) {
      child.className = '';
    });

    children[idx].className = 'active';
  };

  setCrycle(idx);
  var crycle = document.getElementById('little-cryclr');

  crycle.onclick = function (ele) {
    idx = _toConsumableArray(crycleUl.children).indexOf(ele.target);
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

    var idx = _toConsumableArray(target.parentNode.children).indexOf(target);

    console.log(idx);

    _toConsumableArray(menu_box.children).forEach(function (x) {
      x.style.display = "none";
    });

    menu_box.children[idx].style.display = "block";
  };

  bannerNav.onmouseleave = function (ele) {
    _toConsumableArray(menu_box.children).forEach(function (x) {
      x.style.display = "none";
    });

    menu_box.style.display = "none";
  };
};