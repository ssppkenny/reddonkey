goog.provide('jtk_dvlp.transit');

/**
* @constructor
*/
jtk_dvlp.transit.CljTimeHandler = (function (){
});
(jtk_dvlp.transit.CljTimeHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "clj-time";
}));

(jtk_dvlp.transit.CljTimeHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return cljs_time.coerce.to_date(v);
}));

(jtk_dvlp.transit.CljTimeHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(jtk_dvlp.transit.CljTimeHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(jtk_dvlp.transit.CljTimeHandler.cljs$lang$type = true);

(jtk_dvlp.transit.CljTimeHandler.cljs$lang$ctorStr = "jtk-dvlp.transit/CljTimeHandler");

(jtk_dvlp.transit.CljTimeHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"jtk-dvlp.transit/CljTimeHandler");
}));

/**
 * Positional factory function for jtk-dvlp.transit/CljTimeHandler.
 */
jtk_dvlp.transit.__GT_CljTimeHandler = (function jtk_dvlp$transit$__GT_CljTimeHandler(){
return (new jtk_dvlp.transit.CljTimeHandler());
});

jtk_dvlp.transit.write_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.date.UtcDateTime,(new jtk_dvlp.transit.CljTimeHandler())]);
jtk_dvlp.transit.clj__GT_transit = (function jtk_dvlp$transit$clj__GT_transit(var_args){
var G__13013 = arguments.length;
switch (G__13013) {
case 1:
return jtk_dvlp.transit.clj__GT_transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return jtk_dvlp.transit.clj__GT_transit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jtk_dvlp.transit.clj__GT_transit.cljs$core$IFn$_invoke$arity$1 = (function (clj){
return jtk_dvlp.transit.clj__GT_transit.cljs$core$IFn$_invoke$arity$3(clj,new cljs.core.Keyword(null,"json","json",1279968570),null);
}));

(jtk_dvlp.transit.clj__GT_transit.cljs$core$IFn$_invoke$arity$3 = (function (clj,type,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),jtk_dvlp.transit.write_handlers], null),opts], 0));
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,opts__$1),clj);
}));

(jtk_dvlp.transit.clj__GT_transit.cljs$lang$maxFixedArity = 3);

jtk_dvlp.transit.read_handlers = new cljs.core.PersistentArrayMap(null, 1, ["clj-time",cljs_time.coerce.from_date], null);
jtk_dvlp.transit.transit__GT_clj = (function jtk_dvlp$transit$transit__GT_clj(var_args){
var G__13027 = arguments.length;
switch (G__13027) {
case 1:
return jtk_dvlp.transit.transit__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return jtk_dvlp.transit.transit__GT_clj.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jtk_dvlp.transit.transit__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (transit){
return jtk_dvlp.transit.transit__GT_clj.cljs$core$IFn$_invoke$arity$3(transit,new cljs.core.Keyword(null,"json","json",1279968570),null);
}));

(jtk_dvlp.transit.transit__GT_clj.cljs$core$IFn$_invoke$arity$3 = (function (transit,type,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),jtk_dvlp.transit.read_handlers], null),opts], 0));
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,opts__$1),transit);
}));

(jtk_dvlp.transit.transit__GT_clj.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=jtk_dvlp.transit.js.map
