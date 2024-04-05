goog.provide('reddonkey.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),(function (db,p__17714){
var vec__17715 = p__17714;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17715,(0),null);
var vec__17718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17715,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(1),null);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var new_state = reddonkey.geom.apply_move(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state),new cljs.core.Keyword(null,"next-moves","next-moves",-644123965),reddonkey.geom.next_moves(new_state));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","initialize-db","reddonkey.events/initialize-db",-2114750030),(function (_,___$1){
return reddonkey.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","set-re-pressed-example","reddonkey.events/set-re-pressed-example",-1951682082),(function (db,p__17721){
var vec__17722 = p__17721;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17722,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17722,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=reddonkey.events.js.map
