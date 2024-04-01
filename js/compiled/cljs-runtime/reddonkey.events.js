goog.provide('reddonkey.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),(function (db,p__14267){
var vec__14268 = p__14267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268,(0),null);
var vec__14271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14271,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14271,(1),null);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var new_state = reddonkey.geom.apply_move(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state),new cljs.core.Keyword(null,"next-moves","next-moves",-644123965),reddonkey.geom.next_moves(new_state));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","initialize-db","reddonkey.events/initialize-db",-2114750030),(function (_,___$1){
return reddonkey.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","set-re-pressed-example","reddonkey.events/set-re-pressed-example",-1951682082),(function (db,p__14274){
var vec__14275 = p__14274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14275,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14275,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=reddonkey.events.js.map
