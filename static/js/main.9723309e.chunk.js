(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(25),n=c.n(s),a=c(7),r=c(3),i=c(6),o=c(5),l=c(4),j=c.n(l),d=c(1),b=c(11),h=c.n(b),u=(c(24),c(0)),m=function(){var e=Object(r.n)(),t="/"===e.pathname,c="/phones"===e.pathname,s="/tablets"===e.pathname,n="/accessories"===e.pathname;return Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)("nav",{className:"header__nav nav",children:[Object(u.jsxs)("div",{className:"nav__menu",children:[Object(u.jsx)(a.b,{to:"/",className:"nav__logo",children:Object(u.jsx)("span",{className:"logo"})}),Object(u.jsx)(a.b,{to:"home",className:h()("nav__link",{"is-active-link":t}),children:"Home"}),Object(u.jsx)(a.b,{to:"phones",className:h()("nav__link",{"is-active-link":c}),children:"Phones"}),Object(u.jsx)(a.b,{to:"tablets",className:h()("nav__link",{"is-active-link":s}),children:"Tablets"}),Object(u.jsx)(a.b,{to:"accessories",className:h()("nav__link",{"is-active-link":n}),children:"Accessories"})]}),Object(u.jsxs)("div",{className:"nav__menu",children:[c&&Object(u.jsx)("form",{className:"nav__form",children:Object(u.jsx)("input",{type:"text",className:"search",placeholder:"Search in phones..."})}),s&&Object(u.jsx)("form",{className:"nav__form",children:Object(u.jsx)("input",{type:"text",className:"search",placeholder:"Search in tablets..."})}),n&&Object(u.jsx)("form",{className:"nav__form",children:Object(u.jsx)("input",{type:"text",className:"search",placeholder:"Search in accessories..."})}),Object(u.jsx)(a.b,{to:"favourites",className:"icon__favourites",children:Object(u.jsx)("span",{className:"icon icon-favourites"})}),Object(u.jsx)(a.b,{to:"cart",className:"icon__cart",children:Object(u.jsx)("span",{className:"icon icon-cart"})})]})]})})},p=(c(32),function(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)("div",{className:"footer__logo",children:Object(u.jsx)(a.b,{to:"/",className:"nav__logo",children:Object(u.jsx)("span",{className:"logo"})})}),Object(u.jsxs)("div",{className:"footer__menu",children:[Object(u.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(u.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Contacts"}),Object(u.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Rights"})]}),Object(u.jsxs)("button",{type:"button",className:"button button-link",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(u.jsx)("p",{className:"button__text",children:"Back to top"}),Object(u.jsx)("span",{className:"icon icon-back"})]})]})}),O=(c(33),function(){var e=Object(i.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_phone-catalog/api/"+t);case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=function(){var e=Object(d.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(d.useState)(!1),a=Object(o.a)(n,2),l=a[0],b=a[1];console.log(c,l);var h=function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,O("/products.json");case 4:t=e.sent,localStorage.setItem("products",JSON.stringify(t)),s(t);case 7:return e.prev=7,b(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){var e=localStorage.getItem("products");e?s(JSON.parse(e)):h()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsx)("main",{children:Object(u.jsx)(r.b,{})}),Object(u.jsx)(p,{})]})},x=(c(34),function(e){var t=e.phone;return Object(u.jsxs)("div",{className:"card","data-cy":"cardsContainer",children:[Object(u.jsx)("img",{className:"card__img",src:t.imageUrl,alt:t.name}),Object(u.jsxs)("div",{className:"card__description",children:[Object(u.jsx)("h2",{className:"card__title",children:t.name}),Object(u.jsxs)("p",{className:"card__price",children:["$".concat(t.price," "),Object(u.jsx)("span",{className:"card__price--discount",children:"$".concat(t.price+t.discount)})]})]}),Object(u.jsxs)("div",{className:"card__details",children:[Object(u.jsxs)("div",{className:"card__detail Screen",children:[Object(u.jsx)("div",{children:"Screen"}),Object(u.jsx)("div",{className:"card__detail-value",children:t.screen})]}),Object(u.jsxs)("div",{className:"card__detail Capacity",children:[Object(u.jsx)("div",{children:"Capacity"}),Object(u.jsx)("div",{className:"card__detail-value",children:t.capacity})]}),Object(u.jsxs)("div",{className:"card__detail",children:[Object(u.jsx)("div",{children:"RAM"}),Object(u.jsx)("div",{className:"card__detail-value",children:t.ram})]})]}),Object(u.jsxs)("div",{className:"card__link",children:[Object(u.jsx)("button",{type:"button",className:"card__link-cart",children:"Add to cart"}),Object(u.jsx)("button",{type:"button",className:"card__link-like","aria-label":"button"})]})]})}),N=(c(35),c(36),function(e){var t=e.title,c=e.visibleCards,s=e.start,n=e.setStart,a=e.arrLength,r=e.end;return Object(u.jsxs)("div",{className:"hot-phones__top","data-cy":"productList",children:[Object(u.jsx)("h1",{className:"hot-phones__title name__page",children:t}),Object(u.jsxs)("div",{className:"hot-phones__buttons",children:[Object(u.jsx)("button",{className:h()("hot-phones__button hot-phones__button-left",{"hot-phones__button-left--disabled":0===s}),type:"button",onClick:function(){return n((e=s,Math.max(e-1,0)));var e},disabled:0===s,children:Object(u.jsx)("p",{hidden:!0,children:"left button"})}),Object(u.jsx)("button",{className:h()("hot-phones__button hot-phones__button-right",{"hot-phones__button-right--disabled":r>=a}),type:"button",onClick:function(){return n((e=s,Math.min(e+1,a-c)));var e},disabled:0===r,children:Object(u.jsx)("p",{hidden:!0,children:"right button"})})]})]})}),v=function(e){var t=e.phones,c=Object(d.useState)(0),s=Object(o.a)(c,2),n=s[0],a=s[1],r=n+4,i=t.sort((function(e,t){return t.discount-e.discount})),l=i.length;return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"hot-phones",children:[Object(u.jsx)(N,{title:"Hot prices",visibleCards:4,start:n,setStart:a,arrLength:l,end:r}),Object(u.jsx)("div",{className:"hot-phones__phones",children:Object(u.jsx)("ul",{className:"product",children:i.slice(n,r).map((function(e){return Object(u.jsx)("li",{className:"product__item",children:Object(u.jsx)(x,{phone:e})},e.id)}))})})]})})},f=(c(37),function(e){var t=e.phones,c=Object(d.useState)(0),s=Object(o.a)(c,2),n=s[0],a=s[1],r=n+4,i=t.sort((function(e,t){return t.age-e.age})),l=i.length;return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"hot-phones",children:[Object(u.jsx)(N,{title:"Brand new models",visibleCards:4,start:n,setStart:a,arrLength:l,end:r}),Object(u.jsx)("div",{className:"hot-phones__phones",children:Object(u.jsx)("ul",{className:"product",children:i.slice(n,r).map((function(e){return Object(u.jsx)("li",{className:"product__item",children:Object(u.jsx)(x,{phone:e})},e.id)}))})})]})})}),g=(c(38),[c.p+"static/media/banner-phones.b4eeda8b.png",c.p+"static/media/banner-tablets.a962057c.png",c.p+"static/media/banner-accessories.bdd2e0fc.png"]),k=function(){var e=Object(d.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],n=function(){s((function(e){return e===g.length-1?0:e+1}))},a=function(e){s(e)};return Object(d.useEffect)((function(){var e=setInterval((function(){n()}),3e3);return function(){return clearInterval(e)}}),[c]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"slider",children:[Object(u.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-left",onClick:function(){s((function(e){return 0===e?g.length-1:e-1}))}}),Object(u.jsx)("ul",{className:"slider__photo",children:g.map((function(e,t){return Object(u.jsx)("li",{className:"slider__item ".concat(t===c?"active":""),children:Object(u.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"slider__image"})},e)}))}),Object(u.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-right",onClick:n})]}),Object(u.jsxs)("div",{className:"slider slider__buttons",children:[Object(u.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(0===c?"is-active":""),onClick:function(){return a(0)}}),Object(u.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(1===c?"is-active":""),onClick:function(){return a(1)}}),Object(u.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(2===c?"is-active":""),onClick:function(){return a(2)}})]})]})},y=c.p+"static/media/category-phones.af93d992.png",S=c.p+"static/media/category-accessories.e47d6d6d.png",P=c.p+"static/media/category-tablets.51782e18.png",C=(c(39),function(e){var t=e.phones,c=e.accessories,s=e.tablets;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"name__page hot-phones__title",children:"Shop by category"}),Object(u.jsxs)("div",{className:"sortedProduct",children:[Object(u.jsx)("div",{className:"sortedProduct__block",children:Object(u.jsxs)(a.b,{to:"/phones",className:"sortedProduct__link",children:[Object(u.jsx)("div",{className:"sortedProduct__photo",children:Object(u.jsx)("img",{src:y,alt:"sortedPhone",className:"sortedProduct__img"})}),Object(u.jsx)("h3",{className:"sortedProduct__title",children:"Mobile phones"}),Object(u.jsx)("p",{className:"sortedProduct__count",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")})]})}),Object(u.jsx)("div",{className:"sortedProduct__block",children:Object(u.jsxs)(a.b,{to:"/tablets",className:"sortedProduct__link",children:[Object(u.jsx)("div",{className:"sortedProduct__photo",children:Object(u.jsx)("img",{src:P,alt:"sortedTablets",className:"sortedProduct__img"})}),Object(u.jsx)("h3",{className:"sortedProduct__title",children:"Tablets"}),Object(u.jsx)("p",{className:"sortedProduct__count",children:"".concat(s.length," ").concat(s.length<=1?"model":"models")})]})}),Object(u.jsx)("div",{className:"sortedProduct__block",children:Object(u.jsxs)(a.b,{to:"/accessories",className:"sortedProduct__link",children:[Object(u.jsx)("div",{className:"sortedProduct__photo",children:Object(u.jsx)("img",{src:S,alt:"sortedAccessories",className:"sortedProduct__img"})}),Object(u.jsx)("h3",{className:"sortedProduct__title",children:"Accessories"}),Object(u.jsx)("p",{className:"sortedProduct__count",children:"".concat(c.length," ").concat(c.length<=1?"model":"models")})]})})]})]})}),w=function(){var e=localStorage.getItem("products"),t=e?JSON.parse(e):[],c=t.filter((function(e){return"phone"===e.type})),s=t.filter((function(e){return"accessorie"===e.type})),n=t.filter((function(e){return"tablet"===e.type}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{}),Object(u.jsx)(v,{phones:c}),Object(u.jsx)(C,{phones:c,accessories:s,tablets:n}),Object(u.jsx)(f,{phones:c})]})},I=function(){return Object(u.jsx)("h1",{className:"title",children:"Page not found"})},J=(c(40),function(e){var t=e.products;return Object(u.jsx)("div",{"data-cy":"productList",children:Object(u.jsx)("ul",{className:"product",children:t.map((function(e){return Object(u.jsx)("li",{className:"product__item",children:Object(u.jsx)(x,{phone:e})},e.id)}))})})}),A=(c(41),function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"phone"===e.type}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"name__page",children:"Mobile phones"}),Object(u.jsx)("p",{className:"count__page",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")}),t.length&&Object(u.jsx)(J,{products:t})]})}),L=(c(42),function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"tablet"===e.type}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"name__page",children:"Tablets"}),Object(u.jsx)("p",{className:"count__page",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")}),t.length&&Object(u.jsx)(J,{products:t})]})}),M=function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"accessorie"===e.type}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"name__page",children:"Accessories"}),Object(u.jsx)("p",{className:"count__page",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")}),t.length?Object(u.jsx)(J,{products:t}):Object(u.jsxs)("h1",{className:"name__page no-goods",children:["Regrettably, at this juncture, "," our store does not presently have any products"," available within this particular category."]})]})},T=function(){return Object(u.jsx)(u.Fragment,{})},U=function(){return Object(u.jsx)(u.Fragment,{})},B=function(){return Object(u.jsx)(a.a,{children:Object(u.jsx)(r.e,{children:Object(u.jsxs)(r.c,{path:"/",element:Object(u.jsx)(_,{}),children:[Object(u.jsx)(r.c,{index:!0,element:Object(u.jsx)(w,{})}),Object(u.jsx)(r.c,{path:"/home",element:Object(u.jsx)(r.a,{to:"/",replace:!0})}),Object(u.jsx)(r.c,{path:"/phones",children:Object(u.jsx)(r.c,{index:!0,element:Object(u.jsx)(A,{})})}),Object(u.jsx)(r.c,{path:"/tablets",children:Object(u.jsx)(r.c,{index:!0,element:Object(u.jsx)(L,{})})}),Object(u.jsx)(r.c,{path:"/accessories",children:Object(u.jsx)(r.c,{index:!0,element:Object(u.jsx)(M,{})})}),Object(u.jsx)(r.c,{path:"/favourites",children:Object(u.jsx)(r.c,{index:!0,element:Object(u.jsx)(T,{})})}),Object(u.jsx)(r.c,{path:"/cart",children:Object(u.jsx)(r.c,{index:!0,element:Object(u.jsx)(U,{})})}),Object(u.jsx)(r.c,{path:"*",element:Object(u.jsx)(I,{})})]})})})};n.a.render(Object(u.jsx)(B,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9723309e.chunk.js.map