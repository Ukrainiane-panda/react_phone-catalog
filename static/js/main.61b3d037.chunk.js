(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(26).concat([function(e,t,c){},,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(27),s=c.n(a),n=c(6),r=c(3),i=c(9),o=c(4),l=c(5),d=c.n(l),u=c(1),j=c(7),b=c(10),h=c(0),m=Object(u.createContext)(void 0),O=function(e,t){switch(t.type){case"ADD_TO_FAV":return Object(b.a)(Object(b.a)({},e),{},{favourites:[].concat(Object(j.a)(e.favourites),[t.payload])});case"REMOVE_FROM_FAV":return Object(b.a)(Object(b.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.id!==t.payload.id}))});default:return e}},p=function(e){var t=e.children,c=Object(u.useReducer)(O,function(){var e=localStorage.getItem("favourites");return{favourites:e?JSON.parse(e):[]}}()),a=Object(o.a)(c,2),s=a[0],n=a[1];return Object(u.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(s.favourites))}),[s.favourites]),Object(h.jsx)(m.Provider,{value:{state:s,dispatch:n},children:t})},_=function(){var e=Object(u.useContext)(m);if(!e)throw new Error("useFavourites must be used within a FavouritesProvider");var t=e.state,c=e.dispatch;return{favourites:t.favourites,handleToggleFav:function(e){t.favourites.some((function(t){return t.id===e.id}))?c({type:"REMOVE_FROM_FAV",payload:e}):c({type:"ADD_TO_FAV",payload:e})}}},x=Object(u.createContext)(void 0),v=function(e){var t=e.children,c=Object(u.useState)([]),a=Object(o.a)(c,2),s=a[0],n=a[1],r=Object(u.useState)("all"),i=Object(o.a)(r,2),l=i[0],d=i[1];return Object(h.jsx)(x.Provider,{value:{searchResults:s,setSearchResults:n,productType:l,setProductType:d},children:t})},f=c(11),g=c.n(f),N=Object(u.createContext)(void 0),P=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(b.a)(Object(b.a)({},e),{},{cart:[].concat(Object(j.a)(e.cart),[t.payload])});case"REMOVE_FROM_CART":return Object(b.a)(Object(b.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"UPDATE_QUANTITY":return Object(b.a)(Object(b.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),{},{quantity:t.payload.quantity}):e}))});default:return e}},y=function(e){localStorage.setItem("cart",JSON.stringify(e))},w=function(e){var t=e.children,c=Object(u.useReducer)(P,function(){var e=localStorage.getItem("cart");return{cart:e?JSON.parse(e):[]}}()),a=Object(o.a)(c,2),s=a[0],n=a[1];return Object(h.jsx)(N.Provider,{value:{cart:s.cart,handleAddToCart:function(e){n({type:"ADD_TO_CART",payload:e}),y([].concat(Object(j.a)(s.cart),[e]))},handleRemoveFromCart:function(e){n({type:"REMOVE_FROM_CART",payload:e}),y(s.cart.filter((function(t){return t.id!==e.id})))},updateQuantity:function(e,t){var c=s.cart.find((function(t){return t.id===e}));if(c){var a=s.cart.map((function(c){return c.id===e?Object(b.a)(Object(b.a)({},c),{},{quantity:t}):c}));n({type:"UPDATE_QUANTITY",payload:Object(b.a)(Object(b.a)({},c),{},{quantity:t})}),y(a)}}},children:t})},D=function(){var e=Object(u.useContext)(N);if(!e)throw new Error("useCart must be used within a CartProvider");var t=e.cart,c=e.handleAddToCart,a=e.handleRemoveFromCart,s=e.updateQuantity;return{cart:t,handleAddToCart:function(e){c(e),y([].concat(Object(j.a)(t),[e]))},handleRemoveFromCart:function(e){a(e),y(t.filter((function(t){return t.id!==e.id})))},updateQuantity:function(e,c){if(t.find((function(t){return t.id===e}))){s(e,c);var a=t.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{quantity:c}):t}));y(a)}}}};function k(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(o.a)(e,2),a=t[0],s=t[1];null===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}c(26);var C=function(){var e,t=Object(r.n)(),c=D().cart,a=_().favourites,s=Object(u.useState)(!1),i=Object(o.a)(s,2),l=i[0],d=i[1],j=Object(n.d)(),b=Object(o.a)(j,2),m=b[0],O=b[1],p=m.get("query")||"",x="/"===t.pathname,v="/phones"===t.pathname,f="/tablets"===t.pathname,N="/accessories"===t.pathname,P="/favourites"===t.pathname,y="/cart"===t.pathname,w=c.reduce((function(e,t){return e+t.quantity}),0);switch(!0){case v:e="phones";break;case f:e="tablets";break;case N:e="accessories";break;case P:e="favourites";break;default:e=""}return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("nav",{className:"header__nav nav",children:[Object(h.jsxs)("div",{className:"nav__menu",children:[Object(h.jsx)(n.c,{to:"/",className:"nav__logo",children:Object(h.jsx)("span",{className:"logo"})}),!y&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.c,{to:"home",className:g()("nav__link",{"is-active-link":x}),children:"Home"}),Object(h.jsx)(n.c,{to:"phones",className:g()("nav__link",{"is-active-link":v}),children:"Phones"}),Object(h.jsx)(n.c,{to:"tablets",className:g()("nav__link",{"is-active-link":f}),children:"Tablets"}),Object(h.jsx)(n.c,{to:"accessories",className:g()("nav__link",{"is-active-link":N}),children:"Accessories"})]})]}),Object(h.jsxs)("div",{className:"nav__menu",children:[(v||f||N||P)&&Object(h.jsxs)("div",{className:"nav__form",children:[Object(h.jsx)("input",{type:"text",className:"search",placeholder:"Search in ".concat(e,"..."),value:p,onChange:function(e){O(k(m,{query:e.target.value||null})),d(!0),null===p&&d(!1)},onBlur:function(){return d(""!==p)}}),l?Object(h.jsx)("button",{type:"button","aria-label":"reset",className:"search__reset",onClick:function(){O(k(m,{query:null})),d(!1)}}):Object(h.jsx)("div",{className:"search__icon"})]}),!y&&Object(h.jsxs)(n.c,{to:"favourites",className:"icon__favourites",children:[Object(h.jsx)("span",{className:"icon icon-favourites"}),a.length>=1&&Object(h.jsx)("div",{className:"icon-count icon-count-fav",children:a.length})]}),Object(h.jsxs)(n.c,{to:"cart",className:"icon__cart",children:[Object(h.jsx)("span",{className:"icon icon-cart"}),c.length>=1&&Object(h.jsx)("div",{className:"icon-count icon-count-cart",children:w})]})]})]})})},S=(c(34),function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("div",{className:"footer__logo",children:Object(h.jsx)(n.c,{to:"/",className:"nav__logo",children:Object(h.jsx)("span",{className:"logo"})})}),Object(h.jsxs)("div",{className:"footer__menu",children:[Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Contacts"}),Object(h.jsx)("a",{href:"https://github.com/Ukrainiane-panda",className:"nav__link",target:"_blank",rel:"noopener noreferrer",children:"Rights"})]}),Object(h.jsxs)("button",{type:"button",className:"button button-link",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(h.jsx)("p",{className:"button__text",children:"Back to top"}),Object(h.jsx)("span",{className:"icon icon-back"})]})]})}),A="https://mate-academy.github.io/react_phone-catalog/api/";function T(e){return new Promise((function(t){setTimeout(t,e)}))}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return c&&(a.body=JSON.stringify(c),a.headers={"Content-Type":"application/json; charset=UTF-8"}),T(500).then((function(){return fetch(A+e,a)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var I=function(e){return E(e)},R=(c(35),function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(u.useState)(!1),n=Object(o.a)(s,2),l=n[0],j=n[1];console.log(c,l);var b=function(){var e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,E("/products.json");case 4:t=e.sent,localStorage.setItem("products",JSON.stringify(t)),a(t);case 7:return e.prev=7,j(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=localStorage.getItem("products");e?a(JSON.parse(e)):b()}),[]),Object(h.jsx)(w,{children:Object(h.jsx)(p,{children:Object(h.jsx)(v,{children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(C,{}),Object(h.jsx)("main",{children:Object(h.jsx)(r.b,{})}),Object(h.jsx)(S,{})]})})})})}),F=(c(36),function(e){var t=e.product,c=e.styles,a=_(),s=a.favourites,n=a.handleToggleFav,r=s.some((function(e){return e.id===t.id}));return Object(h.jsx)("button",{"data-cy":"addToFavorite",type:"button",className:"AddToLike",style:c,onClick:function(e){e.preventDefault(),n(t)},children:Object(h.jsx)("div",{className:g()("icon__like",{"icon__like-noSelect":!r,"icon__like-selected":r})})})}),q=(c(37),function(e){var t=e.product,c=e.styles,a=D(),s=a.cart,n=a.handleAddToCart,r=s.some((function(e){return e.id===t.id}));return Object(h.jsx)("button",{type:"button",className:g()("AddToCart",{"added-to-cart":r}),style:c,onClick:function(e){e.preventDefault(),n({id:t.id,quantity:1,product:t})},disabled:r,children:r?"Added to cart":"Add to cart"})}),L=(c(38),function(e){var t=e.phone,c="/".concat(t.type,"s/").concat(t.id);return Object(h.jsxs)(n.b,{to:c,className:"card","data-cy":"cardsContainer",children:[Object(h.jsx)("img",{className:"card__img",src:t.imageUrl,alt:t.name}),Object(h.jsxs)("div",{className:"card__description",children:[Object(h.jsx)("h2",{className:"card__title",children:t.name}),Object(h.jsxs)("p",{className:"card__price",children:["$".concat(t.price," "),Object(h.jsx)("span",{className:"card__price--discount",children:"$".concat(t.price+t.discount)})]})]}),Object(h.jsxs)("div",{className:"card__details",children:[Object(h.jsxs)("div",{className:"card__detail Screen",children:[Object(h.jsx)("div",{children:"Screen"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.screen})]}),Object(h.jsxs)("div",{className:"card__detail Capacity",children:[Object(h.jsx)("div",{children:"Capacity"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.capacity})]}),Object(h.jsxs)("div",{className:"card__detail",children:[Object(h.jsx)("div",{children:"RAM"}),Object(h.jsx)("div",{className:"card__detail-value",children:t.ram})]})]}),Object(h.jsxs)("div",{className:"card__link",children:[Object(h.jsx)(q,{product:t,styles:{width:"176px",height:"40px"}}),Object(h.jsx)(F,{product:t,styles:{width:"40px",height:"40px"}})]})]})}),M=(c(39),function(e){var t=e.title,c=e.visibleCards,a=e.start,s=e.setStart,n=e.arrLength,r=e.end;return Object(h.jsxs)("div",{className:"hot-phones__top","data-cy":"productList",children:[Object(h.jsx)("h1",{className:"hot-phones__title name__page",children:t}),Object(h.jsxs)("div",{className:"hot-phones__buttons",children:[Object(h.jsx)("button",{className:g()("hot-phones__button hot-phones__button-left",{"hot-phones__button-left--disabled":0===a}),type:"button",onClick:function(){return s((e=a,Math.max(e-1,0)));var e},disabled:0===a,children:Object(h.jsx)("p",{hidden:!0,children:"left button"})}),Object(h.jsx)("button",{className:g()("hot-phones__button hot-phones__button-right",{"hot-phones__button-right--disabled":r>=n}),type:"button",onClick:function(){return s((e=a,Math.min(e+1,n-c)));var e},disabled:0===r,children:Object(h.jsx)("p",{hidden:!0,children:"right button"})})]})]})}),B=(c(40),function(e){var t=e.phones,c=Object(u.useState)(4),a=Object(o.a)(c,2),s=a[0],n=a[1],r=Object(u.useState)(0),i=Object(o.a)(r,2),l=i[0],d=i[1],j=l+s,b=t.sort((function(e,t){return t.discount-e.discount})),m=b.length,O=function(){var e=window.innerWidth;e>1439?n(4):e>1144&&e<=1489?n(3):e>850&&e<=1144?n(2):e>300&&e<=850&&n(1)};return Object(u.useEffect)((function(){return O(),window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"hot-phones",children:[Object(h.jsx)(M,{title:"Hot prices",visibleCards:s,start:l,setStart:d,arrLength:m,end:j}),Object(h.jsx)("div",{className:"hot-phones__phones",children:Object(h.jsx)("ul",{className:"product__slider",children:b.slice(l,j).map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(L,{phone:e})},e.id)}))})})]})})}),J=(c(41),function(e){var t=e.phones,c=Object(u.useState)(4),a=Object(o.a)(c,2),s=a[0],n=a[1],r=Object(u.useState)(0),i=Object(o.a)(r,2),l=i[0],d=i[1],j=l+s,b=t.sort((function(e,t){return t.age-e.age})),m=b.length,O=function(){var e=window.innerWidth;e>1439?n(4):e>1144&&e<=1489?n(3):e>850&&e<=1144?n(2):e>300&&e<=850&&n(1)};return Object(u.useEffect)((function(){return O(),window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"hot-phones",children:[Object(h.jsx)(M,{title:"Brand new models",visibleCards:s,start:l,setStart:d,arrLength:m,end:j}),Object(h.jsx)("div",{className:"hot-phones__phones",children:Object(h.jsx)("ul",{className:"product__slider",children:b.slice(l,j).map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(L,{phone:e})},e.id)}))})})]})})}),U=(c(42),[c.p+"static/media/banner-phones.b4eeda8b.png",c.p+"static/media/banner-tablets.a962057c.png",c.p+"static/media/banner-accessories.bdd2e0fc.png"]),z=function(){var e=Object(u.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],s=function(){a((function(e){return e===U.length-1?0:e+1}))},n=function(e){a(e)};return Object(u.useEffect)((function(){var e=setInterval((function(){s()}),3e3);return function(){return clearInterval(e)}}),[c]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-left",onClick:function(){a((function(e){return 0===e?U.length-1:e-1}))}}),Object(h.jsx)("ul",{className:"slider__photo",children:U.map((function(e,t){return Object(h.jsx)("li",{className:"slider__item ".concat(t===c?"active":""),children:Object(h.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"slider__image"})},e)}))}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button move-right",onClick:s})]}),Object(h.jsxs)("div",{className:"slider slider__buttons",children:[Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(0===c?"is-active":""),onClick:function(){return n(0)}}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(1===c?"is-active":""),onClick:function(){return n(1)}}),Object(h.jsx)("button",{type:"button","aria-label":"button",className:"slider__button-down ".concat(2===c?"is-active":""),onClick:function(){return n(2)}})]})]})},V=c.p+"static/media/category-phones.9d91280e.png",Q=c.p+"static/media/category-accessories.c89ddada.png",$=c.p+"static/media/category-tablets.ab919a9b.png",W=(c(43),function(e){var t=e.phones,c=e.accessories,a=e.tablets;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"name__page hot-phones__title",children:"Shop by category"}),Object(h.jsxs)("div",{className:"sortedProduct",children:[Object(h.jsx)("div",{className:"sortedProduct__block",children:Object(h.jsxs)(n.c,{to:"/phones",className:"sortedProduct__link",children:[Object(h.jsx)("div",{className:"sortedProduct__photo",children:Object(h.jsx)("img",{src:V,alt:"sortedPhone",className:"sortedProduct__img"})}),Object(h.jsx)("h3",{className:"sortedProduct__title",children:"Mobile phones"}),Object(h.jsx)("p",{className:"sortedProduct__count",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")})]})}),Object(h.jsx)("div",{className:"sortedProduct__block",children:Object(h.jsxs)(n.c,{to:"/tablets",className:"sortedProduct__link",children:[Object(h.jsx)("div",{className:"sortedProduct__photo",children:Object(h.jsx)("img",{src:$,alt:"sortedTablets",className:"sortedProduct__img"})}),Object(h.jsx)("h3",{className:"sortedProduct__title",children:"Tablets"}),Object(h.jsx)("p",{className:"sortedProduct__count",children:"".concat(a.length," ").concat(a.length<=1?"model":"models")})]})}),Object(h.jsx)("div",{className:"sortedProduct__block",children:Object(h.jsxs)(n.c,{to:"/accessories",className:"sortedProduct__link",children:[Object(h.jsx)("div",{className:"sortedProduct__photo",children:Object(h.jsx)("img",{src:Q,alt:"sortedAccessories",className:"sortedProduct__img"})}),Object(h.jsx)("h3",{className:"sortedProduct__title",children:"Accessories"}),Object(h.jsx)("p",{className:"sortedProduct__count",children:"".concat(c.length," ").concat(c.length<=1?"model":"models")})]})})]})]})}),Y=function(){var e=localStorage.getItem("products"),t=e?JSON.parse(e):[],c=t.filter((function(e){return"phone"===e.type})),a=t.filter((function(e){return"accessorie"===e.type})),s=t.filter((function(e){return"tablet"===e.type}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(z,{}),Object(h.jsx)(B,{phones:c}),Object(h.jsx)(W,{phones:c,accessories:a,tablets:s}),Object(h.jsx)(J,{phones:c})]})},G=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})};c(44);function H(e){return e[0].toUpperCase()+e.slice(1)}var K=function(e){var t=e.product,c=Object(r.n)().pathname.slice(1).split("/")[0];return Object(h.jsxs)("div",{className:"breadCrumbs","data-cy":"breadCrumbs",children:[Object(h.jsx)(n.b,{to:"/",className:"breadCrumbs__link-home",children:Object(h.jsx)("div",{className:"icons icons--home"})}),Object(h.jsx)("div",{className:"icons icons--bread-crumb"}),t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.b,{to:"/".concat(c),className:"breadCrumbs__link",children:H(c)}),Object(h.jsx)("div",{className:"icons icons--bread-crumb"}),Object(h.jsx)("span",{className:"breadCrumbs__current",children:t.name})]}):Object(h.jsx)("span",{className:"breadCrumbs__current",children:H(c)})]})};K.defaultProps={product:null};c(45);var Z,X=function(e){var t=e.products;return Object(h.jsx)("div",{"data-cy":"productList",children:Object(h.jsx)("ul",{className:"product",children:t.map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(L,{phone:e})},e.id)}))})})},ee="Newest",te="Oldest",ce="Price high-to-low",ae="Price low-to-high",se="Alphabetically",ne=[{label:"Newest",value:ee},{label:"Oldest",value:te},{label:"Price high-to-low",value:ce},{label:"Price low-to-high",value:ae},{label:"Alphabetically",value:se}],re=(c(46),function(e){var t=e.options,c=e.param,a=e.selectedOption,s=Object(u.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],d=Object(n.d)(),j=Object(o.a)(d,2),b=j[0],m=j[1],O=function(){l(!i)};return Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsxs)("div",{className:"dropdown__select-container",children:[Object(h.jsx)("input",{type:"dropdown",className:"dropdown__select",value:a.label,onClick:O,onBlur:function(){setTimeout((function(){return l(!1)}),150)},readOnly:!0}),Object(h.jsx)("button",{"aria-label":"dropdown-arrow",type:"button",className:g()("dropdown__select-arrow",{"dropdown__select-arrow--down":!i,"dropdown__select-arrow--up":i}),onClick:O})]}),i&&Object(h.jsx)("div",{className:"dropdown__menu",role:"menu",children:t.map((function(e){return Object(h.jsx)(n.b,{to:"/",className:"dropdown__option",onClick:function(t){return function(e,t){e.preventDefault(),m(k(b,"sort"===c?{sort:t.value,page:"1"}:{perPage:t.value,page:"1"})),l(!1)}(t,e)},children:e.label},e.label)}))})]})}),ie=(c(47),function(e){var t=e.totalPages,c=e.currentPage,a=e.onPageChange,s=Array.from({length:t},(function(e,t){return t+1})),n=function(e){a(e)};return Object(h.jsx)("div",{className:"page-slider",children:s.map((function(e){return Object(h.jsx)("div",{role:"button",tabIndex:0,className:"page-slider__item ".concat(c===e?"active":""),onClick:function(){return n(e)},onKeyDown:function(){return n(e)},children:e},e)}))})}),oe=(c(48),function(){var e=Object(n.d)(),t=Object(o.a)(e,2),c=t[0],a=t[1],s=localStorage.getItem("products"),r=s?JSON.parse(s):[],i=c.get("perPage")||"16",l=r.filter((function(e){return"phone"===e.type})),d=[{label:"all",value:"".concat(l.length)},{label:"4",value:"4"},{label:"8",value:"8"},{label:"16",value:"16"}],b=+(c.get("page")||1),m=c.get("query")||"",O=c.get("sort")||"age",p=Object(u.useCallback)((function(){var e=Object(j.a)(l);return e=e.sort((function(e,t){switch(O){case se:return e.name.localeCompare(t.name);case ee:return e.age-t.age;case te:return t.age-e.age;case ae:return e.price-e.discount-(t.price-t.discount);case ce:return t.price-t.discount-(e.price-e.discount);default:return 0}})),m&&(e=e.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}))),e}),[r,m,O])(),_=(b-1)*+(1===b?i:+i),x=_+ +i,v=p.slice(_,x),f="all"===i||+i>=p.length;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(K,{}),Object(h.jsx)("h1",{className:"name__page",children:"Mobile phones"}),Object(h.jsx)("p",{className:"count__page",children:"".concat(p.length," ").concat(p.length<=1?"model":"models")}),Object(h.jsxs)("div",{className:"sorting",children:[Object(h.jsxs)("div",{className:"sorting__block",children:[Object(h.jsx)("div",{className:"sorting__title",children:"Sort by"}),Object(h.jsx)(re,{options:ne,param:"sort",selectedOption:ne.find((function(e){return e.value===O}))||ne[0]})]}),Object(h.jsxs)("div",{className:"sorting__block",children:[Object(h.jsx)("div",{className:"sorting__title",children:"Items on page"}),Object(h.jsx)(re,{options:d,param:"perPage",selectedOption:d.find((function(e){return e.value===i}))||d[0]})]})]}),p.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{products:v}),!f&&Object(h.jsx)(ie,{totalPages:Math.ceil(p.length/+i),currentPage:b,onPageChange:function(e){a(k(c,{page:"".concat(e)}))}})]}):Object(h.jsx)("h1",{className:"warning-message__text",children:"No search result"})]})}),le=(c(49),function(){var e=Object(n.d)(),t=Object(o.a)(e,2),c=t[0],a=t[1],s=localStorage.getItem("products"),r=s?JSON.parse(s):[],i=c.get("perPage")||"4",l=r.filter((function(e){return"tablet"===e.type})),d=[{label:"all",value:"".concat(l.length)},{label:"4",value:"4"},{label:"8",value:"8"},{label:"16",value:"16"}],b=+(c.get("page")||1),m=c.get("query")||"",O=c.get("sort")||"age",p=Object(u.useCallback)((function(){var e=Object(j.a)(l);return e=e.sort((function(e,t){switch(O){case se:return e.name.localeCompare(t.name);case ee:return e.age-t.age;case te:return t.age-e.age;case ae:return e.price-e.discount-(t.price-t.discount);case ce:return t.price-t.discount-(e.price-e.discount);default:return 0}})),m&&(e=e.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}))),e}),[l,m,O])(),_=(b-1)*+i,x=_+i,v=p.slice(_,+x),f="all"===i||+i>=p.length;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(K,{}),Object(h.jsx)("h1",{className:"name__page",children:"Tablets"}),Object(h.jsx)("p",{className:"count__page",children:"".concat(p.length," ").concat(p.length<=1?"model":"models")}),Object(h.jsxs)("div",{className:"sorting",children:[Object(h.jsxs)("div",{className:"sorting__block",children:[Object(h.jsx)("div",{className:"sorting__title",children:"Sort by"}),Object(h.jsx)(re,{options:ne,param:"sort",selectedOption:ne.find((function(e){return e.value===O}))||ne[0]})]}),Object(h.jsxs)("div",{className:"sorting__block",children:[Object(h.jsx)("div",{className:"sorting__title",children:"Items on page"}),Object(h.jsx)(re,{options:d,param:"perPage",selectedOption:d.find((function(e){return e.value===i}))||d[0]})]})]}),p.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{products:v}),!f&&Object(h.jsx)(ie,{totalPages:Math.ceil(p.length/+i),currentPage:b,onPageChange:function(e){a(k(c,{page:"".concat(e)}))}})]}):Object(h.jsx)("h1",{className:"warning-message__text",children:"No search result"})]})}),de=function(){var e=localStorage.getItem("products"),t=(e?JSON.parse(e):[]).filter((function(e){return"accessorie"===e.type}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(K,{}),Object(h.jsx)("h1",{className:"name__page",children:"Accessories"}),Object(h.jsx)("p",{className:"count__page",children:"".concat(t.length," ").concat(t.length<=1?"model":"models")}),t.length?Object(h.jsx)(X,{products:t}):Object(h.jsxs)("p",{className:"no-goods",children:["Regrettably, at this juncture, "," our store does not presently have any products"," available within this particular category."]})]})},ue=(c(50),function(){var e=_().favourites;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"FavouritesPage",children:[Object(h.jsx)(K,{}),Object(h.jsx)("h1",{className:"FavouritesPage__title name__page",children:"Favourites"}),Object(h.jsx)("p",{className:"count__page",children:e?"".concat(e.length," ").concat(e.length<=1?"model":"models"):"0 models"}),e.length>=1?Object(h.jsx)(X,{products:e}):Object(h.jsx)("p",{className:"no-goods",children:"No items have been added to favorites. Explore our selection and add items to your favorites list for convenient tracking and future purchases."})]})})}),je=(c(51),function(){var e=Object(r.p)();return Object(h.jsxs)("button",{"data-cy":"backButton",type:"button",className:"BackButton",onClick:function(){return e(-1)},children:[Object(h.jsx)("div",{className:"BackButton__icon icon--left"}),"Back"]})}),be=(c(52),function(){var e=D(),t=e.cart,c=e.handleRemoveFromCart,a=e.updateQuantity,s=Object(u.useState)(0),r=Object(o.a)(s,2),i=r[0],l=r[1],d=Object(u.useState)(0),j=Object(o.a)(d,2),b=j[0],m=j[1],O=function(e){return e.reduce((function(e,t){return e+(t.product.price-t.product.discount)*t.quantity}),0)},p=function(e){return e.reduce((function(e,t){return e+t.quantity}),0)};Object(u.useEffect)((function(){var e=O(t);l(e);var c=p(t);m(c)}),[t]);var _=function(e,c){a(e,c);var s=O(t);l(s)},x=function(e){var a=t.find((function(t){return t.id===e}));if(a){c(a);var s=O(t);l(s);var n=p(t);m(n)}};return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"CartPage",children:[Object(h.jsx)(je,{}),Object(h.jsx)("h1",{className:"CartPage__title",children:"Cart"}),t.length?Object(h.jsxs)("div",{className:"CartPage__content content",children:[Object(h.jsx)("div",{className:"content__cards",children:Object(h.jsx)("ul",{className:"content__cards--list",children:t.map((function(e){return Object(h.jsxs)("li",{className:"cardItem",children:[Object(h.jsx)("div",{role:"button","aria-label":"Close",tabIndex:0,className:"cardItem__closing","data-cy":"cartDeleteButton",onClick:function(){return x(e.id)},onKeyDown:function(t){"Enter"!==t.key&&"Space"!==t.key||x(e.id)}}),e.product&&Object(h.jsx)("img",{src:e.product.imageUrl,alt:e.product.name,className:"cardItem__image"}),Object(h.jsx)(n.b,{to:"/".concat(e.product.type,"s/").concat(e.product.id),className:"cardItem__title",children:Object(h.jsx)("h2",{className:"cardItem__title",children:e.product.name})}),Object(h.jsxs)("div",{className:"cardItem__count",children:[Object(h.jsx)("button",{type:"button","aria-label":"minus",className:g()("cardItem__count--icon",{minusActive:e.quantity>1,minus:e.quantity<=1}),onClick:function(){return _(e.id,e.quantity-1)},disabled:e.quantity<=1}),Object(h.jsx)("div",{className:"cardItem__count--number",children:e.quantity}),Object(h.jsx)("button",{type:"button","aria-label":"plus",className:"cardItem__count--icon plus",onClick:function(){return _(e.id,e.quantity+1)}})]}),Object(h.jsx)("div",{className:"cardItem__sum","data-cy":"productQauntity",children:"$".concat(e.quantity*(e.product.price-e.product.discount))})]},e.id)}))})}),Object(h.jsxs)("div",{className:"content__calculator",children:[Object(h.jsxs)("div",{className:"content__price",children:[Object(h.jsx)("div",{className:"content__price--sum",children:"$".concat(i)}),Object(h.jsx)("p",{className:"content__price--count",children:"Total for ".concat(b," items")})]}),Object(h.jsx)("button",{type:"button",className:"content__button",children:"Checkout"})]})]}):Object(h.jsx)("p",{className:"no-goods",children:"No items have been added to the shopping cart. Please explore our products and add your desired items to the cart for a delightful shopping experience."})]})})}),he=(c(53),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});!function(e){e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}(Z||(Z={}));c(54);var me=function(e){var t=e.phones,c=Object(u.useState)(4),a=Object(o.a)(c,2),s=a[0],n=a[1],r=Object(u.useState)(0),i=Object(o.a)(r,2),l=i[0],d=i[1],j=l+s,b=t.map((function(e){return{phone:e,order:Math.random()}})).sort((function(e,t){return e.order-t.order})).map((function(e){return e.phone})),m=b.length,O=function(){var e=window.innerWidth;e>1439?n(4):e>1144&&e<=1489?n(3):e>850&&e<=1144?n(2):e>300&&e<=850&&n(1)};return Object(u.useEffect)((function(){return O(),window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"hot-phones",children:[Object(h.jsx)(M,{title:"You may also like",visibleCards:s,start:l,setStart:d,arrLength:m,end:j}),Object(h.jsx)("div",{className:"hot-phones__phones",children:Object(h.jsx)("ul",{className:"product__slider",children:b.slice(l,j).map((function(e){return Object(h.jsx)("li",{className:"product__item",children:Object(h.jsx)(L,{phone:e})},e.id)}))})})]})})},Oe=function(){var e=Object(r.r)().productId,t=Object(u.useState)([]),c=Object(o.a)(t,2),a=c[0],s=c[1],n=Object(u.useState)(null),i=Object(o.a)(n,2),l=i[0],d=i[1],j=Object(u.useState)(!1),b=Object(o.a)(j,2),m=b[0],O=b[1],p=Object(u.useState)(!1),_=Object(o.a)(p,2),x=_[0],v=_[1],f=Object(u.useState)(""),N=Object(o.a)(f,2),P=N[0],y=N[1];Object(u.useEffect)((function(){var t;console.log("ProductId:",e),e&&(O(!0),(t=e,E("/products/".concat(t,".json"))).then((function(e){console.log("API Response:",e),d(e),y(e.images[0]),console.log("Product")})).catch((function(e){console.error("API Error:",e),v(!0)})).finally((function(){O(!1)})))}),[e]),Object(u.useEffect)((function(){O(!0),I("products.json").then(s).catch((function(){v(!0)})).finally((function(){setTimeout((function(){O(!1)}),500)}))}),[]);var w=l&&function(e,t){return e.find((function(e){return e.id===t}))}(a,l.id),D=0;return w&&(D=(null===w||void 0===w?void 0:w.price)-(null===w||void 0===w?void 0:w.discount)),console.log(x),Object(h.jsx)(h.Fragment,{children:m?Object(h.jsx)(he,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"ProductDetailsPage",children:[Object(h.jsx)(K,{product:l}),Object(h.jsx)("h1",{className:"ProductDetailsPage__title",children:null===l||void 0===l?void 0:l.name}),Object(h.jsx)("section",{className:"ProductDetailsPage__content",children:Object(h.jsxs)("div",{className:"ProductDetailsPage__content-imgs-wrapper",children:[Object(h.jsx)("div",{className:"ProductDetailsPage__images",children:null===l||void 0===l?void 0:l.images.map((function(e){return Object(h.jsx)("button",{type:"button",className:g()("ProductDetailsPage__images-button",{"image-active":e===P}),onClick:function(){return y(e)},children:Object(h.jsx)("img",{src:e,alt:e,className:"ProductDetailsPage__images-item"})},e)}))}),Object(h.jsx)("div",{className:"ProductDetailsPage__current-image",children:Object(h.jsx)("img",{src:P,alt:"",className:"ProductDetailsPage__current-image-item"})},Math.random()),Object(h.jsxs)("div",{className:"ProductDetailsPage__actions",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__options",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__options-title",children:"Available colors"}),Object(h.jsx)("ul",{className:"ProductDetailsPage__options-list",children:"Available colors"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__options",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__options-title",children:"Select capacity"}),Object(h.jsx)("ul",{className:"ProductDetailsPage__options-list",children:null===l||void 0===l?void 0:l.storage.ram})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__prices",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__prices-now",children:"$".concat(D)}),Object(h.jsx)("span",{className:"ProductDetailsPage__prices-before",children:"$".concat(null===w||void 0===w?void 0:w.price)})]}),w&&Object(h.jsxs)("div",{className:"ProductDetailsPage__buttons",children:[Object(h.jsx)(q,{product:w,styles:{width:"263px",height:"48px"}}),Object(h.jsx)(F,{product:w,styles:{width:"48px",height:"48px"}})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"Screen"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.display.screenSize})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"Resolution"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.display.screenResolution})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"Processor"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.hardware.cpu})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__info-container",children:[Object(h.jsx)("span",{className:"ProductDetailsPage__info-title",children:"RAM"}),Object(h.jsx)("span",{className:"ProductDetailsPage__info-specification",children:null===l||void 0===l?void 0:l.storage.ram})]})]})]})]})}),Object(h.jsxs)("section",{className:"ProductDetailsPage__more",children:[Object(h.jsx)("div",{className:"ProductDetailsPage__more-about",children:Object(h.jsxs)("div",{className:"ProductDetailsPage__more-title",children:[Object(h.jsx)("h2",{className:"ProductDetailsPage__more-title-item",children:"About"}),Object(h.jsx)("div",{className:"ProductDetailsPage__more-description",children:null===l||void 0===l?void 0:l.description})]})}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech",children:[Object(h.jsx)("div",{className:"ProductDetailsPage__more-title",children:Object(h.jsx)("h2",{className:"ProductDetailsPage__more-title-item",children:"Tech specs"})}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-content",children:[Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Screen"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.display.screenSize})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Resolution"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.display.screenResolution})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Processor"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.hardware.cpu})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"RAM"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null!==l&&void 0!==l&&l.storage.ram?l.storage.ram:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Built in memory"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null!==l&&void 0!==l&&l.storage.flash?l.storage.flash:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Camera"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null!==l&&void 0!==l&&l.camera.primary?l.camera.primary:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Zoom"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:"-"})]}),Object(h.jsxs)("div",{className:"ProductDetailsPage__more-tech-wrap",children:[Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-property",children:"Cell"}),Object(h.jsx)("p",{className:"ProductDetailsPage__more-tech-value",children:null===l||void 0===l?void 0:l.connectivity.cell})]})]})]})]})]})}),Object(h.jsx)(me,{phones:a})]})})},pe=function(){return Object(h.jsx)(n.a,{children:Object(h.jsx)(r.e,{children:Object(h.jsxs)(r.c,{path:"/",element:Object(h.jsx)(R,{}),children:[Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(Y,{})}),Object(h.jsx)(r.c,{path:"home",element:Object(h.jsx)(r.a,{to:"/",replace:!0})}),Object(h.jsxs)(r.c,{path:"phones",children:[Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(oe,{})}),Object(h.jsx)(r.c,{path:":productId",element:Object(h.jsx)(Oe,{})})]}),Object(h.jsxs)(r.c,{path:"tablets",children:[Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(le,{})}),Object(h.jsx)(r.c,{path:":productId",element:Object(h.jsx)(Oe,{})})]}),Object(h.jsx)(r.c,{path:"accessories",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(de,{})})}),Object(h.jsx)(r.c,{path:"favourites",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(ue,{})})}),Object(h.jsx)(r.c,{path:"cart",children:Object(h.jsx)(r.c,{index:!0,element:Object(h.jsx)(be,{})})}),Object(h.jsx)(r.c,{path:"*",element:Object(h.jsx)(G,{})})]})})})};s.a.render(Object(h.jsx)(pe,{}),document.getElementById("root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.61b3d037.chunk.js.map