goog.provide('jtk_dvlp.re_frame.dragndrop');
jtk_dvlp.re_frame.dragndrop._BANG_clj__GT_transit = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
jtk_dvlp.re_frame.dragndrop.set_fn_clj__GT_transit_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,jtk_dvlp.re_frame.dragndrop._BANG_clj__GT_transit);
jtk_dvlp.re_frame.dragndrop.clj__GT_transit = (function jtk_dvlp$re_frame$dragndrop$clj__GT_transit(clj){
var f = (function (){var or__5045__auto__ = cljs.core.deref(jtk_dvlp.re_frame.dragndrop._BANG_clj__GT_transit);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return jtk_dvlp.transit.clj__GT_transit;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(clj) : f.call(null,clj));
});
jtk_dvlp.re_frame.dragndrop._BANG_transit__GT_clj = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
jtk_dvlp.re_frame.dragndrop.set_fn_transit__GT_clj_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,jtk_dvlp.re_frame.dragndrop._BANG_transit__GT_clj);
jtk_dvlp.re_frame.dragndrop.transit__GT_clj = (function jtk_dvlp$re_frame$dragndrop$transit__GT_clj(transit){
var f = (function (){var or__5045__auto__ = cljs.core.deref(jtk_dvlp.re_frame.dragndrop._BANG_transit__GT_clj);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return jtk_dvlp.transit.transit__GT_clj;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(transit) : f.call(null,transit));
});
jtk_dvlp.re_frame.dragndrop.ensure_coll = (function jtk_dvlp$re_frame$dragndrop$ensure_coll(x){
if(cljs.core.coll_QMARK_(x)){
return x;
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[x],null));
}
});
jtk_dvlp.re_frame.dragndrop.normalize_type = (function jtk_dvlp$re_frame$dragndrop$normalize_type(type){
var edn_QMARK_ = (!(typeof type === 'string'));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edn?","edn?",-499466946),edn_QMARK_,new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var G__13040 = type;
if(edn_QMARK_){
return jtk_dvlp.re_frame.dragndrop.clj__GT_transit(G__13040);
} else {
return G__13040;
}
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),type], null);
});
jtk_dvlp.re_frame.dragndrop.normalize_types = (function jtk_dvlp$re_frame$dragndrop$normalize_types(types){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.identity),cljs.core.map.cljs$core$IFn$_invoke$arity$2(jtk_dvlp.re_frame.dragndrop.normalize_type,jtk_dvlp.re_frame.dragndrop.ensure_coll(types))));
});
jtk_dvlp.re_frame.dragndrop.set_transfer_data_BANG_ = (function jtk_dvlp$re_frame$dragndrop$set_transfer_data_BANG_(js_event,p__13041,data){
var map__13042 = p__13041;
var map__13042__$1 = cljs.core.__destructure_map(map__13042);
var type = map__13042__$1;
var edn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13042__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var transfer = (js_event["dataTransfer"]);
var data__$1 = (function (){var G__13043 = data;
if(cljs.core.truth_(edn_QMARK_)){
return jtk_dvlp.re_frame.dragndrop.clj__GT_transit(G__13043);
} else {
return G__13043;
}
})();
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(transfer,"setData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(type),data__$1], 0));
});
jtk_dvlp.re_frame.dragndrop.get_transfer_items = (function jtk_dvlp$re_frame$dragndrop$get_transfer_items(js_event,types){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(types,(function (p1__13044_SHARP_){
return (p1__13044_SHARP_["type"]);
})),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((js_event["dataTransfer"]["items"]))));
});
jtk_dvlp.re_frame.dragndrop.get_transfer_data = (function jtk_dvlp$re_frame$dragndrop$get_transfer_data(js_event,types){
var iter__5523__auto__ = (function jtk_dvlp$re_frame$dragndrop$get_transfer_data_$_iter__13045(s__13046){
return (new cljs.core.LazySeq(null,(function (){
var s__13046__$1 = s__13046;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13046__$1);
if(temp__5804__auto__){
var s__13046__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13046__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13046__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13048 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13047 = (0);
while(true){
if((i__13047 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13047);
var kind = (item["kind"]);
var type = (item["type"]);
var edn_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"edn?","edn?",-499466946)], null));
cljs.core.chunk_append(b__13048,(function (){var G__13049 = kind;
switch (G__13049) {
case "string":
var transfer = (js_event["dataTransfer"]);
var G__13050 = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(transfer,"getData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0));
if(cljs.core.truth_(edn_QMARK_)){
return jtk_dvlp.re_frame.dragndrop.transit__GT_clj(G__13050);
} else {
return G__13050;
}

break;
case "file":
return cljs.core.js_invoke(item,"getAsFile");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13049)].join('')));

}
})());

var G__13081 = (i__13047 + (1));
i__13047 = G__13081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13048),jtk_dvlp$re_frame$dragndrop$get_transfer_data_$_iter__13045(cljs.core.chunk_rest(s__13046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13048),null);
}
} else {
var item = cljs.core.first(s__13046__$2);
var kind = (item["kind"]);
var type = (item["type"]);
var edn_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"edn?","edn?",-499466946)], null));
return cljs.core.cons((function (){var G__13051 = kind;
switch (G__13051) {
case "string":
var transfer = (js_event["dataTransfer"]);
var G__13052 = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(transfer,"getData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0));
if(cljs.core.truth_(edn_QMARK_)){
return jtk_dvlp.re_frame.dragndrop.transit__GT_clj(G__13052);
} else {
return G__13052;
}

break;
case "file":
return cljs.core.js_invoke(item,"getAsFile");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13051)].join('')));

}
})(),jtk_dvlp$re_frame$dragndrop$get_transfer_data_$_iter__13045(cljs.core.rest(s__13046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(jtk_dvlp.re_frame.dragndrop.get_transfer_items(js_event,types));
});
jtk_dvlp.re_frame.dragndrop.can_handle_transfer_data_QMARK_ = (function jtk_dvlp$re_frame$dragndrop$can_handle_transfer_data_QMARK_(js_event,types){
return (!((jtk_dvlp.re_frame.dragndrop.get_transfer_items(js_event,types) == null)));
});
jtk_dvlp.re_frame.dragndrop.prevent_drop_BANG_ = (function jtk_dvlp$re_frame$dragndrop$prevent_drop_BANG_(js_event){
return (js_event["dataTransfer"]["dropEffect"] = "none");
});
jtk_dvlp.re_frame.dragndrop.prevent_default_BANG_ = (function jtk_dvlp$re_frame$dragndrop$prevent_default_BANG_(js_event){
return cljs.core.js_invoke(js_event,"preventDefault");
});
jtk_dvlp.re_frame.dragndrop.normalize_element = (function jtk_dvlp$re_frame$dragndrop$normalize_element(p__13053){
var vec__13054 = p__13053;
var seq__13055 = cljs.core.seq(vec__13054);
var first__13056 = cljs.core.first(seq__13055);
var seq__13055__$1 = cljs.core.next(seq__13055);
var tag = first__13056;
var first__13056__$1 = cljs.core.first(seq__13055__$1);
var seq__13055__$2 = cljs.core.next(seq__13055__$1);
var attrs_or_content = first__13056__$1;
var more_content = seq__13055__$2;
var element = vec__13054;
var vec__13057 = ((cljs.core.map_QMARK_(attrs_or_content))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_or_content,more_content], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_or_content], null),more_content)], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs], null),content);
});
jtk_dvlp.re_frame.dragndrop.normalize_class = (function jtk_dvlp$re_frame$dragndrop$normalize_class(class$){
if(cljs.core.vector_QMARK_(class$)){
return class$;
} else {
if((class$ == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);

}
}
});
/**
 * Modifies `element` to be draggable.
 * 
 *   - `type` defines the type of data to transfer via drag & drop. Supports string (e.g. mimetype for exchange of files), keyword and other values working with `jtk-dvlp.transit/clj->transit`. Need to match dropzone`s type to be droppable.
 *   - `data` defines the data to transfer via drag & drop. Supports strings and any value working with `jtk-dvlp.transit/clj->transit`. Auto converts non string values to transit-json and vice versa, when `type` is not a string assuming non mimetype value but clojure structures.
 *   - `on-drag` (optional) defines a re-frame event vector or function to dispatch / call with the `data` on start dragging
 * 
 *   See `dropzone`.
 */
