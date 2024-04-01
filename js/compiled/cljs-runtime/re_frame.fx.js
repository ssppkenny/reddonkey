goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24121 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24122 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24122);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24205 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24205)){
var new_db_24206 = temp__5804__auto___24205;
var fexpr__24135_24207 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24135_24207.cljs$core$IFn$_invoke$arity$1 ? fexpr__24135_24207.cljs$core$IFn$_invoke$arity$1(new_db_24206) : fexpr__24135_24207.call(null,new_db_24206));
} else {
}

var seq__24140 = cljs.core.seq(effects_without_db);
var chunk__24141 = null;
var count__24142 = (0);
var i__24143 = (0);
while(true){
if((i__24143 < count__24142)){
var vec__24150 = chunk__24141.cljs$core$IIndexed$_nth$arity$2(null,i__24143);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24150,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24150,(1),null);
var temp__5802__auto___24208 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24208)){
var effect_fn_24209 = temp__5802__auto___24208;
(effect_fn_24209.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24209.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24209.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24210 = seq__24140;
var G__24211 = chunk__24141;
var G__24212 = count__24142;
var G__24213 = (i__24143 + (1));
seq__24140 = G__24210;
chunk__24141 = G__24211;
count__24142 = G__24212;
i__24143 = G__24213;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24140);
if(temp__5804__auto__){
var seq__24140__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24140__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24140__$1);
var G__24214 = cljs.core.chunk_rest(seq__24140__$1);
var G__24215 = c__5568__auto__;
var G__24216 = cljs.core.count(c__5568__auto__);
var G__24217 = (0);
seq__24140 = G__24214;
chunk__24141 = G__24215;
count__24142 = G__24216;
i__24143 = G__24217;
continue;
} else {
var vec__24153 = cljs.core.first(seq__24140__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24153,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24153,(1),null);
var temp__5802__auto___24218 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24218)){
var effect_fn_24219 = temp__5802__auto___24218;
(effect_fn_24219.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24219.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24219.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24220 = cljs.core.next(seq__24140__$1);
var G__24221 = null;
var G__24222 = (0);
var G__24223 = (0);
seq__24140 = G__24220;
chunk__24141 = G__24221;
count__24142 = G__24222;
i__24143 = G__24223;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23753__auto___24224 = re_frame.interop.now();
var duration__23754__auto___24225 = (end__23753__auto___24224 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23754__auto___24225,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23753__auto___24224);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24121);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24226 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24226)){
var new_db_24227 = temp__5804__auto___24226;
var fexpr__24156_24228 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24156_24228.cljs$core$IFn$_invoke$arity$1 ? fexpr__24156_24228.cljs$core$IFn$_invoke$arity$1(new_db_24227) : fexpr__24156_24228.call(null,new_db_24227));
} else {
}

