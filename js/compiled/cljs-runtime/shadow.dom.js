goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20829 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20829(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20833 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20833(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19629 = coll;
var G__19630 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19629,G__19630) : shadow.dom.lazy_native_coll_seq.call(null,G__19629,G__19630));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19655 = arguments.length;
switch (G__19655) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19663 = arguments.length;
switch (G__19663) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19672 = arguments.length;
switch (G__19672) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19685 = arguments.length;
switch (G__19685) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19696 = arguments.length;
switch (G__19696) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19733 = arguments.length;
switch (G__19733) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19756){if((e19756 instanceof Object)){
var e = e19756;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19756;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19765 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19766 = null;
var count__19767 = (0);
var i__19768 = (0);
while(true){
if((i__19768 < count__19767)){
var el = chunk__19766.cljs$core$IIndexed$_nth$arity$2(null,i__19768);
var handler_20860__$1 = ((function (seq__19765,chunk__19766,count__19767,i__19768,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19765,chunk__19766,count__19767,i__19768,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20860__$1);


var G__20861 = seq__19765;
var G__20862 = chunk__19766;
var G__20863 = count__19767;
var G__20864 = (i__19768 + (1));
seq__19765 = G__20861;
chunk__19766 = G__20862;
count__19767 = G__20863;
i__19768 = G__20864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19765);
if(temp__5804__auto__){
var seq__19765__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19765__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19765__$1);
var G__20868 = cljs.core.chunk_rest(seq__19765__$1);
var G__20869 = c__5568__auto__;
var G__20870 = cljs.core.count(c__5568__auto__);
var G__20871 = (0);
seq__19765 = G__20868;
chunk__19766 = G__20869;
count__19767 = G__20870;
i__19768 = G__20871;
continue;
} else {
var el = cljs.core.first(seq__19765__$1);
var handler_20872__$1 = ((function (seq__19765,chunk__19766,count__19767,i__19768,el,seq__19765__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19765,chunk__19766,count__19767,i__19768,el,seq__19765__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20872__$1);


var G__20873 = cljs.core.next(seq__19765__$1);
var G__20874 = null;
var G__20875 = (0);
var G__20876 = (0);
seq__19765 = G__20873;
chunk__19766 = G__20874;
count__19767 = G__20875;
i__19768 = G__20876;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19797 = arguments.length;
switch (G__19797) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19811 = cljs.core.seq(events);
var chunk__19812 = null;
var count__19813 = (0);
var i__19814 = (0);
while(true){
if((i__19814 < count__19813)){
var vec__19825 = chunk__19812.cljs$core$IIndexed$_nth$arity$2(null,i__19814);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19825,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19825,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20886 = seq__19811;
var G__20887 = chunk__19812;
var G__20888 = count__19813;
var G__20889 = (i__19814 + (1));
seq__19811 = G__20886;
chunk__19812 = G__20887;
count__19813 = G__20888;
i__19814 = G__20889;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19811);
if(temp__5804__auto__){
var seq__19811__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19811__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19811__$1);
var G__20890 = cljs.core.chunk_rest(seq__19811__$1);
var G__20891 = c__5568__auto__;
var G__20892 = cljs.core.count(c__5568__auto__);
var G__20893 = (0);
seq__19811 = G__20890;
chunk__19812 = G__20891;
count__19813 = G__20892;
i__19814 = G__20893;
continue;
} else {
var vec__19835 = cljs.core.first(seq__19811__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20896 = cljs.core.next(seq__19811__$1);
var G__20897 = null;
var G__20898 = (0);
var G__20899 = (0);
seq__19811 = G__20896;
chunk__19812 = G__20897;
count__19813 = G__20898;
i__19814 = G__20899;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19843 = cljs.core.seq(styles);
var chunk__19844 = null;
var count__19845 = (0);
var i__19846 = (0);
while(true){
if((i__19846 < count__19845)){
var vec__19871 = chunk__19844.cljs$core$IIndexed$_nth$arity$2(null,i__19846);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19871,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20901 = seq__19843;
var G__20902 = chunk__19844;
var G__20903 = count__19845;
var G__20904 = (i__19846 + (1));
seq__19843 = G__20901;
chunk__19844 = G__20902;
count__19845 = G__20903;
i__19846 = G__20904;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19843);
if(temp__5804__auto__){
var seq__19843__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19843__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19843__$1);
var G__20905 = cljs.core.chunk_rest(seq__19843__$1);
var G__20906 = c__5568__auto__;
var G__20907 = cljs.core.count(c__5568__auto__);
var G__20908 = (0);
seq__19843 = G__20905;
chunk__19844 = G__20906;
count__19845 = G__20907;
i__19846 = G__20908;
continue;
} else {
var vec__19878 = cljs.core.first(seq__19843__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19878,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20910 = cljs.core.next(seq__19843__$1);
var G__20911 = null;
var G__20912 = (0);
var G__20913 = (0);
seq__19843 = G__20910;
chunk__19844 = G__20911;
count__19845 = G__20912;
i__19846 = G__20913;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19889_20916 = key;
var G__19889_20917__$1 = (((G__19889_20916 instanceof cljs.core.Keyword))?G__19889_20916.fqn:null);
switch (G__19889_20917__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20923 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20923,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20923,"aria-");
}
})())){
el.setAttribute(ks_20923,value);
} else {
(el[ks_20923] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19917){
var map__19919 = p__19917;
var map__19919__$1 = cljs.core.__destructure_map(map__19919);
var props = map__19919__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19919__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19920 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19924 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19924,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19924;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19927 = arguments.length;
switch (G__19927) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19943){
var vec__19944 = p__19943;
var seq__19945 = cljs.core.seq(vec__19944);
var first__19946 = cljs.core.first(seq__19945);
var seq__19945__$1 = cljs.core.next(seq__19945);
var nn = first__19946;
var first__19946__$1 = cljs.core.first(seq__19945__$1);
var seq__19945__$2 = cljs.core.next(seq__19945__$1);
var np = first__19946__$1;
var nc = seq__19945__$2;
var node = vec__19944;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19950 = nn;
var G__19951 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19950,G__19951) : create_fn.call(null,G__19950,G__19951));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19955 = nn;
var G__19956 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19955,G__19956) : create_fn.call(null,G__19955,G__19956));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19961 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19961,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19961,(1),null);
var seq__19965_20959 = cljs.core.seq(node_children);
var chunk__19966_20960 = null;
var count__19967_20961 = (0);
var i__19968_20962 = (0);
while(true){
if((i__19968_20962 < count__19967_20961)){
var child_struct_20963 = chunk__19966_20960.cljs$core$IIndexed$_nth$arity$2(null,i__19968_20962);
var children_20964 = shadow.dom.dom_node(child_struct_20963);
if(cljs.core.seq_QMARK_(children_20964)){
var seq__20022_20965 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20964));
var chunk__20024_20966 = null;
var count__20025_20967 = (0);
var i__20026_20968 = (0);
while(true){
if((i__20026_20968 < count__20025_20967)){
var child_20969 = chunk__20024_20966.cljs$core$IIndexed$_nth$arity$2(null,i__20026_20968);
if(cljs.core.truth_(child_20969)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20969);


var G__20970 = seq__20022_20965;
var G__20971 = chunk__20024_20966;
var G__20972 = count__20025_20967;
var G__20973 = (i__20026_20968 + (1));
seq__20022_20965 = G__20970;
chunk__20024_20966 = G__20971;
count__20025_20967 = G__20972;
i__20026_20968 = G__20973;
continue;
} else {
var G__20974 = seq__20022_20965;
var G__20975 = chunk__20024_20966;
var G__20976 = count__20025_20967;
var G__20977 = (i__20026_20968 + (1));
seq__20022_20965 = G__20974;
chunk__20024_20966 = G__20975;
count__20025_20967 = G__20976;
i__20026_20968 = G__20977;
continue;
}
} else {
var temp__5804__auto___20978 = cljs.core.seq(seq__20022_20965);
if(temp__5804__auto___20978){
var seq__20022_20979__$1 = temp__5804__auto___20978;
if(cljs.core.chunked_seq_QMARK_(seq__20022_20979__$1)){
var c__5568__auto___20980 = cljs.core.chunk_first(seq__20022_20979__$1);
var G__20982 = cljs.core.chunk_rest(seq__20022_20979__$1);
var G__20983 = c__5568__auto___20980;
var G__20984 = cljs.core.count(c__5568__auto___20980);
var G__20985 = (0);
seq__20022_20965 = G__20982;
chunk__20024_20966 = G__20983;
count__20025_20967 = G__20984;
i__20026_20968 = G__20985;
continue;
} else {
var child_20987 = cljs.core.first(seq__20022_20979__$1);
if(cljs.core.truth_(child_20987)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20987);


var G__20988 = cljs.core.next(seq__20022_20979__$1);
var G__20989 = null;
var G__20990 = (0);
var G__20991 = (0);
seq__20022_20965 = G__20988;
chunk__20024_20966 = G__20989;
count__20025_20967 = G__20990;
i__20026_20968 = G__20991;
continue;
} else {
var G__20992 = cljs.core.next(seq__20022_20979__$1);
var G__20993 = null;
var G__20994 = (0);
var G__20995 = (0);
seq__20022_20965 = G__20992;
chunk__20024_20966 = G__20993;
count__20025_20967 = G__20994;
i__20026_20968 = G__20995;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20964);
}


var G__20996 = seq__19965_20959;
var G__20997 = chunk__19966_20960;
var G__20998 = count__19967_20961;
var G__20999 = (i__19968_20962 + (1));
seq__19965_20959 = G__20996;
chunk__19966_20960 = G__20997;
count__19967_20961 = G__20998;
i__19968_20962 = G__20999;
continue;
} else {
var temp__5804__auto___21000 = cljs.core.seq(seq__19965_20959);
if(temp__5804__auto___21000){
var seq__19965_21001__$1 = temp__5804__auto___21000;
if(cljs.core.chunked_seq_QMARK_(seq__19965_21001__$1)){
var c__5568__auto___21002 = cljs.core.chunk_first(seq__19965_21001__$1);
var G__21003 = cljs.core.chunk_rest(seq__19965_21001__$1);
var G__21004 = c__5568__auto___21002;
var G__21005 = cljs.core.count(c__5568__auto___21002);
var G__21006 = (0);
seq__19965_20959 = G__21003;
chunk__19966_20960 = G__21004;
count__19967_20961 = G__21005;
i__19968_20962 = G__21006;
continue;
} else {
var child_struct_21007 = cljs.core.first(seq__19965_21001__$1);
var children_21008 = shadow.dom.dom_node(child_struct_21007);
if(cljs.core.seq_QMARK_(children_21008)){
var seq__20042_21009 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21008));
var chunk__20044_21010 = null;
var count__20045_21011 = (0);
var i__20046_21012 = (0);
while(true){
if((i__20046_21012 < count__20045_21011)){
var child_21013 = chunk__20044_21010.cljs$core$IIndexed$_nth$arity$2(null,i__20046_21012);
if(cljs.core.truth_(child_21013)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21013);


var G__21014 = seq__20042_21009;
var G__21015 = chunk__20044_21010;
var G__21016 = count__20045_21011;
var G__21017 = (i__20046_21012 + (1));
seq__20042_21009 = G__21014;
chunk__20044_21010 = G__21015;
count__20045_21011 = G__21016;
i__20046_21012 = G__21017;
continue;
} else {
var G__21018 = seq__20042_21009;
var G__21019 = chunk__20044_21010;
var G__21020 = count__20045_21011;
var G__21021 = (i__20046_21012 + (1));
seq__20042_21009 = G__21018;
chunk__20044_21010 = G__21019;
count__20045_21011 = G__21020;
i__20046_21012 = G__21021;
continue;
}
} else {
var temp__5804__auto___21026__$1 = cljs.core.seq(seq__20042_21009);
if(temp__5804__auto___21026__$1){
var seq__20042_21028__$1 = temp__5804__auto___21026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20042_21028__$1)){
var c__5568__auto___21029 = cljs.core.chunk_first(seq__20042_21028__$1);
var G__21030 = cljs.core.chunk_rest(seq__20042_21028__$1);
var G__21031 = c__5568__auto___21029;
var G__21032 = cljs.core.count(c__5568__auto___21029);
var G__21033 = (0);
seq__20042_21009 = G__21030;
chunk__20044_21010 = G__21031;
count__20045_21011 = G__21032;
i__20046_21012 = G__21033;
continue;
} else {
var child_21034 = cljs.core.first(seq__20042_21028__$1);
if(cljs.core.truth_(child_21034)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21034);


var G__21035 = cljs.core.next(seq__20042_21028__$1);
var G__21036 = null;
var G__21037 = (0);
var G__21038 = (0);
seq__20042_21009 = G__21035;
chunk__20044_21010 = G__21036;
count__20045_21011 = G__21037;
i__20046_21012 = G__21038;
continue;
} else {
var G__21041 = cljs.core.next(seq__20042_21028__$1);
var G__21042 = null;
var G__21043 = (0);
var G__21044 = (0);
seq__20042_21009 = G__21041;
chunk__20044_21010 = G__21042;
count__20045_21011 = G__21043;
i__20046_21012 = G__21044;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21008);
}


var G__21045 = cljs.core.next(seq__19965_21001__$1);
var G__21046 = null;
var G__21047 = (0);
var G__21048 = (0);
seq__19965_20959 = G__21045;
chunk__19966_20960 = G__21046;
count__19967_20961 = G__21047;
i__19968_20962 = G__21048;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20070 = cljs.core.seq(node);
var chunk__20071 = null;
var count__20072 = (0);
var i__20073 = (0);
while(true){
if((i__20073 < count__20072)){
var n = chunk__20071.cljs$core$IIndexed$_nth$arity$2(null,i__20073);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21053 = seq__20070;
var G__21054 = chunk__20071;
var G__21055 = count__20072;
var G__21056 = (i__20073 + (1));
seq__20070 = G__21053;
chunk__20071 = G__21054;
count__20072 = G__21055;
i__20073 = G__21056;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20070);
if(temp__5804__auto__){
var seq__20070__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20070__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20070__$1);
var G__21057 = cljs.core.chunk_rest(seq__20070__$1);
var G__21058 = c__5568__auto__;
var G__21059 = cljs.core.count(c__5568__auto__);
var G__21060 = (0);
seq__20070 = G__21057;
chunk__20071 = G__21058;
count__20072 = G__21059;
i__20073 = G__21060;
continue;
} else {
var n = cljs.core.first(seq__20070__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21062 = cljs.core.next(seq__20070__$1);
var G__21063 = null;
var G__21064 = (0);
var G__21065 = (0);
seq__20070 = G__21062;
chunk__20071 = G__21063;
count__20072 = G__21064;
i__20073 = G__21065;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20087 = arguments.length;
switch (G__20087) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20094 = arguments.length;
switch (G__20094) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20110 = arguments.length;
switch (G__20110) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21091 = arguments.length;
var i__5770__auto___21092 = (0);
while(true){
if((i__5770__auto___21092 < len__5769__auto___21091)){
args__5775__auto__.push((arguments[i__5770__auto___21092]));

var G__21093 = (i__5770__auto___21092 + (1));
i__5770__auto___21092 = G__21093;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20118_21100 = cljs.core.seq(nodes);
var chunk__20119_21101 = null;
var count__20120_21102 = (0);
var i__20121_21103 = (0);
while(true){
if((i__20121_21103 < count__20120_21102)){
var node_21106 = chunk__20119_21101.cljs$core$IIndexed$_nth$arity$2(null,i__20121_21103);
fragment.appendChild(shadow.dom._to_dom(node_21106));


var G__21110 = seq__20118_21100;
var G__21111 = chunk__20119_21101;
var G__21112 = count__20120_21102;
var G__21113 = (i__20121_21103 + (1));
seq__20118_21100 = G__21110;
chunk__20119_21101 = G__21111;
count__20120_21102 = G__21112;
i__20121_21103 = G__21113;
continue;
} else {
var temp__5804__auto___21114 = cljs.core.seq(seq__20118_21100);
if(temp__5804__auto___21114){
var seq__20118_21115__$1 = temp__5804__auto___21114;
if(cljs.core.chunked_seq_QMARK_(seq__20118_21115__$1)){
var c__5568__auto___21120 = cljs.core.chunk_first(seq__20118_21115__$1);
var G__21121 = cljs.core.chunk_rest(seq__20118_21115__$1);
var G__21122 = c__5568__auto___21120;
var G__21123 = cljs.core.count(c__5568__auto___21120);
var G__21124 = (0);
seq__20118_21100 = G__21121;
chunk__20119_21101 = G__21122;
count__20120_21102 = G__21123;
i__20121_21103 = G__21124;
continue;
} else {
var node_21125 = cljs.core.first(seq__20118_21115__$1);
fragment.appendChild(shadow.dom._to_dom(node_21125));


var G__21131 = cljs.core.next(seq__20118_21115__$1);
var G__21132 = null;
var G__21133 = (0);
var G__21134 = (0);
seq__20118_21100 = G__21131;
chunk__20119_21101 = G__21132;
count__20120_21102 = G__21133;
i__20121_21103 = G__21134;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20116){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20116));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20141_21140 = cljs.core.seq(scripts);
var chunk__20142_21141 = null;
var count__20143_21142 = (0);
var i__20144_21143 = (0);
while(true){
if((i__20144_21143 < count__20143_21142)){
var vec__20157_21148 = chunk__20142_21141.cljs$core$IIndexed$_nth$arity$2(null,i__20144_21143);
var script_tag_21149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157_21148,(0),null);
var script_body_21150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157_21148,(1),null);
eval(script_body_21150);


var G__21159 = seq__20141_21140;
var G__21160 = chunk__20142_21141;
var G__21161 = count__20143_21142;
var G__21162 = (i__20144_21143 + (1));
seq__20141_21140 = G__21159;
chunk__20142_21141 = G__21160;
count__20143_21142 = G__21161;
i__20144_21143 = G__21162;
continue;
} else {
var temp__5804__auto___21163 = cljs.core.seq(seq__20141_21140);
if(temp__5804__auto___21163){
var seq__20141_21164__$1 = temp__5804__auto___21163;
if(cljs.core.chunked_seq_QMARK_(seq__20141_21164__$1)){
var c__5568__auto___21165 = cljs.core.chunk_first(seq__20141_21164__$1);
var G__21166 = cljs.core.chunk_rest(seq__20141_21164__$1);
var G__21167 = c__5568__auto___21165;
var G__21168 = cljs.core.count(c__5568__auto___21165);
var G__21170 = (0);
seq__20141_21140 = G__21166;
chunk__20142_21141 = G__21167;
count__20143_21142 = G__21168;
i__20144_21143 = G__21170;
continue;
} else {
var vec__20188_21174 = cljs.core.first(seq__20141_21164__$1);
var script_tag_21175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188_21174,(0),null);
var script_body_21176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188_21174,(1),null);
eval(script_body_21176);


var G__21177 = cljs.core.next(seq__20141_21164__$1);
var G__21178 = null;
var G__21179 = (0);
var G__21180 = (0);
seq__20141_21140 = G__21177;
chunk__20142_21141 = G__21178;
count__20143_21142 = G__21179;
i__20144_21143 = G__21180;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20193){
var vec__20194 = p__20193;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20194,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20194,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20209 = arguments.length;
switch (G__20209) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20227 = cljs.core.seq(style_keys);
var chunk__20228 = null;
var count__20229 = (0);
var i__20230 = (0);
while(true){
if((i__20230 < count__20229)){
var it = chunk__20228.cljs$core$IIndexed$_nth$arity$2(null,i__20230);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21189 = seq__20227;
var G__21190 = chunk__20228;
var G__21191 = count__20229;
var G__21192 = (i__20230 + (1));
seq__20227 = G__21189;
chunk__20228 = G__21190;
count__20229 = G__21191;
i__20230 = G__21192;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20227);
if(temp__5804__auto__){
var seq__20227__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20227__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20227__$1);
var G__21196 = cljs.core.chunk_rest(seq__20227__$1);
var G__21197 = c__5568__auto__;
var G__21198 = cljs.core.count(c__5568__auto__);
var G__21199 = (0);
seq__20227 = G__21196;
chunk__20228 = G__21197;
count__20229 = G__21198;
i__20230 = G__21199;
continue;
} else {
var it = cljs.core.first(seq__20227__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21201 = cljs.core.next(seq__20227__$1);
var G__21202 = null;
var G__21203 = (0);
var G__21204 = (0);
seq__20227 = G__21201;
chunk__20228 = G__21202;
count__20229 = G__21203;
i__20230 = G__21204;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20245,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20258 = k20245;
var G__20258__$1 = (((G__20258 instanceof cljs.core.Keyword))?G__20258.fqn:null);
switch (G__20258__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20245,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20265){
var vec__20267 = p__20265;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20244){
var self__ = this;
var G__20244__$1 = this;
return (new cljs.core.RecordIter((0),G__20244__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20246,other20247){
var self__ = this;
var this20246__$1 = this;
return (((!((other20247 == null)))) && ((((this20246__$1.constructor === other20247.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20246__$1.x,other20247.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20246__$1.y,other20247.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20246__$1.__extmap,other20247.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20245){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20285 = k20245;
var G__20285__$1 = (((G__20285 instanceof cljs.core.Keyword))?G__20285.fqn:null);
switch (G__20285__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20245);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20244){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20288 = cljs.core.keyword_identical_QMARK_;
var expr__20289 = k__5352__auto__;
if(cljs.core.truth_((pred__20288.cljs$core$IFn$_invoke$arity$2 ? pred__20288.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20289) : pred__20288.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20289)))){
return (new shadow.dom.Coordinate(G__20244,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20288.cljs$core$IFn$_invoke$arity$2 ? pred__20288.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20289) : pred__20288.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20289)))){
return (new shadow.dom.Coordinate(self__.x,G__20244,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20244),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20244){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20244,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20249){
var extmap__5385__auto__ = (function (){var G__20307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20249,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20249)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20307);
} else {
return G__20307;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20249),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20249),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20323,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20353 = k20323;
var G__20353__$1 = (((G__20353 instanceof cljs.core.Keyword))?G__20353.fqn:null);
switch (G__20353__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20323,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20365){
var vec__20366 = p__20365;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20366,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20366,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20322){
var self__ = this;
var G__20322__$1 = this;
return (new cljs.core.RecordIter((0),G__20322__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20324,other20325){
var self__ = this;
var this20324__$1 = this;
return (((!((other20325 == null)))) && ((((this20324__$1.constructor === other20325.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20324__$1.w,other20325.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20324__$1.h,other20325.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20324__$1.__extmap,other20325.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20323){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20459 = k20323;
var G__20459__$1 = (((G__20459 instanceof cljs.core.Keyword))?G__20459.fqn:null);
switch (G__20459__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20323);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20322){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20463 = cljs.core.keyword_identical_QMARK_;
var expr__20464 = k__5352__auto__;
if(cljs.core.truth_((pred__20463.cljs$core$IFn$_invoke$arity$2 ? pred__20463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20464) : pred__20463.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20464)))){
return (new shadow.dom.Size(G__20322,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20463.cljs$core$IFn$_invoke$arity$2 ? pred__20463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20464) : pred__20463.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20464)))){
return (new shadow.dom.Size(self__.w,G__20322,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20322),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20322){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20322,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20328){
var extmap__5385__auto__ = (function (){var G__20495 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20328,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20328)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20495);
} else {
return G__20495;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20328),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20328),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21244 = (i + (1));
var G__21245 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21244;
ret = G__21245;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20544){
var vec__20545 = p__20544;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20545,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20556 = arguments.length;
switch (G__20556) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21251 = ps;
var G__21252 = (i + (1));
el__$1 = G__21251;
i = G__21252;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20650 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20650,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20650,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20650,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20659_21253 = cljs.core.seq(props);
var chunk__20660_21254 = null;
var count__20661_21255 = (0);
var i__20662_21256 = (0);
while(true){
if((i__20662_21256 < count__20661_21255)){
var vec__20687_21257 = chunk__20660_21254.cljs$core$IIndexed$_nth$arity$2(null,i__20662_21256);
var k_21258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20687_21257,(0),null);
var v_21259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20687_21257,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21258);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21258),v_21259);


var G__21264 = seq__20659_21253;
var G__21265 = chunk__20660_21254;
var G__21266 = count__20661_21255;
var G__21267 = (i__20662_21256 + (1));
seq__20659_21253 = G__21264;
chunk__20660_21254 = G__21265;
count__20661_21255 = G__21266;
i__20662_21256 = G__21267;
continue;
} else {
var temp__5804__auto___21268 = cljs.core.seq(seq__20659_21253);
if(temp__5804__auto___21268){
var seq__20659_21270__$1 = temp__5804__auto___21268;
if(cljs.core.chunked_seq_QMARK_(seq__20659_21270__$1)){
var c__5568__auto___21275 = cljs.core.chunk_first(seq__20659_21270__$1);
var G__21279 = cljs.core.chunk_rest(seq__20659_21270__$1);
var G__21280 = c__5568__auto___21275;
var G__21281 = cljs.core.count(c__5568__auto___21275);
var G__21282 = (0);
seq__20659_21253 = G__21279;
chunk__20660_21254 = G__21280;
count__20661_21255 = G__21281;
i__20662_21256 = G__21282;
continue;
} else {
var vec__20693_21285 = cljs.core.first(seq__20659_21270__$1);
var k_21286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20693_21285,(0),null);
var v_21287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20693_21285,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21286);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21286),v_21287);


var G__21289 = cljs.core.next(seq__20659_21270__$1);
var G__21290 = null;
var G__21291 = (0);
var G__21292 = (0);
seq__20659_21253 = G__21289;
chunk__20660_21254 = G__21290;
count__20661_21255 = G__21291;
i__20662_21256 = G__21292;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20708 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20708,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20708,(1),null);
var seq__20711_21296 = cljs.core.seq(node_children);
var chunk__20713_21297 = null;
var count__20714_21298 = (0);
var i__20715_21299 = (0);
while(true){
if((i__20715_21299 < count__20714_21298)){
var child_struct_21301 = chunk__20713_21297.cljs$core$IIndexed$_nth$arity$2(null,i__20715_21299);
if((!((child_struct_21301 == null)))){
if(typeof child_struct_21301 === 'string'){
var text_21306 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21306),child_struct_21301].join(''));
} else {
var children_21308 = shadow.dom.svg_node(child_struct_21301);
if(cljs.core.seq_QMARK_(children_21308)){
var seq__20747_21311 = cljs.core.seq(children_21308);
var chunk__20749_21312 = null;
var count__20750_21313 = (0);
var i__20751_21314 = (0);
while(true){
if((i__20751_21314 < count__20750_21313)){
var child_21316 = chunk__20749_21312.cljs$core$IIndexed$_nth$arity$2(null,i__20751_21314);
if(cljs.core.truth_(child_21316)){
node.appendChild(child_21316);


var G__21318 = seq__20747_21311;
var G__21319 = chunk__20749_21312;
var G__21320 = count__20750_21313;
var G__21321 = (i__20751_21314 + (1));
seq__20747_21311 = G__21318;
chunk__20749_21312 = G__21319;
count__20750_21313 = G__21320;
i__20751_21314 = G__21321;
continue;
} else {
var G__21325 = seq__20747_21311;
var G__21326 = chunk__20749_21312;
var G__21327 = count__20750_21313;
var G__21328 = (i__20751_21314 + (1));
seq__20747_21311 = G__21325;
chunk__20749_21312 = G__21326;
count__20750_21313 = G__21327;
i__20751_21314 = G__21328;
continue;
}
} else {
var temp__5804__auto___21329 = cljs.core.seq(seq__20747_21311);
if(temp__5804__auto___21329){
var seq__20747_21330__$1 = temp__5804__auto___21329;
if(cljs.core.chunked_seq_QMARK_(seq__20747_21330__$1)){
var c__5568__auto___21331 = cljs.core.chunk_first(seq__20747_21330__$1);
var G__21332 = cljs.core.chunk_rest(seq__20747_21330__$1);
var G__21333 = c__5568__auto___21331;
var G__21334 = cljs.core.count(c__5568__auto___21331);
var G__21335 = (0);
seq__20747_21311 = G__21332;
chunk__20749_21312 = G__21333;
count__20750_21313 = G__21334;
i__20751_21314 = G__21335;
continue;
} else {
var child_21336 = cljs.core.first(seq__20747_21330__$1);
if(cljs.core.truth_(child_21336)){
node.appendChild(child_21336);


var G__21337 = cljs.core.next(seq__20747_21330__$1);
var G__21338 = null;
var G__21339 = (0);
var G__21340 = (0);
seq__20747_21311 = G__21337;
chunk__20749_21312 = G__21338;
count__20750_21313 = G__21339;
i__20751_21314 = G__21340;
continue;
} else {
var G__21345 = cljs.core.next(seq__20747_21330__$1);
var G__21346 = null;
var G__21347 = (0);
var G__21348 = (0);
seq__20747_21311 = G__21345;
chunk__20749_21312 = G__21346;
count__20750_21313 = G__21347;
i__20751_21314 = G__21348;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21308);
}
}


var G__21349 = seq__20711_21296;
var G__21350 = chunk__20713_21297;
var G__21351 = count__20714_21298;
var G__21352 = (i__20715_21299 + (1));
seq__20711_21296 = G__21349;
chunk__20713_21297 = G__21350;
count__20714_21298 = G__21351;
i__20715_21299 = G__21352;
continue;
} else {
var G__21353 = seq__20711_21296;
var G__21354 = chunk__20713_21297;
var G__21355 = count__20714_21298;
var G__21356 = (i__20715_21299 + (1));
seq__20711_21296 = G__21353;
chunk__20713_21297 = G__21354;
count__20714_21298 = G__21355;
i__20715_21299 = G__21356;
continue;
}
} else {
var temp__5804__auto___21357 = cljs.core.seq(seq__20711_21296);
if(temp__5804__auto___21357){
var seq__20711_21358__$1 = temp__5804__auto___21357;
if(cljs.core.chunked_seq_QMARK_(seq__20711_21358__$1)){
var c__5568__auto___21359 = cljs.core.chunk_first(seq__20711_21358__$1);
var G__21360 = cljs.core.chunk_rest(seq__20711_21358__$1);
var G__21361 = c__5568__auto___21359;
var G__21362 = cljs.core.count(c__5568__auto___21359);
var G__21363 = (0);
seq__20711_21296 = G__21360;
chunk__20713_21297 = G__21361;
count__20714_21298 = G__21362;
i__20715_21299 = G__21363;
continue;
} else {
var child_struct_21364 = cljs.core.first(seq__20711_21358__$1);
if((!((child_struct_21364 == null)))){
if(typeof child_struct_21364 === 'string'){
var text_21365 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21365),child_struct_21364].join(''));
} else {
var children_21366 = shadow.dom.svg_node(child_struct_21364);
if(cljs.core.seq_QMARK_(children_21366)){
var seq__20756_21367 = cljs.core.seq(children_21366);
var chunk__20758_21368 = null;
var count__20759_21369 = (0);
var i__20760_21370 = (0);
while(true){
if((i__20760_21370 < count__20759_21369)){
var child_21371 = chunk__20758_21368.cljs$core$IIndexed$_nth$arity$2(null,i__20760_21370);
if(cljs.core.truth_(child_21371)){
node.appendChild(child_21371);


var G__21372 = seq__20756_21367;
var G__21373 = chunk__20758_21368;
var G__21374 = count__20759_21369;
var G__21375 = (i__20760_21370 + (1));
seq__20756_21367 = G__21372;
chunk__20758_21368 = G__21373;
count__20759_21369 = G__21374;
i__20760_21370 = G__21375;
continue;
} else {
var G__21376 = seq__20756_21367;
var G__21377 = chunk__20758_21368;
var G__21378 = count__20759_21369;
var G__21379 = (i__20760_21370 + (1));
seq__20756_21367 = G__21376;
chunk__20758_21368 = G__21377;
count__20759_21369 = G__21378;
i__20760_21370 = G__21379;
continue;
}
} else {
var temp__5804__auto___21380__$1 = cljs.core.seq(seq__20756_21367);
if(temp__5804__auto___21380__$1){
var seq__20756_21381__$1 = temp__5804__auto___21380__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20756_21381__$1)){
var c__5568__auto___21382 = cljs.core.chunk_first(seq__20756_21381__$1);
var G__21383 = cljs.core.chunk_rest(seq__20756_21381__$1);
var G__21384 = c__5568__auto___21382;
var G__21385 = cljs.core.count(c__5568__auto___21382);
var G__21386 = (0);
seq__20756_21367 = G__21383;
chunk__20758_21368 = G__21384;
count__20759_21369 = G__21385;
i__20760_21370 = G__21386;
continue;
} else {
var child_21387 = cljs.core.first(seq__20756_21381__$1);
if(cljs.core.truth_(child_21387)){
node.appendChild(child_21387);


var G__21388 = cljs.core.next(seq__20756_21381__$1);
var G__21389 = null;
var G__21390 = (0);
var G__21391 = (0);
seq__20756_21367 = G__21388;
chunk__20758_21368 = G__21389;
count__20759_21369 = G__21390;
i__20760_21370 = G__21391;
continue;
} else {
var G__21392 = cljs.core.next(seq__20756_21381__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__20756_21367 = G__21392;
chunk__20758_21368 = G__21393;
count__20759_21369 = G__21394;
i__20760_21370 = G__21395;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21366);
}
}


var G__21396 = cljs.core.next(seq__20711_21358__$1);
var G__21397 = null;
var G__21398 = (0);
var G__21399 = (0);
seq__20711_21296 = G__21396;
chunk__20713_21297 = G__21397;
count__20714_21298 = G__21398;
i__20715_21299 = G__21399;
continue;
} else {
var G__21400 = cljs.core.next(seq__20711_21358__$1);
var G__21401 = null;
var G__21402 = (0);
var G__21403 = (0);
seq__20711_21296 = G__21400;
chunk__20713_21297 = G__21401;
count__20714_21298 = G__21402;
i__20715_21299 = G__21403;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21405 = arguments.length;
var i__5770__auto___21406 = (0);
while(true){
if((i__5770__auto___21406 < len__5769__auto___21405)){
args__5775__auto__.push((arguments[i__5770__auto___21406]));

var G__21407 = (i__5770__auto___21406 + (1));
i__5770__auto___21406 = G__21407;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20776){
var G__20777 = cljs.core.first(seq20776);
var seq20776__$1 = cljs.core.next(seq20776);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20777,seq20776__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20793 = arguments.length;
switch (G__20793) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17281__auto___21411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_20806){
var state_val_20807 = (state_20806[(1)]);
if((state_val_20807 === (1))){
var state_20806__$1 = state_20806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20806__$1,(2),once_or_cleanup);
} else {
if((state_val_20807 === (2))){
var inst_20802 = (state_20806[(2)]);
var inst_20803 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20806__$1 = (function (){var statearr_20813 = state_20806;
(statearr_20813[(7)] = inst_20802);

return statearr_20813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20806__$1,inst_20803);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17100__auto__ = null;
var shadow$dom$state_machine__17100__auto____0 = (function (){
var statearr_20817 = [null,null,null,null,null,null,null,null];
(statearr_20817[(0)] = shadow$dom$state_machine__17100__auto__);

(statearr_20817[(1)] = (1));

return statearr_20817;
});
var shadow$dom$state_machine__17100__auto____1 = (function (state_20806){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_20806);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e20820){var ex__17103__auto__ = e20820;
var statearr_20821_21412 = state_20806;
(statearr_20821_21412[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_20806[(4)]))){
var statearr_20822_21413 = state_20806;
(statearr_20822_21413[(1)] = cljs.core.first((state_20806[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21414 = state_20806;
state_20806 = G__21414;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
shadow$dom$state_machine__17100__auto__ = function(state_20806){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17100__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17100__auto____1.call(this,state_20806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17100__auto____0;
shadow$dom$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17100__auto____1;
return shadow$dom$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_20826 = f__17282__auto__();
(statearr_20826[(6)] = c__17281__auto___21411);

return statearr_20826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
