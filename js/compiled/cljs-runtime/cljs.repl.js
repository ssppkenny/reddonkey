goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20200){
var map__20201 = p__20200;
var map__20201__$1 = cljs.core.__destructure_map(map__20201);
var m = map__20201__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20205_20567 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20206_20568 = null;
var count__20207_20569 = (0);
var i__20208_20570 = (0);
while(true){
if((i__20208_20570 < count__20207_20569)){
var f_20573 = chunk__20206_20568.cljs$core$IIndexed$_nth$arity$2(null,i__20208_20570);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20573], 0));


var G__20575 = seq__20205_20567;
var G__20576 = chunk__20206_20568;
var G__20577 = count__20207_20569;
var G__20578 = (i__20208_20570 + (1));
seq__20205_20567 = G__20575;
chunk__20206_20568 = G__20576;
count__20207_20569 = G__20577;
i__20208_20570 = G__20578;
continue;
} else {
var temp__5804__auto___20580 = cljs.core.seq(seq__20205_20567);
if(temp__5804__auto___20580){
var seq__20205_20581__$1 = temp__5804__auto___20580;
if(cljs.core.chunked_seq_QMARK_(seq__20205_20581__$1)){
var c__5568__auto___20582 = cljs.core.chunk_first(seq__20205_20581__$1);
var G__20584 = cljs.core.chunk_rest(seq__20205_20581__$1);
var G__20585 = c__5568__auto___20582;
var G__20586 = cljs.core.count(c__5568__auto___20582);
var G__20587 = (0);
seq__20205_20567 = G__20584;
chunk__20206_20568 = G__20585;
count__20207_20569 = G__20586;
i__20208_20570 = G__20587;
continue;
} else {
var f_20589 = cljs.core.first(seq__20205_20581__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20589], 0));


var G__20590 = cljs.core.next(seq__20205_20581__$1);
var G__20591 = null;
var G__20592 = (0);
var G__20593 = (0);
seq__20205_20567 = G__20590;
chunk__20206_20568 = G__20591;
count__20207_20569 = G__20592;
i__20208_20570 = G__20593;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20594 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20594], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20594)))?cljs.core.second(arglists_20594):arglists_20594)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20218_20603 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20219_20604 = null;
var count__20220_20605 = (0);
var i__20221_20606 = (0);
while(true){
if((i__20221_20606 < count__20220_20605)){
var vec__20239_20608 = chunk__20219_20604.cljs$core$IIndexed$_nth$arity$2(null,i__20221_20606);
var name_20609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239_20608,(0),null);
var map__20242_20610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239_20608,(1),null);
var map__20242_20611__$1 = cljs.core.__destructure_map(map__20242_20610);
var doc_20612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20242_20611__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20242_20611__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20609], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20613], 0));

if(cljs.core.truth_(doc_20612)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20612], 0));
} else {
}


var G__20616 = seq__20218_20603;
var G__20617 = chunk__20219_20604;
var G__20618 = count__20220_20605;
var G__20619 = (i__20221_20606 + (1));
seq__20218_20603 = G__20616;
chunk__20219_20604 = G__20617;
count__20220_20605 = G__20618;
i__20221_20606 = G__20619;
continue;
} else {
var temp__5804__auto___20620 = cljs.core.seq(seq__20218_20603);
if(temp__5804__auto___20620){
var seq__20218_20621__$1 = temp__5804__auto___20620;
if(cljs.core.chunked_seq_QMARK_(seq__20218_20621__$1)){
var c__5568__auto___20622 = cljs.core.chunk_first(seq__20218_20621__$1);
var G__20623 = cljs.core.chunk_rest(seq__20218_20621__$1);
var G__20624 = c__5568__auto___20622;
var G__20625 = cljs.core.count(c__5568__auto___20622);
var G__20626 = (0);
seq__20218_20603 = G__20623;
chunk__20219_20604 = G__20624;
count__20220_20605 = G__20625;
i__20221_20606 = G__20626;
continue;
} else {
var vec__20251_20629 = cljs.core.first(seq__20218_20621__$1);
var name_20630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20251_20629,(0),null);
var map__20254_20631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20251_20629,(1),null);
var map__20254_20632__$1 = cljs.core.__destructure_map(map__20254_20631);
var doc_20633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20254_20632__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20254_20632__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20630], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20634], 0));

if(cljs.core.truth_(doc_20633)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20633], 0));
} else {
}


var G__20637 = cljs.core.next(seq__20218_20621__$1);
var G__20638 = null;
var G__20639 = (0);
var G__20640 = (0);
seq__20218_20603 = G__20637;
chunk__20219_20604 = G__20638;
count__20220_20605 = G__20639;
i__20221_20606 = G__20640;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20259 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20260 = null;
var count__20261 = (0);
var i__20262 = (0);
while(true){
if((i__20262 < count__20261)){
var role = chunk__20260.cljs$core$IIndexed$_nth$arity$2(null,i__20262);
var temp__5804__auto___20643__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20643__$1)){
var spec_20644 = temp__5804__auto___20643__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20644)], 0));
} else {
}


