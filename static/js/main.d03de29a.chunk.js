(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c.n(n),s=c(7),r=c(3),i=c(6),l=c(5),o=c(4),j=c.n(o),b=c(0),d=c(18),u=c.n(d),h=(c(24),c(1)),m=function(){var e=Object(r.n)(),t="/phones"===e.pathname,c="/tablets"===e.pathname,n="/accessories"===e.pathname;return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("nav",{className:"header__nav nav",children:[Object(h.jsxs)("div",{className:"nav__menu",children:[Object(h.jsx)(s.b,{to:"/",className:"nav__logo",children:Object(h.jsx)("span",{className:"logo"})}),Object(h.jsx)(s.b,{to:"home",className:u()("nav__link",{"is-active-link":"/home"===e.pathname}),children:"Home"}),Object(h.jsx)(s.b,{to:"phones",className:u()("nav__link",{"is-active-link":t}),children:"Phones"}),Object(h.jsx)(s.b,{to:"tablets",className:u()("nav__link",{"is-active-link":c}),children:"Tablets"}),Object(h.jsx)(s.b,{to:"accessories",className:u()("nav__link",{"is-active-link":n}),children:"Accessories"})]}),Object(h.jsxs)("div",{className:"nav__menu",children:[t&&Object(h.jsx)("form",{className:"nav__form",children:Object(h.jsx)("input",{type:"text",className:"search",placeholder:"Search in phones..."})}),c&&Object(h.jsx)("form",{className:"nav__form",children:Object(h.jsx)("input",{type:"text",className:"search",placeholder:"Search in tablets..."})}),n&&Object(h.jsx)("form",{className:"nav__form",children:Object(h.jsx)("input",{type:"text",className:"search",placeholder:"Search in accessories..."})}),Object(h.jsx)(s.b,{to:"favourites",className:"icon__favourites",children:Object(h.jsx)("span",{className:"icon icon-favourites"})}),Object(h.jsx)(s.b,{to:"cart",className:"icon__cart",children:Object(h.jsx)("span",{className:"icon icon-cart"})})]})]})})},p=(c(32),function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("div",{className:"footer__logo",children:Object(h.jsx)(s.b,{to:"/",className:"nav__logo",children:Object(h.jsx)("span",{className:"logo"})})}),Object(h.jsxs)("div",{className:"footer__menu",children:[Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Contacts"}),Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Rights"})]}),Object(h.jsxs)("button",{type:"button",className:"button button-link",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(h.jsx)("p",{className:"button__text",children:"Back to top"}),Object(h.jsx)("span",{className:"icon icon-back"})]})]})}),O=(c(33),function(){var e=Object(i.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_phone-catalog/api/"+t);case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=function(){var e=Object(b.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),s=Object(l.a)(a,2),o=s[0],d=s[1];console.log(c,o);var u=function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,O("/products.json");case 4:t=e.sent,localStorage.setItem("products",JSON.stringify(t)),n(t);case 7:return e.prev=7,d(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){var e=localStorage.getItem("products");e?n(JSON.parse(e)):u()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsx)("main",{children:Object(h.jsx)(r.b,{})}),Object(h.jsx)(p,{})]})},_=(c(34),[c.p+"static/media/banner-phones.b4eeda8b.png",c.p+"static/media/banner-tablets.a962057c.png",c.p+"static/media/banner-accessories.bdd2e0fc.png"]),v=function(){var e=Object(b.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1],a=function(){n((function(e){return e===_.length-1?0:e+1}))},s=function(e){n(e)};return Object(b.useEffect)((function(){var e=setInterval((function(){a()}),3e3);return function(){return clearInterval(e)}}),[c]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-left",onClick:function(){n((function(e){return 0===e?_.length-1:e-1}))}}),Object(h.jsx)("ul",{className:"slider__photo",children:_.map((function(e,t){return Object(h.jsx)("li",{className:"slider__item ".concat(t===c?"active":""),children:Object(h.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"slider__image"})},e)}))}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-right",onClick:a})]}),Object(h.jsxs)("div",{className:"slider slider__buttons",children:[Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(0===c?"is-active":""),onClick:function(){return s(0)}}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(1===c?"is-active":""),onClick:function(){return s(1)}}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(2===c?"is-active":""),onClick:function(){return s(2)}})]})]})},f=function(){return Object(h.jsx)(v,{})},N=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})},g=(c(35),function(e){var t=e.phone;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"card__img",src:t.imageUrl,alt:t.name}),Object(h.jsxs)("div",{className:"card__description",children:[Object(h.jsx)("h2",{className:"card__title",children:t.name}),Object(h.jsxs)("p",{className:"card__price",children:["$".concat(t.price," "),Object(h.jsx)("span",{className:"card__price--discount",children:"$".concat(t.price+t.discount)})]})]}),Object(h.jsxs)("div",{className:"card__details",children:[Object(h.jsxs)("div",{className:"card__detail Screen",children:[Object(h.jsx)("div",{children:"Screen"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.screen})]}),Object(h.jsxs)("div",{className:"card__detail Capacity",children:[Object(h.jsx)("div",{children:"Capacity"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.capacity})]}),Object(h.jsxs)("div",{className:"card__detail",children:[Object(h.jsx)("div",{children:"RAM"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.ram})]})]}),Object(h.jsxs)("div",{className:"card__link",children:[Object(h.jsx)("button",{type:"button",className:"card__link-cart",children:"Add to cart"}),Object(h.jsx)("button",{type:"button",className:"card__link-like","aria-label":"button"})]})]})}),k=(c(36),function(e){var t=e.products;return Object(h.jsx)("div",{"data-cy":"cardsContainer",children:Object(h.jsx)("ul",{className:"product",children:t.map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(g,{phone:e})},e.id)}))})})}),y=function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"phone"===e.type}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Mobile phones"}),Object(h.jsx)("p",{children:t.length}),t.length&&Object(h.jsx)(k,{products:t})]})},S=function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"tablet"===e.type}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Mobile phones"}),Object(h.jsx)("p",{children:t.length}),t.length&&Object(h.jsx)(k,{products:t})]})},w=function(){return Object(h.jsx)("h1",{className:"header__title",children:"Accessories"})},C=function(){return Object(h.jsx)(s.a,{children:Object(h.jsx)(r.e,{children:Object(h.jsxs)(r.c,{path:"/",element:Object(h.jsx)(x,{}),children:[Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(f,{})}),Object(h.jsx)(r.c,{path:"/home",element:Object(h.jsx)(r.a,{to:"/",replace:!0})}),Object(h.jsx)(r.c,{path:"/phones",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(y,{})})}),Object(h.jsx)(r.c,{path:"/tablets",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(S,{})})}),Object(h.jsx)(r.c,{path:"/accessories",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(w,{})})}),Object(h.jsx)(r.c,{path:"*",element:Object(h.jsx)(N,{})})]})})})};a.a.render(Object(h.jsx)(C,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d03de29a.chunk.js.map