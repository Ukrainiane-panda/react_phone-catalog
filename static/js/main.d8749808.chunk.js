(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(26).concat([function(e,t,c){},,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(27),a=c.n(s),n=c(6),r=c(3),i=c(8),o=c(4),l=c(5),d=c.n(l),j=c(1),u=c(10),b=c.n(u),h=(c(26),c(0)),m=function(){var e=Object(r.n)(),t="/"===e.pathname,c="/phones"===e.pathname,s="/tablets"===e.pathname,a="/accessories"===e.pathname;return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("nav",{className:"header__nav nav",children:[Object(h.jsxs)("div",{className:"nav__menu",children:[Object(h.jsx)(n.c,{to:"/",className:"nav__logo",children:Object(h.jsx)("span",{className:"logo"})}),Object(h.jsx)(n.c,{to:"home",className:b()("nav__link",{"is-active-link":t}),children:"Home"}),Object(h.jsx)(n.c,{to:"phones",className:b()("nav__link",{"is-active-link":c}),children:"Phones"}),Object(h.jsx)(n.c,{to:"tablets",className:b()("nav__link",{"is-active-link":s}),children:"Tablets"}),Object(h.jsx)(n.c,{to:"accessories",className:b()("nav__link",{"is-active-link":a}),children:"Accessories"})]}),Object(h.jsxs)("div",{className:"nav__menu",children:[c&&Object(h.jsx)("form",{className:"nav__form",children:Object(h.jsx)("input",{type:"text",className:"search",placeholder:"Search in phones..."})}),s&&Object(h.jsx)("form",{className:"nav__form",children:Object(h.jsx)("input",{type:"text",className:"search",placeholder:"Search in tablets..."})}),a&&Object(h.jsx)("form",{className:"nav__form",children:Object(h.jsx)("input",{type:"text",className:"search",placeholder:"Search in accessories..."})}),Object(h.jsx)(n.c,{to:"favourites",className:"icon__favourites",children:Object(h.jsx)("span",{className:"icon icon-favourites"})}),Object(h.jsx)(n.c,{to:"cart",className:"icon__cart",children:Object(h.jsx)("span",{className:"icon icon-cart"})})]})]})})},O=(c(34),function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("div",{className:"footer__logo",children:Object(h.jsx)(n.c,{to:"/",className:"nav__logo",children:Object(h.jsx)("span",{className:"logo"})})}),Object(h.jsxs)("div",{className:"footer__menu",children:[Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Contacts"}),Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Rights"})]}),Object(h.jsxs)("button",{type:"button",className:"button button-link",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(h.jsx)("p",{className:"button__text",children:"Back to top"}),Object(h.jsx)("span",{className:"icon icon-back"})]})]})}),_="https://mate-academy.github.io/react_phone-catalog/api/";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),p(500).then((function(){return fetch(_+e,s)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var v=function(e){return x(e)};var f=c(9),N=c(11),g=Object(j.createContext)(void 0),P=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(N.a)(Object(N.a)({},e),{},{cart:[].concat(Object(f.a)(e.cart),[t.payload])});case"REMOVE_FROM_CART":return Object(N.a)(Object(N.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});default:return e}},y=function(e){localStorage.setItem("cart",JSON.stringify(e))},D=function(e){var t=e.children,c=Object(j.useReducer)(P,function(){var e=localStorage.getItem("cart");return{cart:e?JSON.parse(e):[]}}()),s=Object(o.a)(c,2),a=s[0],n=s[1];return Object(h.jsx)(g.Provider,{value:{cart:a.cart,handleAddToCart:function(e){n({type:"ADD_TO_CART",payload:e}),y([].concat(Object(f.a)(a.cart),[e]))},handleRemoveFromCart:function(e){n({type:"REMOVE_FROM_CART",payload:e}),y(a.cart.filter((function(t){return t.id!==e.id})))}},children:t})},S=Object(j.createContext)(void 0),k=function(e,t){switch(t.type){case"ADD_TO_FAV":return Object(N.a)(Object(N.a)({},e),{},{favourites:[].concat(Object(f.a)(e.favourites),[t.payload])});case"REMOVE_FROM_FAV":return Object(N.a)(Object(N.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.id!==t.payload.id}))});default:return e}},C=function(e){var t=e.children,c=Object(j.useReducer)(k,function(){var e=localStorage.getItem("favourites");return{favourites:e?JSON.parse(e):[]}}()),s=Object(o.a)(c,2),a=s[0],n=s[1];return Object(j.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(a.favourites))}),[a.favourites]),Object(h.jsx)(S.Provider,{value:{state:a,dispatch:n},children:t})},w=(c(35),function(){var e=Object(j.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(j.useState)(!1),n=Object(o.a)(a,2),l=n[0],u=n[1];console.log(c,l);var b=function(){var e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,x("/products.json");case 4:t=e.sent,localStorage.setItem("products",JSON.stringify(t)),s(t);case 7:return e.prev=7,u(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){var e=localStorage.getItem("products");e?s(JSON.parse(e)):b()}),[]),Object(h.jsx)(D,{children:Object(h.jsx)(C,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsx)("main",{children:Object(h.jsx)(r.b,{})}),Object(h.jsx)(O,{})]})})})}),A=(c(36),function(e){var t=e.product,c=e.styles,s=function(){var e=Object(j.useContext)(S);if(!e)throw new Error("useFavourites must be used within a FavouritesProvider");var t=e.state,c=e.dispatch;return{favourites:t.favourites,handleAddToFav:function(e){c({type:"ADD_TO_FAV",payload:e})}}}(),a=s.favourites,n=s.handleAddToFav,r=a.some((function(e){return e.id===t.id}));return Object(h.jsx)("button",{"data-cy":"addToFavorite",type:"button",className:"AddToLike",style:c,onClick:function(e){e.preventDefault(),n(t)},children:Object(h.jsx)("div",{className:b()("icon__like",{"icon__like-noSelect":!r,"icon__like-selected":r})})})}),I=(c(37),function(e){var t=e.product,c=e.styles,s=function(){var e=Object(j.useContext)(g);if(!e)throw new Error("useCart must be used within a CartProvider");var t=e.cart,c=e.handleAddToCart,s=e.handleRemoveFromCart;return{cart:t,handleAddToCart:function(e){c(e),y([].concat(Object(f.a)(t),[e]))},handleRemoveFromCart:function(e){s(e),y(t.filter((function(t){return t.id!==e.id})))}}}(),a=s.cart,n=s.handleAddToCart,r=a.some((function(e){return e.id===t.id}));return Object(h.jsx)("button",{type:"button",className:b()("AddToCart",{"added-to-cart":r}),style:c,onClick:function(e){e.preventDefault(),n({id:t.id,quantity:1,product:t})},children:r?"Added to cart":"Add to cart"})}),T=(c(38),function(e){var t=e.phone,c="/".concat(t.type,"s/").concat(t.id);return Object(h.jsxs)(n.b,{to:c,className:"card","data-cy":"cardsContainer",children:[Object(h.jsx)("img",{className:"card__img",src:t.imageUrl,alt:t.name}),Object(h.jsxs)("div",{className:"card__description",children:[Object(h.jsx)("h2",{className:"card__title",children:t.name}),Object(h.jsxs)("p",{className:"card__price",children:["$".concat(t.price," "),Object(h.jsx)("span",{className:"card__price--discount",children:"$".concat(t.price+t.discount)})]})]}),Object(h.jsxs)("div",{className:"card__details",children:[Object(h.jsxs)("div",{className:"card__detail Screen",children:[Object(h.jsx)("div",{children:"Screen"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.screen})]}),Object(h.jsxs)("div",{className:"card__detail Capacity",children:[Object(h.jsx)("div",{children:"Capacity"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.capacity})]}),Object(h.jsxs)("div",{className:"card__detail",children:[Object(h.jsx)("div",{children:"RAM"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.ram})]})]}),Object(h.jsxs)("div",{className:"card__link",children:[Object(h.jsx)(I,{product:t,styles:{width:"176px",height:"40px"}}),Object(h.jsx)(A,{product:t,styles:{width:"40px",height:"40px"}})]})]})}),R=(c(39),c(40),function(e){var t=e.title,c=e.visibleCards,s=e.start,a=e.setStart,n=e.arrLength,r=e.end;return Object(h.jsxs)("div",{className:"hot-phones__top","data-cy":"productList",children:[Object(h.jsx)("h1",{className:"hot-phones__title name__page",children:t}),Object(h.jsxs)("div",{className:"hot-phones__buttons",children:[Object(h.jsx)("button",{className:b()("hot-phones__button hot-phones__button-left",{"hot-phones__button-left--disabled":0===s}),type:"button",onClick:function(){return a((e=s,Math.max(e-1,0)));var e},disabled:0===s,children:Object(h.jsx)("p",{hidden:!0,children:"left button"})}),Object(h.jsx)("button",{className:b()("hot-phones__button hot-phones__button-right",{"hot-phones__button-right--disabled":r>=n}),type:"button",onClick:function(){return a((e=s,Math.min(e+1,n-c)));var e},disabled:0===r,children:Object(h.jsx)("p",{hidden:!0,children:"right button"})})]})]})}),F=function(e){var t=e.phones,c=Object(j.useState)(0),s=Object(o.a)(c,2),a=s[0],n=s[1],r=a+4,i=t.sort((function(e,t){return t.discount-e.discount})),l=i.length;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"hot-phones",children:[Object(h.jsx)(R,{title:"Hot prices",visibleCards:4,start:a,setStart:n,arrLength:l,end:r}),Object(h.jsx)("div",{className:"hot-phones__phones",children:Object(h.jsx)("ul",{className:"product",children:i.slice(a,r).map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(T,{phone:e})},e.id)}))})})]})})},E=(c(41),function(e){var t=e.phones,c=Object(j.useState)(0),s=Object(o.a)(c,2),a=s[0],n=s[1],r=a+4,i=t.sort((function(e,t){return t.age-e.age})),l=i.length;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"hot-phones",children:[Object(h.jsx)(R,{title:"Brand new models",visibleCards:4,start:a,setStart:n,arrLength:l,end:r}),Object(h.jsx)("div",{className:"hot-phones__phones",children:Object(h.jsx)("ul",{className:"product",children:i.slice(a,r).map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(T,{phone:e})},e.id)}))})})]})})}),J=(c(42),[c.p+"static/media/banner-phones.b4eeda8b.png",c.p+"static/media/banner-tablets.a962057c.png",c.p+"static/media/banner-accessories.bdd2e0fc.png"]),M=function(){var e=Object(j.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],a=function(){s((function(e){return e===J.length-1?0:e+1}))},n=function(e){s(e)};return Object(j.useEffect)((function(){var e=setInterval((function(){a()}),3e3);return function(){return clearInterval(e)}}),[c]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-left",onClick:function(){s((function(e){return 0===e?J.length-1:e-1}))}}),Object(h.jsx)("ul",{className:"slider__photo",children:J.map((function(e,t){return Object(h.jsx)("li",{className:"slider__item ".concat(t===c?"active":""),children:Object(h.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"slider__image"})},e)}))}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-right",onClick:a})]}),Object(h.jsxs)("div",{className:"slider slider__buttons",children:[Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(0===c?"is-active":""),onClick:function(){return n(0)}}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(1===c?"is-active":""),onClick:function(){return n(1)}}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(2===c?"is-active":""),onClick:function(){return n(2)}})]})]})},q=c.p+"static/media/category-phones.9d91280e.png",B=c.p+"static/media/category-accessories.c89ddada.png",L=c.p+"static/media/category-tablets.ab919a9b.png",U=(c(43),function(e){var t=e.phones,c=e.accessories,s=e.tablets;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"name__page hot-phones__title",children:"Shop by category"}),Object(h.jsxs)("div",{className:"sortedProduct",children:[Object(h.jsx)("div",{className:"sortedProduct__block",children:Object(h.jsxs)(n.c,{to:"/phones",className:"sortedProduct__link",children:[Object(h.jsx)("div",{className:"sortedProduct__photo",children:Object(h.jsx)("img",{src:q,alt:"sortedPhone",className:"sortedProduct__img"})}),Object(h.jsx)("h3",{className:"sortedProduct__title",children:"Mobile phones"}),Object(h.jsx)("p",{className:"sortedProduct__count",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")})]})}),Object(h.jsx)("div",{className:"sortedProduct__block",children:Object(h.jsxs)(n.c,{to:"/tablets",className:"sortedProduct__link",children:[Object(h.jsx)("div",{className:"sortedProduct__photo",children:Object(h.jsx)("img",{src:L,alt:"sortedTablets",className:"sortedProduct__img"})}),Object(h.jsx)("h3",{className:"sortedProduct__title",children:"Tablets"}),Object(h.jsx)("p",{className:"sortedProduct__count",children:"".concat(s.length," ").concat(s.length<=1?"model":"models")})]})}),Object(h.jsx)("div",{className:"sortedProduct__block",children:Object(h.jsxs)(n.c,{to:"/accessories",className:"sortedProduct__link",children:[Object(h.jsx)("div",{className:"sortedProduct__photo",children:Object(h.jsx)("img",{src:B,alt:"sortedAccessories",className:"sortedProduct__img"})}),Object(h.jsx)("h3",{className:"sortedProduct__title",children:"Accessories"}),Object(h.jsx)("p",{className:"sortedProduct__count",children:"".concat(c.length," ").concat(c.length<=1?"model":"models")})]})})]})]})}),V=function(){var e=localStorage.getItem("products"),t=e?JSON.parse(e):[],c=t.filter((function(e){return"phone"===e.type})),s=t.filter((function(e){return"accessorie"===e.type})),a=t.filter((function(e){return"tablet"===e.type}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(M,{}),Object(h.jsx)(F,{phones:c}),Object(h.jsx)(U,{phones:c,accessories:s,tablets:a}),Object(h.jsx)(E,{phones:c})]})},$=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})};c(44);function z(e){return e[0].toUpperCase()+e.slice(1)}var G=function(e){var t=e.product,c=Object(r.n)().pathname.slice(1).split("/")[0];return Object(h.jsxs)("div",{className:"breadCrumbs","data-cy":"breadCrumbs",children:[Object(h.jsx)(n.b,{to:"/",className:"breadCrumbs__link-home",children:Object(h.jsx)("div",{className:"icons icons--home"})}),Object(h.jsx)("div",{className:"icons icons--bread-crumb"}),t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.b,{to:"/".concat(c),className:"breadCrumbs__link",children:z(c)}),Object(h.jsx)("div",{className:"icons icons--bread-crumb"}),Object(h.jsx)("span",{className:"breadCrumbs__current",children:t.name})]}):Object(h.jsx)("span",{className:"breadCrumbs__current",children:z(c)})]})};G.defaultProps={product:null};c(45);var H,K=function(e){var t=e.products;return Object(h.jsx)("div",{"data-cy":"productList",children:Object(h.jsx)("ul",{className:"product",children:t.map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(T,{phone:e})},e.id)}))})})},Y=(c(46),function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"phone"===e.type}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(G,{}),Object(h.jsx)("h1",{className:"name__page",children:"Mobile phones"}),Object(h.jsx)("p",{className:"count__page",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")}),t.length&&Object(h.jsx)(K,{products:t})]})}),Z=(c(47),function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"tablet"===e.type}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(G,{}),Object(h.jsx)("h1",{className:"name__page",children:"Tablets"}),Object(h.jsx)("p",{className:"count__page",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")}),t.length&&Object(h.jsx)(K,{products:t})]})}),Q=function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"accessorie"===e.type}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(G,{}),Object(h.jsx)("h1",{className:"name__page",children:"Accessories"}),Object(h.jsx)("p",{className:"count__page",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")}),t.length?Object(h.jsx)(K,{products:t}):Object(h.jsxs)("h1",{className:"name__page no-goods",children:["Regrettably, at this juncture, "," our store does not presently have any products"," available within this particular category."]})]})},W=(c(48),function(){var e=Object(j.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(j.useEffect)((function(){var e=localStorage.getItem("favourites"),t=e?JSON.parse(e):[];s(t)}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"FavouritesPage",children:[Object(h.jsx)(G,{}),Object(h.jsx)("h1",{className:"FavouritesPage__title",children:"Favourites"}),Object(h.jsx)("p",{className:"FavouritesPage__count",children:c?"".concat(c.length," ").concat(c.length<=1?"model":"models"):"0 models"}),c.length&&Object(h.jsx)(K,{products:c})]})})}),X=(c(49),function(){var e=Object(r.p)();return Object(h.jsxs)("button",{"data-cy":"backButton",type:"button",className:"BackButton",onClick:function(){return e(-1)},children:[Object(h.jsx)("div",{className:"BackButton__icon icon--left"}),"Back"]})}),ee=(c(50),function(){var e=Object(j.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(j.useState)(0),n=Object(o.a)(a,2),r=n[0],i=n[1],l=Object(j.useState)(0),d=Object(o.a)(l,2),u=d[0],m=d[1];Object(j.useEffect)((function(){var e=localStorage.getItem("cart"),t=e?JSON.parse(e):[];s(t)}),[]);var O=function(e){return e.reduce((function(e,t){return e+(t.product.price-t.product.discount)*t.quantity}),0)};Object(j.useEffect)((function(){var e=O(c);i(e)}),[c]);var _=function(e){return e.reduce((function(e,t){return e+t.quantity}),0)};Object(j.useEffect)((function(){var e=_(c);m(e)}),[c]);var p=function(e,t){var a=c.map((function(c){return c.id===e?Object(N.a)(Object(N.a)({},c),{},{quantity:t}):c}));s(a);var n=O(a);i(n),localStorage.setItem("cart",JSON.stringify(a))},x=function(e){var t=c.filter((function(t){return t.id!==e}));s(t);var a=O(t);i(a);var n=_(t);m(n),localStorage.setItem("cart",JSON.stringify(t))};return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"CartPage",children:[Object(h.jsx)(X,{}),Object(h.jsx)("h1",{className:"CartPage__title",children:"Cart"}),c.length&&Object(h.jsxs)("div",{className:"CartPage__content content",children:[Object(h.jsx)("div",{className:"content__cards",children:Object(h.jsx)("ul",{className:"content__cards--list",children:c.map((function(e){return Object(h.jsxs)("li",{className:"cardItem",children:[Object(h.jsx)("div",{role:"button","aria-label":"Close",tabIndex:0,className:"cardItem__closing",onClick:function(){return x(e.id)},onKeyDown:function(t){"Enter"!==t.key&&"Space"!==t.key||x(e.id)}}),e.product&&Object(h.jsx)("img",{src:e.product.imageUrl,alt:e.product.name,className:"cardItem__image"}),Object(h.jsx)("h2",{className:"cardItem__title",children:e.product.name}),Object(h.jsxs)("div",{className:"cardItem__count",children:[Object(h.jsx)("button",{type:"button","aria-label":"minus",className:b()("cardItem__count--icon",{minusActive:e.quantity>1,minus:e.quantity<=1}),onClick:function(){return p(e.id,e.quantity-1)},disabled:e.quantity<=1}),Object(h.jsx)("div",{className:"cardItem__count--number",children:e.quantity}),Object(h.jsx)("button",{type:"button","aria-label":"plus",className:"cardItem__count--icon plus",onClick:function(){return p(e.id,e.quantity+1)}})]}),Object(h.jsx)("div",{className:"cardItem__sum",children:"$".concat(e.quantity*(e.product.price-e.product.discount))})]},e.id)}))})}),Object(h.jsxs)("div",{className:"content__calculator",children:[Object(h.jsxs)("div",{className:"content__price",children:[Object(h.jsx)("div",{className:"content__price--sum",children:"$".concat(r)}),Object(h.jsx)("p",{className:"content__price--count",children:"Total for ".concat(u," items")})]}),Object(h.jsx)("button",{type:"button",className:"content__button",children:"Checkout"})]})]})]})})}),te=(c(51),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});!function(e){e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}(H||(H={}));c(52);var ce=function(e){var t=e.phones,c=Object(j.useState)(0),s=Object(o.a)(c,2),a=s[0],n=s[1],r=a+4,i=t.map((function(e){return{phone:e,order:Math.random()}})).sort((function(e,t){return e.order-t.order})).map((function(e){return e.phone})),l=i.length;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"hot-phones",children:[Object(h.jsx)(R,{title:"You may also like",visibleCards:4,start:a,setStart:n,arrLength:l,end:r}),Object(h.jsx)("div",{className:"hot-phones__phones",children:Object(h.jsx)("ul",{className:"product",children:i.slice(a,r).map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(T,{phone:e})},e.id)}))})})]})})},se=function(){var e=Object(r.r)().productId,t=Object(j.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1],n=Object(j.useState)(null),i=Object(o.a)(n,2),l=i[0],d=i[1],u=Object(j.useState)(!1),m=Object(o.a)(u,2),O=m[0],_=m[1],p=Object(j.useState)(!1),f=Object(o.a)(p,2),N=f[0],g=f[1],P=Object(j.useState)(""),y=Object(o.a)(P,2),D=y[0],S=y[1];Object(j.useEffect)((function(){var t;console.log("ProductId:",e),e&&(_(!0),(t=e,x("/products/".concat(t,".json"))).then((function(e){console.log("API Response:",e),d(e),S(e.images[0]),console.log("Product")})).catch((function(e){console.error("API Error:",e),g(!0)})).finally((function(){_(!1)})))}),[e]),Object(j.useEffect)((function(){_(!0),v("products.json").then(a).catch((function(){g(!0)})).finally((function(){setTimeout((function(){_(!1)}),500)}))}),[]);var k=l&&function(e,t){return e.find((function(e){return e.id===t}))}(s,l.id),C=0;return k&&(C=(null===k||void 0===k?void 0:k.price)-(null===k||void 0===k?void 0:k.discount)),console.log(N),Object(h.jsx)(h.Fragment,{children:O?Object(h.jsx)(te,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"ProductDetailsPage",children:[Object(h.jsx)(G,{product:l}),Object(h.jsx)("h1",{className:"ProductDetailsPage__title",children:null===l||void 0===l?void 0:l.name}),Object(h.jsx)("section",{className:"ProductDetailsPage__content",children:Object(h.jsxs)("div",{className:"ProductDetailsPage__content-imgs-wrapper",children:[Object(h.jsx)("div",{className:"ProductDetailsPage__images",children:null===l||void 0===l?void 0:l.images.map((function(e){return Object(h.jsx)("button",{type:"button",className:b()("ProductDetailsPage__images-button",{"image-active":e===D}),onClick:function(){return S(e)},children:Object(h.jsx)("img",{src:e,alt:e,className:"ProductDetailsPage__images-item"})},e)}))}),Object(h.jsx)("div",{className:"ProductDetailsPage__current-image",children:Object(h.jsx)("img",{src:D,alt:"",className:"ProductDetailsPage__current-image-item"})},Math.random()),Object(h.jsxs)("div",{className:"ProductDetailsPage__actions",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__options",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__options-title",children:"Available colors"}),Object(h.jsx)("ul",{className:"ProductDetailsPage__options-list",children:"Available colors"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__options",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__options-title",children:"Select capacity"}),Object(h.jsx)("ul",{className:"ProductDetailsPage__options-list",children:null===l||void 0===l?void 0:l.storage.ram})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__prices",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__prices-now",children:"$".concat(C)}),Object(h.jsx)("span",{className:"ProductDetailsPage__prices-before",children:"$".concat(null===k||void 0===k?void 0:k.price)})]}),k&&Object(h.jsxs)("div",{className:"ProductDetailsPage__buttons",children:[Object(h.jsx)(I,{product:k,styles:{width:"263px",height:"48px"}}),Object(h.jsx)(A,{product:k,styles:{width:"48px",height:"48px"}})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"Screen"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.display.screenSize})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"Resolution"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.display.screenResolution})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"Processor"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.hardware.cpu})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"RAM"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.storage.ram})]})]})]})]})}),Object(h.jsxs)("section",{className:"ProductDetailsPage__more",children:[Object(h.jsx)("div",{className:"ProductDetailsPage__more-about",children:Object(h.jsxs)("div",{className:"ProductDetailsPage__more-title",children:[Object(h.jsx)("h2",{className:"ProductDetailsPage__more-title-item",children:"About"}),Object(h.jsx)("div",{children:null===l||void 0===l?void 0:l.description})]})}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech",children:[Object(h.jsx)("div",{className:"ProductDetailsPage__more-title",children:Object(h.jsx)("h2",{className:"ProductDetailsPage__more-title-item",children:"Tech specs"})}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-content",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Screen"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.display.screenSize})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Resolution"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.display.screenResolution})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Processor"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.hardware.cpu})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"RAM"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null!==l&&void 0!==l&&l.storage.ram?l.storage.ram:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Built in memory"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null!==l&&void 0!==l&&l.storage.flash?l.storage.flash:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Camera"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null!==l&&void 0!==l&&l.camera.primary?l.camera.primary:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Zoom"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Cell"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.connectivity.cell})]})]})]})]})]})}),Object(h.jsx)(ce,{phones:s})]})})},ae=function(){return Object(h.jsx)(n.a,{children:Object(h.jsx)(r.e,{children:Object(h.jsxs)(r.c,{path:"/",element:Object(h.jsx)(w,{}),children:[Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(V,{})}),Object(h.jsx)(r.c,{path:"home",element:Object(h.jsx)(r.a,{to:"/",replace:!0})}),Object(h.jsxs)(r.c,{path:"phones",children:[Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(Y,{})}),Object(h.jsx)(r.c,{path:":productId",element:Object(h.jsx)(se,{})})]}),Object(h.jsxs)(r.c,{path:"tablets",children:[Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(Z,{})}),Object(h.jsx)(r.c,{path:":productId",element:Object(h.jsx)(se,{})})]}),Object(h.jsx)(r.c,{path:"accessories",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(Q,{})})}),Object(h.jsx)(r.c,{path:"favourites",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(W,{})})}),Object(h.jsx)(r.c,{path:"cart",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(ee,{})})}),Object(h.jsx)(r.c,{path:"*",element:Object(h.jsx)($,{})})]})})})};a.a.render(Object(h.jsx)(ae,{}),document.getElementById("root"))}]),[[53,1,2]]]);
//# sourceMappingURL=main.d8749808.chunk.js.map