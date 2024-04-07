goog.provide('reddonkey.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","init","reddonkey.events/init",332125316),(function (db,_){
var solving = new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(solving)){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),reddonkey.db.initial_state);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","solve","reddonkey.events/solve",1181565963),(function (p__12835,event){
var map__12836 = p__12835;
var map__12836__$1 = cljs.core.__destructure_map(map__12836);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12836__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","do-solve","reddonkey.events/do-solve",144837779),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","do-solve","reddonkey.events/do-solve",144837779),(function (p__12837,_){
var map__12838 = p__12837;
var map__12838__$1 = cljs.core.__destructure_map(map__12838);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12838__$1,new cljs.core.Keyword(null,"db","db",993250759));
var solving = new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(solving)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","bfs","reddonkey.events/bfs",-472045195),(0)], null)], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),(function (db,p__12839){
var vec__12840 = p__12839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(0),null);
var vec__12843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12843,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12843,(1),null);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var solving = new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db);
var new_state = reddonkey.geom.apply_move(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null));
if(cljs.core.truth_(solving)){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state),new cljs.core.Keyword(null,"next-moves","next-moves",-644123965),reddonkey.geom.next_moves(new_state));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","bfs","reddonkey.events/bfs",-472045195),(function (p__12848,_){
var map__12849 = p__12848;
var map__12849__$1 = cljs.core.__destructure_map(map__12849);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12849__$1,new cljs.core.Keyword(null,"db","db",993250759));
var start_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var start_node = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),start_state,new cljs.core.Keyword(null,"length","length",588987862),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),null], null);
var queue = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_node,(0)], 0));
var reached = cljs.core.PersistentArrayMap.createAsIfByAssoc([start_state,start_node]);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","bfs-step","reddonkey.events/bfs-step",354321089),reached,queue], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","solved","reddonkey.events/solved",1627198296),(function (p__12851,p__12852){
var map__12853 = p__12851;
var map__12853__$1 = cljs.core.__destructure_map(map__12853);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12853__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12854 = p__12852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12854,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12854,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),false)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","play-solution","reddonkey.events/play-solution",-1909171134),(function (p__12857,p__12858){
var map__12859 = p__12857;
var map__12859__$1 = cljs.core.__destructure_map(map__12859);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12859__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12860 = p__12858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(0),null);
var sol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(1),null);
var events = cljs.core.vec(reddonkey.geom.moves_to_events(sol));
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__12863){
var vec__12864 = p__12863;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12864,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12864,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12864,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),t,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","bfs-step","reddonkey.events/bfs-step",354321089),(function (p__12867,_){
var map__12868 = p__12867;
var map__12868__$1 = cljs.core.__destructure_map(map__12868);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12868__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12868__$1,new cljs.core.Keyword(null,"event","event",301435442));
var reached = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(1));
var queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(event,(2));
if(((cljs.core.seq(queue)) && ((!(reddonkey.geom.final_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(queue),(0)))))))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(queue),(0));
var next_result = reddonkey.geom.expand(n,reached,cljs.core.pop(queue));
var new_reached = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(next_result);
var new_queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(next_result);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","bfs-step","reddonkey.events/bfs-step",354321089),new_reached,new_queue], null));
} else {
var moves = reddonkey.geom.moves_from_list(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.geom.node_to_list(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(queue),(0))))));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","solved","reddonkey.events/solved",1627198296),(1)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","play-solution","reddonkey.events/play-solution",-1909171134),cljs.core.vec(moves)], null));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","initialize-db","reddonkey.events/initialize-db",-2114750030),(function (_,___$1){
return reddonkey.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","set-re-pressed-example","reddonkey.events/set-re-pressed-example",-1951682082),(function (db,p__12870){
var vec__12871 = p__12870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=reddonkey.events.js.map
