var __reflect=this&&this.__reflect||function(e,t,o){e.__class__=t,o?o.push(t):o=[t],e.__types__=e.__types__?o.concat(e.__types__):o},mouse;!function(e){var t=function(){function e(){}return e.MOUSE_MOVE="mouseMove",e.MOUSE_OVER="mouseOver",e.MOUSE_OUT="mouseOut",e.ROLL_OVER="rollOver",e.ROLL_OUT="rollOut",e}();e.MouseEvent=t,__reflect(t.prototype,"mouse.MouseEvent")}(mouse||(mouse={}));var mouse;!function(e){var t,o,n,s=function(s,u,r,E){if(s!=e.MouseEvent.ROLL_OVER||!t.isRollOver){if(s==e.MouseEvent.ROLL_OVER?t.isRollOver=!0:s==e.MouseEvent.ROLL_OUT&&delete t.isRollOver,n&&t.buttonModeForMouse)try{var O=o.$displayList.renderBuffer.surface;s==e.MouseEvent.ROLL_OVER?O.style.cursor="pointer":s==e.MouseEvent.ROLL_OUT&&(O.style.cursor="auto")}catch(c){}egret.TouchEvent.dispatchTouchEvent(t,s,u,!1,r,E,null)}};e.enable=function(r){n="Windows PC"==egret.Capabilities.os||"Mac OS"==egret.Capabilities.os,o=r;var E=function(o,n){t&&!t.$stage&&(s(e.MouseEvent.MOUSE_OUT,!0,o,n),s(e.MouseEvent.ROLL_OUT,!1,o,n),t=null);var u=r.$hitTest(o,n);null!=u&&u!=r?t?u!=t&&(s(e.MouseEvent.MOUSE_OUT,!0,o,n),t.$getConcatenatedVisible()&&t.hitTestPoint(o,n,!0)||s(e.MouseEvent.ROLL_OUT,!1,o,n),t=u,s(e.MouseEvent.ROLL_OVER,!1,o,n),s(e.MouseEvent.MOUSE_OVER,!0,o,n)):(t=u,s(e.MouseEvent.ROLL_OVER,!1,o,n),s(e.MouseEvent.MOUSE_OVER,!0,o,n)):t&&(s(e.MouseEvent.MOUSE_OUT,!0,o,n),s(e.MouseEvent.ROLL_OUT,!1,o,n),t=null)},O=0/0,c=0/0,i=egret.sys.TouchHandler.prototype.onTouchMove;egret.sys.TouchHandler.prototype.onTouchMove=function(t,n,s){if(O=t,c=n,i.call(this,t,n,s),u){var r=o.$hitTest(t,n);r||(r=o),egret.TouchEvent.dispatchTouchEvent(r,e.MouseEvent.MOUSE_MOVE,!0,!0,t,n,s,!0)}E(t,n)};var l=egret.sys.TouchHandler.prototype.onTouchBegin;egret.sys.TouchHandler.prototype.onTouchBegin=function(e,t,o){l.call(this,e,t,o),E(e,t)};var v=egret.sys.TouchHandler.prototype.onTouchEnd;egret.sys.TouchHandler.prototype.onTouchEnd=function(e,t,o){v.call(this,e,t,o),E(e,t)},r.addEventListener(egret.Event.ENTER_FRAME,function(){0/0!=O&&0/0!=c&&E(O,c)},null)},e.setButtonMode=function(e,t){e.buttonModeForMouse=t};var u=!1;e.setMouseMoveEnabled=function(e){u=e}}(mouse||(mouse={}));