var seq__24157 = cljs.core.seq(effects_without_db);
var chunk__24158 = null;
var count__24159 = (0);
var i__24160 = (0);
while(true){
if((i__24160 < count__24159)){
var vec__24167 = chunk__24158.cljs$core$IIndexed$_nth$arity$2(null,i__24160);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24167,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24167,(1),null);
var temp__5802__auto___24229 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24229)){
var effect_fn_24230 = temp__5802__auto___24229;
(effect_fn_24230.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24230.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24230.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24231 = seq__24157;
var G__24232 = chunk__24158;
var G__24233 = count__24159;
var G__24234 = (i__24160 + (1));
seq__24157 = G__24231;
chunk__24158 = G__24232;
count__24159 = G__24233;
i__24160 = G__24234;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24157);
if(temp__5804__auto__){
var seq__24157__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24157__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24157__$1);
var G__24235 = cljs.core.chunk_rest(seq__24157__$1);
var G__24236 = c__5568__auto__;
var G__24237 = cljs.core.count(c__5568__auto__);
var G__24238 = (0);
seq__24157 = G__24235;
chunk__24158 = G__24236;
count__24159 = G__24237;
i__24160 = G__24238;
continue;
} else {
var vec__24170 = cljs.core.first(seq__24157__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24170,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24170,(1),null);
var temp__5802__auto___24239 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24239)){
var effect_fn_24240 = temp__5802__auto___24239;
(effect_fn_24240.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24240.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24240.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24241 = cljs.core.next(seq__24157__$1);
var G__24242 = null;
var G__24243 = (0);
var G__24244 = (0);
seq__24157 = G__24241;
chunk__24158 = G__24242;
count__24159 = G__24243;
i__24160 = G__24244;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24173){
var map__24174 = p__24173;
var map__24174__$1 = cljs.core.__destructure_map(map__24174);
var effect = map__24174__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24174__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24174__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24175 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24176 = null;
var count__24177 = (0);
var i__24178 = (0);
while(true){
if((i__24178 < count__24177)){
var effect = chunk__24176.cljs$core$IIndexed$_nth$arity$2(null,i__24178);
re_frame.fx.dispatch_later(effect);


var G__24245 = seq__24175;
var G__24246 = chunk__24176;
var G__24247 = count__24177;
var G__24248 = (i__24178 + (1));
seq__24175 = G__24245;
chunk__24176 = G__24246;
count__24177 = G__24247;
i__24178 = G__24248;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24175);
if(temp__5804__auto__){
var seq__24175__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24175__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24175__$1);
var G__24250 = cljs.core.chunk_rest(seq__24175__$1);
var G__24251 = c__5568__auto__;
var G__24252 = cljs.core.count(c__5568__auto__);
var G__24253 = (0);
seq__24175 = G__24250;
chunk__24176 = G__24251;
count__24177 = G__24252;
i__24178 = G__24253;
continue;
} else {
var effect = cljs.core.first(seq__24175__$1);
re_frame.fx.dispatch_later(effect);


var G__24254 = cljs.core.next(seq__24175__$1);
var G__24255 = null;
var G__24256 = (0);
var G__24257 = (0);
seq__24175 = G__24254;
chunk__24176 = G__24255;
count__24177 = G__24256;
i__24178 = G__24257;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24179 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24180 = null;
var count__24181 = (0);
var i__24182 = (0);
while(true){
if((i__24182 < count__24181)){
var vec__24189 = chunk__24180.cljs$core$IIndexed$_nth$arity$2(null,i__24182);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24189,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24189,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24259 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24259)){
var effect_fn_24260 = temp__5802__auto___24259;
(effect_fn_24260.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24260.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24260.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24261 = seq__24179;
var G__24262 = chunk__24180;
var G__24263 = count__24181;
var G__24264 = (i__24182 + (1));
seq__24179 = G__24261;
chunk__24180 = G__24262;
count__24181 = G__24263;
i__24182 = G__24264;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24179);
if(temp__5804__auto__){
var seq__24179__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24179__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24179__$1);
var G__24265 = cljs.core.chunk_rest(seq__24179__$1);
var G__24266 = c__5568__auto__;
var G__24267 = cljs.core.count(c__5568__auto__);
var G__24268 = (0);
seq__24179 = G__24265;
chunk__24180 = G__24266;
count__24181 = G__24267;
i__24182 = G__24268;
continue;
} else {
var vec__24192 = cljs.core.first(seq__24179__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24192,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24192,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24269 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24269)){
var effect_fn_24270 = temp__5802__auto___24269;
(effect_fn_24270.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24270.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24270.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24271 = cljs.core.next(seq__24179__$1);
var G__24272 = null;
var G__24273 = (0);
var G__24274 = (0);
seq__24179 = G__24271;
chunk__24180 = G__24272;
count__24181 = G__24273;
i__24182 = G__24274;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24195 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24196 = null;
var count__24197 = (0);
var i__24198 = (0);
while(true){
if((i__24198 < count__24197)){
var event = chunk__24196.cljs$core$IIndexed$_nth$arity$2(null,i__24198);
re_frame.router.dispatch(event);


var G__24275 = seq__24195;
var G__24276 = chunk__24196;
var G__24277 = count__24197;
var G__24278 = (i__24198 + (1));
seq__24195 = G__24275;
chunk__24196 = G__24276;
count__24197 = G__24277;
i__24198 = G__24278;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24195);
if(temp__5804__auto__){
var seq__24195__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24195__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24195__$1);
var G__24279 = cljs.core.chunk_rest(seq__24195__$1);
var G__24280 = c__5568__auto__;
var G__24281 = cljs.core.count(c__5568__auto__);
var G__24282 = (0);
seq__24195 = G__24279;
chunk__24196 = G__24280;
count__24197 = G__24281;
i__24198 = G__24282;
continue;
} else {
var event = cljs.core.first(seq__24195__$1);
re_frame.router.dispatch(event);


var G__24283 = cljs.core.next(seq__24195__$1);
var G__24284 = null;
var G__24285 = (0);
var G__24286 = (0);
seq__24195 = G__24283;
chunk__24196 = G__24284;
count__24197 = G__24285;
i__24198 = G__24286;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24199 = cljs.core.seq(value);
var chunk__24200 = null;
var count__24201 = (0);
var i__24202 = (0);
while(true){
if((i__24202 < count__24201)){
var event = chunk__24200.cljs$core$IIndexed$_nth$arity$2(null,i__24202);
clear_event(event);


var G__24287 = seq__24199;
var G__24288 = chunk__24200;
var G__24289 = count__24201;
var G__24290 = (i__24202 + (1));
seq__24199 = G__24287;
chunk__24200 = G__24288;
count__24201 = G__24289;
i__24202 = G__24290;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24199);
if(temp__5804__auto__){
var seq__24199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24199__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24199__$1);
var G__24292 = cljs.core.chunk_rest(seq__24199__$1);
var G__24293 = c__5568__auto__;
var G__24294 = cljs.core.count(c__5568__auto__);
var G__24295 = (0);
seq__24199 = G__24292;
chunk__24200 = G__24293;
count__24201 = G__24294;
i__24202 = G__24295;
continue;
} else {
var event = cljs.core.first(seq__24199__$1);
clear_event(event);


var G__24297 = cljs.core.next(seq__24199__$1);
var G__24298 = null;
var G__24299 = (0);
var G__24300 = (0);
seq__24199 = G__24297;
chunk__24200 = G__24298;
count__24201 = G__24299;
i__24202 = G__24300;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24203 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24204 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24204);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23753__auto___24301 = re_frame.interop.now();
var duration__23754__auto___24302 = (end__23753__auto___24301 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23754__auto___24302,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23753__auto___24301);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24203);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
