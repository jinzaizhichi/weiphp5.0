(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bfb3cd2"],{"03fb":function(t,s,i){},"130e":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"top_div",staticClass:"goods-detail"},[i("navbar",{attrs:{text:t.goods.title}}),t.goods.id?i("scroller",[i("div",{staticClass:"slide"},[i("van-swipe",{attrs:{"show-indicators":""},on:{change:t.toggleSwiper}},[t._l(t.slides,function(s,o){return i("van-swipe-item",{key:o},[i("a",{staticClass:"slide-url pic-align-center",on:{click:function(s){return t.pvwImg(o)}}},[i("img",{staticClass:"slide-image",attrs:{src:s}})])])}),t.slides.length>0?i("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v(t._s(t.current+1)+"/"+t._s(t.totalSwiperNum))]):t._e()],2)],1),t.goods.sale_price?i("div",{staticClass:"goods-detail__info"},[i("p",{staticClass:"goods-detail__price s-red"},[i("span",{staticClass:"icon-price"},[t._v("¥")]),t._v("\n\t\t\t\t"+t._s(t.goods.sale_price)+"\n\t\t\t")]),t.goods.market_price>t.goods.sale_price?i("p",{staticClass:"goods__price-cost"},[t._v("¥"+t._s(t.goods.market_price))]):t._e(),i("p",{staticClass:"s-gray goods-detail__stock"},[t._v("库存"+t._s(t.goods.stock_active)+"件")]),i("p",{staticClass:"goods-detail__tt"},[t._v(t._s(t.goods.title))])]):t._e(),t.goods.tab?i("div",{staticClass:"m-list link g-flex",on:{click:function(s){return t.jump(t.goods.id,t.goods.tab)}}},[i("div",{staticClass:"m-list__l g-flex__item"},[t._v("同款")]),i("i",{staticClass:"iconfont icon-fanhui right"})]):t._e(),t.goodsParam.length>0?i("div",{staticClass:"switch-card"},[i("div",{staticClass:"switch-card__hd"},[i("p",{staticClass:"switch-card__tt"},[t._v("产品参数")]),i("p",{staticClass:"switch-card__icon iconfont icon-fanhui",class:t.arrowDir,on:{click:t.toggleArrow}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.arrowDir,expression:"arrowDir == 'top'"}],staticClass:"switch-card__bd"},t._l(t.goodsParam,function(s,o){return i("div",{key:o,staticClass:"switch-card__item"},[i("p",{staticClass:"switch-card__param overflow-dot_row"},[t._v(t._s(s.title))]),i("p",{staticClass:"switch-card__attr overflow-dot_row"},[t._v(t._s(s.param_value))])])}),0)]):t._e(),t.goods.comment_count>0?i("div",{staticClass:"goods-comment"},[i("div",{staticClass:"m-list link"},[i("div",{staticClass:"m-list__l"},[t._v("评价1")]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.goods.comment_count>10,expression:"goods.comment_count>10"}],staticClass:"m-list__c s-black"},[t._v("查看更多")]),i("i",{directives:[{name:"show",rawName:"v-show",value:t.goods.comment_count>10,expression:"goods.comment_count>10"}],staticClass:"iconfont icon-fanhui right"})]),i("div",{staticClass:"goods-comment__bd"},t._l(t.goods.comments,function(s,o){return i("div",{key:o,staticClass:"goods-comment__item"},[i("div",{staticClass:"goods-comment__left"},[i("div",{staticClass:"g-flex g-flex__updown-center"},[i("img",{staticClass:"u-head__img",attrs:{src:s.headimgurl}}),i("p",{staticClass:"goods-comment__name"},[t._v(t._s(s.username))])]),i("p",{staticClass:"goods-comment__text"},[t._v(t._s(s.content))])]),i("div",{staticClass:"goods-comment__right"},[i("img",{staticClass:"u-goods__img",attrs:{src:t.slides[0]}})])])}),0)]):t._e(),t.goods.content?i("div",{staticClass:"goods-detail__pic",domProps:{innerHTML:t._s(t.goods.content)}}):t._e(),t.diyData?i("diyGoods",{attrs:{diyData:t.diyData}}):t._e()],1):t._e(),t.slides.length>0?i("div",{staticClass:"bottom-bar"},[i("router-link",{staticClass:"bottom-bar__service",attrs:{to:"/service","open-type":"contact"}},[i("div",{staticClass:"bottom-bar__icon"}),i("p",{staticClass:"bottom-bar__tt"},[t._v("客服")])]),i("div",{staticClass:"bottom-bar__collect",on:{click:t.toggleCollect}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCollect,expression:"!isCollect"}],staticClass:"bottom-bar__icon"}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollect,expression:"isCollect"}],staticClass:"bottom-bar__icon--active"}),i("p",{staticClass:"bottom-bar__tt"},[t._v("收藏")])]),i("router-link",{staticClass:"bottom-bar__cart",attrs:{to:"/cart","open-type":"switchTab"}},[i("div",{staticClass:"bottom-bar__icon"}),t.cartNum>0?i("span",{staticClass:"weui-badge",staticStyle:{position:"absolute",top:".2em",right:".2em"}},[t._v(t._s(t.cartNum))]):t._e(),i("p",{staticClass:"bottom-bar__tt"},[t._v("购物车")])]),i("button",{staticClass:"u-button u-button--border",on:{click:t.addCart}},[t._v("加入购物车")]),i("button",{staticClass:"u-button u-button--primary",on:{click:t.buy}},[t._v("立即购买")])],1):t._e()],1)},a=[],e=(i("7f7f"),i("5176")),c=i.n(e),r=i("ed08"),n=i("9d8d"),l=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"diy-goods"},[t._l(t.diyData,function(s,o){return["richtext"==s.id?i("div",{staticClass:"richtext mt15",domProps:{innerHTML:t._s(s.params.content)}}):t._e(),"goods"==s.id?i("div",{staticClass:"goods mt15",class:t.goodsClass2(s.params.list_style)},t._l(s.params.goods_list,function(o,a){return i("a",{key:a,staticClass:"goods-item",attrs:{href:"/goods_detail/"+o.id}},[1==s.params.list_style?[i("div",{staticClass:"goods-item__img"},[i("img",{attrs:{src:o.img}}),1==s.params.show_price?i("p",{staticClass:"goods-item__price goods-price"},[t._v("¥"+t._s(o.market_price))]):t._e(),i("div",{staticClass:"goods-item__ft g-flex"},[i("p",{staticClass:"goods-item__title g-flex__item overflow-dot_row"},[t._v(t._s(o.title))]),1==s.params.show_btn?i("button",{staticClass:"goods-item__btn"},[t._v("立即购买")]):t._e()])])]:[i("div",{staticClass:"goods-item__img"},[i("img",{attrs:{src:o.img}})]),i("p",{staticClass:"goods-item__title g-flex__item overflow-dot_row"},[t._v(t._s(o.title))]),i("div",{staticClass:"goods-item__ft g-flex"},[1==s.params.show_price?i("p",{staticClass:"goods-item__price goods-price"},[t._v("¥"+t._s(o.market_price))]):t._e(),1==s.params.show_btn?i("button",{staticClass:"goods-item__btn"},[t._v("立即购买")]):t._e()])]],2)}),0):t._e(),"mutipic_goods"==s.id?i("div",{staticClass:"mutipic-goods mt15"},t._l(s.params.goods_list,function(o,a){return i("a",{key:"goods-"+a,staticClass:"mutipic-goods-item",class:t.goodsClass(s.params.colGoods),attrs:{href:"/goods_detail/"+o.id}},[i("div",{staticClass:"mutipic-goods-item__img"},[i("img",{attrs:{src:o.img}})]),i("p",{staticClass:"mutipic-goods-item__title g-flex__item overflow-dot_row"},[t._v(t._s(o.title))]),i("div",{staticClass:"mutipic-goods-item__ft g-flex"},[1==s.params.show_price?i("p",{staticClass:"mutipic-goods-item__price goods-price g-flex__item"},[t._v("¥"+t._s(o.market_price))]):t._e(),1==s.params.show_btn?i("button",{staticClass:"mutipic-goods-item__btn"},[t._v("立即购买")]):t._e()])])}),0):t._e(),"banner"==s.id?i("div",{staticClass:"banner mt15"},[i("van-swipe",{attrs:{"indicator-color":"red"}},t._l(s.params.banner_list,function(s,o){return i("van-swipe-item",{key:"banner-"+o},[i("a",{staticClass:"slide-url pic-align-center",attrs:{href:s.url}},[i("img",{staticClass:"slide-image",attrs:{mode:"aspectFill",src:s.pic}})]),i("div",{staticClass:"banner-ft"},[i("p",[t._v(t._s(s.title))])])])}),1)],1):t._e(),"pic"==s.id?i("div",{staticClass:"pic mt15"},t._l(s.params.pic_list,function(t,s){return i("a",{attrs:{href:t.url}},[i("img",{attrs:{src:t.pic}})])}),0):t._e(),"blank"==s.id?i("div",{key:o,staticClass:"blank mt15"},[i("p")]):t._e(),"title"==s.id?i("div",{staticClass:"title mt15",style:{align:s.params.align,background:s.params.bgColor}},[i("h3",{style:{color:s.params.maincolor}},[t._v(t._s(s.params.title))]),i("p",[t._v(t._s(s.params.subtitle))])]):t._e(),"blankline"==s.id?i("div",{staticClass:"blankline mt15"}):t._e()]})],2)},d=[],_={data:function(){return{}},props:{diyData:[Array,Object]},computed:{},methods:{goodsClass:function(t){return 2==t?"mutipic-goods-item_two":3==t?"mutipic-goods-item_three":"mutipic-goods-item_four"},goodsClass2:function(t){return 2==t?"goods-item_small":3==t?"goods-item_big":4==t?"goods-item_lists":""}}},m=_,g=(i("df07"),i("2877")),p=Object(g["a"])(m,l,d,!1,null,"72deb429",null),u=p.exports,v=i("b970"),f={data:function(){return{current:0,slides:[],goods:[],isCollect:!1,arrowDir:"top",selfSwiperNum:1,isCartDot:!1,detailPic:"",goodsParam:[],diyData:{}}},components:{navbar:n["a"],diyGoods:u},computed:{totalSwiperNum:function(){return this.slides.length},cartNum:function(){var t=this.$store.state.cartShopNum;if(t>0)return this.isCartDot=!0,t}},methods:{toggleSwiper:function(t){this.current=t},jump:function(t,s){this.$router.push({name:"lists",params:{id:t,tab:s}})},buy:function(){var t=this.goods.goods_id;if(0==this.goods.stock_active)return Object(v["d"])("该商品已经被抢光了"),!1;this.$router.push({path:"/confirm_order/".concat(t)})},toggleArrow:function(){"top"==this.arrowDir?this.arrowDir="bottom":this.arrowDir="top"},addCart:function(){var t=this;this.$http.post(r["f"]+"shop/api/addToCart",{goods_id:this.goods.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(s){s.data>0?(Object(v["d"])("加入购物车成功"),t.$store.commit("getCartShopNum",{num:s.data})):Object(v["d"])("加入购物车失败,请直接下单购买")})},pvwImg:function(t){Object(v["b"])({images:this.slides,startPosition:t})},toggleCollect:function(t){var s=this;this.$http.post(r["f"]+"shop/api/addtocollect",{goods_id:this.goods.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(t){1==t.data?(Object(v["d"])("加入收藏成功"),s.isCollect=!0):(Object(v["d"])("取消收藏成功"),s.isCollect=!1)})}},activated:function(){var t=this;if(!this.$route.meta.isBack){c()(this.$data,this.$options.data()),this.$refs.top_div.style.background="#f9f9f9";var s=this.$route.params.id;this.$store.commit("saveData",{key:"activeOrderParams",value:""}),Object(r["g"])("shop/api/goods_detail",{id:s}).then(function(s){if(t.slides=s.goods.imgs_url,t.goods=s.goods,t.goodsParam=s.goods.goods_param,t.goods.diyData.config){t.diyData=JSON.parse(decodeURIComponent(t.goods.diyData.config));var i=t.diyData[0]["params"],o=i.title,a=i.bgColor;o&&(t.goods.title=o),a&&(t.$refs.top_div.style.background=a)}0==s.goods.is_collect?t.isCollect=!1:t.isCollect=!0})}this.$route.meta.isBack=!1},beforeRouteEnter:function(t,s,i){"confirm_order"==s.name&&(t.meta.isBack=!0),i()}},C=f,b=(i("a5ae"),Object(g["a"])(C,o,a,!1,null,"25469dda",null));s["default"]=b.exports},"355d":function(t,s){s.f={}.propertyIsEnumerable},5176:function(t,s,i){t.exports=i("51b6")},"51b6":function(t,s,i){i("a3c3"),t.exports=i("584a").Object.assign},7469:function(t,s,i){},9306:function(t,s,i){"use strict";var o=i("c3a1"),a=i("9aa9"),e=i("355d"),c=i("241e"),r=i("335c"),n=Object.assign;t.exports=!n||i("294c")(function(){var t={},s={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach(function(t){s[t]=t}),7!=n({},t)[i]||Object.keys(n({},s)).join("")!=o})?function(t,s){var i=c(t),n=arguments.length,l=1,d=a.f,_=e.f;while(n>l){var m,g=r(arguments[l++]),p=d?o(g).concat(d(g)):o(g),u=p.length,v=0;while(u>v)_.call(g,m=p[v++])&&(i[m]=g[m])}return i}:n},"9aa9":function(t,s){s.f=Object.getOwnPropertySymbols},a3c3:function(t,s,i){var o=i("63b6");o(o.S+o.F,"Object",{assign:i("9306")})},a5ae:function(t,s,i){"use strict";var o=i("03fb"),a=i.n(o);a.a},df07:function(t,s,i){"use strict";var o=i("7469"),a=i.n(o);a.a}}]);