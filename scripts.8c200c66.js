parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g2Hq":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t,e){return Math.floor(Math.random()*(e-t+1))+t}var r,o=function(){function e(n){t(this,e),this.x=n.x,this.y=n.y,this.speed=n.speed,this.changeRate=n.changeRate,this.colour=n.colour,this.yThreshold=height+textSize()}return n(e,[{key:"draw",value:function(){frameCount%this.changeRate!=0&&this.character||(this.character=char(i(65381,65440))),this.y=this.y>this.yThreshold?0:this.y+this.speed,fill(this.colour),text(this.character,this.x,this.y)}}]),e}(),a=function(){function e(n){t(this,e);var r=n.x,a=n.y,s=n.speed,h=n.length;this.symbols=[];for(var c=0;c<h;c+=1){var u=1-c/h,w=c<3?100-5*c:50,d=new o({x:r,y:a-textSize()*c,speed:s,changeRate:i(100,400),colour:[120,100,u*w]});this.symbols.push(d)}}return n(e,[{key:"draw",value:function(){this.symbols.forEach(function(t){return t.draw()})}}]),e}(),s=function(){function e(){t(this,e),this.streams=[];for(var n=0;n<window.innerWidth/textSize();n+=1){var r=new a({x:n*textSize(),y:i(-1e3,0),speed:i(3,7),length:i(1,window.innerHeight/textSize())});this.streams.push(r)}}return n(e,[{key:"draw",value:function(){this.streams.forEach(function(t){return t.draw()})}}]),e}();window.setup=function(){createCanvas(window.innerWidth,window.innerHeight),textFont("monospace",16),colorMode(HSL),r=new s},window.draw=function(){background(0,0,0,.6),r.draw()},window.windowResized=function(){resizeCanvas(window.innerWidth,window.innerHeight),r=new s};
},{}]},{},["g2Hq"], null)
//# sourceMappingURL=scripts.8c200c66.js.map