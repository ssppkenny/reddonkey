goog.provide('reddonkey.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),(function (db,p__12648){
var vec__12649 = p__12648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12649,(0),null);
var vec__12652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12649,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12652,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12652,(1),null);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(db);
var new_state = reddonkey.geom.apply_move(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"state","state",-1988618099),new_state),new cljs.core.Keyword(null,"next-moves","next-moves",-644123965),reddonkey.geom.next_moves(new_state));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","initialize-db","reddonkey.events/initialize-db",-2114750030),(function (_,___$1){
return reddonkey.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reddonkey.events","set-re-pressed-example","reddonkey.events/set-re-pressed-example",-1951682082),(function (db,p__12655){
var vec__12656 = p__12655;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=reddonkey.events.js.map
