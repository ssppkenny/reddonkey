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
reddonkey.db.diff_to_action = (function reddonkey$db$diff_to_action(p__13088){
var vec__13089 = p__13088;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(1),null);
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
reddonkey.db.block_to_coords = (function reddonkey$db$block_to_coords(p__13092){
var vec__13093 = p__13092;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(3),null);
var xr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w));
var yr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function reddonkey$db$block_to_coords_$_iter__13096(s__13097){
return (new cljs.core.LazySeq(null,(function (){
var s__13097__$1 = s__13097;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13097__$1);
if(temp__5804__auto__){
var s__13097__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13097__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13097__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13099 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13098 = (0);
while(true){
if((i__13098 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__13098);
cljs.core.chunk_append(b__13099,(function (){var iter__5523__auto__ = ((function (i__13098,x__$1,c__5521__auto__,size__5522__auto__,b__13099,s__13097__$2,temp__5804__auto__,xr,yr,vec__13093,x,y,w,h){
return (function reddonkey$db$block_to_coords_$_iter__13096_$_iter__13100(s__13101){
return (new cljs.core.LazySeq(null,((function (i__13098,x__$1,c__5521__auto__,size__5522__auto__,b__13099,s__13097__$2,temp__5804__auto__,xr,yr,vec__13093,x,y,w,h){
return (function (){
var s__13101__$1 = s__13101;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13101__$1);
if(temp__5804__auto____$1){
var s__13101__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13101__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13101__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13103 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13102 = (0);
while(true){
if((i__13102 < size__5522__auto____$1)){
var y__$1 = cljs.core._nth(c__5521__auto____$1,i__13102);
cljs.core.chunk_append(b__13103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__13187 = (i__13102 + (1));
i__13102 = G__13187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13103),reddonkey$db$block_to_coords_$_iter__13096_$_iter__13100(cljs.core.chunk_rest(s__13101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13103),null);
}
} else {
var y__$1 = cljs.core.first(s__13101__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$db$block_to_coords_$_iter__13096_$_iter__13100(cljs.core.rest(s__13101__$2)));
}
} else {
return null;
}
break;
}
});})(i__13098,x__$1,c__5521__auto__,size__5522__auto__,b__13099,s__13097__$2,temp__5804__auto__,xr,yr,vec__13093,x,y,w,h))
,null,null));
});})(i__13098,x__$1,c__5521__auto__,size__5522__auto__,b__13099,s__13097__$2,temp__5804__auto__,xr,yr,vec__13093,x,y,w,h))
;
return iter__5523__auto__(yr);
})());

var G__13188 = (i__13098 + (1));
i__13098 = G__13188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13099),reddonkey$db$block_to_coords_$_iter__13096(cljs.core.chunk_rest(s__13097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13099),null);
}
} else {
var x__$1 = cljs.core.first(s__13097__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x__$1,s__13097__$2,temp__5804__auto__,xr,yr,vec__13093,x,y,w,h){
return (function reddonkey$db$block_to_coords_$_iter__13096_$_iter__13104(s__13105){
return (new cljs.core.LazySeq(null,(function (){
var s__13105__$1 = s__13105;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13105__$1);
if(temp__5804__auto____$1){
var s__13105__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13105__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13105__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13107 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13106 = (0);
while(true){
if((i__13106 < size__5522__auto__)){
var y__$1 = cljs.core._nth(c__5521__auto__,i__13106);
cljs.core.chunk_append(b__13107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__13189 = (i__13106 + (1));
i__13106 = G__13189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13107),reddonkey$db$block_to_coords_$_iter__13096_$_iter__13104(cljs.core.chunk_rest(s__13105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13107),null);
}
} else {
var y__$1 = cljs.core.first(s__13105__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$db$block_to_coords_$_iter__13096_$_iter__13104(cljs.core.rest(s__13105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x__$1,s__13097__$2,temp__5804__auto__,xr,yr,vec__13093,x,y,w,h))
;
return iter__5523__auto__(yr);
})(),reddonkey$db$block_to_coords_$_iter__13096(cljs.core.rest(s__13097__$2)));
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
reddonkey.db.set_zeros = (function reddonkey$db$set_zeros(board,p__13108){
var vec__13109 = p__13108;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(3),null);
var coords = reddonkey.db.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__13112){
var vec__13113 = p__13112;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,(0)));
}),board,coords);
return new_board;
});
reddonkey.db.assign_block = (function reddonkey$db$assign_block(board,n,p__13116){
var vec__13117 = p__13116;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13117,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13117,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13117,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13117,(3),null);
var coords = reddonkey.db.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__13120){
var vec__13121 = p__13120;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13121,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13121,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,n));
}),board,coords);
return new_board;
});
reddonkey.db.fits_zero_QMARK_ = (function reddonkey$db$fits_zero_QMARK_(n,d,p__13124,board){
var vec__13125 = p__13124;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):null))));
var assigned_board = reddonkey.db.assign_block(reddonkey.db.set_zeros(board,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),n,new_block);
var non_zero = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x__$1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0));
}),cljs.core.flatten(assigned_board));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_zero),(18));
});
reddonkey.db.next_moves = (function reddonkey$db$next_moves(p__13128){
var map__13129 = p__13128;
var map__13129__$1 = cljs.core.__destructure_map(map__13129);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13129__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13129__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13129__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__13130 = zero;
var vec__13133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13130,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13133,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13133,(1),null);
var vec__13136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13130,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13136,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13136,(1),null);
var moves1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 - (1))], null)], null);
var moves2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 - (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 - (1))], null)], null);
var allowed_moves1 = (function (){var iter__5523__auto__ = (function reddonkey$db$next_moves_$_iter__13139(s__13140){
return (new cljs.core.LazySeq(null,(function (){
var s__13140__$1 = s__13140;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13140__$1);
if(temp__5804__auto__){
var s__13140__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13140__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13140__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13142 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13141 = (0);
while(true){
if((i__13141 < size__5522__auto__)){
var vec__13143 = cljs.core._nth(c__5521__auto__,i__13141);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__13142,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__13190 = (i__13141 + (1));
i__13141 = G__13190;
continue;
} else {
var G__13191 = (i__13141 + (1));
i__13141 = G__13191;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13142),reddonkey$db$next_moves_$_iter__13139(cljs.core.chunk_rest(s__13140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13142),null);
}
} else {
var vec__13146 = cljs.core.first(s__13140__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$db$next_moves_$_iter__13139(cljs.core.rest(s__13140__$2)));
} else {
var G__13192 = cljs.core.rest(s__13140__$2);
s__13140__$1 = G__13192;
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
var allowed_moves2 = (function (){var iter__5523__auto__ = (function reddonkey$db$next_moves_$_iter__13149(s__13150){
return (new cljs.core.LazySeq(null,(function (){
var s__13150__$1 = s__13150;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13150__$1);
if(temp__5804__auto__){
var s__13150__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13150__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13150__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13152 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13151 = (0);
while(true){
if((i__13151 < size__5522__auto__)){
var vec__13153 = cljs.core._nth(c__5521__auto__,i__13151);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13153,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13153,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__13152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__13193 = (i__13151 + (1));
i__13151 = G__13193;
continue;
} else {
var G__13194 = (i__13151 + (1));
i__13151 = G__13194;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13152),reddonkey$db$next_moves_$_iter__13149(cljs.core.chunk_rest(s__13150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13152),null);
}
} else {
var vec__13156 = cljs.core.first(s__13150__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.db.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.db.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$db$next_moves_$_iter__13149(cljs.core.rest(s__13150__$2)));
} else {
var G__13195 = cljs.core.rest(s__13150__$2);
s__13150__$1 = G__13195;
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
var allowed_without_zero1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13159){
var vec__13160 = p__13159;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves1);
var allowed_without_zero2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13163){
var vec__13164 = p__13163;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves2);
var actions1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13167){
var vec__13168 = p__13167;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.db.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero1);
var actions2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13171){
var vec__13172 = p__13171;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.db.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero2);
var actions_fit1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13175){
var vec__13176 = p__13175;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13176,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13176,(1),null);
return reddonkey.db.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions1);
var actions_fit2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13179){
var vec__13180 = p__13179;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13180,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13180,(1),null);
return reddonkey.db.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions2);
return cljs.core.vec(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actions_fit1,actions_fit2)));
});
reddonkey.db.blocks = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1),(1)], null)]);
reddonkey.db.board = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(5),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7),(8),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(0),(0),(10)], null)], null);
reddonkey.db.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),reddonkey.db.board,new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.db.blocks], null);
reddonkey.db.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"re-frame",new cljs.core.Keyword(null,"state","state",-1988618099),reddonkey.db.initial_state], null);

//# sourceMappingURL=reddonkey.db.js.map
