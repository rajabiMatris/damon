"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4330],{4330:(et,S,d)=>{d.r(S),d.d(S,{ion_route:()=>j,ion_route_redirect:()=>I,ion_router:()=>V,ion_router_link:()=>T});var l=d(5861),h=d(9533),b=d(206),U=d(7639),w=d(7300);let j=class{constructor(t){(0,h.r)(this,t),this.ionRouteDataChanged=(0,h.e)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length){for(const o of n)if(t[o]!==e[o])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},I=class{constructor(t){(0,h.r)(this,t),this.ionRouteRedirectChanged=(0,h.e)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}};const g="root",E="forward",p=t=>"/"+t.filter(n=>n.length>0).join("/"),f=t=>{let n,e=[""];if(null!=t){const r=t.indexOf("?");r>-1&&(n=t.substring(r+1),t=t.substring(0,r)),e=t.split("/").map(o=>o.trim()).filter(o=>o.length>0),0===e.length&&(e=[""])}return{segments:e,queryString:n}},P=function(){var t=(0,l.Z)(function*(e,n,r,o,s=!1,i){try{const a=y(e);if(o>=n.length||!a)return s;yield new Promise(m=>(0,b.c)(a,m));const c=n[o],u=yield a.setRouteId(c.id,c.params,r,i);return u.changed&&(r=g,s=!0),s=yield P(u.element,n,r,o+1,s,i),u.markVisible&&(yield u.markVisible()),s}catch(a){return console.error(a),!1}});return function(n,r,o,s){return t.apply(this,arguments)}}(),H=function(){var t=(0,l.Z)(function*(e){const n=[];let r,o=e;for(;r=y(o);){const s=yield r.getRouteId();if(!s)break;o=s.element,s.element=void 0,n.push(s)}return{ids:n,outlet:r}});return function(n){return t.apply(this,arguments)}}(),N=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",y=t=>{if(!t)return;if(t.matches(N))return t;const e=t.querySelector(N);return null!=e?e:void 0},D=(t,e)=>e.find(n=>((t,e)=>{const{from:n,to:r}=e;if(void 0===r||n.length>t.length)return!1;for(let o=0;o<n.length;o++){const s=n[o];if("*"===s)return!0;if(s!==t[o])return!1}return n.length===t.length})(t,n)),z=(t,e)=>{const n=Math.min(t.length,e.length);let r=0;for(let o=0;o<n;o++){const s=t[o],i=e[o];if(s.id.toLowerCase()!==i.id)break;if(s.params){const a=Object.keys(s.params);if(a.length===i.segments.length){const c=a.map(u=>`:${u}`);for(let u=0;u<c.length&&c[u].toLowerCase()===i.segments[u];u++)r++}}r++}return r},q=(t,e)=>{const n=new X(t);let o,r=!1;for(let i=0;i<e.length;i++){const a=e[i].segments;if(""===a[0])r=!0;else{for(const c of a){const u=n.next();if(":"===c[0]){if(""===u)return null;o=o||[],(o[i]||(o[i]={}))[c.slice(1)]=u}else if(u!==c)return null}r=!1}}return r&&r!==(""===n.next())?null:o?e.map((i,a)=>({id:i.id,segments:i.segments,params:O(i.params,o[a]),beforeEnter:i.beforeEnter,beforeLeave:i.beforeLeave})):e},O=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,_=(t,e)=>{let n=null,r=0;for(const o of e){const s=q(t,o);if(null!==s){const i=Q(s);i>r&&(r=i,n=s)}}return n},Q=t=>{let e=1,n=1;for(const r of t)for(const o of r.segments)":"===o[0]?e+=Math.pow(1,n):""!==o&&(e+=Math.pow(2,n)),n++;return e};class X{constructor(e){this.segments=e.slice()}next(){return this.segments.length>0?this.segments.shift():""}}const v=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,C=t=>Array.from(t.children).filter(e=>"ION-ROUTE-REDIRECT"===e.tagName).map(e=>{const n=v(e,"to");return{from:f(v(e,"from")).segments,to:null==n?void 0:f(n)}}),R=t=>Y(k(t)),k=t=>Array.from(t.children).filter(e=>"ION-ROUTE"===e.tagName&&e.component).map(e=>{const n=v(e,"component");return{segments:f(v(e,"url")).segments,id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:k(e)}}),Y=t=>{const e=[];for(const n of t)L([],e,n);return e},L=(t,e,n)=>{if(t=[...t,{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],0!==n.children.length)for(const r of n.children)L(t,e,r);else e.push(t)};let V=class{constructor(t){(0,h.r)(this,t),this.ionRouteWillChange=(0,h.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,h.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}componentWillLoad(){var t=this;return(0,l.Z)(function*(){yield y(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",()=>t(),{once:!0})});const e=yield t.runGuards(t.getSegments());if(!0!==e){if("object"==typeof e){const{redirect:n}=e,r=f(n);t.setSegments(r.segments,g,r.queryString),yield t.writeNavStateRoot(r.segments,g)}}else yield t.onRoutesChanged()})()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,b.o)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,b.o)(this.onRoutesChanged.bind(this),100))}onPopState(){var t=this;return(0,l.Z)(function*(){const e=t.historyDirection();let n=t.getSegments();const r=yield t.runGuards(n);if(!0!==r){if("object"!=typeof r)return!1;n=f(r.redirect).segments}return t.writeNavStateRoot(n,e)})()}onBackButton(t){t.detail.register(0,e=>{this.back(),e()})}canTransition(){var t=this;return(0,l.Z)(function*(){const e=yield t.runGuards();return!0===e||"object"==typeof e&&e.redirect})()}push(t,e="forward",n){var r=this;return(0,l.Z)(function*(){var o;if(t.startsWith(".")){const a=null!==(o=r.previousPath)&&void 0!==o?o:"/",c=new URL(t,`https://host/${a}`);t=c.pathname+c.search}let s=f(t);const i=yield r.runGuards(s.segments);if(!0!==i){if("object"!=typeof i)return!1;s=f(i.redirect)}return r.setSegments(s.segments,e,s.queryString),r.writeNavStateRoot(s.segments,e,n)})()}back(){return window.history.back(),Promise.resolve(this.waitPromise)}printDebug(){var t=this;return(0,l.Z)(function*(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const n=[];e.forEach(o=>n.push(...o.segments));const r=e.map(o=>o.id);console.debug(`%c ${p(n)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${r.join(", ")})`)}console.groupEnd()})(R(t.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${p(e.from)}`,"font-weight: bold"," TO: ",`$c ${p(e.to.segments)}`,"font-weight: bold");console.groupEnd()})(C(t.el))})()}navChanged(t){var e=this;return(0,l.Z)(function*(){if(e.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:n,outlet:r}=yield H(window.document.body),s=((t,e)=>{let n=null,r=0;for(const o of e){const s=z(t,o);s>r&&(n=o,r=s)}return n?n.map((o,s)=>{var i;return{id:o.id,segments:o.segments,params:O(o.params,null===(i=t[s])||void 0===i?void 0:i.params)}}):null})(n,R(e.el));if(!s)return console.warn("[ion-router] no matching URL for ",n.map(a=>a.id)),!1;const i=(t=>{const e=[];for(const n of t)for(const r of n.segments)if(":"===r[0]){const o=n.params&&n.params[r.slice(1)];if(!o)return null;e.push(o)}else""!==r&&e.push(r);return e})(s);return i?(e.setSegments(i,t),yield e.safeWriteNavState(r,s,g,i,null,n.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)})()}onRedirectChanged(){const t=this.getSegments();t&&D(t,C(this.el))&&this.writeNavStateRoot(t,g)}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),g)}historyDirection(){var t;const e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));const n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?E:n<r?"back":g}writeNavStateRoot(t,e,n){var r=this;return(0,l.Z)(function*(){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=C(r.el),s=D(t,o);let i=null;if(s){const{segments:u,queryString:m}=s.to;r.setSegments(u,e,m),i=s.from,t=u}const a=R(r.el),c=_(t,a);return c?r.safeWriteNavState(document.body,c,e,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)})()}safeWriteNavState(t,e,n,r,o,s=0,i){var a=this;return(0,l.Z)(function*(){const c=yield a.lock();let u=!1;try{u=yield a.writeNavState(t,e,n,r,o,s,i)}catch(m){console.error(m)}return c(),u})()}lock(){var t=this;return(0,l.Z)(function*(){const e=t.waitPromise;let n;return t.waitPromise=new Promise(r=>n=r),void 0!==e&&(yield e),n})()}runGuards(t=this.getSegments(),e){var n=this;return(0,l.Z)(function*(){if(void 0===e&&(e=f(n.previousPath).segments),!t||!e)return!0;const r=R(n.el),o=_(e,r),s=o&&o[o.length-1].beforeLeave,i=!s||(yield s());if(!1===i||"object"==typeof i)return i;const a=_(t,r),c=a&&a[a.length-1].beforeEnter;return!c||c()})()}writeNavState(t,e,n,r,o,s=0,i){var a=this;return(0,l.Z)(function*(){if(a.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;a.busy=!0;const c=a.routeChangeEvent(r,o);c&&a.ionRouteWillChange.emit(c);const u=yield P(t,e,n,s,!1,i);return a.busy=!1,c&&a.ionRouteDidChange.emit(c),u})()}setSegments(t,e,n){this.state++,((t,e,n,r,o,s,i)=>{const a=((t,e,n)=>{let r=p(t);return e&&(r="#"+r),void 0!==n&&(r+="?"+n),r})([...f(e).segments,...r],n,i);o===E?t.pushState(s,"",a):t.replaceState(s,"",a)})(window.history,this.root,this.useHash,t,e,this.state,n)}getSegments(){return((t,e,n)=>{const r=f(this.root).segments,o=n?t.hash.slice(1):t.pathname;return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(r,f(o).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,r=p(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?p(e):null,to:r}}get el(){return(0,h.i)(this)}},T=class{constructor(t){(0,h.r)(this,t),this.routerDirection="forward",this.onClick=e=>{(0,w.o)(this.href,e,this.routerDirection,this.routerAnimation)}}render(){const t=(0,U.b)(this),e={href:this.href,rel:this.rel,target:this.target};return(0,h.h)(h.H,{onClick:this.onClick,class:(0,w.c)(this.color,{[t]:!0,"ion-activatable":!0})},(0,h.h)("a",Object.assign({},e),(0,h.h)("slot",null)))}};T.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);