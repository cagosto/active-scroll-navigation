"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ACTIVE_SCROLL=function(){function e(t){var s=this;_classCallCheck(this,e),this.activeItem=0,this.scrollLocation=function(e){for(var t=void 0,n=0;n<s.pros.length;n++)if(n<s.pros.length-1){var r=s.pros[n+1];if(e>=s.pros[n]&&e<r){t=n;break}}else n===s.pros.length-1&&e>=s.pros[n]&&(t=n);return t},this.checkNav=function(e){var t=s.scrollLocation(window.pageYOffset),n=s.activeItem;s.activeItem!==t&&(s.activeItem=t,s.navItems[n].classList.remove(s.activeString),s.navItems[t].classList.add(s.activeString))},this.nav=document.querySelector(t.nav),this.offSet=t.offSet||0,this.navItems=this.nav.children,this.activeString=t.activeClass||"main-nav__item--active",this.setPros(),this.eventsSroll(),this.events()}return _createClass(e,[{key:"setPros",value:function(){this.pros=[];for(var e=0;e<this.navItems.length;e++){var t=this.navItems[e].getAttribute("href"),s=document.querySelector(t);this.pros.push(s.offsetTop-this.offSet)}}},{key:"eventsSroll",value:function(){window.addEventListener("scroll",this.checkNav,!1)}},{key:"events",value:function(){window.addEventListener("resize",this.setPros,!1)}},{key:"eventsSrollOff",value:function(){window.removeEventListener("scroll",this.checkNav,!1)}}]),e}();exports.default=ACTIVE_SCROLL;