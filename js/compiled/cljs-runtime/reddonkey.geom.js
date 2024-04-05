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
reddonkey.geom.diff_to_action = (function reddonkey$geom$diff_to_action(p__15771){
var vec__15775 = p__15771;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775,(1),null);
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
reddonkey.geom.block_to_coords = (function reddonkey$geom$block_to_coords(p__15779){
var vec__15783 = p__15779;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15783,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15783,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15783,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15783,(3),null);
var xr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + w));
var yr = cljs.core.range.cljs$core$IFn$_invoke$arity$2(y,(y + h));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function reddonkey$geom$block_to_coords_$_iter__15790(s__15791){
return (new cljs.core.LazySeq(null,(function (){
var s__15791__$1 = s__15791;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15791__$1);
if(temp__5804__auto__){
var s__15791__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15791__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15791__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15793 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15792 = (0);
while(true){
if((i__15792 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__15792);
cljs.core.chunk_append(b__15793,(function (){var iter__5523__auto__ = ((function (i__15792,x__$1,c__5521__auto__,size__5522__auto__,b__15793,s__15791__$2,temp__5804__auto__,xr,yr,vec__15783,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__15790_$_iter__15798(s__15799){
return (new cljs.core.LazySeq(null,((function (i__15792,x__$1,c__5521__auto__,size__5522__auto__,b__15793,s__15791__$2,temp__5804__auto__,xr,yr,vec__15783,x,y,w,h){
return (function (){
var s__15799__$1 = s__15799;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15799__$1);
if(temp__5804__auto____$1){
var s__15799__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15799__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__15799__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__15801 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__15800 = (0);
while(true){
if((i__15800 < size__5522__auto____$1)){
var y__$1 = cljs.core._nth(c__5521__auto____$1,i__15800);
cljs.core.chunk_append(b__15801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__16034 = (i__15800 + (1));
i__15800 = G__16034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15801),reddonkey$geom$block_to_coords_$_iter__15790_$_iter__15798(cljs.core.chunk_rest(s__15799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15801),null);
}
} else {
var y__$1 = cljs.core.first(s__15799__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__15790_$_iter__15798(cljs.core.rest(s__15799__$2)));
}
} else {
return null;
}
break;
}
});})(i__15792,x__$1,c__5521__auto__,size__5522__auto__,b__15793,s__15791__$2,temp__5804__auto__,xr,yr,vec__15783,x,y,w,h))
,null,null));
});})(i__15792,x__$1,c__5521__auto__,size__5522__auto__,b__15793,s__15791__$2,temp__5804__auto__,xr,yr,vec__15783,x,y,w,h))
;
return iter__5523__auto__(yr);
})());

var G__16035 = (i__15792 + (1));
i__15792 = G__16035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15793),reddonkey$geom$block_to_coords_$_iter__15790(cljs.core.chunk_rest(s__15791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15793),null);
}
} else {
var x__$1 = cljs.core.first(s__15791__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x__$1,s__15791__$2,temp__5804__auto__,xr,yr,vec__15783,x,y,w,h){
return (function reddonkey$geom$block_to_coords_$_iter__15790_$_iter__15806(s__15807){
return (new cljs.core.LazySeq(null,(function (){
var s__15807__$1 = s__15807;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15807__$1);
if(temp__5804__auto____$1){
var s__15807__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15807__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15807__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15809 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15808 = (0);
while(true){
if((i__15808 < size__5522__auto__)){
var y__$1 = cljs.core._nth(c__5521__auto__,i__15808);
cljs.core.chunk_append(b__15809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__16036 = (i__15808 + (1));
i__15808 = G__16036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15809),reddonkey$geom$block_to_coords_$_iter__15790_$_iter__15806(cljs.core.chunk_rest(s__15807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15809),null);
}
} else {
var y__$1 = cljs.core.first(s__15807__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),reddonkey$geom$block_to_coords_$_iter__15790_$_iter__15806(cljs.core.rest(s__15807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x__$1,s__15791__$2,temp__5804__auto__,xr,yr,vec__15783,x,y,w,h))
;
return iter__5523__auto__(yr);
})(),reddonkey$geom$block_to_coords_$_iter__15790(cljs.core.rest(s__15791__$2)));
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
reddonkey.geom.set_zeros = (function reddonkey$geom$set_zeros(board,p__15818){
var vec__15819 = p__15818;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15819,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15819,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15819,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15819,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__15822){
var vec__15823 = p__15822;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15823,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15823,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,(0)));
}),board,coords);
return new_board;
});
reddonkey.geom.assign_block = (function reddonkey$geom$assign_block(board,n,p__15834){
var vec__15835 = p__15834;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15835,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15835,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15835,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15835,(3),null);
var coords = reddonkey.geom.block_to_coords(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null));
var new_board = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__15838){
var vec__15839 = p__15838;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y__$1),x__$1,n));
}),board,coords);
return new_board;
});
reddonkey.geom.contains_zero_QMARK_ = (function reddonkey$geom$contains_zero_QMARK_(p__15846,p__15847){
var vec__15848 = p__15846;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(3),null);
var vec__15851 = p__15847;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,p__15856){
var vec__15857 = p__15856;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15857,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15857,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,y,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y),x,(0)));
}),board,zeros);
});
reddonkey.geom.moved_zeros = (function reddonkey$geom$moved_zeros(d,p__15873,zeros){
var vec__15874 = p__15873;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__15877(s__15878){
return (new cljs.core.LazySeq(null,(function (){
var s__15878__$1 = s__15878;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15878__$1);
if(temp__5804__auto__){
var s__15878__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15878__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15878__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15880 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15879 = (0);
while(true){
if((i__15879 < size__5522__auto__)){
var vec__15884 = cljs.core._nth(c__5521__auto__,i__15879);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(1),null);
cljs.core.chunk_append(b__15880,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__16037 = (i__15879 + (1));
i__15879 = G__16037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15880),reddonkey$geom$moved_zeros_$_iter__15877(cljs.core.chunk_rest(s__15878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15880),null);
}
} else {
var vec__15890 = cljs.core.first(s__15878__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15890,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15890,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__15877(cljs.core.rest(s__15878__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__15897(s__15898){
return (new cljs.core.LazySeq(null,(function (){
var s__15898__$1 = s__15898;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15898__$1);
if(temp__5804__auto__){
var s__15898__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15898__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15898__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15900 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15899 = (0);
while(true){
if((i__15899 < size__5522__auto__)){
var vec__15904 = cljs.core._nth(c__5521__auto__,i__15899);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15904,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15904,(1),null);
cljs.core.chunk_append(b__15900,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__16038 = (i__15899 + (1));
i__15899 = G__16038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15900),reddonkey$geom$moved_zeros_$_iter__15897(cljs.core.chunk_rest(s__15898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15900),null);
}
} else {
var vec__15910 = cljs.core.first(s__15898__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15910,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15910,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w),y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__15897(cljs.core.rest(s__15898__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__15913(s__15914){
return (new cljs.core.LazySeq(null,(function (){
var s__15914__$1 = s__15914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15914__$1);
if(temp__5804__auto__){
var s__15914__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15914__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15914__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15916 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15915 = (0);
while(true){
if((i__15915 < size__5522__auto__)){
var vec__15921 = cljs.core._nth(c__5521__auto__,i__15915);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15921,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15921,(1),null);
cljs.core.chunk_append(b__15916,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__16039 = (i__15915 + (1));
i__15915 = G__16039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15916),reddonkey$geom$moved_zeros_$_iter__15913(cljs.core.chunk_rest(s__15914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15916),null);
}
} else {
var vec__15928 = cljs.core.first(s__15914__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15928,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15928,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__15913(cljs.core.rest(s__15914__$2)));
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$geom$moved_zeros_$_iter__15932(s__15933){
return (new cljs.core.LazySeq(null,(function (){
var s__15933__$1 = s__15933;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15933__$1);
if(temp__5804__auto__){
var s__15933__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15933__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15933__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15935 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15934 = (0);
while(true){
if((i__15934 < size__5522__auto__)){
var vec__15943 = cljs.core._nth(c__5521__auto__,i__15934);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15943,(1),null);
cljs.core.chunk_append(b__15935,(cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__16040 = (i__15934 + (1));
i__15934 = G__16040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15935),reddonkey$geom$moved_zeros_$_iter__15932(cljs.core.chunk_rest(s__15933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15935),null);
}
} else {
var vec__15950 = cljs.core.first(s__15933__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15950,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15950,(1),null);
return cljs.core.cons((cljs.core.truth_(reddonkey.geom.contains_zero_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),reddonkey$geom$moved_zeros_$_iter__15932(cljs.core.rest(s__15933__$2)));
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
reddonkey.geom.apply_move = (function reddonkey$geom$apply_move(p__15960,p__15961){
var map__15962 = p__15960;
var map__15962__$1 = cljs.core.__destructure_map(map__15962);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15962__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15962__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15962__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__15963 = p__15961;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15963,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15963,(1),null);
var vec__15966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,n);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15966,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15966,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15966,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15966,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):null))));
var new_blocks = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(blocks,n,new_block);
var new_zeros = reddonkey.geom.moved_zeros(d,new_block,zero);
var new_board = reddonkey.geom.assign_block(reddonkey.geom.assign_zeros(board,new_zeros),n,new_block);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"zero","zero",-858964576),new_zeros,new cljs.core.Keyword(null,"blocks","blocks",-610462153),new_blocks], null);
});
reddonkey.geom.fits_zero_QMARK_ = (function reddonkey$geom$fits_zero_QMARK_(n,d,p__15969,board){
var vec__15970 = p__15969;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(3),null);
var new_block = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,w,h], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,w,h], null):null))));
var assigned_board = reddonkey.geom.assign_block(reddonkey.geom.set_zeros(board,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),n,new_block);
var non_zero = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x__$1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0));
}),cljs.core.flatten(assigned_board));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_zero),(18));
});
reddonkey.geom.next_moves = (function reddonkey$geom$next_moves(p__15979){
var map__15980 = p__15979;
var map__15980__$1 = cljs.core.__destructure_map(map__15980);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15980__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var zero = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15980__$1,new cljs.core.Keyword(null,"zero","zero",-858964576));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15980__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var vec__15981 = zero;
var vec__15984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15984,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15984,(1),null);
var vec__15987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(1),null);
var moves1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - (1)),y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,(y1 - (1))], null)], null);
var moves2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 + (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x2 - (1)),y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,(y2 - (1))], null)], null);
var allowed_moves1 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__15990(s__15991){
return (new cljs.core.LazySeq(null,(function (){
var s__15991__$1 = s__15991;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15991__$1);
if(temp__5804__auto__){
var s__15991__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15991__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15991__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15993 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15992 = (0);
while(true){
if((i__15992 < size__5522__auto__)){
var vec__15994 = cljs.core._nth(c__5521__auto__,i__15992);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__15993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__16048 = (i__15992 + (1));
i__15992 = G__16048;
continue;
} else {
var G__16049 = (i__15992 + (1));
i__15992 = G__16049;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15993),reddonkey$geom$next_moves_$_iter__15990(cljs.core.chunk_rest(s__15991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15993),null);
}
} else {
var vec__15997 = cljs.core.first(s__15991__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__15990(cljs.core.rest(s__15991__$2)));
} else {
var G__16050 = cljs.core.rest(s__15991__$2);
s__15991__$1 = G__16050;
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
var allowed_moves2 = (function (){var iter__5523__auto__ = (function reddonkey$geom$next_moves_$_iter__16000(s__16001){
return (new cljs.core.LazySeq(null,(function (){
var s__16001__$1 = s__16001;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16001__$1);
if(temp__5804__auto__){
var s__16001__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16001__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16001__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16003 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16002 = (0);
while(true){
if((i__16002 < size__5522__auto__)){
var vec__16004 = cljs.core._nth(c__5521__auto__,i__16002);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__16003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));

var G__16051 = (i__16002 + (1));
i__16002 = G__16051;
continue;
} else {
var G__16052 = (i__16002 + (1));
i__16002 = G__16052;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16003),reddonkey$geom$next_moves_$_iter__16000(cljs.core.chunk_rest(s__16001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16003),null);
}
} else {
var vec__16007 = cljs.core.first(s__16001__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = reddonkey.geom.in_interval_QMARK_((0),(3))(a);
if(cljs.core.truth_(and__5043__auto__)){
return reddonkey.geom.in_interval_QMARK_((0),(4))(b);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),reddonkey$geom$next_moves_$_iter__16000(cljs.core.rest(s__16001__$2)));
} else {
var G__16057 = cljs.core.rest(s__16001__$2);
s__16001__$1 = G__16057;
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
var allowed_without_zero1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16010){
var vec__16011 = p__16010;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16011,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16011,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves1);
var allowed_without_zero2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16014){
var vec__16015 = p__16014;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16015,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16015,(1),null);
return (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y1)))))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y2)))))));
}),allowed_moves2);
var actions1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16018){
var vec__16019 = p__16018;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16019,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16019,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero1);
var actions2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16022){
var vec__16023 = p__16022;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16023,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16023,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,y),x),reddonkey.geom.diff_to_action(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null);
}),allowed_without_zero2);
var actions_fit1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16026){
var vec__16027 = p__16026;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16027,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16027,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions1);
var actions_fit2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16030){
var vec__16031 = p__16030;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16031,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16031,(1),null);
return reddonkey.geom.fits_zero_QMARK_(x,y,cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,x),board);
}),actions2);
return cljs.core.vec(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(actions_fit1,actions_fit2)));
});

//# sourceMappingURL=reddonkey.geom.js.map
