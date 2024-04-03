goog.provide('reddonkey.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__12568){
var vec__12569 = p__12568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(0),null);
var vec__12572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12572,(1),null);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var new_state = reddonkey.geom.apply_move(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state),new cljs.core.Keyword(null,"next-moves","next-moves",-644123965),reddonkey.geom.next_moves(new_state));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","initialize-db","reddonkey.events/initialize-db",-2114750030),(function (_,___$1){
return reddonkey.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","set-re-pressed-example","reddonkey.events/set-re-pressed-example",-1951682082),(function (db,p__12575){
var vec__12576 = p__12575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=reddonkey.events.js.map
