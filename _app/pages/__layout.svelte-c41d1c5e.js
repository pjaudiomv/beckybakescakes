import{D as ae,S as te,i as se,s as re,E as ne,e as o,k as N,t as R,F as ie,c,d as n,n as w,a as v,g as U,b as e,G as m,H as r,f as K,I as V,J as le,K as oe,L as ce,x as ue,u as fe,M as de,N as ve}from"../chunks/vendor-bfca5df7.js";const pe=()=>{const t=ae("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},be={subscribe(t){return pe().page.subscribe(t)}};function he(t){let p,d,g,S,u,l,b,B,D,s,E,M,y,F,I,G,k,A,h,H,J,_,O,j,C,W,z,X;const Q=t[6].default,f=ne(Q,t,t[5],null);return{c(){p=o("link"),d=o("meta"),g=o("meta"),S=N(),u=o("nav"),l=o("div"),b=o("a"),B=R("Beckybakescakes"),D=N(),s=o("a"),E=o("span"),M=N(),y=o("span"),F=N(),I=o("span"),G=N(),k=o("div"),A=o("div"),h=o("a"),H=R("About"),J=N(),_=o("a"),O=R("Contact"),j=N(),C=o("section"),f&&f.c(),this.h()},l(a){const i=ie('[data-svelte="svelte-h2qqkx"]',document.head);p=c(i,"LINK",{rel:!0,href:!0}),d=c(i,"META",{name:!0,content:!0}),g=c(i,"META",{name:!0,content:!0}),i.forEach(n),S=w(a),u=c(a,"NAV",{class:!0,role:!0,"aria-label":!0});var L=v(u);l=c(L,"DIV",{class:!0});var P=v(l);b=c(P,"A",{class:!0,href:!0});var Y=v(b);B=U(Y,"Beckybakescakes"),Y.forEach(n),D=w(P),s=c(P,"A",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,href:!0});var q=v(s);E=c(q,"SPAN",{class:!0,"aria-hidden":!0}),v(E).forEach(n),M=w(q),y=c(q,"SPAN",{class:!0,"aria-hidden":!0}),v(y).forEach(n),F=w(q),I=c(q,"SPAN",{class:!0,"aria-hidden":!0}),v(I).forEach(n),q.forEach(n),P.forEach(n),G=w(L),k=c(L,"DIV",{id:!0,class:!0});var Z=v(k);A=c(Z,"DIV",{class:!0});var T=v(A);h=c(T,"A",{class:!0,href:!0});var $=v(h);H=U($,"About"),$.forEach(n),J=w(T),_=c(T,"A",{class:!0,href:!0});var x=v(_);O=U(x,"Contact"),x.forEach(n),T.forEach(n),Z.forEach(n),L.forEach(n),j=w(a),C=c(a,"SECTION",{class:!0});var ee=v(C);f&&f.l(ee),ee.forEach(n),this.h()},h(){e(p,"rel","manifest"),e(p,"href","manifest.json"),e(d,"name","mobile-web-app-capable"),e(d,"content","yes"),e(g,"name","apple-mobile-web-app-capable"),e(g,"content","yes"),document.title="Amalgameet",e(b,"class","navbar-item"),e(b,"href","/"),m(b,"is-active",t[1].path==="/"),e(E,"class","navbar-span"),e(E,"aria-hidden","true"),e(y,"class","navbar-span"),e(y,"aria-hidden","true"),e(I,"class","navbar-span"),e(I,"aria-hidden","true"),e(s,"role","button"),e(s,"class","navbar-burger"),e(s,"aria-label","menu"),e(s,"aria-expanded","false"),e(s,"href","javascript:void(0)"),m(s,"is-active",t[0]),e(l,"class","navbar-brand"),e(h,"class","navbar-item"),e(h,"href","/about"),m(h,"is-active",t[1].path.startsWith("/about")),e(_,"class","navbar-item"),e(_,"href","/contact"),m(_,"is-active",t[1].path.startsWith("/contact")),e(A,"class","navbar-start"),e(k,"id","navbarBasicExample"),e(k,"class","navbar-menu svelte-1talwtd"),m(k,"is-active",t[0]),e(u,"class","navbar is-light"),e(u,"role","navigation"),e(u,"aria-label","main navigation"),e(C,"class","section p-5")},m(a,i){r(document.head,p),r(document.head,d),r(document.head,g),K(a,S,i),K(a,u,i),r(u,l),r(l,b),r(b,B),r(l,D),r(l,s),r(s,E),r(s,M),r(s,y),r(s,F),r(s,I),r(u,G),r(u,k),r(k,A),r(A,h),r(h,H),r(A,J),r(A,_),r(_,O),K(a,j,i),K(a,C,i),f&&f.m(C,null),W=!0,z||(X=[V(window,"click",t[2]),V(window,"touchend",t[2]),V(s,"click",t[3]),V(h,"click",t[4]),V(_,"click",t[4])],z=!0)},p(a,[i]){i&2&&m(b,"is-active",a[1].path==="/"),i&1&&m(s,"is-active",a[0]),i&2&&m(h,"is-active",a[1].path.startsWith("/about")),i&2&&m(_,"is-active",a[1].path.startsWith("/contact")),i&1&&m(k,"is-active",a[0]),f&&f.p&&(!W||i&32)&&le(f,Q,a,a[5],W?ce(Q,a[5],i,null):oe(a[5]),null)},i(a){W||(ue(f,a),W=!0)},o(a){fe(f,a),W=!1},d(a){n(p),n(d),n(g),a&&n(S),a&&n(u),a&&n(j),a&&n(C),f&&f.d(a),z=!1,de(X)}}}function _e(t,p,d){let g;ve(t,be,s=>d(1,g=s));let{$$slots:S={},$$scope:u}=p,l=!1;function b(s){if(l){const E=s.target;for(const M of E.classList||[])if(M.startsWith("navbar"))return;d(0,l=!1)}}function B(){d(0,l=!l)}function D(){d(0,l=!1)}return t.$$set=s=>{"$$scope"in s&&d(5,u=s.$$scope)},[l,g,b,B,D,u,S]}class ge extends te{constructor(p){super();se(this,p,_e,he,re,{})}}export{ge as default};
