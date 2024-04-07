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
reddonkey.geom.diff_to_action = (function reddonkey$geom$diff_to_action(p__12638){
var vec__12639 = p__12638;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12639,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12639,(1),null);
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
reddonkey.geom.block_to_coords = (function reddonkey$geom$block_to_coords(p__12642){
var vec__12643 = p__12642;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(3),null);
var xr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w));
var yr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function reddonkey$geom$block_to_coords_$_iter__12646(s__12647){
return (new cljs.core.LazySeq(null,(function (){
var s__12647__$1 = s__12647;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12647__$1);
if(temp__5804__auto__){
var s__12647__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12647__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12647__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12649 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12648 = (0);
while(true){
if((i__12648 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__12648);
cljs.core.chunk_append(b__12649,(function (){var iter__5523__auto__ = ((function (i__12648,x__$1,c__5521__auto__,size__5522__auto__,b__12649,s__12647__$2,temp__5804__auto__,xr,yr,vec__12643,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__12646_$_iter__12650(s__12651){
return (new cljs.core.LazySeq(null,((function (i__12648,x__$1,c__5521__auto__,size__5522__auto__,b__12649,s__12647__$2,temp__5804__auto__,xr,yr,vec__12643,x,y,w,h){
return (function (){
var s__12651__$1 = s__12651;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12651__$1);
if(temp__5804__auto____$1){
var s__12651__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12651__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__12651__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__12653 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__12652 = (0);
while(true){
if((i__12652 < size__5522__auto____$1)){
var y__$1 = cljs.core._nth(c__5521__auto____$1,i__12652);
cljs.core.chunk_append(b__12653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__12846 = (i__12652 + (1));
i__12652 = G__12846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12653),reddonkey$geom$block_to_coords_$_iter__12646_$_iter__12650(cljs.core.chunk_rest(s__12651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12653),null);
}
} else {
var y__$1 = cljs.core.first(s__12651__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__12646_$_iter__12650(cljs.core.rest(s__12651__$2)));
}
} else {
return null;
}
break;
}
});})(i__12648,x__$1,c__5521__auto__,size__5522__auto__,b__12649,s__12647__$2,temp__5804__auto__,xr,yr,vec__12643,x,y,w,h))
,null,null));
});})(i__12648,x__$1,c__5521__auto__,size__5522__auto__,b__12649,s__12647__$2,temp__5804__auto__,xr,yr,vec__12643,x,y,w,h))
;
return iter__5523__auto__(yr);
})());

var G__12847 = (i__12648 + (1));
i__12648 = G__12847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12649),reddonkey$geom$block_to_coords_$_iter__12646(cljs.core.chunk_rest(s__12647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12649),null);
}
} else {
var x__$1 = cljs.core.first(s__12647__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x__$1,s__12647__$2,temp__5804__auto__,xr,yr,vec__12643,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__12646_$_iter__12654(s__12655){
return (new cljs.core.LazySeq(null,(function (){
var s__12655__$1 = s__12655;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12655__$1);
if(temp__5804__auto____$1){
var s__12655__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12655__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12655__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12657 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12656 = (0);
while(true){
if((i__12656 < size__5522__auto__)){
var y__$1 = cljs.core._nth(c__5521__auto__,i__12656);
cljs.core.chunk_append(b__12657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__12850 = (i__12656 + (1));
i__12656 = G__12850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12657),reddonkey$geom$block_to_coords_$_iter__12646_$_iter__12654(cljs.core.chunk_rest(s__12655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12657),null);
}
} else {
var y__$1 = cljs.core.first(s__12655__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__12646_$_iter__12654(cljs.core.rest(s__12655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x__$1,s__12647__$2,temp__5804__auto__,xr,yr,vec__12643,x,y,w,h))
;
return iter__5523__auto__(yr);
})(),reddonkey$geom$block_to_coords_$_iter__12646(cljs.core.rest(s__12647__$2)));
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
reddonkey.geom.set_zeros = (function reddonkey$geom$set_zeros(board,p__12658){
var vec__12659 = p__12658;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__12662){
var vec__12663 = p__12662;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,(0)));
}),board,coords);
return new_board;
});
reddonkey.geom.assign_block = (function reddonkey$geom$assign_block(board,n,p__12666){
var vec__12667 = p__12666;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12667,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12667,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12667,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12667,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__12670){
var vec__12671 = p__12670;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12671,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12671,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,n));
}),board,coords);
return new_board;
});
reddonkey.geom.contains_zero_QMARK_ = (function reddonkey$geom$contains_zero_QMARK_(p__12674,p__12675){
var vec__12676 = p__12674;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12676,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12676,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12676,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12676,(3),null);
var vec__12679 = p__12675;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12679,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12679,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__12682){
var vec__12683 = p__12682;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12683,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12683,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y),x,(0)));
}),board,zeros);
});
reddonkey.geom.moved_zeros = (function reddonkey$geom$moved_zeros(d,p__12686,zeros){
var vec__12687 = p__12686;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__12690(s__12691){
return (new cljs.core.LazySeq(null,(function (){
var s__12691__$1 = s__12691;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12691__$1);
if(temp__5804__auto__){
var s__12691__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12691__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12691__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12693 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12692 = (0);
while(true){
if((i__12692 < size__5522__auto__)){
var vec__12694 = cljs.core._nth(c__5521__auto__,i__12692);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(1),null);
cljs.core.chunk_append(b__12693,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__12869 = (i__12692 + (1));
i__12692 = G__12869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12693),reddonkey$geom$moved_zeros_$_iter__12690(cljs.core.chunk_rest(s__12691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12693),null);
}
} else {
var vec__12697 = cljs.core.first(s__12691__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__12690(cljs.core.rest(s__12691__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__12700(s__12701){
return (new cljs.core.LazySeq(null,(function (){
var s__12701__$1 = s__12701;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12701__$1);
if(temp__5804__auto__){
var s__12701__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12701__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12701__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12703 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12702 = (0);
while(true){
if((i__12702 < size__5522__auto__)){
var vec__12704 = cljs.core._nth(c__5521__auto__,i__12702);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(1),null);
cljs.core.chunk_append(b__12703,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__12874 = (i__12702 + (1));
i__12702 = G__12874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12703),reddonkey$geom$moved_zeros_$_iter__12700(cljs.core.chunk_rest(s__12701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12703),null);
}
} else {
var vec__12707 = cljs.core.first(s__12701__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__12700(cljs.core.rest(s__12701__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__12710(s__12711){
return (new cljs.core.LazySeq(null,(function (){
var s__12711__$1 = s__12711;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12711__$1);
if(temp__5804__auto__){
var s__12711__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12711__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12711__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12713 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12712 = (0);
while(true){
if((i__12712 < size__5522__auto__)){
var vec__12714 = cljs.core._nth(c__5521__auto__,i__12712);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714,(1),null);
cljs.core.chunk_append(b__12713,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__12875 = (i__12712 + (1));
i__12712 = G__12875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12713),reddonkey$geom$moved_zeros_$_iter__12710(cljs.core.chunk_rest(s__12711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12713),null);
}
} else {
var vec__12717 = cljs.core.first(s__12711__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12717,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12717,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__12710(cljs.core.rest(s__12711__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__12720(s__12721){
return (new cljs.core.LazySeq(null,(function (){
var s__12721__$1 = s__12721;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12721__$1);
if(temp__5804__auto__){
var s__12721__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12721__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12721__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12723 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12722 = (0);
while(true){
if((i__12722 < size__5522__auto__)){
var vec__12724 = cljs.core._nth(c__5521__auto__,i__12722);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(1),null);
cljs.core.chunk_append(b__12723,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__12876 = (i__12722 + (1));
i__12722 = G__12876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12723),reddonkey$geom$moved_zeros_$_iter__12720(cljs.core.chunk_rest(s__12721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12723),null);
}
} else {
var vec__12727 = cljs.core.first(s__12721__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12727,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12727,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__12720(cljs.core.rest(s__12721__$2)));
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
reddonkey.geom.apply_move = (function reddonkey$geom$apply_move(p__12730,p__12731){
var map__12732 = p__12730;
var map__12732__$1 = cljs.core.__destructure_map(map__12732);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12732__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12732__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12732__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__12733 = p__12731;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733,(1),null);
var vec__12736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,n);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):null))));
var new_blocks = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(blocks,n,new_block);
var new_zeros = reddonkey.geom.moved_zeros(d,new_block,zero);
var new_board = reddonkey.geom.assign_block(reddonkey.geom.assign_zeros(board,new_zeros),n,new_block);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),new_zeros,new cljs.core.Keyword(null,"blocks","blocks",-610462153),new_blocks], null);
});
reddonkey.geom.fits_zero_QMARK_ = (function reddonkey$geom$fits_zero_QMARK_(n,d,p__12739,board){
var vec__12740 = p__12739;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12740,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12740,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12740,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12740,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):null))));
var assigned_board = reddonkey.geom.assign_block(reddonkey.geom.set_zeros(board,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),n,new_block);
var non_zero = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x__$1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0));
}),cljs.core.flatten(assigned_board));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_zero),(18));
});
reddonkey.geom.next_moves = (function reddonkey$geom$next_moves(p__12743){
var map__12744 = p__12743;
var map__12744__$1 = cljs.core.__destructure_map(map__12744);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12744__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12744__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12744__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__12745 = zero;
var vec__12748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12748,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12748,(1),null);
var vec__12751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751,(1),null);
var moves1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 - (1))], null)], null);
var moves2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 - (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 - (1))], null)], null);
var allowed_moves1 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__12754(s__12755){
return (new cljs.core.LazySeq(null,(function (){
var s__12755__$1 = s__12755;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12755__$1);
if(temp__5804__auto__){
var s__12755__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12755__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12755__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12757 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12756 = (0);
while(true){
if((i__12756 < size__5522__auto__)){
var vec__12758 = cljs.core._nth(c__5521__auto__,i__12756);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12758,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12758,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__12757,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__12877 = (i__12756 + (1));
i__12756 = G__12877;
continue;
} else {
var G__12878 = (i__12756 + (1));
i__12756 = G__12878;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12757),reddonkey$geom$next_moves_$_iter__12754(cljs.core.chunk_rest(s__12755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12757),null);
}
} else {
var vec__12761 = cljs.core.first(s__12755__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__12754(cljs.core.rest(s__12755__$2)));
} else {
var G__12879 = cljs.core.rest(s__12755__$2);
s__12755__$1 = G__12879;
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
var allowed_moves2 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__12764(s__12765){
return (new cljs.core.LazySeq(null,(function (){
var s__12765__$1 = s__12765;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12765__$1);
if(temp__5804__auto__){
var s__12765__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12765__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12765__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12767 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12766 = (0);
while(true){
if((i__12766 < size__5522__auto__)){
var vec__12768 = cljs.core._nth(c__5521__auto__,i__12766);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12768,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12768,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__12767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__12880 = (i__12766 + (1));
i__12766 = G__12880;
continue;
} else {
var G__12881 = (i__12766 + (1));
i__12766 = G__12881;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12767),reddonkey$geom$next_moves_$_iter__12764(cljs.core.chunk_rest(s__12765__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12767),null);
}
} else {
var vec__12771 = cljs.core.first(s__12765__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__12764(cljs.core.rest(s__12765__$2)));
} else {
var G__12882 = cljs.core.rest(s__12765__$2);
s__12765__$1 = G__12882;
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
var allowed_without_zero1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12774){
var vec__12775 = p__12774;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12775,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12775,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves1);
var allowed_without_zero2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12778){
var vec__12779 = p__12778;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves2);
var actions1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12782){
var vec__12783 = p__12782;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero1);
var actions2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12786){
var vec__12787 = p__12786;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12787,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12787,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero2);
var actions_fit1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12790){
var vec__12791 = p__12790;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions1);
var actions_fit2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12794){
var vec__12795 = p__12794;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions2);
return cljs.core.vec(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actions_fit1,actions_fit2)));
});
reddonkey.geom.manh = (function reddonkey$geom$manh(p__12798){
var map__12799 = p__12798;
var map__12799__$1 = cljs.core.__destructure_map(map__12799);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12799__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__12800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,(2));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12800,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12800,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12800,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12800,(3),null);
return (cljs.core.abs((x - (1))) + cljs.core.abs((y - (3))));
});
reddonkey.geom.next_node = (function reddonkey$geom$next_node(p__12803,action){
var map__12804 = p__12803;
var map__12804__$1 = cljs.core.__destructure_map(map__12804);
var node = map__12804__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,new cljs.core.Keyword(null,"length","length",588987862));
var ns = reddonkey.geom.apply_move(state,action);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),ns,new cljs.core.Keyword(null,"length","length",588987862),(length + (1)),new cljs.core.Keyword(null,"prev","prev",-1597069226),node], null);
});
reddonkey.geom.final_QMARK_ = (function reddonkey$geom$final_QMARK_(p__12805){
var map__12806 = p__12805;
var map__12806__$1 = cljs.core.__destructure_map(map__12806);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12806__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),(2)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(2),(2)], null))){
return true;
} else {
return false;
}
});
reddonkey.geom.expand = (function reddonkey$geom$expand(node,reached,queue){
var next_actions = reddonkey.geom.next_moves(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(node));
var next_nodes = cljs.core.flatten((function (){var iter__5523__auto__ = (function reddonkey$geom$expand_$_iter__12807(s__12808){
return (new cljs.core.LazySeq(null,(function (){
var s__12808__$1 = s__12808;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12808__$1);
if(temp__5804__auto__){
var s__12808__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12808__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12808__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12810 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12809 = (0);
while(true){
if((i__12809 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__12809);
cljs.core.chunk_append(b__12810,reddonkey.geom.next_node(node,action));

var G__12883 = (i__12809 + (1));
i__12809 = G__12883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12810),reddonkey$geom$expand_$_iter__12807(cljs.core.chunk_rest(s__12808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12810),null);
}
} else {
var action = cljs.core.first(s__12808__$2);
return cljs.core.cons(reddonkey.geom.next_node(node,action),reddonkey$geom$expand_$_iter__12807(cljs.core.rest(s__12808__$2)));
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
var vec__12814 = nn;
var seq__12815 = cljs.core.seq(vec__12814);
var first__12816 = cljs.core.first(seq__12815);
var seq__12815__$1 = cljs.core.next(seq__12815);
var n = first__12816;
var ns = seq__12815__$1;
var s = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n);
var new_vals = (((!(cljs.core.contains_QMARK_(r,s))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,s,n),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,n,(((40) * reddonkey.geom.manh(s)) + new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(n)))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reached","reached",826384279),r,new cljs.core.Keyword(null,"queue","queue",1455835879),q], null));
var new_q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(new_vals);
var new_r = new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(new_vals);
var G__12884 = ns;
var G__12885 = new_q;
var G__12886 = new_r;
nn = G__12884;
q = G__12885;
r = G__12886;
continue;
}
break;
}
});
reddonkey.geom.blocks_to_action = (function reddonkey$geom$blocks_to_action(blocks1,blocks2){
return cljs.core.first((function (){var iter__5523__auto__ = (function reddonkey$geom$blocks_to_action_$_iter__12817(s__12818){
return (new cljs.core.LazySeq(null,(function (){
var s__12818__$1 = s__12818;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12818__$1);
if(temp__5804__auto__){
var s__12818__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12818__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12818__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12820 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12819 = (0);
while(true){
if((i__12819 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__12819);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k))){
cljs.core.chunk_append(b__12820,(function (){var vec__12821 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12821,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12821,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12821,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12821,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reddonkey.geom.diff_to_action(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))], null);
})());

var G__12887 = (i__12819 + (1));
i__12819 = G__12887;
continue;
} else {
var G__12888 = (i__12819 + (1));
i__12819 = G__12888;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12820),reddonkey$geom$blocks_to_action_$_iter__12817(cljs.core.chunk_rest(s__12818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12820),null);
}
} else {
var k = cljs.core.first(s__12818__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k))){
return cljs.core.cons((function (){var vec__12824 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks2,k));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reddonkey.geom.diff_to_action(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))], null);
})(),reddonkey$geom$blocks_to_action_$_iter__12817(cljs.core.rest(s__12818__$2)));
} else {
var G__12889 = cljs.core.rest(s__12818__$2);
s__12818__$1 = G__12889;
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
var iter__5523__auto__ = (function reddonkey$geom$moves_from_list_$_iter__12827(s__12828){
return (new cljs.core.LazySeq(null,(function (){
var s__12828__$1 = s__12828;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12828__$1);
if(temp__5804__auto__){
var s__12828__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12828__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12828__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12830 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12829 = (0);
while(true){
if((i__12829 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__12829);
cljs.core.chunk_append(b__12830,reddonkey.geom.blocks_to_action(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,n)));

var G__12890 = (i__12829 + (1));
i__12829 = G__12890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12830),reddonkey$geom$moves_from_list_$_iter__12827(cljs.core.chunk_rest(s__12828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12830),null);
}
} else {
var n = cljs.core.first(s__12828__$2);
return cljs.core.cons(reddonkey.geom.blocks_to_action(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,n)),reddonkey$geom$moves_from_list_$_iter__12827(cljs.core.rest(s__12828__$2)));
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
var G__12891 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(n);
var G__12892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(n));
n = G__12891;
acc = G__12892;
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
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__12831){
var vec__12832 = p__12831;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12832,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12832,(1),null);
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
var G__12893 = new_reached;
var G__12894 = new_queue;
r = G__12893;
q = G__12894;
continue;
} else {
return reddonkey.geom.moves_from_list(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.geom.node_to_list(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(q),(0))))));
}
break;
}
});

//# sourceMappingURL=reddonkey.geom.js.map
