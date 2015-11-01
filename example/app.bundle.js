(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _scrollableElements = require("../scrollable-elements");

var rootScrollable = (0, _scrollableElements.find)("html, body");

function setScrollPosition() {

  // scrollable
  (0, _scrollableElements.findAll)(".scrollable").forEach(function (el) {
    el.scrollTop = el.scrollHeight / 2 - el.clientHeight / 2;
    el.scrollLeft = el.scrollWidth / 2 - el.clientWidth / 2;
  });

  // screen
  setTimeout(function () {
    rootScrollable.scrollTop = document.body.clientHeight / 2 - window.innerHeight / 2;
  }, 1);
}

document.addEventListener("DOMContentLoaded", setScrollPosition, false);
document.getElementById("set").addEventListener("click", setScrollPosition, false);

},{"../scrollable-elements":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = findAll;
exports.find = find;
var directionPropMap = {
  y: "scrollTop",
  x: "scrollLeft"
};

function $$(selectors) {
  return document.querySelectorAll(selectors);
}

function getScrollable(selectors) {
  var direction = arguments.length <= 1 || arguments[1] === undefined ? "y" : arguments[1];
  var all = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var prop = directionPropMap[direction];
  var elements = $$(selectors);
  var scrollables = [];

  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];

    if (el[prop] > 0) {
      scrollables.push(el);
    } else {
      el[prop] = 1;
      if (el[prop] > 0) {
        scrollables.push(el);
      }
      el[prop] = 0;
    }

    if (!all && scrollables.length > 0) break;
  }

  return scrollables;
}

function findAll(selectors, direction) {
  return getScrollable(selectors, direction, true);
}

function find(selectors, direction) {
  var scrollables = getScrollable(selectors, direction, false);
  return scrollables.length >= 1 ? scrollables[0] : undefined;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvaHRkb2NzL2pzL3Njcm9sbGFibGUtZWxlbWVudHMvZXhhbXBsZS9hcHAuanMiLCIvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvaHRkb2NzL2pzL3Njcm9sbGFibGUtZWxlbWVudHMvc2Nyb2xsYWJsZS1lbGVtZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O2tDQ0E0Qix3QkFBd0I7O0FBR3BELElBQU0sY0FBYyxHQUFHLDhCQUFLLFlBQVksQ0FBQyxDQUFDOztBQUUxQyxTQUFTLGlCQUFpQixHQUFHOzs7QUFHM0IsbUNBQVEsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFLO0FBQ3JDLE1BQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDekQsTUFBRSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztHQUN6RCxDQUFDLENBQUM7OztBQUdILFlBQVUsQ0FBQyxZQUFNO0FBQ2Ysa0JBQWMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0dBQ3BGLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDUDs7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNwQm5GLElBQU0sZ0JBQWdCLEdBQUc7QUFDdkIsR0FBQyxFQUFFLFdBQVc7QUFDZCxHQUFDLEVBQUUsWUFBWTtDQUNoQixDQUFDOztBQUVGLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRTtBQUNyQixTQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUM3Qzs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxTQUFTLEVBQStCO01BQTdCLFNBQVMseURBQUcsR0FBRztNQUFFLEdBQUcseURBQUcsSUFBSTs7QUFDM0QsTUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQzs7QUFFdkIsT0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUc7QUFDMUMsUUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVyQixRQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUc7QUFDakIsaUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFdEIsTUFBTTtBQUNMLFFBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDYixVQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUc7QUFDakIsbUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7T0FDdEI7QUFDRCxRQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2Q7O0FBRUQsUUFBSyxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRyxNQUFNO0dBQzdDOztBQUVELFNBQU8sV0FBVyxDQUFDO0NBQ3BCOztBQUVNLFNBQVMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDNUMsU0FBTyxhQUFhLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNsRDs7QUFFTSxTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3pDLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9ELFNBQU8sV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztDQUM3RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge2ZpbmRBbGwsIGZpbmR9IGZyb20gXCIuLi9zY3JvbGxhYmxlLWVsZW1lbnRzXCJcblxuXG5jb25zdCByb290U2Nyb2xsYWJsZSA9IGZpbmQoXCJodG1sLCBib2R5XCIpO1xuXG5mdW5jdGlvbiBzZXRTY3JvbGxQb3NpdGlvbigpIHtcblxuICAvLyBzY3JvbGxhYmxlXG4gIGZpbmRBbGwoXCIuc2Nyb2xsYWJsZVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCAvIDIgLSBlbC5jbGllbnRIZWlnaHQgLyAyO1xuICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAvIDIgLSBlbC5jbGllbnRXaWR0aCAvIDI7XG4gIH0pO1xuXG4gIC8vIHNjcmVlblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByb290U2Nyb2xsYWJsZS5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAvIDIgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICB9LCAxKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2V0U2Nyb2xsUG9zaXRpb24sIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTY3JvbGxQb3NpdGlvbiwgZmFsc2UpOyIsImNvbnN0IGRpcmVjdGlvblByb3BNYXAgPSB7XG4gIHk6IFwic2Nyb2xsVG9wXCIsXG4gIHg6IFwic2Nyb2xsTGVmdFwiXG59O1xuXG5mdW5jdGlvbiAkJChzZWxlY3RvcnMpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZShzZWxlY3RvcnMsIGRpcmVjdGlvbiA9IFwieVwiLCBhbGwgPSB0cnVlKSB7XG4gIGNvbnN0IHByb3AgPSBkaXJlY3Rpb25Qcm9wTWFwW2RpcmVjdGlvbl07XG4gIGNvbnN0IGVsZW1lbnRzID0gJCQoc2VsZWN0b3JzKTtcbiAgY29uc3Qgc2Nyb2xsYWJsZXMgPSBbXTtcblxuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgZWwgPSBlbGVtZW50c1tpXTtcblxuICAgIGlmKCBlbFtwcm9wXSA+IDAgKSB7XG4gICAgICBzY3JvbGxhYmxlcy5wdXNoKGVsKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBlbFtwcm9wXSA9IDE7XG4gICAgICBpZiggZWxbcHJvcF0gPiAwICkge1xuICAgICAgICBzY3JvbGxhYmxlcy5wdXNoKGVsKTtcbiAgICAgIH1cbiAgICAgIGVsW3Byb3BdID0gMDtcbiAgICB9XG5cbiAgICBpZiAoICFhbGwgJiYgc2Nyb2xsYWJsZXMubGVuZ3RoID4gMCApIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHNjcm9sbGFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEFsbChzZWxlY3RvcnMsIGRpcmVjdGlvbikge1xuICByZXR1cm4gZ2V0U2Nyb2xsYWJsZShzZWxlY3RvcnMsIGRpcmVjdGlvbiwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHNlbGVjdG9ycywgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHNjcm9sbGFibGVzID0gZ2V0U2Nyb2xsYWJsZShzZWxlY3RvcnMsIGRpcmVjdGlvbiwgZmFsc2UpO1xuICByZXR1cm4gc2Nyb2xsYWJsZXMubGVuZ3RoID49IDEgPyBzY3JvbGxhYmxlc1swXSA6IHVuZGVmaW5lZDtcbn0iXX0=