var G__20646 = seq__20259;
var G__20647 = chunk__20260;
var G__20648 = count__20261;
var G__20649 = (i__20262 + (1));
seq__20259 = G__20646;
chunk__20260 = G__20647;
count__20261 = G__20648;
i__20262 = G__20649;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20259);
if(temp__5804__auto____$1){
var seq__20259__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20259__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20259__$1);
var G__20654 = cljs.core.chunk_rest(seq__20259__$1);
var G__20656 = c__5568__auto__;
var G__20657 = cljs.core.count(c__5568__auto__);
var G__20658 = (0);
seq__20259 = G__20654;
chunk__20260 = G__20656;
count__20261 = G__20657;
i__20262 = G__20658;
continue;
} else {
var role = cljs.core.first(seq__20259__$1);
var temp__5804__auto___20663__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20663__$2)){
var spec_20664 = temp__5804__auto___20663__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20664)], 0));
} else {
}


var G__20669 = cljs.core.next(seq__20259__$1);
var G__20670 = null;
var G__20671 = (0);
var G__20672 = (0);
seq__20259 = G__20669;
chunk__20260 = G__20670;
count__20261 = G__20671;
i__20262 = G__20672;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20684 = cljs.core.ex_cause(t);
via = G__20683;
t = G__20684;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20300 = datafied_throwable;
var map__20300__$1 = cljs.core.__destructure_map(map__20300);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20300__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20300__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20300__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20301 = cljs.core.last(via);
var map__20301__$1 = cljs.core.__destructure_map(map__20301);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20302 = data;
var map__20302__$1 = cljs.core.__destructure_map(map__20302);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20302__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20302__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20302__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20303 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20303__$1 = cljs.core.__destructure_map(map__20303);
var top_data = map__20303__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20305 = phase;
var G__20305__$1 = (((G__20305 instanceof cljs.core.Keyword))?G__20305.fqn:null);
switch (G__20305__$1) {
case "read-source":
var map__20306 = data;
var map__20306__$1 = cljs.core.__destructure_map(map__20306);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20308 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20308__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20308,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20308);
var G__20308__$2 = (cljs.core.truth_((function (){var fexpr__20310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20310.cljs$core$IFn$_invoke$arity$1 ? fexpr__20310.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20310.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20308__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20308__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20308__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20311 = top_data;
var G__20311__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20311,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20311);
var G__20311__$2 = (cljs.core.truth_((function (){var fexpr__20313 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20313.cljs$core$IFn$_invoke$arity$1 ? fexpr__20313.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20313.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20311__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20311__$1);
var G__20311__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20311__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20311__$2);
var G__20311__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20311__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20311__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20311__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20311__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20314 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314,(3),null);
var G__20317 = top_data;
var G__20317__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20317,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20317);
var G__20317__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20317__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20317__$1);
var G__20317__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20317__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20317__$2);
var G__20317__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20317__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20317__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20317__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20317__$4;
}

break;
case "execution":
var vec__20318 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20296_SHARP_){
var or__5045__auto__ = (p1__20296_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20326.cljs$core$IFn$_invoke$arity$1 ? fexpr__20326.cljs$core$IFn$_invoke$arity$1(p1__20296_SHARP_) : fexpr__20326.call(null,p1__20296_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20350 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20350__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20350,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20350);
var G__20350__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20350__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20350__$1);
var G__20350__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20350__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20350__$2);
var G__20350__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20350__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20350__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20350__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20350__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20305__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20423){
var map__20426 = p__20423;
var map__20426__$1 = cljs.core.__destructure_map(map__20426);
var triage_data = map__20426__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20461 = phase;
var G__20461__$1 = (((G__20461 instanceof cljs.core.Keyword))?G__20461.fqn:null);
switch (G__20461__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20467 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20468 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20469 = loc;
var G__20470 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20474_20735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20475_20736 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20476_20737 = true;
var _STAR_print_fn_STAR__temp_val__20477_20739 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20476_20737);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20477_20739);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20398_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20398_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20475_20736);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20474_20735);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20467,G__20468,G__20469,G__20470) : format.call(null,G__20467,G__20468,G__20469,G__20470));

break;
case "macroexpansion":
var G__20485 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20486 = cause_type;
var G__20487 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20488 = loc;
var G__20489 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20485,G__20486,G__20487,G__20488,G__20489) : format.call(null,G__20485,G__20486,G__20487,G__20488,G__20489));

break;
case "compile-syntax-check":
var G__20497 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20498 = cause_type;
var G__20499 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20500 = loc;
var G__20501 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20497,G__20498,G__20499,G__20500,G__20501) : format.call(null,G__20497,G__20498,G__20499,G__20500,G__20501));

break;
case "compilation":
var G__20503 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20504 = cause_type;
var G__20505 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20506 = loc;
var G__20507 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20503,G__20504,G__20505,G__20506,G__20507) : format.call(null,G__20503,G__20504,G__20505,G__20506,G__20507));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20510 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20511 = symbol;
var G__20512 = loc;
var G__20513 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20514_20743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20515_20744 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20516_20745 = true;
var _STAR_print_fn_STAR__temp_val__20517_20746 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20516_20745);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20517_20746);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20413_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20413_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20515_20744);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20514_20743);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20510,G__20511,G__20512,G__20513) : format.call(null,G__20510,G__20511,G__20512,G__20513));
} else {
var G__20526 = "Execution error%s at %s(%s).\n%s\n";
var G__20527 = cause_type;
var G__20528 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20529 = loc;
var G__20530 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20526,G__20527,G__20528,G__20529,G__20530) : format.call(null,G__20526,G__20527,G__20528,G__20529,G__20530));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20461__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
