(this["webpackJsonptovaryrp-from-vk-front"]=this["webpackJsonptovaryrp-from-vk-front"]||[]).push([[0],{64:function(e,t,l){e.exports=l(88)},69:function(e,t,l){},75:function(e,t,l){},78:function(e,t,l){},79:function(e,t,l){},80:function(e,t,l){},87:function(e,t,l){},88:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(22),c=l.n(r),o=(l(69),l(28)),m=l(29),u=l(32),s=l(30),i=l(39),d=l(6),p=(l(70),l(97)),E=l(98),h=l(99),f=l(94),k=l(95),v=(l(71),l(72),l(74),l(93)),b=l(90),_=l(91),g=l(92),S=l(8),y=l.n(S),L=l(57),C=l.n(L),I=l(58),j=l.n(I),w=(l(75),function(e){var t=y.a.icon({iconUrl:C.a,shadowUrl:j.a,iconAnchor:[13,41],popupAnchor:[1,-33]});y.a.Marker.prototype.options.icon=t;var l=Object(b.a)(),r=Object(a.useRef)(null),c=e.seller,o=e.openPopup;return Object(a.useEffect)((function(){l.flyTo(e.mapCenter),o&&r.current.openPopup()}),[o]),n.a.createElement(_.a,{ref:r,position:[c.lat,c.lon],eventHandlers:{click:function(){e.onSellerClick(c.vk_owner_id)}}},n.a.createElement(g.a,null,n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(v.a,{className:"float-left popup-image",src:c.vk_group_info.photo_50,roundedCircle:!0})),n.a.createElement("td",null,n.a.createElement("span",null,c.name))))))}),O=function(e){var t=e.mapCenter,l=e.mapZoom;return n.a.createElement("div",null,n.a.createElement("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435:"),n.a.createElement(f.a,{center:t,zoom:l,style:{width:"400px",height:"200px"}},n.a.createElement(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),e.sellers.map((function(l,a){return n.a.createElement(w,{key:a,seller:l,mapCenter:t,openPopup:e.selectedSellerId===l.vk_owner_id,onSellerClick:e.onSellerClick})}))))},N=l(96),R=l(59),x=(l(78),l(79),function(){return n.a.createElement("div",{className:"lds-ring"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))}),P=function(e){return n.a.createElement("div",null,n.a.createElement("p",null,"...\u0438\u043b\u0438 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430:"),e.sellersLoaded?n.a.createElement(N.a,{variant:"flush"},e.sellers.map((function(t){return n.a.createElement(R.a,{key:t._id,onClick:function(){e.onSellerClick(t.vk_owner_id)},action:!0},n.a.createElement(v.a,{src:t.vk_group_info.photo_50,roundedCircle:!0,className:"float-left list-image"}),n.a.createElement("span",{className:t.vk_owner_id===e.selectedSellerId?"seller-active":""},t.name))}))):n.a.createElement(x,null))},Z=(l(80),function(e){return e.selectedSeller?n.a.createElement("div",{className:"description-card"},n.a.createElement("h3",null,e.selectedSeller.vk_group_info.vk_name),n.a.createElement(v.a,{width:150,height:150,className:"description-image",src:e.selectedSeller.vk_group_info.photo_200,rounded:!0}),n.a.createElement("div",null,e.selectedSeller.vk_group_info.description),n.a.createElement("p",null,n.a.createElement("a",{href:"http://vk.com/club"+e.selectedSellerId.slice(1),target:"_blank"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430")),n.a.createElement("br",{clear:"all"})):n.a.createElement("div",null,n.a.createElement("p",null,"\u041e\u0436\u0438\u0434\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430..."))}),A=l(102),F=function(e){return n.a.createElement(A.a,{style:{width:"12rem",height:"18rem"},className:"float-left"},n.a.createElement(A.a.Body,{style:{overflow:"auto"}},n.a.createElement(A.a.Img,{src:e.product.thumb_photo}),n.a.createElement(A.a.Text,null,e.product.title)),n.a.createElement(A.a.Body,null,"\u0426\u0435\u043d\u0430: ",e.product.price.text,n.a.createElement("br",null),n.a.createElement("a",{href:"http://vk.com/product"+e.product.owner_id+"_"+e.product.id,target:"_blank"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")))},U=function(e){return n.a.createElement("div",null,n.a.createElement("h4",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),e.productsLoaded?n.a.createElement(n.a.Fragment,null,e.products.map((function(e,t){return n.a.createElement(F,{product:e})}))):n.a.createElement(x,null))},B=function(){return n.a.createElement("div",null,"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0420\u043e\u0434\u043e\u0432\u044b\u0445 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0439 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438.",n.a.createElement("br",null),"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0438\u043b\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435.")},M=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{fluid:!0},n.a.createElement(E.a,null,n.a.createElement(h.a,null,n.a.createElement(O,{mapCenter:e.mapCenter,mapZoom:e.mapZoom,sellers:e.sellers,onSellerClick:e.onSellerClick,selectedSellerId:e.selectedSellerId}),n.a.createElement(P,{sellersLoaded:e.sellersLoaded,sellers:e.sellers,onSellerClick:e.onSellerClick,selectedSellerId:e.selectedSellerId})),n.a.createElement(h.a,null,e.selectedSeller?n.a.createElement("div",null,n.a.createElement(Z,{selectedSeller:e.selectedSeller,selectedSellerId:e.selectedSellerId}),n.a.createElement(U,{productsLoaded:e.productsLoaded,products:e.products})):n.a.createElement(B,null)))))},q=function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(){return Object(o.a)(this,l),t.apply(this,arguments)}return Object(m.a)(l,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"\u0421\u0441\u044b\u043b\u043a\u0438"),n.a.createElement("p",null,'\u0418\u0434\u0435\u044f \u0420\u043e\u0434\u043e\u0432\u044b\u0445 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0439 \u0438\u0437\u043b\u043e\u0436\u0435\u043d\u0430 \u0432 \u0441\u0435\u0440\u0438\u0438 \u043a\u043d\u0438\u0433 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0430 \u041c\u0435\u0433\u0440\u0435 "\u0417\u0432\u0435\u043d\u044f\u0449\u0438\u0435 \u043a\u0435\u0434\u0440\u044b \u0420\u043e\u0441\u0441\u0438\u0438".'),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://vmegre.com",target:"_blank"},"https://vmegre.com")," - \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044f \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0430 \u041c\u0435\u0433\u0440\u0435"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/vladimirmegre",target:"_blank"},"https://vk.com/vladimirmegre")," - \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0430 \u041c\u0435\u0433\u0440\u0435")),n.a.createElement("p",null,'\u041f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u043f\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u043d\u044b\u043c \u0437\u043d\u0430\u043a\u043e\u043c "\u0417\u0432\u0435\u043d\u044f\u0449\u0438\u0435 \u043a\u0435\u0434\u0440\u044b \u0420\u043e\u0441\u0441\u0438\u0438":'),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://megre.ru",target:"_blank"},"https://megre.ru"),' - \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "\u0417\u0432\u0435\u043d\u044f\u0449\u0438\u0435 \u043a\u0435\u0434\u0440\u044b"'),n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/ringingcedars",target:"_blank"},"https://vk.com/ringingcedars"),' - \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "\u0417\u0432\u0435\u043d\u044f\u0449\u0438\u0435 \u043a\u0435\u0434\u0440\u044b"'),n.a.createElement("li",null,n.a.createElement("a",{href:"http://kedra.by",target:"_blank"},"http://kedra.by"),' - \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u043b\u0435\u0440 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "\u0417\u0432\u0435\u043d\u044f\u0449\u0438\u0435 \u041a\u0435\u0434\u0440\u044b" \u0432 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438'),n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/kedraby",target:"_blank"},"https://vk.com/kedraby"),' - \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u043b\u0435\u0440 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "\u0417\u0432\u0435\u043d\u044f\u0449\u0438\u0435 \u041a\u0435\u0434\u0440\u044b" \u0432 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438 (\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435)')),n.a.createElement("p",null,"\u041f\u043e\u0441\u0435\u043b\u0435\u043d\u0438\u044f, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u0438\u0437 \u0420\u043e\u0434\u043e\u0432\u044b\u0445 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0439:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/rpbelrus",target:"_blank"},"https://vk.com/rpbelrus")," - \u0420\u043e\u0434\u043e\u0432\u044b\u0435 \u043f\u043e\u043c\u0435\u0441\u0442\u044c\u044f \u0438 \u043f\u043e\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438 (\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435)"),n.a.createElement("li",null,n.a.createElement("a",{href:"http://ecoby.info",target:"_blank"},"http://ecoby.info")," - \u0420\u043e\u0434\u043e\u0432\u044b\u0435 \u043f\u043e\u043c\u0435\u0441\u0442\u044c\u044f \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438, \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0430\u043b"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/club13589694",target:"_blank"},"https://vk.com/club13589694")," - \u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u043e\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u0420\u043e\u0434\u043e\u0432\u044b\u0445 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0439"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/tovary_rp_bel",target:"_blank"},"https://vk.com/tovary_rp_bel")," - \u0422\u043e\u0432\u0430\u0440\u044b \u0420\u043e\u0434\u043e\u0432\u044b\u0445 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0439 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438")))}}]),l}(a.Component),z=function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(){return Object(o.a)(this,l),t.apply(this,arguments)}return Object(m.a)(l,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),n.a.createElement("p",null,'\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u043e\u0432\u0430\u0440\u0430\u0445 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0438\u0437 "\u0422\u043e\u0432\u0430\u0440\u043e\u0432" \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 "\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435".',n.a.createElement("br",null),"\u0427\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0442\u043e\u0432\u0430\u0440\u044b, \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435.",n.a.createElement("br",null),"\u041a\u0430\u043a \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0441\u043c.:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/faq18547",target:"_blank"},"\u0422\u043e\u0432\u0430\u0440\u044b \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435. \u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://vk.com/faq19047",target:"_blank"},"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435?"))),n.a.createElement("p",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u043e\u0432 \u043f\u043e\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u0430\u0439\u0442\u0430. \u0427\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0442\u043e\u0432\u0430\u0440\u044b, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 ",n.a.createElement("a",{href:"https://vk.com/dimitrius_brest",target:"_blank"},"\u0414\u043c\u0438\u0442\u0440\u0438\u0435\u043c \u0414\u0435\u0440\u0435\u0432\u0438\u0446\u043a\u0438\u043c"),".",n.a.createElement("br",null),"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432 \u043f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u043c \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044e."),n.a.createElement("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u044c \u043d\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435: ",n.a.createElement("a",{href:"https://vk.com/tovary_rp_bel",target:"_blank"},'"\u0422\u043e\u0432\u0430\u0440\u044b \u0420\u043e\u0434\u043e\u0432\u044b\u0445 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0439 \u0438 \u0417\u041a\u0420 - \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c"')))}}]),l}(a.Component),H=l(100),J=l(101),T=l(45),D=function(e){return n.a.createElement("header",null,n.a.createElement(H.a,{bg:"light",variant:"light"},n.a.createElement(H.a.Brand,null,"\u0422\u043e\u0432\u0430\u0440\u044b \u0420\u041f"),n.a.createElement(J.a,{className:"mr-auto"},n.a.createElement(T.LinkContainer,{to:"/"},n.a.createElement(J.a.Link,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),n.a.createElement(T.LinkContainer,{to:"/links"},n.a.createElement(J.a.Link,null,"\u0421\u0441\u044b\u043b\u043a\u0438")),n.a.createElement(T.LinkContainer,{to:"/contacts"},n.a.createElement(J.a.Link,null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")))))},G=(l(87),function(e){Object(u.a)(l,e);var t=Object(s.a)(l);function l(e){var a;return Object(o.a)(this,l),(a=t.call(this,e)).handleSellerClick=function(e){var t=a.state.sellers.find((function(t){return t.vk_owner_id===e})),l=[t.lat,t.lon];a.setState({products:[],productsLoaded:!1,selectedSellerId:e,selectedSeller:t,mapCenter:l}),fetch(a.SELLERS_API_URL+"/"+e).then((function(e){return e.json()})).then((function(e){a.setState({products:e.tovary.response.items,productsLoaded:!0})}))},a.SELLERS_API_URL="https://tovaryrp-from-vk.herokuapp.com/sellers",a.state={sellersLoaded:!1,sellers:[],productsLoaded:!1,products:[],selectedSellerId:"",selectedSeller:null,mapCenter:[54.1,27.9],mapZoom:5},a}return Object(m.a)(l,[{key:"componentDidMount",value:function(){var e=this;fetch(this.SELLERS_API_URL).then((function(e){return e.json()})).then((function(t){e.setState({sellersLoaded:!0,sellers:t,selectedSeller:t.find((function(t){return t.vk_owner_id===e.state.selectedSellerId}))})}))}},{key:"render",value:function(){return n.a.createElement(i.HashRouter,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(D,null),n.a.createElement("main",null,n.a.createElement(d.g,null,n.a.createElement(d.c,{from:"/",to:"/main",exact:!0}),n.a.createElement(d.d,{path:"/main"},n.a.createElement(M,{sellersLoaded:this.state.sellersLoaded,sellers:this.state.sellers,selectedSeller:this.state.selectedSeller,selectedSellerId:this.state.selectedSellerId,productsLoaded:this.state.productsLoaded,products:this.state.products,mapCenter:this.state.mapCenter,mapZoom:this.state.mapZoom,onSellerClick:this.handleSellerClick})),n.a.createElement(d.d,{path:"/links",component:q}),n.a.createElement(d.d,{path:"/contacts",component:z})))))}}]),l}(a.Component));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.72effe95.chunk.js.map