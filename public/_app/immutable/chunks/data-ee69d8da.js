import{S as b,i as m,s as v,e as I,c as P,a as f,d as o,b as c,g as u,E as d,t as G,h,J as _,j as O,U as g,V as C,F as B,l as w,G as k,H as N,I as V,q as S,o as M,C as y,w as q,x as R,y as z,z as A,A as L,B as H,W as D}from"./index-8c2c5986.js";function T(n){let e,i;return{c(){e=I("div"),i=G(n[0]),this.h()},l(l){e=P(l,"DIV",{class:!0,style:!0});var t=f(e);i=h(t,n[0]),t.forEach(o),this.h()},h(){c(e,"class","h4 svelte-vqoc5m"),c(e,"style",n[2])},m(l,t){u(l,e,t),_(e,i)},p(l,t){t&1&&O(i,l[0])},d(l){l&&o(e)}}}function U(n){let e,i;return{c(){e=I("div"),i=G(n[0]),this.h()},l(l){e=P(l,"DIV",{class:!0,style:!0});var t=f(e);i=h(t,n[0]),t.forEach(o),this.h()},h(){c(e,"class","h3 svelte-vqoc5m"),c(e,"style",n[2])},m(l,t){u(l,e,t),_(e,i)},p(l,t){t&1&&O(i,l[0])},d(l){l&&o(e)}}}function K(n){let e,i;return{c(){e=I("div"),i=G(n[0]),this.h()},l(l){e=P(l,"DIV",{class:!0,style:!0});var t=f(e);i=h(t,n[0]),t.forEach(o),this.h()},h(){c(e,"class","h2 svelte-vqoc5m"),c(e,"style",n[2])},m(l,t){u(l,e,t),_(e,i)},p(l,t){t&1&&O(i,l[0])},d(l){l&&o(e)}}}function W(n){let e,i;return{c(){e=I("div"),i=G(n[0]),this.h()},l(l){e=P(l,"DIV",{class:!0,style:!0});var t=f(e);i=h(t,n[0]),t.forEach(o),this.h()},h(){c(e,"class","h1 svelte-vqoc5m"),c(e,"style",n[2])},m(l,t){u(l,e,t),_(e,i)},p(l,t){t&1&&O(i,l[0])},d(l){l&&o(e)}}}function j(n){let e;function i(a,r){if(a[1]=="large")return W;if(a[1]=="medium")return K;if(a[1]=="small")return U;if(a[1]=="xsmall")return T}let l=i(n),t=l&&l(n);return{c(){e=I("main"),t&&t.c(),this.h()},l(a){e=P(a,"MAIN",{class:!0});var r=f(e);t&&t.l(r),r.forEach(o),this.h()},h(){c(e,"class","svelte-vqoc5m")},m(a,r){u(a,e,r),t&&t.m(e,null)},p(a,[r]){l===(l=i(a))&&t?t.p(a,r):(t&&t.d(1),t=l&&l(a),t&&(t.c(),t.m(e,null)))},i:d,o:d,d(a){a&&o(e),t&&t.d()}}}function F(n,e,i){let{value:l=""}=e,{size:t="medium"}=e,{color:a}=e,r=a?`color: ${a}`:"";return n.$$set=s=>{"value"in s&&i(0,l=s.value),"size"in s&&i(1,t=s.size),"color"in s&&i(3,a=s.color)},[l,t,r,a]}class ee extends b{constructor(e){super(),m(this,e,F,j,v,{value:0,size:1,color:3})}}function E(n){let e,i;return{c(){e=g("title"),i=G(n[0])},l(l){e=C(l,"title",{});var t=f(e);i=h(t,n[0]),t.forEach(o)},m(l,t){u(l,e,t),_(e,i)},p(l,t){t&1&&O(i,l[0])},d(l){l&&o(e)}}}function X(n){let e,i,l,t=n[0]&&E(n);const a=n[3].default,r=B(a,n,n[2],null);return{c(){e=g("svg"),t&&t.c(),i=w(),r&&r.c(),this.h()},l(s){e=C(s,"svg",{xmlns:!0,viewBox:!0,class:!0});var p=f(e);t&&t.l(p),i=w(),r&&r.l(p),p.forEach(o),this.h()},h(){c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox",n[1]),c(e,"class","svelte-c8tyih")},m(s,p){u(s,e,p),t&&t.m(e,null),_(e,i),r&&r.m(e,null),l=!0},p(s,[p]){s[0]?t?t.p(s,p):(t=E(s),t.c(),t.m(e,i)):t&&(t.d(1),t=null),r&&r.p&&(!l||p&4)&&k(r,a,s,s[2],l?V(a,s[2],p,null):N(s[2]),null),(!l||p&2)&&c(e,"viewBox",s[1])},i(s){l||(S(r,s),l=!0)},o(s){M(r,s),l=!1},d(s){s&&o(e),t&&t.d(),r&&r.d(s)}}}function J(n,e,i){let{$$slots:l={},$$scope:t}=e,{title:a=null}=e,{viewBox:r}=e;return n.$$set=s=>{"title"in s&&i(0,a=s.title),"viewBox"in s&&i(1,r=s.viewBox),"$$scope"in s&&i(2,t=s.$$scope)},[a,r,t,l]}class Q extends b{constructor(e){super(),m(this,e,J,X,v,{title:0,viewBox:1})}}function Y(n){let e;return{c(){e=g("path"),this.h()},l(i){e=C(i,"path",{d:!0}),f(e).forEach(o),this.h()},h(){c(e,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")},m(i,l){u(i,e,l)},p:d,d(i){i&&o(e)}}}function Z(n){let e,i;const l=[{viewBox:"0 0 24 24"},n[0]];let t={$$slots:{default:[Y]},$$scope:{ctx:n}};for(let a=0;a<l.length;a+=1)t=y(t,l[a]);return e=new Q({props:t}),{c(){q(e.$$.fragment)},l(a){R(e.$$.fragment,a)},m(a,r){z(e,a,r),i=!0},p(a,[r]){const s=r&1?A(l,[l[0],L(a[0])]):{};r&2&&(s.$$scope={dirty:r,ctx:a}),e.$set(s)},i(a){i||(S(e.$$.fragment,a),i=!0)},o(a){M(e.$$.fragment,a),i=!1},d(a){H(e,a)}}}function x(n,e,i){return n.$$set=l=>{i(0,e=y(y({},e),D(l)))},e=D(e),[e]}class te extends b{constructor(e){super(),m(this,e,x,Z,v,{})}}let le=[{name:"Raspberry PI",width:2,height:20,data:[{label:"3v3 Power",type:"VCC",pin:1},{label:"GPIO 2 (I2C1) SDA",type:"GPIO",pin:3},{label:"GPIO 3 (I2C1) SCL",type:"GPIO",pin:5},{label:"GPIO 4 (GPCLK0)",type:"GPIO",pin:7},{label:"Ground",type:"GND",pin:9},{label:"GPIO 17",type:"GPIO",pin:11},{label:"GPIO 27",type:"GPIO",pin:13},{label:"GPIO 22",type:"GPIO",pin:15},{label:"3v3 Power",type:"VCC",pin:17},{label:"GPIO 10 (SPIO MOSI)",type:"GPIO",pin:19},{label:"GPIO 9 (SPIO MISO)",type:"GPIO",pin:21},{label:"GPIO 11 (SPIO SCLK)",type:"GPIO",pin:23},{label:"Ground",type:"GND",pin:25},{label:"GPIO 0 (EEPROM SDA)",type:"GPIO",pin:27},{label:"GPIO 5",type:"GPIO",pin:29},{label:"GPIO 6",type:"GPIO",pin:31},{label:"GPIO 13 (PWM1)",type:"GPIO",pin:33},{label:"GPIO 19 (PCM FS)",type:"GPIO",pin:35},{label:"GPIO 26",type:"GPIO",pin:37},{label:"Ground",type:"GND",pin:39},{label:"5v Power",type:"VCC",pin:2},{label:"5v Power",type:"VCC",pin:4},{label:"Ground",type:"GND",pin:6},{label:"GPIO 14 (UART TX)",type:"GPIO",pin:8},{label:"GPIO 15 (UART RX)",type:"GPIO",pin:10},{label:"GPIO 18 (PCM CLK)",type:"GPIO",pin:12},{label:"Ground",type:"GND",pin:14},{label:"GPIO 23",type:"GPIO",pin:16},{label:"GPIO 24",type:"GPIO",pin:18},{label:"Ground",type:"GPIO",pin:20},{label:"GPIO 25",type:"GPIO",pin:22},{label:"GPIO 8 (SPIO CE0)",type:"GPIO",pin:24},{label:"GPIO 7 (SPIO CE1)",type:"GPIO",pin:26},{label:"GPIO 1 (EEPROM SCL)",type:"GPIO",pin:28},{label:"Ground",type:"GND",pin:30},{label:"GPIO 12 (PWM0)",type:"GPIO",pin:32},{label:"Ground",type:"GND",pin:34},{label:"GPIO 16",type:"GPIO",pin:36},{label:"GPIO 20 (PCM DIN)",type:"GPIO",pin:38},{label:"GPIO 21 (PCM DOUT)",type:"GPIO",pin:40}]},{name:"Raspberry PI",width:2,height:10,data:[{},{}]}];export{ee as H,Q as I,te as M,le as u};
