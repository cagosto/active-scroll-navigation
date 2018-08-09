(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ACTIVE_SCROLL - Change acitve navigation item while scrolling
 * config example
 * {
     nav: '.main-nav'
   }
 */
var ACTIVE_SCROLL = function () {
  /**
   * constructor
   * @param {Obj} settings - config for class
   */
  function ACTIVE_SCROLL(settings) {
    var _this = this;

    _classCallCheck(this, ACTIVE_SCROLL);

    this.activeItem = 0;

    this.setPros = function () {
      _this.pros = [];
      _this.navArray.forEach(function (nav) {
        var id = nav.getAttribute('href');
        var section = document.querySelector(id);
        _this.pros.push(section.offsetTop - _this.offSet);
      });
    };

    this.scrollLocation = function (winY) {
      for (var i = 0; i < _this.pros.length; i++) {
        if (i < _this.pros.length - 1) {
          var next = _this.pros[i + 1];

          if (winY >= _this.pros[i] && winY < next) {
            return i;
          }
        } else if (i === _this.pros.length - 1 && winY >= _this.pros[i]) {
          return i;
        }
      }
    };

    this.checkNav = function (e) {
      var index = _this.scrollLocation(window.pageYOffset);

      if (_this.activeItem !== index) {
        var current = _this.activeItem;

        _this.activeItem = index;
        _this.navItems[current].classList.remove(_this.activeString);
        _this.navItems[index].classList.add(_this.activeString);
      }
    };

    this.nav = document.querySelector(settings.nav);
    this.offSet = settings.offSet || 0;
    this.navItems = this.nav.children;
    this.navArray = Array.from(this.navItems);
    this.activeString = settings.activeClass || 'main-nav__item--active';
    this.setPros();
    this.eventsSroll();
    this.events();
  }
  /**
   * setPros - Set position for when navigation items should change.
   */


  _createClass(ACTIVE_SCROLL, [{
    key: 'eventsSroll',
    value: function eventsSroll() {
      window.addEventListener('scroll', this.checkNav, false);
    }
  }, {
    key: 'events',
    value: function events() {
      window.addEventListener('resize', this.setPros, false);
    }
  }, {
    key: 'eventsSrollOff',
    value: function eventsSrollOff() {
      window.removeEventListener('scroll', this.checkNav, false);
    }
    /**
     * scrollLocation - check to see if navigation need to be updated
     * @param  {Num} winY - window y position
     * @return {Num} - index of loop match
     */

    /**
     * checkNav - Scroll event callback
     * @param  {Obj} e - window scroll event object
     */

  }]);

  return ACTIVE_SCROLL;
}();

exports.default = ACTIVE_SCROLL;

},{}],2:[function(require,module,exports){
'use strict';

var _activeScroll = require('active-scroll');

var _activeScroll2 = _interopRequireDefault(_activeScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _activeScroll2.default({
  nav: '.main-nav'
});

},{"active-scroll":1}]},{},[2])

//# sourceMappingURL=index.js.map
