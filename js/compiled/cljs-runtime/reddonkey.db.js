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
reddonkey.db.diff_to_action = (function reddonkey$db$diff_to_action(p__19689){
var vec__19690 = p__19689;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(1),null);
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
reddonkey.db.block_to_coords = (function reddonkey$db$block_to_coords(p__19693){
var vec__19694 = p__19693;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19694,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19694,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19694,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19694,(3),null);
var xr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w));
var yr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function reddonkey$db$block_to_coords_$_iter__19697(s__19698){
return (new cljs.core.LazySeq(null,(function (){
var s__19698__$1 = s__19698;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19698__$1);
if(temp__5804__auto__){
var s__19698__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19698__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19698__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19700 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19699 = (0);
while(true){
if((i__19699 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__19699);
cljs.core.chunk_append(b__19700,(function (){var iter__5523__auto__ = ((function (i__19699,x__$1,c__5521__auto__,size__5522__auto__,b__19700,s__19698__$2,temp__5804__auto__,xr,yr,vec__19694,x,y,w,h){
return (function reddonkey$db$block_to_coords_$_iter__19697_$_iter__19701(s__19702){
return (new cljs.core.LazySeq(null,((function (i__19699,x__$1,c__5521__auto__,size__5522__auto__,b__19700,s__19698__$2,temp__5804__auto__,xr,yr,vec__19694,x,y,w,h){
return (function (){
var s__19702__$1 = s__19702;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__19702__$1);
if(temp__5804__auto____$1){
var s__19702__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19702__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__19702__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__19704 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__19703 = (0);
while(true){
if((i__19703 < size__5522__auto____$1)){
var y__$1 = cljs.core._nth(c__5521__auto____$1,i__19703);
cljs.core.chunk_append(b__19704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__19784 = (i__19703 + (1));
i__19703 = G__19784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19704),reddonkey$db$block_to_coords_$_iter__19697_$_iter__19701(cljs.core.chunk_rest(s__19702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19704),null);
}
} else {
var y__$1 = cljs.core.first(s__19702__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$db$block_to_coords_$_iter__19697_$_iter__19701(cljs.core.rest(s__19702__$2)));
}
} else {
return null;
}
break;
}
});})(i__19699,x__$1,c__5521__auto__,size__5522__auto__,b__19700,s__19698__$2,temp__5804__auto__,xr,yr,vec__19694,x,y,w,h))
,null,null));
});})(i__19699,x__$1,c__5521__auto__,size__5522__auto__,b__19700,s__19698__$2,temp__5804__auto__,xr,yr,vec__19694,x,y,w,h))
;
return iter__5523__auto__(yr);
})());

var G__19785 = (i__19699 + (1));
i__19699 = G__19785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19700),reddonkey$db$block_to_coords_$_iter__19697(cljs.core.chunk_rest(s__19698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19700),null);
}
} else {
var x__$1 = cljs.core.first(s__19698__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x__$1,s__19698__$2,temp__5804__auto__,xr,yr,vec__19694,x,y,w,h){
return (function reddonkey$db$block_to_coords_$_iter__19697_$_iter__19705(s__19706){
return (new cljs.core.LazySeq(null,(function (){
var s__19706__$1 = s__19706;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__19706__$1);
if(temp__5804__auto____$1){
var s__19706__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19706__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19706__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19708 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19707 = (0);
while(true){
if((i__19707 < size__5522__auto__)){
var y__$1 = cljs.core._nth(c__5521__auto__,i__19707);
cljs.core.chunk_append(b__19708,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__19786 = (i__19707 + (1));
i__19707 = G__19786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19708),reddonkey$db$block_to_coords_$_iter__19697_$_iter__19705(cljs.core.chunk_rest(s__19706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19708),null);
}
} else {
var y__$1 = cljs.core.first(s__19706__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$db$block_to_coords_$_iter__19697_$_iter__19705(cljs.core.rest(s__19706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x__$1,s__19698__$2,temp__5804__auto__,xr,yr,vec__19694,x,y,w,h))
;
return iter__5523__auto__(yr);
})(),reddonkey$db$block_to_coords_$_iter__19697(cljs.core.rest(s__19698__$2)));
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
reddonkey.db.set_zeros = (function reddonkey$db$set_zeros(board,p__19709){
var vec__19710 = p__19709;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(3),null);
var coords = reddonkey.db.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__19713){
var vec__19714 = p__19713;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,(0)));
}),board,coords);
return new_board;
});
reddonkey.db.assign_block = (function reddonkey$db$assign_block(board,n,p__19717){
var vec__19718 = p__19717;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(3),null);
var coords = reddonkey.db.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__19721){
var vec__19722 = p__19721;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,n));
}),board,coords);
return new_board;
});
reddonkey.db.fits_zero_QMARK_ = (function reddonkey$db$fits_zero_QMARK_(n,d,p__19725,board){
var vec__19726 = p__19725;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):null))));
var assigned_board = reddonkey.db.assign_block(reddonkey.db.set_zeros(board,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),n,new_block);
var non_zero = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x__$1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0));
}),cljs.core.flatten(assigned_board));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_zero),(18));
});
reddonkey.db.next_moves = (function reddonkey$db$next_moves(p__19729){
var map__19730 = p__19729;
var map__19730__$1 = cljs.core.__destructure_map(map__19730);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19730__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19730__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19730__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__19731 = zero;
var vec__19734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19731,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19734,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19734,(1),null);
var vec__19737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19731,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19737,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19737,(1),null);
var moves1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 - (1))], null)], null);
var moves2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 - (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 - (1))], null)], null);
var allowed_moves1 = (function (){var iter__5523__auto__ = (function reddonkey$db$next_moves_$_iter__19740(s__19741){
return (new cljs.core.LazySeq(null,(function (){
var s__19741__$1 = s__19741;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19741__$1);
if(temp__5804__auto__){
var s__19741__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19741__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19741__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19743 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19742 = (0);
while(true){
if((i__19742 < size__5522__auto__)){
var vec__19744 = cljs.core._nth(c__5521__auto__,i__19742);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19744,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19744,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__19743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__19787 = (i__19742 + (1));
i__19742 = G__19787;
continue;
} else {
var G__19788 = (i__19742 + (1));
i__19742 = G__19788;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19743),reddonkey$db$next_moves_$_iter__19740(cljs.core.chunk_rest(s__19741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19743),null);
}
} else {
var vec__19747 = cljs.core.first(s__19741__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$db$next_moves_$_iter__19740(cljs.core.rest(s__19741__$2)));
} else {
var G__19789 = cljs.core.rest(s__19741__$2);
s__19741__$1 = G__19789;
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
var allowed_moves2 = (function (){var iter__5523__auto__ = (function reddonkey$db$next_moves_$_iter__19750(s__19751){
return (new cljs.core.LazySeq(null,(function (){
var s__19751__$1 = s__19751;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19751__$1);
if(temp__5804__auto__){
var s__19751__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19751__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19751__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19753 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19752 = (0);
while(true){
if((i__19752 < size__5522__auto__)){
var vec__19754 = cljs.core._nth(c__5521__auto__,i__19752);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19754,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19754,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__19753,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__19790 = (i__19752 + (1));
i__19752 = G__19790;
continue;
} else {
var G__19791 = (i__19752 + (1));
i__19752 = G__19791;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19753),reddonkey$db$next_moves_$_iter__19750(cljs.core.chunk_rest(s__19751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19753),null);
}
} else {
var vec__19757 = cljs.core.first(s__19751__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19757,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19757,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$db$next_moves_$_iter__19750(cljs.core.rest(s__19751__$2)));
} else {
var G__19792 = cljs.core.rest(s__19751__$2);
s__19751__$1 = G__19792;
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
var allowed_without_zero1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19760){
var vec__19761 = p__19760;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19761,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19761,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves1);
var allowed_without_zero2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19764){
var vec__19765 = p__19764;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves2);
var actions1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19768){
var vec__19769 = p__19768;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19769,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19769,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.db.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero1);
var actions2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19772){
var vec__19773 = p__19772;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19773,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19773,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.db.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero2);
var actions_fit1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19776){
var vec__19777 = p__19776;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19777,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19777,(1),null);
return reddonkey.db.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions1);
var actions_fit2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19780){
var vec__19781 = p__19780;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19781,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19781,(1),null);
return reddonkey.db.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions2);
return cljs.core.vec(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actions_fit1,actions_fit2)));
});
reddonkey.db.blocks = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1),(1)], null)]);
reddonkey.db.board = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(5),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7),(8),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(0),(0),(10)], null)], null);
reddonkey.db.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),reddonkey.db.board,new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.db.blocks], null);
reddonkey.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"re-frame",new cljs.core.Keyword(null,"state","state",-1988618099),reddonkey.db.initial_state,new cljs.core.Keyword(null,"solving","solving",-175043197),false], null);

//# sourceMappingURL=reddonkey.db.js.map