jtk_dvlp.re_frame.dragndrop.draggable = (function jtk_dvlp$re_frame$dragndrop$draggable(p__13061,element){
var map__13062 = p__13061;
var map__13062__$1 = cljs.core.__destructure_map(map__13062);
var attrs = map__13062__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13062__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13062__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13062__$1,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091));
var _BANG_dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__13063,element__$1){
var map__13064 = p__13063;
var map__13064__$1 = cljs.core.__destructure_map(map__13064);
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13064__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13064__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_drag__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13064__$1,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091));
var vec__13065 = jtk_dvlp.re_frame.dragndrop.normalize_element(element__$1);
var seq__13066 = cljs.core.seq(vec__13065);
var first__13067 = cljs.core.first(seq__13066);
var seq__13066__$1 = cljs.core.next(seq__13066);
var tag = first__13067;
var first__13067__$1 = cljs.core.first(seq__13066__$1);
var seq__13066__$2 = cljs.core.next(seq__13066__$1);
var map__13068 = first__13067__$1;
var map__13068__$1 = cljs.core.__destructure_map(map__13068);
var attrs__$1 = map__13068__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13068__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var content = seq__13066__$2;
var class$__$1 = (function (){var G__13069 = jtk_dvlp.re_frame.dragndrop.normalize_class(class$);
var G__13069__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13069,new cljs.core.Keyword(null,"draggable","draggable",1676206163))
;
if(cljs.core.truth_(cljs.core.deref(_BANG_dragging_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13069__$1,new cljs.core.Keyword(null,"draggable--dragging","draggable--dragging",2097050898));
} else {
return G__13069__$1;
}
})();
var type__$2 = jtk_dvlp.re_frame.dragndrop.normalize_type(type__$1);
var on_drag__$2 = ((cljs.core.vector_QMARK_(on_drag__$1))?(function (p1__13060_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_drag__$1,p1__13060_SHARP_));
}):on_drag__$1);
var drag_attrs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (js_event){
jtk_dvlp.re_frame.dragndrop.set_transfer_data_BANG_(js_event,type__$2,data__$1);

cljs.core.reset_BANG_(_BANG_dragging_QMARK_,true);

if(cljs.core.truth_(on_drag__$2)){
return (on_drag__$2.cljs$core$IFn$_invoke$arity$1 ? on_drag__$2.cljs$core$IFn$_invoke$arity$1(data__$1) : on_drag__$2.call(null,data__$1));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (_js_event){
return cljs.core.reset_BANG_(_BANG_dragging_QMARK_,false);
})], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs__$1,drag_attrs], 0))], null),content);
});
});
/**
 * Modifies `element` to function as dropzone for draggables.
 * 
 *   - `types` defines the type or collection of types of data to be allowed dropping over this element / zone. Supports string, keyword and other values working with `jtk-dvlp.transit/clj->transit`. Need to match draggable´s types to allow dropping.
 *   - `on-drop` defines a re-frame event vector or function to dispatch / call with a vector of the dropped data on dopping a draggable element.
 * 
 *   See `draggable`.
 */
