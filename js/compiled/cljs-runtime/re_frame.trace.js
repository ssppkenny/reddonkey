goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23775){
var map__23776 = p__23775;
var map__23776__$1 = cljs.core.__destructure_map(map__23776);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23776__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23776__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23776__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23776__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23779_23808 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23780_23809 = null;
var count__23781_23810 = (0);
var i__23782_23811 = (0);
while(true){
if((i__23782_23811 < count__23781_23810)){
var vec__23794_23812 = chunk__23780_23809.cljs$core$IIndexed$_nth$arity$2(null,i__23782_23811);
var k_23813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794_23812,(0),null);
var cb_23814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794_23812,(1),null);
try{var G__23799_23815 = cljs.core.deref(re_frame.trace.traces);
(cb_23814.cljs$core$IFn$_invoke$arity$1 ? cb_23814.cljs$core$IFn$_invoke$arity$1(G__23799_23815) : cb_23814.call(null,G__23799_23815));
}catch (e23797){var e_23816 = e23797;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23813,"while storing",cljs.core.deref(re_frame.trace.traces),e_23816], 0));
}

var G__23817 = seq__23779_23808;
var G__23818 = chunk__23780_23809;
var G__23819 = count__23781_23810;
var G__23820 = (i__23782_23811 + (1));
seq__23779_23808 = G__23817;
chunk__23780_23809 = G__23818;
count__23781_23810 = G__23819;
i__23782_23811 = G__23820;
continue;
} else {
var temp__5804__auto___23821 = cljs.core.seq(seq__23779_23808);
if(temp__5804__auto___23821){
var seq__23779_23822__$1 = temp__5804__auto___23821;
if(cljs.core.chunked_seq_QMARK_(seq__23779_23822__$1)){
var c__5568__auto___23823 = cljs.core.chunk_first(seq__23779_23822__$1);
var G__23824 = cljs.core.chunk_rest(seq__23779_23822__$1);
var G__23825 = c__5568__auto___23823;
var G__23826 = cljs.core.count(c__5568__auto___23823);
var G__23827 = (0);
seq__23779_23808 = G__23824;
chunk__23780_23809 = G__23825;
count__23781_23810 = G__23826;
i__23782_23811 = G__23827;
continue;
} else {
var vec__23800_23828 = cljs.core.first(seq__23779_23822__$1);
var k_23829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23800_23828,(0),null);
var cb_23830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23800_23828,(1),null);
try{var G__23804_23831 = cljs.core.deref(re_frame.trace.traces);
(cb_23830.cljs$core$IFn$_invoke$arity$1 ? cb_23830.cljs$core$IFn$_invoke$arity$1(G__23804_23831) : cb_23830.call(null,G__23804_23831));
}catch (e23803){var e_23832 = e23803;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23829,"while storing",cljs.core.deref(re_frame.trace.traces),e_23832], 0));
}

var G__23833 = cljs.core.next(seq__23779_23822__$1);
var G__23834 = null;
var G__23835 = (0);
var G__23836 = (0);
seq__23779_23808 = G__23833;
chunk__23780_23809 = G__23834;
count__23781_23810 = G__23835;
i__23782_23811 = G__23836;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
