goog.provide('reddonkey.db');
/**
 * Returns a predicate that tests if its argument falls in
 *   the inclusive interval [a, b].
 */
reddonkey.db.in_interval_QMARK_ = (function reddonkey$db$in_interval_QMARK_(a,b){
return (function (x){
return (((x >= a)) && ((x <= b)));
});
});
reddonkey.db.diff_to_action = (function reddonkey$db$diff_to_action(p__15770){
var vec__15772 = p__15770;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772,(1),null);
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
reddonkey.db.block_to_coords = (function reddonkey$db$block_to_coords(p__15778){
var vec__15780 = p__15778;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(3),null);
var xr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w));
var yr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function reddonkey$db$block_to_coords_$_iter__15786(s__15787){
return (new cljs.core.LazySeq(null,(function (){
var s__15787__$1 = s__15787;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15787__$1);
if(temp__5804__auto__){
var s__15787__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15787__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15787__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15789 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15788 = (0);
while(true){
if((i__15788 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__15788);
cljs.core.chunk_append(b__15789,(function (){var iter__5523__auto__ = ((function (i__15788,x__$1,c__5521__auto__,size__5522__auto__,b__15789,s__15787__$2,temp__5804__auto__,xr,yr,vec__15780,x,y,w,h){
return (function reddonkey$db$block_to_coords_$_iter__15786_$_iter__15794(s__15795){
return (new cljs.core.LazySeq(null,((function (i__15788,x__$1,c__5521__auto__,size__5522__auto__,b__15789,s__15787__$2,temp__5804__auto__,xr,yr,vec__15780,x,y,w,h){
return (function (){
var s__15795__$1 = s__15795;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15795__$1);
if(temp__5804__auto____$1){
var s__15795__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15795__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__15795__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__15797 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__15796 = (0);
while(true){
if((i__15796 < size__5522__auto____$1)){
var y__$1 = cljs.core._nth(c__5521__auto____$1,i__15796);
cljs.core.chunk_append(b__15797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__15957 = (i__15796 + (1));
i__15796 = G__15957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15797),reddonkey$db$block_to_coords_$_iter__15786_$_iter__15794(cljs.core.chunk_rest(s__15795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15797),null);
}
} else {
var y__$1 = cljs.core.first(s__15795__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$db$block_to_coords_$_iter__15786_$_iter__15794(cljs.core.rest(s__15795__$2)));
}
} else {
return null;
}
break;
}
});})(i__15788,x__$1,c__5521__auto__,size__5522__auto__,b__15789,s__15787__$2,temp__5804__auto__,xr,yr,vec__15780,x,y,w,h))
,null,null));
});})(i__15788,x__$1,c__5521__auto__,size__5522__auto__,b__15789,s__15787__$2,temp__5804__auto__,xr,yr,vec__15780,x,y,w,h))
;
return iter__5523__auto__(yr);
})());

var G__15958 = (i__15788 + (1));
i__15788 = G__15958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15789),reddonkey$db$block_to_coords_$_iter__15786(cljs.core.chunk_rest(s__15787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15789),null);
}
} else {
var x__$1 = cljs.core.first(s__15787__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x__$1,s__15787__$2,temp__5804__auto__,xr,yr,vec__15780,x,y,w,h){
return (function reddonkey$db$block_to_coords_$_iter__15786_$_iter__15802(s__15803){
return (new cljs.core.LazySeq(null,(function (){
var s__15803__$1 = s__15803;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15803__$1);
if(temp__5804__auto____$1){
var s__15803__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15803__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15803__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15805 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15804 = (0);
while(true){
if((i__15804 < size__5522__auto__)){
var y__$1 = cljs.core._nth(c__5521__auto__,i__15804);
cljs.core.chunk_append(b__15805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__15959 = (i__15804 + (1));
i__15804 = G__15959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15805),reddonkey$db$block_to_coords_$_iter__15786_$_iter__15802(cljs.core.chunk_rest(s__15803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15805),null);
}
} else {
var y__$1 = cljs.core.first(s__15803__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$db$block_to_coords_$_iter__15786_$_iter__15802(cljs.core.rest(s__15803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x__$1,s__15787__$2,temp__5804__auto__,xr,yr,vec__15780,x,y,w,h))
;
return iter__5523__auto__(yr);
})(),reddonkey$db$block_to_coords_$_iter__15786(cljs.core.rest(s__15787__$2)));
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
reddonkey.db.set_zeros = (function reddonkey$db$set_zeros(board,p__15810){
var vec__15811 = p__15810;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15811,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15811,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15811,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15811,(3),null);
var coords = reddonkey.db.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__15814){
var vec__15815 = p__15814;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15815,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15815,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,(0)));
}),board,coords);
return new_board;
});
reddonkey.db.assign_block = (function reddonkey$db$assign_block(board,n,p__15826){
var vec__15827 = p__15826;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827,(3),null);
var coords = reddonkey.db.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__15830){
var vec__15831 = p__15830;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15831,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15831,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,n));
}),board,coords);
return new_board;
});
reddonkey.db.fits_zero_QMARK_ = (function reddonkey$db$fits_zero_QMARK_(n,d,p__15842,board){
var vec__15843 = p__15842;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):null))));
var assigned_board = reddonkey.db.assign_block(reddonkey.db.set_zeros(board,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),n,new_block);
var non_zero = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x__$1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0));
}),cljs.core.flatten(assigned_board));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_zero),(18));
});
reddonkey.db.next_moves = (function reddonkey$db$next_moves(p__15854){
var map__15855 = p__15854;
var map__15855__$1 = cljs.core.__destructure_map(map__15855);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__15860 = zero;
var vec__15863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15860,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15863,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15863,(1),null);
var vec__15866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15860,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15866,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15866,(1),null);
var moves1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 - (1))], null)], null);
var moves2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 - (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 - (1))], null)], null);
var allowed_moves1 = (function (){var iter__5523__auto__ = (function reddonkey$db$next_moves_$_iter__15869(s__15870){
return (new cljs.core.LazySeq(null,(function (){
var s__15870__$1 = s__15870;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15870__$1);
if(temp__5804__auto__){
var s__15870__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15870__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15870__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15872 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15871 = (0);
while(true){
if((i__15871 < size__5522__auto__)){
var vec__15881 = cljs.core._nth(c__5521__auto__,i__15871);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15881,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15881,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__15872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__15973 = (i__15871 + (1));
i__15871 = G__15973;
continue;
} else {
var G__15974 = (i__15871 + (1));
i__15871 = G__15974;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15872),reddonkey$db$next_moves_$_iter__15869(cljs.core.chunk_rest(s__15870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15872),null);
}
} else {
var vec__15887 = cljs.core.first(s__15870__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$db$next_moves_$_iter__15869(cljs.core.rest(s__15870__$2)));
} else {
var G__15975 = cljs.core.rest(s__15870__$2);
s__15870__$1 = G__15975;
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
var allowed_moves2 = (function (){var iter__5523__auto__ = (function reddonkey$db$next_moves_$_iter__15893(s__15894){
return (new cljs.core.LazySeq(null,(function (){
var s__15894__$1 = s__15894;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15894__$1);
if(temp__5804__auto__){
var s__15894__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15894__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15894__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15896 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15895 = (0);
while(true){
if((i__15895 < size__5522__auto__)){
var vec__15901 = cljs.core._nth(c__5521__auto__,i__15895);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15901,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15901,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__15896,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__15976 = (i__15895 + (1));
i__15895 = G__15976;
continue;
} else {
var G__15977 = (i__15895 + (1));
i__15895 = G__15977;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15896),reddonkey$db$next_moves_$_iter__15893(cljs.core.chunk_rest(s__15894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15896),null);
}
} else {
var vec__15907 = cljs.core.first(s__15894__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15907,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15907,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$db$next_moves_$_iter__15893(cljs.core.rest(s__15894__$2)));
} else {
var G__15978 = cljs.core.rest(s__15894__$2);
s__15894__$1 = G__15978;
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
var allowed_without_zero1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__15917){
var vec__15918 = p__15917;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves1);
var allowed_without_zero2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__15924){
var vec__15925 = p__15924;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15925,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15925,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves2);
var actions1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15931){
var vec__15936 = p__15931;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.db.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero1);
var actions2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15939){
var vec__15940 = p__15939;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15940,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15940,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.db.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero2);
var actions_fit1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__15946){
var vec__15947 = p__15946;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15947,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15947,(1),null);
return reddonkey.db.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions1);
var actions_fit2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__15953){
var vec__15954 = p__15953;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15954,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15954,(1),null);
return reddonkey.db.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions2);
return cljs.core.vec(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actions_fit1,actions_fit2)));
});
reddonkey.db.blocks = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1),(1)], null)]);
reddonkey.db.board = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(5),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7),(8),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(0),(0),(10)], null)], null);
reddonkey.db.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),reddonkey.db.board,new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.db.blocks], null);
reddonkey.db.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"re-frame",new cljs.core.Keyword(null,"state","state",-1988618099),reddonkey.db.initial_state], null);

//# sourceMappingURL=reddonkey.db.js.map
