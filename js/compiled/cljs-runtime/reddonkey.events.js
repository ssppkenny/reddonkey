goog.provide('reddonkey.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","init","reddonkey.events/init",332125316),(function (db,_){
var solving = new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(solving)){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),reddonkey.db.initial_state);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","solve","reddonkey.events/solve",1181565963),(function (p__21756,event){
var map__21757 = p__21756;
var map__21757__$1 = cljs.core.__destructure_map(map__21757);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21757__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log(event);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","do-solve","reddonkey.events/do-solve",144837779),(0)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","do-solve","reddonkey.events/do-solve",144837779),(function (p__21758,_){
var map__21759 = p__21758;
var map__21759__$1 = cljs.core.__destructure_map(map__21759);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21759__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["do-solve"], 0));

var solving = new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([solving], 0));

if(cljs.core.truth_(solving)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","bfs","reddonkey.events/bfs",-472045195),(0)], null)], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),(function (db,p__21760){
var vec__21761 = p__21760;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21761,(0),null);
var vec__21764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21761,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21764,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21764,(1),null);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var solving = new cljs.core.Keyword(null,"solving","solving",-175043197).cljs$core$IFn$_invoke$arity$1(db);
var new_state = reddonkey.geom.apply_move(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null));
if(cljs.core.truth_(solving)){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state),new cljs.core.Keyword(null,"next-moves","next-moves",-644123965),reddonkey.geom.next_moves(new_state));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","bfs","reddonkey.events/bfs",-472045195),(function (p__21767,_){
var map__21768 = p__21767;
var map__21768__$1 = cljs.core.__destructure_map(map__21768);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21768__$1,new cljs.core.Keyword(null,"db","db",993250759));
var start_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var start_node = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),start_state,new cljs.core.Keyword(null,"length","length",588987862),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),null], null);
var queue = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_node,(0)], 0));
var reached = cljs.core.PersistentArrayMap.createAsIfByAssoc([start_state,start_node]);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","bfs-step","reddonkey.events/bfs-step",354321089),reached,queue], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","solved","reddonkey.events/solved",1627198296),(function (p__21769,p__21770){
var map__21771 = p__21769;
var map__21771__$1 = cljs.core.__destructure_map(map__21771);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21772 = p__21770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21772,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21772,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"solving","solving",-175043197),false)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","play-solution","reddonkey.events/play-solution",-1909171134),(function (p__21775,p__21776){
var map__21777 = p__21775;
var map__21777__$1 = cljs.core.__destructure_map(map__21777);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21778 = p__21776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21778,(0),null);
var sol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21778,(1),null);
var events = cljs.core.vec(reddonkey.geom.moves_to_events(sol));
var fx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__21781){
var vec__21782 = p__21781;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21782,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21782,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21782,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),t,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null)], null)], null)], null);
}),events);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),fx], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","bfs-step","reddonkey.events/bfs-step",354321089),(function (p__21785,_){
var map__21786 = p__21785;
var map__21786__$1 = cljs.core.__destructure_map(map__21786);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["bfs-step"], 0));

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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","set-re-pressed-example","reddonkey.events/set-re-pressed-example",-1951682082),(function (db,p__21787){
var vec__21788 = p__21787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21788,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21788,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=reddonkey.events.js.map
