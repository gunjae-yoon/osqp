import{x as n,y as r,z as t,A as e,B as a}from"./step-xJWGRC3d.js";import{aD as i,cg as u,aM as o,ch as c,ci as f,cj as s,ck as l,cl as h,cm as p,cn as m,co as g}from"./index-nRV3XiJW.js";import{i as v}from"./init-DLRA0X12.js";function y(n){return null===n?NaN:+n}function*M(n,r){if(void 0===r)for(let t of n)null!=t&&(t=+t)>=t&&(yield t);else{let t=-1;for(let e of n)null!=(e=r(e,++t,n))&&(e=+e)>=e&&(yield e)}}const N=i(u),b=N.right,d=N.left;function w(n,r){r||(r=[]);var t,e=n?Math.min(r.length,n.length):0,a=r.slice();return function(i){for(t=0;t<e;++t)a[t]=n[t]*(1-i)+r[t]*i;return a}}function A(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function k(n,r){return(A(r)?w:j)(n,r)}function j(n,r){var t,e=r?r.length:0,a=n?Math.min(e,n.length):0,i=new Array(a),u=new Array(e);for(t=0;t<a;++t)i[t]=B(n[t],r[t]);for(;t<e;++t)u[t]=r[t];return function(n){for(t=0;t<a;++t)u[t]=i[t](n);return u}}function x(n,r){var t=new Date;return n=+n,r=+r,function(e){return t.setTime(n*(1-e)+r*e),t}}function D(n,r){var t,e={},a={};for(t in null!==n&&"object"==typeof n||(n={}),null!==r&&"object"==typeof r||(r={}),r)t in n?e[t]=B(n[t],r[t]):a[t]=r[t];return function(n){for(t in e)a[t]=e[t](n);return a}}function B(i,u){var o,c=typeof u;return null==u||"boolean"===c?n(u):("number"===c?r:"string"===c?(o=a(u))?(u=o,t):e:u instanceof a?t:u instanceof Date?x:A(u)?w:Array.isArray(u)?j:"function"!=typeof u.valueOf&&"function"!=typeof u.toString||isNaN(u)?D:r)(i,u)}function V(n,r){return n=+n,r=+r,function(t){return Math.round(n*(1-t)+r*t)}}function q(n){return+n}i(y).center;var z=[0,1];function F(n){return n}function O(n,r){return(r-=n=+n)?function(t){return(t-n)/r}:(t=isNaN(r)?NaN:.5,function(){return t});var t}function R(n,r,t){var e=n[0],a=n[1],i=r[0],u=r[1];return a<e?(e=O(a,e),i=t(u,i)):(e=O(e,a),i=t(i,u)),function(n){return i(e(n))}}function S(n,r,t){var e=Math.min(n.length,r.length)-1,a=new Array(e),i=new Array(e),u=-1;for(n[e]<n[0]&&(n=n.slice().reverse(),r=r.slice().reverse());++u<e;)a[u]=O(n[u],n[u+1]),i[u]=t(r[u],r[u+1]);return function(r){var t=b(n,r,1,e)-1;return i[t](a[t](r))}}function T(n,r){return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function C(){var n,t,e,a,i,u,o=z,c=z,f=B,s=F;function l(){var n,r,t,e=Math.min(o.length,c.length);return s!==F&&(n=o[0],r=o[e-1],n>r&&(t=n,n=r,r=t),s=function(t){return Math.max(n,Math.min(r,t))}),a=e>2?S:R,i=u=null,h}function h(r){return null==r||isNaN(r=+r)?e:(i||(i=a(o.map(n),c,f)))(n(s(r)))}return h.invert=function(e){return s(t((u||(u=a(c,o.map(n),r)))(e)))},h.domain=function(n){return arguments.length?(o=Array.from(n,q),l()):o.slice()},h.range=function(n){return arguments.length?(c=Array.from(n),l()):c.slice()},h.rangeRound=function(n){return c=Array.from(n),f=V,l()},h.clamp=function(n){return arguments.length?(s=!!n||F,l()):s!==F},h.interpolate=function(n){return arguments.length?(f=n,l()):f},h.unknown=function(n){return arguments.length?(e=n,h):e},function(r,e){return n=r,t=e,l()}}function E(){return C()(F,F)}function G(n,r,t,e){var a,i=o(n,r,t);switch((e=c(null==e?",f":e)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(r));return null!=e.precision||isNaN(a=l(i,u))||(e.precision=a),h(e,u);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(a=s(i,Math.max(Math.abs(n),Math.abs(r))))||(e.precision=a-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(a=f(i))||(e.precision=a-2*("%"===e.type))}return p(e)}function H(n){var r=n.domain;return n.ticks=function(n){var t=r();return m(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var e=r();return G(e[0],e[e.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var e,a,i=r(),u=0,o=i.length-1,c=i[u],f=i[o],s=10;for(f<c&&(a=c,c=f,f=a,a=u,u=o,o=a);s-- >0;){if((a=g(c,f,t))===e)return i[u]=c,i[o]=f,r(i);if(a>0)c=Math.floor(c/a)*a,f=Math.ceil(f/a)*a;else{if(!(a<0))break;c=Math.ceil(c*a)/a,f=Math.floor(f*a)/a}e=a}return n},n}function I(){var n=E();return n.copy=function(){return T(n,I())},v.apply(n,arguments),H(n)}export{T as a,y as b,E as c,k as d,x as e,w as f,V as g,q as h,B as i,H as j,F as k,I as l,b as m,M as n,D as o,G as p,d as q,C as t};
