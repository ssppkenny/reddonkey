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
reddonkey.geom.diff_to_action = (function reddonkey$geom$diff_to_action(p__13852){
var vec__13853 = p__13852;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13853,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13853,(1),null);
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
reddonkey.geom.block_to_coords = (function reddonkey$geom$block_to_coords(p__13856){
var vec__13857 = p__13856;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(3),null);
var xr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w));
var yr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function reddonkey$geom$block_to_coords_$_iter__13860(s__13861){
return (new cljs.core.LazySeq(null,(function (){
var s__13861__$1 = s__13861;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13861__$1);
if(temp__5804__auto__){
var s__13861__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13861__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13861__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13863 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13862 = (0);
while(true){
if((i__13862 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__13862);
cljs.core.chunk_append(b__13863,(function (){var iter__5523__auto__ = ((function (i__13862,x__$1,c__5521__auto__,size__5522__auto__,b__13863,s__13861__$2,temp__5804__auto__,xr,yr,vec__13857,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__13860_$_iter__13864(s__13865){
return (new cljs.core.LazySeq(null,((function (i__13862,x__$1,c__5521__auto__,size__5522__auto__,b__13863,s__13861__$2,temp__5804__auto__,xr,yr,vec__13857,x,y,w,h){
return (function (){
var s__13865__$1 = s__13865;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13865__$1);
if(temp__5804__auto____$1){
var s__13865__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13865__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__13865__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__13867 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__13866 = (0);
while(true){
if((i__13866 < size__5522__auto____$1)){
var y__$1 = cljs.core._nth(c__5521__auto____$1,i__13866);
cljs.core.chunk_append(b__13867,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__14012 = (i__13866 + (1));
i__13866 = G__14012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13867),reddonkey$geom$block_to_coords_$_iter__13860_$_iter__13864(cljs.core.chunk_rest(s__13865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13867),null);
}
} else {
var y__$1 = cljs.core.first(s__13865__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__13860_$_iter__13864(cljs.core.rest(s__13865__$2)));
}
} else {
return null;
}
break;
}
});})(i__13862,x__$1,c__5521__auto__,size__5522__auto__,b__13863,s__13861__$2,temp__5804__auto__,xr,yr,vec__13857,x,y,w,h))
,null,null));
});})(i__13862,x__$1,c__5521__auto__,size__5522__auto__,b__13863,s__13861__$2,temp__5804__auto__,xr,yr,vec__13857,x,y,w,h))
;
return iter__5523__auto__(yr);
})());

var G__14013 = (i__13862 + (1));
i__13862 = G__14013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13863),reddonkey$geom$block_to_coords_$_iter__13860(cljs.core.chunk_rest(s__13861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13863),null);
}
} else {
var x__$1 = cljs.core.first(s__13861__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x__$1,s__13861__$2,temp__5804__auto__,xr,yr,vec__13857,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__13860_$_iter__13868(s__13869){
return (new cljs.core.LazySeq(null,(function (){
var s__13869__$1 = s__13869;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13869__$1);
if(temp__5804__auto____$1){
var s__13869__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13869__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13869__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13871 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13870 = (0);
while(true){
if((i__13870 < size__5522__auto__)){
var y__$1 = cljs.core._nth(c__5521__auto__,i__13870);
cljs.core.chunk_append(b__13871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__14014 = (i__13870 + (1));
i__13870 = G__14014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13871),reddonkey$geom$block_to_coords_$_iter__13860_$_iter__13868(cljs.core.chunk_rest(s__13869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13871),null);
}
} else {
var y__$1 = cljs.core.first(s__13869__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__13860_$_iter__13868(cljs.core.rest(s__13869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x__$1,s__13861__$2,temp__5804__auto__,xr,yr,vec__13857,x,y,w,h))
;
return iter__5523__auto__(yr);
})(),reddonkey$geom$block_to_coords_$_iter__13860(cljs.core.rest(s__13861__$2)));
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
reddonkey.geom.set_zeros = (function reddonkey$geom$set_zeros(board,p__13872){
var vec__13873 = p__13872;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13873,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__13876){
var vec__13877 = p__13876;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13877,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13877,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,(0)));
}),board,coords);
return new_board;
});
reddonkey.geom.assign_block = (function reddonkey$geom$assign_block(board,n,p__13880){
var vec__13881 = p__13880;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__13884){
var vec__13885 = p__13884;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13885,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13885,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,n));
}),board,coords);
return new_board;
});
reddonkey.geom.contains_zero_QMARK_ = (function reddonkey$geom$contains_zero_QMARK_(p__13888,p__13889){
var vec__13890 = p__13888;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(3),null);
var vec__13893 = p__13889;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13893,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13893,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__13896){
var vec__13897 = p__13896;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13897,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13897,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y),x,(0)));
}),board,zeros);
});
reddonkey.geom.moved_zeros = (function reddonkey$geom$moved_zeros(d,p__13900,zeros){
var vec__13901 = p__13900;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13901,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13901,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13901,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13901,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__13904(s__13905){
return (new cljs.core.LazySeq(null,(function (){
var s__13905__$1 = s__13905;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13905__$1);
if(temp__5804__auto__){
var s__13905__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13905__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13905__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13907 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13906 = (0);
while(true){
if((i__13906 < size__5522__auto__)){
var vec__13908 = cljs.core._nth(c__5521__auto__,i__13906);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13908,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13908,(1),null);
cljs.core.chunk_append(b__13907,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__14026 = (i__13906 + (1));
i__13906 = G__14026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),reddonkey$geom$moved_zeros_$_iter__13904(cljs.core.chunk_rest(s__13905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),null);
}
} else {
var vec__13911 = cljs.core.first(s__13905__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__13904(cljs.core.rest(s__13905__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__13914(s__13915){
return (new cljs.core.LazySeq(null,(function (){
var s__13915__$1 = s__13915;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13915__$1);
if(temp__5804__auto__){
var s__13915__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13915__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13915__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13917 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13916 = (0);
while(true){
if((i__13916 < size__5522__auto__)){
var vec__13918 = cljs.core._nth(c__5521__auto__,i__13916);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13918,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13918,(1),null);
cljs.core.chunk_append(b__13917,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__14027 = (i__13916 + (1));
i__13916 = G__14027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13917),reddonkey$geom$moved_zeros_$_iter__13914(cljs.core.chunk_rest(s__13915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13917),null);
}
} else {
var vec__13921 = cljs.core.first(s__13915__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__13914(cljs.core.rest(s__13915__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__13924(s__13925){
return (new cljs.core.LazySeq(null,(function (){
var s__13925__$1 = s__13925;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13925__$1);
if(temp__5804__auto__){
var s__13925__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13925__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13925__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13927 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13926 = (0);
while(true){
if((i__13926 < size__5522__auto__)){
var vec__13928 = cljs.core._nth(c__5521__auto__,i__13926);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13928,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13928,(1),null);
cljs.core.chunk_append(b__13927,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__14028 = (i__13926 + (1));
i__13926 = G__14028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13927),reddonkey$geom$moved_zeros_$_iter__13924(cljs.core.chunk_rest(s__13925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13927),null);
}
} else {
var vec__13931 = cljs.core.first(s__13925__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__13924(cljs.core.rest(s__13925__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__13934(s__13935){
return (new cljs.core.LazySeq(null,(function (){
var s__13935__$1 = s__13935;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13935__$1);
if(temp__5804__auto__){
var s__13935__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13935__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13935__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13937 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13936 = (0);
while(true){
if((i__13936 < size__5522__auto__)){
var vec__13938 = cljs.core._nth(c__5521__auto__,i__13936);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13938,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13938,(1),null);
cljs.core.chunk_append(b__13937,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__14029 = (i__13936 + (1));
i__13936 = G__14029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13937),reddonkey$geom$moved_zeros_$_iter__13934(cljs.core.chunk_rest(s__13935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13937),null);
}
} else {
var vec__13941 = cljs.core.first(s__13935__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13941,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13941,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__13934(cljs.core.rest(s__13935__$2)));
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
reddonkey.geom.apply_move = (function reddonkey$geom$apply_move(p__13944,p__13945){
var map__13946 = p__13944;
var map__13946__$1 = cljs.core.__destructure_map(map__13946);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__13947 = p__13945;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13947,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13947,(1),null);
var vec__13950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,n);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):null))));
var new_blocks = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(blocks,n,new_block);
var new_zeros = reddonkey.geom.moved_zeros(d,new_block,zero);
var new_board = reddonkey.geom.assign_block(reddonkey.geom.assign_zeros(board,new_zeros),n,new_block);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),new_zeros,new cljs.core.Keyword(null,"blocks","blocks",-610462153),new_blocks], null);
});
reddonkey.geom.fits_zero_QMARK_ = (function reddonkey$geom$fits_zero_QMARK_(n,d,p__13953,board){
var vec__13954 = p__13953;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13954,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13954,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13954,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13954,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):null))));
var assigned_board = reddonkey.geom.assign_block(reddonkey.geom.set_zeros(board,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),n,new_block);
var non_zero = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x__$1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0));
}),cljs.core.flatten(assigned_board));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_zero),(18));
});
reddonkey.geom.next_moves = (function reddonkey$geom$next_moves(p__13957){
var map__13958 = p__13957;
var map__13958__$1 = cljs.core.__destructure_map(map__13958);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13958__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13958__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13958__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__13959 = zero;
var vec__13962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13959,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13962,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13962,(1),null);
var vec__13965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13959,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13965,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13965,(1),null);
var moves1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 - (1))], null)], null);
var moves2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 - (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 - (1))], null)], null);
var allowed_moves1 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__13968(s__13969){
return (new cljs.core.LazySeq(null,(function (){
var s__13969__$1 = s__13969;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13969__$1);
if(temp__5804__auto__){
var s__13969__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13969__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13969__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13971 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13970 = (0);
while(true){
if((i__13970 < size__5522__auto__)){
var vec__13972 = cljs.core._nth(c__5521__auto__,i__13970);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13972,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13972,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__13971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__14030 = (i__13970 + (1));
i__13970 = G__14030;
continue;
} else {
var G__14031 = (i__13970 + (1));
i__13970 = G__14031;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13971),reddonkey$geom$next_moves_$_iter__13968(cljs.core.chunk_rest(s__13969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13971),null);
}
} else {
var vec__13975 = cljs.core.first(s__13969__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13975,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13975,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__13968(cljs.core.rest(s__13969__$2)));
} else {
var G__14032 = cljs.core.rest(s__13969__$2);
s__13969__$1 = G__14032;
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
var allowed_moves2 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__13978(s__13979){
return (new cljs.core.LazySeq(null,(function (){
var s__13979__$1 = s__13979;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13979__$1);
if(temp__5804__auto__){
var s__13979__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13979__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13979__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13981 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13980 = (0);
while(true){
if((i__13980 < size__5522__auto__)){
var vec__13982 = cljs.core._nth(c__5521__auto__,i__13980);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13982,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13982,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__13981,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__14033 = (i__13980 + (1));
i__13980 = G__14033;
continue;
} else {
var G__14034 = (i__13980 + (1));
i__13980 = G__14034;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13981),reddonkey$geom$next_moves_$_iter__13978(cljs.core.chunk_rest(s__13979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13981),null);
}
} else {
var vec__13985 = cljs.core.first(s__13979__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13985,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13985,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__13978(cljs.core.rest(s__13979__$2)));
} else {
var G__14035 = cljs.core.rest(s__13979__$2);
s__13979__$1 = G__14035;
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
var allowed_without_zero1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13988){
var vec__13989 = p__13988;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13989,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13989,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves1);
var allowed_without_zero2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13992){
var vec__13993 = p__13992;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves2);
var actions1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13996){
var vec__13997 = p__13996;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13997,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13997,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero1);
var actions2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14000){
var vec__14001 = p__14000;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero2);
var actions_fit1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__14004){
var vec__14005 = p__14004;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14005,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14005,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions1);
var actions_fit2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__14008){
var vec__14009 = p__14008;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14009,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14009,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions2);
return cljs.core.vec(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actions_fit1,actions_fit2)));
});

//# sourceMappingURL=reddonkey.geom.js.map
