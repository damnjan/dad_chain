(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports={colors:"'../colors.css'",background:"#444",app:"App_app__WiF_-",container:"App_container__7oZ4r",bottom:"App_bottom__3-Z-B"}},23:function(e,t,n){e.exports={image:"Trolldad_image__Ub5Qv",animated:"Trolldad_animated__GyvGi",swing:"Trolldad_swing__3AbCs"}},35:function(e,t,n){e.exports={colors:"'../colors.css'",background:"#444",container:"SpeechBubble_container__2NqZ7"}},36:function(e,t,n){e.exports=n.p+"static/media/trolldad.96dc951b.png"},37:function(e,t,n){e.exports={button:"Button_button__3TBzb"}},39:function(e,t,n){e.exports=n(62)},54:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(28),o=n.n(c),s=n(9),i=n(29),u=n(38),l=n(21),p="JOKES_REQUESTED",b="JOKES_FETCH_SUCCEEDED",h="JOKES_FETCH_FAILED",d="SET_CURRENT_JOKE",m="GENERATE_JOKE",f=function(e){return{type:m,allJokes:e}},k={allJokes:null,currentJoke:null,isFetching:!1},j=Object(s.combineReducers)({jokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)({},e,{isFetching:!0});case b:return Object(l.a)({},e,{isFetching:!1,allJokes:t.data});case d:return Object(l.a)({},e,{currentJoke:t.data});default:return e}}}),v=n(6),O=n.n(v),g=n(5),_=n(31),E={method:"GET",headers:{Accept:"text/plain"}},y=function(){var e=localStorage.getItem("allJokes");return e?Promise.resolve(e):w()},w=function(){return new Promise(function(e,t){var n="",a=function(){var r=Object(_.a)(O.a.mark(function r(c){var o,s;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://icanhazdadjoke.com/search?page=".concat(c,"&limit=30"),E);case 3:return o=r.sent,r.next=6,o.text();case 6:(s=r.sent)?(n+="".concat(s,"\n"),a(++c)):(e(n),localStorage.setItem("allJokes",n)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),t(r.t0);case 13:case"end":return r.stop()}},r,this,[[0,10]])}));return function(e){return r.apply(this,arguments)}}();a(1)})},x=n(32),J=n.n(x),C=function(e){var t,n=new J.a(e),a=function(e){var t=Object.keys(e).filter(function(e){return e[0]>="A"&&e[0]<="Z"});return t[~~(Math.random()*t.length)]},r=function(e){return e.split(" ").length>=15&&!e.match(/(a|an|the|if|or|by|but|I|,)$/i)};do{t=n.start(a).end(r).process()}while(t.split(" ").length<=3);t.match(/^(why|what|who|where|did|do)/i)?t+="?":t.match(/[.,!?]$/)||(t+=".");var c=n.start(a).end(r).process();return c.match(/[.,!?]$/)||(c+="."),t.split(" ").length>=15&&(c=""),"".concat(t," ").concat(c)},T=O.a.mark(A),S=O.a.mark(N),F=O.a.mark(D);function A(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.a)(y);case 3:return e=t.sent,t.next=6,Object(g.b)({type:b,data:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(g.b)({type:h,message:t.t0.message});case 12:case"end":return t.stop()}},T,this,[[0,8]])}function N(e){var t,n;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=C(e.allJokes),a.next=3,Object(g.b)({type:d,data:t});case 3:return n=e.allJokes+"\n".concat(t),a.next=6,Object(g.b)({type:b,data:n});case 6:localStorage.setItem("allJokes",n);case 7:case"end":return a.stop()}},S,this)}function D(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)(p,A);case 2:return e.next=4,Object(g.c)(m,N);case 4:case"end":return e.stop()}},F,this)}n(54);var I=n(10),G=n(11),P=n(13),B=n(12),K=n(14),R=n(19),U=n.n(R),Z=n(18),M=n(35),W=n.n(M),$=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this.props.text;return e&&a.createElement("div",{className:W.a.container},e)}}]),t}(a.PureComponent),z=n(36),H=n.n(z),Q=n(23),q=n.n(Q),L=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=" ".concat(q.a.image," ").concat(q.a.animated);return a.createElement("img",{alt:"trolldad",src:H.a,className:e})}}]),t}(a.PureComponent),V=n(37),X=n.n(V),Y=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.children,r=e.visible?{}:{visibility:"hidden"};return a.createElement("div",{className:X.a.button,style:r,onClick:t},n)}}]),t}(a.PureComponent),ee=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(P.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).generateJoke=function(){var e=n.props.allJokes;n.props.dispatch(f(e))},n}return Object(K.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:p})}},{key:"render",value:function(){var e=this.props,t=e.currentJoke,n=e.isFetching;return r.a.createElement("div",{className:U.a.app},r.a.createElement("div",{className:U.a.container},r.a.createElement($,{text:n?"Downloading some jokes... Wait!":t||"Ok, I'm ready. Press 'Generate joke' button and try not to laugh."}),r.a.createElement("div",{className:U.a.bottom},r.a.createElement(Y,{visible:!n,onClick:this.generateJoke},"Generate joke"),r.a.createElement(L,{key:t}))))}}]),t}(a.Component),te=Object(Z.b)(function(e){return{allJokes:e.jokes.allJokes,currentJoke:e.jokes.currentJoke,isFetching:e.jokes.isFetching}})(ee),ne=Object(u.a)(),ae=Object(s.createStore)(j,Object(i.composeWithDevTools)(Object(s.applyMiddleware)(ne)));ne.run(D),o.a.render(r.a.createElement(Z.a,{store:ae},r.a.createElement(te,null)),document.getElementById("root"))}},[[39,2,1]]]);
//# sourceMappingURL=main.1283de4e.chunk.js.map