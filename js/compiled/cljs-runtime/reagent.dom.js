goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23060 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23061 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23061);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__23062 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23063 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23063);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23062);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23060);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__23073 = arguments.length;
switch (G__23073) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__23076 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23087_23116 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__23088_23117 = null;
var count__23089_23118 = (0);
var i__23090_23119 = (0);
while(true){
if((i__23090_23119 < count__23089_23118)){
var vec__23102_23124 = chunk__23088_23117.cljs$core$IIndexed$_nth$arity$2(null,i__23090_23119);
var container_23125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102_23124,(0),null);
var comp_23126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102_23124,(1),null);
reagent.dom.re_render_component(comp_23126,container_23125);


var G__23127 = seq__23087_23116;
var G__23128 = chunk__23088_23117;
var G__23129 = count__23089_23118;
var G__23130 = (i__23090_23119 + (1));
seq__23087_23116 = G__23127;
chunk__23088_23117 = G__23128;
count__23089_23118 = G__23129;
i__23090_23119 = G__23130;
continue;
} else {
var temp__5804__auto___23132 = cljs.core.seq(seq__23087_23116);
if(temp__5804__auto___23132){
var seq__23087_23133__$1 = temp__5804__auto___23132;
if(cljs.core.chunked_seq_QMARK_(seq__23087_23133__$1)){
var c__5568__auto___23134 = cljs.core.chunk_first(seq__23087_23133__$1);
var G__23135 = cljs.core.chunk_rest(seq__23087_23133__$1);
var G__23136 = c__5568__auto___23134;
var G__23137 = cljs.core.count(c__5568__auto___23134);
var G__23138 = (0);
seq__23087_23116 = G__23135;
chunk__23088_23117 = G__23136;
count__23089_23118 = G__23137;
i__23090_23119 = G__23138;
continue;
} else {
var vec__23107_23139 = cljs.core.first(seq__23087_23133__$1);
var container_23140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23107_23139,(0),null);
var comp_23141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23107_23139,(1),null);
reagent.dom.re_render_component(comp_23141,container_23140);


var G__23142 = cljs.core.next(seq__23087_23133__$1);
var G__23143 = null;
var G__23144 = (0);
var G__23145 = (0);
seq__23087_23116 = G__23142;
chunk__23088_23117 = G__23143;
count__23089_23118 = G__23144;
i__23090_23119 = G__23145;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
