(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function I(){}function x(e){return e()}function R(){return Object.create(null)}function S(e){e.forEach(x)}function ee(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function oe(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function E(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function N(){return $(" ")}function T(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function z(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function J(e,t){e.value=t==null?"":t}let M;function F(e){M=e}function re(){if(!M)throw new Error("Function called outside component initialization");return M}function se(e){re().$$.on_mount.push(e)}const P=[],V=[],q=[],W=[],ue=Promise.resolve();let Y=!1;function ce(){Y||(Y=!0,ue.then(te))}function G(e){q.push(e)}const K=new Set;let U=0;function te(){const e=M;do{for(;U<P.length;){const t=P[U];U++,F(t),fe(t.$$)}for(F(null),P.length=0,U=0;V.length;)V.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];K.has(n)||(K.add(n),n())}q.length=0}while(P.length);for(;W.length;)W.pop()();Y=!1,K.clear(),F(e)}function fe(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}const de=new Set;function ae(e,t){e&&e.i&&(de.delete(e),e.i(t))}function pe(e,t,n,l){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),l||G(()=>{const s=e.$$.on_mount.map(x).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...s):S(s),e.$$.on_mount=[]}),r.forEach(G)}function he(e,t){const n=e.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(P.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,l,o,r,s,p=[-1]){const f=M;F(e);const c=e.$$={fragment:null,ctx:[],props:r,update:I,not_equal:o,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:R(),dirty:p,skip_bound:!1,root:t.target||f.$$.root};s&&s(c.root);let y=!1;if(c.ctx=n?n(e,t.props||{},(h,a,...k)=>{const v=k.length?k[0]:a;return c.ctx&&o(c.ctx[h],c.ctx[h]=v)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](v),y&&_e(e,h)),a}):[],c.update(),y=!0,S(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const h=le(t.target);c.fragment&&c.fragment.l(h),h.forEach(j)}else c.fragment&&c.fragment.c();t.intro&&ae(e.$$.fragment),pe(e,t.target,t.anchor,t.customElement),te()}F(f)}class ye{$destroy(){he(this,1),this.$destroy=I}$on(t,n){if(!ee(n))return I;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(e,t,n){const l=e.slice();return l[14]=t[n],l}function Z(e){let t,n,l,o,r,s=e[14].title+"",p,f,c=e[14].author+"",y,h,a,k;function v(){return e[11](e[14])}function O(){return e[12](e[14])}return{c(){t=E("div"),n=E("input"),l=N(),o=E("button"),o.textContent="x",r=N(),p=$(s),f=$("("),y=$(c),h=$(")"),B(n,"type","radio"),B(n,"id","po"),B(o,"id","")},m(w,u){A(w,t,u),d(t,n),d(t,l),d(t,o),d(t,r),d(t,p),d(t,f),d(t,y),d(t,h),a||(k=[T(n,"click",v),T(o,"click",O)],a=!0)},p(w,u){e=w,u&1&&s!==(s=e[14].title+"")&&z(p,s),u&1&&c!==(c=e[14].author+"")&&z(y,c)},d(w){w&&j(t),a=!1,S(k)}}}function be(e){let t,n,l,o,r,s,p,f,c,y,h,a,k,v,O,w,u,g,C,D,H,L=e[0],b=[];for(let i=0;i<L.length;i+=1)b[i]=Z(X(e,L,i));return{c(){t=E("h1"),t.textContent="Add Your Favorite Books",n=N(),l=E("div"),o=E("input"),r=N(),s=E("input"),p=N(),f=E("button"),c=$("Create"),h=N(),a=E("button"),k=$("Update "),v=$(e[3]),w=N();for(let i=0;i<b.length;i+=1)b[i].c();u=N(),g=E("div"),C=$(e[4]),B(o,"placeholder","Title"),B(s,"placeholder","Author"),f.disabled=y=!e[1]||!e[2],a.disabled=O=!e[1]||!e[2]||e[3]==0},m(i,_){A(i,t,_),A(i,n,_),A(i,l,_),d(l,o),J(o,e[1]),d(l,r),d(l,s),J(s,e[2]),d(l,p),d(l,f),d(f,c),d(l,h),d(l,a),d(a,k),d(a,v),A(i,w,_);for(let m=0;m<b.length;m+=1)b[m].m(i,_);A(i,u,_),A(i,g,_),d(g,C),D||(H=[T(o,"input",e[9]),T(s,"input",e[10]),T(f,"click",e[5]),T(a,"click",e[7])],D=!0)},p(i,[_]){if(_&2&&o.value!==i[1]&&J(o,i[1]),_&4&&s.value!==i[2]&&J(s,i[2]),_&6&&y!==(y=!i[1]||!i[2])&&(f.disabled=y),_&8&&z(v,i[3]),_&14&&O!==(O=!i[1]||!i[2]||i[3]==0)&&(a.disabled=O),_&321){L=i[0];let m;for(m=0;m<L.length;m+=1){const Q=X(i,L,m);b[m]?b[m].p(Q,_):(b[m]=Z(Q),b[m].c(),b[m].m(u.parentNode,u))}for(;m<b.length;m+=1)b[m].d(1);b.length=L.length}_&16&&z(C,i[4])},i:I,o:I,d(i){i&&j(t),i&&j(n),i&&j(l),i&&j(w),ie(b,i),i&&j(u),i&&j(g),D=!1,S(H)}}}function ge(e,t,n){let l=[],o="",r="",s=0,p="";se(f);async function f(){const u=await fetch("https://my-json-server.typicode.com/nicklsodi/books-list/posts");n(0,l=await u.json()),u.status!=200&&n(4,p="Can not load post list")}async function c(){console.log({title:o,author:r});const u=await fetch("https://my-json-server.typicode.com/nicklsodi/books-list/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:o,author:r})});if(!u.ok){n(4,p="create user fail "+u.status);return}f()}async function y(u){const g=await fetch("https://my-json-server.typicode.com/nicklsodi/books-list/posts/"+u,{method:"DELETE"});if(g.ok){n(3,s=0),n(4,p="");const C=document.getElementById("po");C.checked=!1}else{n(4,p="delete user fail "+g.status);return}f()}async function h(){const u=await fetch("https://my-json-server.typicode.com/nicklsodi/books-list/posts/"+s,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:o,author:r})});if(!u.ok){n(4,p="update user fail "+u.status);return}f()}async function a(u){let g=l.find(C=>C.id==u);g&&(n(3,s=g.id),n(1,o=g.title),n(2,r=g.author),n(4,p=`Post ${s} selected`))}function k(){o=this.value,n(1,o)}function v(){r=this.value,n(2,r)}return[l,o,r,s,p,c,y,h,a,k,v,u=>a(u.id),u=>y(u.id)]}class ke extends ye{constructor(t){super(),me(this,t,ge,be,ne,{})}}new ke({target:document.getElementById("app")});
