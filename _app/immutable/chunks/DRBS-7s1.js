import{w as c,$ as w,a5 as k,a9 as p,aa as h,ab as P,a8 as m,ac as B,ad as C,ae as D,i as I,af as R,ag as W,ah as q,G as u,x as F,Y as y,A as G}from"./9_KPTGlP.js";function z(e){c&&w(e)!==null&&k(e)}let x=!1;function U(){x||(x=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function M(e){var t=P,r=m;p(null),h(null);try{return e()}finally{p(t),h(r)}}function J(e,t,r,i=r){e.addEventListener(t,()=>M(r));const n=e.__on_r;n?e.__on_r=()=>{n(),i(!0)}:e.__on_r=()=>i(!0),U()}const K=new Set,Q=new Set;function H(e,t,r,i={}){function n(a){if(i.capture||V.call(t,a),!a.cancelBubble)return M(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function X(e,t,r,i,n){var a={capture:i,passive:n},o=H(e,t,r,a);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(e,o,a)})}function V(e){var T;var t=this,r=t.ownerDocument,i=e.type,n=((T=e.composedPath)==null?void 0:T.call(e))||[],a=n[0]||e.target,o=0,_=e.__root;if(_){var f=n.indexOf(_);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var E=n.indexOf(t);if(E===-1)return;f<=E&&(o=f)}if(a=n[o]||e.target,a!==t){D(e,"currentTarget",{configurable:!0,get(){return a||r}});var N=P,S=m;p(null),h(null);try{for(var l,b=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+i];if(d!=null&&(!a.disabled||e.target===a))if(I(d)){var[O,...A]=d;O.apply(a,[e,...A])}else d.call(a,e)}catch(v){l?b.push(v):l=v}if(e.cancelBubble||g===t||g===null)break;a=g}if(l){for(let v of b)queueMicrotask(()=>{throw v});throw l}}finally{e.__root=t,delete e.currentTarget,p(N),h(S)}}}function Y(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function s(e,t){var r=m;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Z(e,t){var r=(t&W)!==0,i=(t&q)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return s(u,null),u;n===void 0&&(n=Y(a?e:"<!>"+e),r||(n=w(n)));var o=i||R?document.importNode(n,!0):n.cloneNode(!0);if(r){var _=w(o),f=o.lastChild;s(_,f)}else s(o,o);return o}}function ee(e=""){if(!c){var t=y(e+"");return s(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=y()),G(r)),s(r,r),r}function te(){if(c)return s(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=y();return e.append(t,r),s(t,r),e}function re(e,t){if(c){m.nodes_end=u,F();return}e!==null&&e.before(t)}const $="5";var L;typeof window<"u"&&((L=window.__svelte??(window.__svelte={})).v??(L.v=new Set)).add($);export{re as a,K as b,s as c,te as d,X as e,ee as f,U as g,V as h,z as i,J as l,Q as r,Z as t};
