goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21066,p__21067){
var map__21068 = p__21066;
var map__21068__$1 = cljs.core.__destructure_map(map__21068);
var svc = map__21068__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21069 = p__21067;
var map__21069__$1 = cljs.core.__destructure_map(map__21069);
var msg = map__21069__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21069__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21076,p__21077){
var map__21078 = p__21076;
var map__21078__$1 = cljs.core.__destructure_map(map__21078);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21078__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21079 = p__21077;
var map__21079__$1 = cljs.core.__destructure_map(map__21079);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21082,p__21083){
var map__21086 = p__21082;
var map__21086__$1 = cljs.core.__destructure_map(map__21086);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21088 = p__21083;
var map__21088__$1 = cljs.core.__destructure_map(map__21088);
var msg = map__21088__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21088__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21089,tid){
var map__21090 = p__21089;
var map__21090__$1 = cljs.core.__destructure_map(map__21090);
var svc = map__21090__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21116 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21117 = null;
var count__21118 = (0);
var i__21119 = (0);
while(true){
if((i__21119 < count__21118)){
var vec__21145 = chunk__21117.cljs$core$IIndexed$_nth$arity$2(null,i__21119);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21145,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21145,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21205 = seq__21116;
var G__21206 = chunk__21117;
var G__21207 = count__21118;
var G__21208 = (i__21119 + (1));
seq__21116 = G__21205;
chunk__21117 = G__21206;
count__21118 = G__21207;
i__21119 = G__21208;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21116);
if(temp__5804__auto__){
var seq__21116__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21116__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21116__$1);
var G__21209 = cljs.core.chunk_rest(seq__21116__$1);
var G__21210 = c__5568__auto__;
var G__21211 = cljs.core.count(c__5568__auto__);
var G__21212 = (0);
seq__21116 = G__21209;
chunk__21117 = G__21210;
count__21118 = G__21211;
i__21119 = G__21212;
continue;
} else {
var vec__21156 = cljs.core.first(seq__21116__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21156,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21156,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21214 = cljs.core.next(seq__21116__$1);
var G__21215 = null;
var G__21216 = (0);
var G__21217 = (0);
seq__21116 = G__21214;
chunk__21117 = G__21215;
count__21118 = G__21216;
i__21119 = G__21217;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21094_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21094_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21095_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21095_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21096_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21096_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21097_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21097_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21169){
var map__21171 = p__21169;
var map__21171__$1 = cljs.core.__destructure_map(map__21171);
var svc = map__21171__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
