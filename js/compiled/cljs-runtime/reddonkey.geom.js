goog.provide('reddonkey.geom');
/**
 * Returns a predicate that tests if its argument falls in
 *   the inclusive interval [a, b].
 */
reddonkey.geom.in_interval_QMARK_ = (function reddonkey$geom$in_interval_QMARK_(a,b){
return (function (x){
return (((x >= a)) && ((x <= b)));
});
});
reddonkey.geom.diff_to_action = (function reddonkey$geom$diff_to_action(p__19438){
var vec__19439 = p__19438;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19439,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19439,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))){
return (10);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))){
return (-10);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))){
return (-1);
} else {
return null;
}
}
}
}
});
reddonkey.geom.block_to_coords = (function reddonkey$geom$block_to_coords(p__19442){
var vec__19443 = p__19442;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(3),null);
var xr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w));
var yr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function reddonkey$geom$block_to_coords_$_iter__19446(s__19447){
return (new cljs.core.LazySeq(null,(function (){
var s__19447__$1 = s__19447;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19447__$1);
if(temp__5804__auto__){
var s__19447__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19447__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19447__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19449 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19448 = (0);
while(true){
if((i__19448 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__19448);
cljs.core.chunk_append(b__19449,(function (){var iter__5523__auto__ = ((function (i__19448,x__$1,c__5521__auto__,size__5522__auto__,b__19449,s__19447__$2,temp__5804__auto__,xr,yr,vec__19443,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__19446_$_iter__19450(s__19451){
return (new cljs.core.LazySeq(null,((function (i__19448,x__$1,c__5521__auto__,size__5522__auto__,b__19449,s__19447__$2,temp__5804__auto__,xr,yr,vec__19443,x,y,w,h){
return (function (){
var s__19451__$1 = s__19451;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__19451__$1);
if(temp__5804__auto____$1){
var s__19451__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19451__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__19451__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__19453 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__19452 = (0);
while(true){
if((i__19452 < size__5522__auto____$1)){
var y__$1 = cljs.core._nth(c__5521__auto____$1,i__19452);
cljs.core.chunk_append(b__19453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__19635 = (i__19452 + (1));
i__19452 = G__19635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19453),reddonkey$geom$block_to_coords_$_iter__19446_$_iter__19450(cljs.core.chunk_rest(s__19451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19453),null);
}
} else {
var y__$1 = cljs.core.first(s__19451__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__19446_$_iter__19450(cljs.core.rest(s__19451__$2)));
}
} else {
return null;
}
break;
}
});})(i__19448,x__$1,c__5521__auto__,size__5522__auto__,b__19449,s__19447__$2,temp__5804__auto__,xr,yr,vec__19443,x,y,w,h))
,null,null));
});})(i__19448,x__$1,c__5521__auto__,size__5522__auto__,b__19449,s__19447__$2,temp__5804__auto__,xr,yr,vec__19443,x,y,w,h))
;
return iter__5523__auto__(yr);
})());

var G__19636 = (i__19448 + (1));
i__19448 = G__19636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19449),reddonkey$geom$block_to_coords_$_iter__19446(cljs.core.chunk_rest(s__19447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19449),null);
}
} else {
var x__$1 = cljs.core.first(s__19447__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x__$1,s__19447__$2,temp__5804__auto__,xr,yr,vec__19443,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__19446_$_iter__19454(s__19455){
return (new cljs.core.LazySeq(null,(function (){
var s__19455__$1 = s__19455;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__19455__$1);
if(temp__5804__auto____$1){
var s__19455__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19455__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19455__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19457 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19456 = (0);
while(true){
if((i__19456 < size__5522__auto__)){
var y__$1 = cljs.core._nth(c__5521__auto__,i__19456);
cljs.core.chunk_append(b__19457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__19637 = (i__19456 + (1));
i__19456 = G__19637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19457),reddonkey$geom$block_to_coords_$_iter__19446_$_iter__19454(cljs.core.chunk_rest(s__19455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19457),null);
}
} else {
var y__$1 = cljs.core.first(s__19455__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__19446_$_iter__19454(cljs.core.rest(s__19455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x__$1,s__19447__$2,temp__5804__auto__,xr,yr,vec__19443,x,y,w,h))
;
return iter__5523__auto__(yr);
})(),reddonkey$geom$block_to_coords_$_iter__19446(cljs.core.rest(s__19447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(xr);
})()], 0));
});
reddonkey.geom.set_zeros = (function reddonkey$geom$set_zeros(board,p__19458){
var vec__19459 = p__19458;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19459,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19459,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19459,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19459,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__19462){
var vec__19463 = p__19462;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19463,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19463,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,(0)));
}),board,coords);
return new_board;
});
reddonkey.geom.assign_block = (function reddonkey$geom$assign_block(board,n,p__19466){
var vec__19467 = p__19466;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19467,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19467,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19467,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19467,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__19470){
var vec__19471 = p__19470;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19471,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19471,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,n));
}),board,coords);
return new_board;
});
reddonkey.geom.contains_zero_QMARK_ = (function reddonkey$geom$contains_zero_QMARK_(p__19474,p__19475){
var vec__19476 = p__19474;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19476,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19476,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19476,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19476,(3),null);
var vec__19479 = p__19475;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19479,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19479,(1),null);
var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_(x,(x + w))(a);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = reddonkey.geom.in_interval_QMARK_(x,(x + w))((a + (1)));
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = reddonkey.geom.in_interval_QMARK_(y,(y + h))(b);
if(cljs.core.truth_(and__5043__auto____$2)){
return reddonkey.geom.in_interval_QMARK_(y,(y + h))((b + (1)));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
reddonkey.geom.assign_zeros = (function reddonkey$geom$assign_zeros(board,zeros){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__19482){
var vec__19483 = p__19482;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19483,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19483,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y),x,(0)));
}),board,zeros);
});
reddonkey.geom.moved_zeros = (function reddonkey$geom$moved_zeros(d,p__19486,zeros){
var vec__19487 = p__19486;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19487,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19487,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19487,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19487,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__19490(s__19491){
return (new cljs.core.LazySeq(null,(function (){
var s__19491__$1 = s__19491;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19491__$1);
if(temp__5804__auto__){
var s__19491__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19491__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19491__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19493 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19492 = (0);
while(true){
if((i__19492 < size__5522__auto__)){
var vec__19494 = cljs.core._nth(c__5521__auto__,i__19492);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19494,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19494,(1),null);
cljs.core.chunk_append(b__19493,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__19638 = (i__19492 + (1));
i__19492 = G__19638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19493),reddonkey$geom$moved_zeros_$_iter__19490(cljs.core.chunk_rest(s__19491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19493),null);
}
} else {
var vec__19497 = cljs.core.first(s__19491__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19497,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19497,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__19490(cljs.core.rest(s__19491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(zeros);
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__19500(s__19501){
return (new cljs.core.LazySeq(null,(function (){
var s__19501__$1 = s__19501;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19501__$1);
if(temp__5804__auto__){
var s__19501__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19501__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19501__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19503 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19502 = (0);
while(true){
if((i__19502 < size__5522__auto__)){
var vec__19504 = cljs.core._nth(c__5521__auto__,i__19502);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19504,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19504,(1),null);
cljs.core.chunk_append(b__19503,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__19639 = (i__19502 + (1));
i__19502 = G__19639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19503),reddonkey$geom$moved_zeros_$_iter__19500(cljs.core.chunk_rest(s__19501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19503),null);
}
} else {
var vec__19507 = cljs.core.first(s__19501__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19507,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19507,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__19500(cljs.core.rest(s__19501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(zeros);
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__19510(s__19511){
return (new cljs.core.LazySeq(null,(function (){
var s__19511__$1 = s__19511;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19511__$1);
if(temp__5804__auto__){
var s__19511__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19511__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19511__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19513 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19512 = (0);
while(true){
if((i__19512 < size__5522__auto__)){
var vec__19514 = cljs.core._nth(c__5521__auto__,i__19512);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(1),null);
cljs.core.chunk_append(b__19513,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__19640 = (i__19512 + (1));
i__19512 = G__19640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19513),reddonkey$geom$moved_zeros_$_iter__19510(cljs.core.chunk_rest(s__19511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19513),null);
}
} else {
var vec__19517 = cljs.core.first(s__19511__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19517,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19517,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__19510(cljs.core.rest(s__19511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(zeros);
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__19520(s__19521){
return (new cljs.core.LazySeq(null,(function (){
var s__19521__$1 = s__19521;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19521__$1);
if(temp__5804__auto__){
var s__19521__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19521__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19521__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19523 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19522 = (0);
while(true){
if((i__19522 < size__5522__auto__)){
var vec__19524 = cljs.core._nth(c__5521__auto__,i__19522);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(1),null);
cljs.core.chunk_append(b__19523,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__19641 = (i__19522 + (1));
i__19522 = G__19641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19523),reddonkey$geom$moved_zeros_$_iter__19520(cljs.core.chunk_rest(s__19521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19523),null);
}
} else {
var vec__19527 = cljs.core.first(s__19521__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19527,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19527,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__19520(cljs.core.rest(s__19521__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(zeros);
})());
} else {
return null;
}
}
}
}
});
reddonkey.geom.apply_move = (function reddonkey$geom$apply_move(p__19530,p__19531){
var map__19532 = p__19530;
var map__19532__$1 = cljs.core.__destructure_map(map__19532);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19532__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19532__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19532__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__19533 = p__19531;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19533,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19533,(1),null);
var vec__19536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,n);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):null))));
var new_blocks = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(blocks,n,new_block);
var new_zeros = reddonkey.geom.moved_zeros(d,new_block,zero);
var new_board = reddonkey.geom.assign_block(reddonkey.geom.assign_zeros(board,new_zeros),n,new_block);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),new_zeros,new cljs.core.Keyword(null,"blocks","blocks",-610462153),new_blocks], null);
});
reddonkey.geom.fits_zero_QMARK_ = (function reddonkey$geom$fits_zero_QMARK_(n,d,p__19539,board){
var vec__19540 = p__19539;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19540,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19540,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19540,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19540,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):null))));
var assigned_board = reddonkey.geom.assign_block(reddonkey.geom.set_zeros(board,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),n,new_block);
var non_zero = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x__$1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0));
}),cljs.core.flatten(assigned_board));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_zero),(18));
});
reddonkey.geom.next_moves = (function reddonkey$geom$next_moves(p__19543){
var map__19544 = p__19543;
var map__19544__$1 = cljs.core.__destructure_map(map__19544);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__19545 = zero;
var vec__19548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19545,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19548,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19548,(1),null);
var vec__19551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19545,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(1),null);
var moves1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 - (1))], null)], null);
var moves2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 - (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 - (1))], null)], null);
var allowed_moves1 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__19554(s__19555){
return (new cljs.core.LazySeq(null,(function (){
var s__19555__$1 = s__19555;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19555__$1);
if(temp__5804__auto__){
var s__19555__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19555__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19555__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19557 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19556 = (0);
while(true){
if((i__19556 < size__5522__auto__)){
var vec__19558 = cljs.core._nth(c__5521__auto__,i__19556);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19558,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19558,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__19557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__19653 = (i__19556 + (1));
i__19556 = G__19653;
continue;
} else {
var G__19654 = (i__19556 + (1));
i__19556 = G__19654;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19557),reddonkey$geom$next_moves_$_iter__19554(cljs.core.chunk_rest(s__19555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19557),null);
}
} else {
var vec__19561 = cljs.core.first(s__19555__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19561,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19561,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__19554(cljs.core.rest(s__19555__$2)));
} else {
var G__19655 = cljs.core.rest(s__19555__$2);
s__19555__$1 = G__19655;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(moves1);
})();
var allowed_moves2 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__19564(s__19565){
return (new cljs.core.LazySeq(null,(function (){
var s__19565__$1 = s__19565;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19565__$1);
if(temp__5804__auto__){
var s__19565__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19565__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19565__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19567 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19566 = (0);
while(true){
if((i__19566 < size__5522__auto__)){
var vec__19568 = cljs.core._nth(c__5521__auto__,i__19566);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19568,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19568,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__19567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__19658 = (i__19566 + (1));
i__19566 = G__19658;
continue;
} else {
var G__19659 = (i__19566 + (1));
i__19566 = G__19659;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19567),reddonkey$geom$next_moves_$_iter__19564(cljs.core.chunk_rest(s__19565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19567),null);
}
} else {
var vec__19571 = cljs.core.first(s__19565__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19571,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19571,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__19564(cljs.core.rest(s__19565__$2)));
} else {
var G__19662 = cljs.core.rest(s__19565__$2);
s__19565__$1 = G__19662;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(moves2);
})();
var allowed_without_zero1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19574){
var vec__19575 = p__19574;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves1);
var allowed_without_zero2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19578){
var vec__19579 = p__19578;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves2);
var actions1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19582){
var vec__19583 = p__19582;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19583,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19583,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero1);
var actions2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19586){
var vec__19587 = p__19586;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero2);
var actions_fit1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19590){
var vec__19591 = p__19590;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19591,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19591,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions1);
var actions_fit2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19594){
var vec__19595 = p__19594;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19595,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19595,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions2);
return cljs.core.vec(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actions_fit1,actions_fit2)));
});
reddonkey.geom.manh = (function reddonkey$geom$manh(p__19598){
var map__19599 = p__19598;
var map__19599__$1 = cljs.core.__destructure_map(map__19599);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19599__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__19600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,(2));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19600,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19600,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19600,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19600,(3),null);
return (cljs.core.abs((x - (1))) + cljs.core.abs((y - (3))));
});
reddonkey.geom.next_node = (function reddonkey$geom$next_node(p__19603,action){
var map__19604 = p__19603;
var map__19604__$1 = cljs.core.__destructure_map(map__19604);
var node = map__19604__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19604__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19604__$1,new cljs.core.Keyword(null,"length","length",588987862));
var ns = reddonkey.geom.apply_move(state,action);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),ns,new cljs.core.Keyword(null,"length","length",588987862),(length + (1)),new cljs.core.Keyword(null,"prev","prev",-1597069226),node], null);
});
reddonkey.geom.final_QMARK_ = (function reddonkey$geom$final_QMARK_(p__19605){
var map__19606 = p__19605;
var map__19606__$1 = cljs.core.__destructure_map(map__19606);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19606__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),(2)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(2),(2)], null))){
return true;
} else {
return false;
}
});
reddonkey.geom.expand = (function reddonkey$geom$expand(node,reached,queue){
var next_actions = reddonkey.geom.next_moves(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(node));
var next_nodes = cljs.core.flatten((function (){var iter__5523__auto__ = (function reddonkey$geom$expand_$_iter__19607(s__19608){
return (new cljs.core.LazySeq(null,(function (){
var s__19608__$1 = s__19608;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19608__$1);
if(temp__5804__auto__){
var s__19608__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19608__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19608__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19610 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19609 = (0);
while(true){
if((i__19609 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__19609);
cljs.core.chunk_append(b__19610,reddonkey.geom.next_node(node,action));

var G__19677 = (i__19609 + (1));
i__19609 = G__19677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19610),reddonkey$geom$expand_$_iter__19607(cljs.core.chunk_rest(s__19608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19610),null);
}
} else {
var action = cljs.core.first(s__19608__$2);
return cljs.core.cons(reddonkey.geom.next_node(node,action),reddonkey$geom$expand_$_iter__19607(cljs.core.rest(s__19608__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(next_actions);
})());
var nn = next_nodes;
var q = queue;
var r = reached;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(nn),(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queue","queue",1455835879),q,new cljs.core.Keyword(null,"reached","reached",826384279),r], null);
} else {
var vec__19614 = nn;
var seq__19615 = cljs.core.seq(vec__19614);
var first__19616 = cljs.core.first(seq__19615);
var seq__19615__$1 = cljs.core.next(seq__19615);
var n = first__19616;
var ns = seq__19615__$1;
var s = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n);
var new_vals = (((!(cljs.core.contains_QMARK_(r,s))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,s,n),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,n,(((40) * reddonkey.geom.manh(s)) + new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(n)))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),r,new cljs.core.Keyword(null,"queue","queue",1455835879),q], null));
var new_q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(new_vals);
var new_r = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(new_vals);
var G__19678 = ns;
var G__19679 = new_q;
var G__19680 = new_r;
nn = G__19678;
q = G__19679;
r = G__19680;
continue;
}
break;
}
});
reddonkey.geom.blocks_to_action = (function reddonkey$geom$blocks_to_action(blocks1,blocks2){
return cljs.core.first((function (){var iter__5523__auto__ = (function reddonkey$geom$blocks_to_action_$_iter__19617(s__19618){
return (new cljs.core.LazySeq(null,(function (){
var s__19618__$1 = s__19618;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19618__$1);
if(temp__5804__auto__){
var s__19618__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19618__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19618__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19620 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19619 = (0);
while(true){
if((i__19619 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__19619);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k))){
cljs.core.chunk_append(b__19620,(function (){var vec__19621 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reddonkey.geom.diff_to_action(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))], null);
})());

var G__19681 = (i__19619 + (1));
i__19619 = G__19681;
continue;
} else {
var G__19682 = (i__19619 + (1));
i__19619 = G__19682;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19620),reddonkey$geom$blocks_to_action_$_iter__19617(cljs.core.chunk_rest(s__19618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19620),null);
}
} else {
var k = cljs.core.first(s__19618__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k))){
return cljs.core.cons((function (){var vec__19624 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reddonkey.geom.diff_to_action(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))], null);
})(),reddonkey$geom$blocks_to_action_$_iter__19617(cljs.core.rest(s__19618__$2)));
} else {
var G__19683 = cljs.core.rest(s__19618__$2);
s__19618__$1 = G__19683;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.keys(blocks1));
})());
});
reddonkey.geom.moves_from_list = (function reddonkey$geom$moves_from_list(blist){
var f = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(blist));
var s = cljs.core.vec(cljs.core.rest(blist));
var iter__5523__auto__ = (function reddonkey$geom$moves_from_list_$_iter__19627(s__19628){
return (new cljs.core.LazySeq(null,(function (){
var s__19628__$1 = s__19628;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19628__$1);
if(temp__5804__auto__){
var s__19628__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19628__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19628__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19630 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19629 = (0);
while(true){
if((i__19629 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__19629);
cljs.core.chunk_append(b__19630,reddonkey.geom.blocks_to_action(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,n)));

var G__19684 = (i__19629 + (1));
i__19629 = G__19684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19630),reddonkey$geom$moves_from_list_$_iter__19627(cljs.core.chunk_rest(s__19628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19630),null);
}
} else {
var n = cljs.core.first(s__19628__$2);
return cljs.core.cons(reddonkey.geom.blocks_to_action(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,n)),reddonkey$geom$moves_from_list_$_iter__19627(cljs.core.rest(s__19628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(f)));
});
reddonkey.geom.node_to_list = (function reddonkey$geom$node_to_list(node){
var n = node;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((!((!((new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n) == null)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
} else {
var G__19685 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n);
var G__19686 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
n = G__19685;
acc = G__19686;
continue;
}
break;
}
});
reddonkey.geom.moves_to_events = (function reddonkey$geom$moves_to_events(moves){
var l = cljs.core.count(moves);
var t = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return (x * (1000));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),l));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__19631){
var vec__19632 = p__19631;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19632,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19632,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(t,i)], null);
}),moves);
});
reddonkey.geom.solution = (function reddonkey$geom$solution(initial_state){
var start_state = initial_state;
var start_node = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),start_state,new cljs.core.Keyword(null,"length","length",588987862),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),null], null);
var queue = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_node,(0)], 0));
var reached = cljs.core.PersistentArrayMap.createAsIfByAssoc([start_state,start_node]);
var r = reached;
var q = queue;
while(true){
if(((cljs.core.seq(q)) && ((!(reddonkey.geom.final_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(q),(0)))))))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(q),(0));
var next_result = reddonkey.geom.expand(n,r,cljs.core.pop(q));
var new_reached = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(next_result);
var new_queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(next_result);
var G__19687 = new_reached;
var G__19688 = new_queue;
r = G__19687;
q = G__19688;
continue;
} else {
return reddonkey.geom.moves_from_list(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.geom.node_to_list(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(q),(0))))));
}
break;
}
});

//# sourceMappingURL=reddonkey.geom.js.map