jtk_dvlp.re_frame.dragndrop.dropzone = (function jtk_dvlp$re_frame$dragndrop$dropzone(p__13071,element){
var map__13072 = p__13071;
var map__13072__$1 = cljs.core.__destructure_map(map__13072);
var attrs = map__13072__$1;
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13072__$1,new cljs.core.Keyword(null,"types","types",590030639));
var on_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13072__$1,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491));
var _BANG_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__13073,element__$1){
var map__13074 = p__13073;
var map__13074__$1 = cljs.core.__destructure_map(map__13074);
var types__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13074__$1,new cljs.core.Keyword(null,"types","types",590030639));
var on_drop__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13074__$1,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491));
var vec__13075 = jtk_dvlp.re_frame.dragndrop.normalize_element(element__$1);
var seq__13076 = cljs.core.seq(vec__13075);
var first__13077 = cljs.core.first(seq__13076);
var seq__13076__$1 = cljs.core.next(seq__13076);
var tag = first__13077;
var first__13077__$1 = cljs.core.first(seq__13076__$1);
var seq__13076__$2 = cljs.core.next(seq__13076__$1);
var map__13078 = first__13077__$1;
var map__13078__$1 = cljs.core.__destructure_map(map__13078);
var attrs__$1 = map__13078__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13078__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var content = seq__13076__$2;
var class$__$1 = (function (){var G__13079 = jtk_dvlp.re_frame.dragndrop.normalize_class(class$);
var G__13079__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13079,new cljs.core.Keyword(null,"dropzone","dropzone",-36573991))
;
if(cljs.core.truth_(cljs.core.deref(_BANG_over_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13079__$1,new cljs.core.Keyword(null,"dropzone--over","dropzone--over",265655464));
} else {
return G__13079__$1;
}
})();
var types__$2 = jtk_dvlp.re_frame.dragndrop.normalize_types(types__$1);
var on_drop__$2 = ((cljs.core.vector_QMARK_(on_drop__$1))?(function (p1__13070_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_drop__$1,p1__13070_SHARP_));
}):on_drop__$1);
var drop_attrs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (js_event){
if(jtk_dvlp.re_frame.dragndrop.can_handle_transfer_data_QMARK_(js_event,types__$2)){
return cljs.core.reset_BANG_(_BANG_over_QMARK_,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (js_event){
if(jtk_dvlp.re_frame.dragndrop.can_handle_transfer_data_QMARK_(js_event,types__$2)){
return jtk_dvlp.re_frame.dragndrop.prevent_default_BANG_(js_event);
} else {
return jtk_dvlp.re_frame.dragndrop.prevent_drop_BANG_(js_event);
}
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (js_event){
var temp__5804__auto__ = jtk_dvlp.re_frame.dragndrop.get_transfer_data(js_event,types__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
jtk_dvlp.re_frame.dragndrop.prevent_default_BANG_(js_event);

(on_drop__$2.cljs$core$IFn$_invoke$arity$1 ? on_drop__$2.cljs$core$IFn$_invoke$arity$1(data) : on_drop__$2.call(null,data));

return cljs.core.reset_BANG_(_BANG_over_QMARK_,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (js_event){
return cljs.core.reset_BANG_(_BANG_over_QMARK_,false);
})], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs__$1,drop_attrs], 0))], null),content);
});
});

//# sourceMappingURL=jtk_dvlp.re_frame.dragndrop.js.map
