goog.provide('reddonkey.views');
reddonkey.views.dispatch_keydown_rules = (function reddonkey$views$dispatch_keydown_rules(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","set-re-pressed-example","reddonkey.events/set-re-pressed-example",-1951682082),"Hello, world!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(72)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(69)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(79)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
});
/**
 * Returns a predicate that tests if its argument falls in
 *   the inclusive interval [a, b].
 */
reddonkey.views.in_interval_QMARK_ = (function reddonkey$views$in_interval_QMARK_(a,b){
return (function (x){
return (((x >= a)) && ((x <= b)));
});
});
reddonkey.views.in_rectangle_QMARK_ = (function reddonkey$views$in_rectangle_QMARK_(x,y,p__12652){
var vec__12653 = p__12652;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653,(3),null);
var and__5043__auto__ = reddonkey.views.in_interval_QMARK_(a,(a + w))(x);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = reddonkey.views.in_interval_QMARK_(a,(a + w))((x + (1)));
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = reddonkey.views.in_interval_QMARK_(b,(b + h))(y);
if(cljs.core.truth_(and__5043__auto____$2)){
return reddonkey.views.in_interval_QMARK_(b,(b + h))((y + (1)));
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
reddonkey.views.find_rect_style = (function reddonkey$views$find_rect_style(x,y,blocks){
var xs = cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$views$find_rect_style_$_iter__12656(s__12657){
return (new cljs.core.LazySeq(null,(function (){
var s__12657__$1 = s__12657;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12657__$1);
if(temp__5804__auto__){
var s__12657__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12657__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12657__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12659 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12658 = (0);
while(true){
if((i__12658 < size__5522__auto__)){
var vec__12660 = cljs.core._nth(c__5521__auto__,i__12658);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
cljs.core.chunk_append(b__12659,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null));

var G__12729 = (i__12658 + (1));
i__12658 = G__12729;
continue;
} else {
var G__12730 = (i__12658 + (1));
i__12658 = G__12730;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12659),reddonkey$views$find_rect_style_$_iter__12656(cljs.core.chunk_rest(s__12657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12659),null);
}
} else {
var vec__12663 = cljs.core.first(s__12657__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null),reddonkey$views$find_rect_style_$_iter__12656(cljs.core.rest(s__12657__$2)));
} else {
var G__12731 = cljs.core.rest(s__12657__$2);
s__12657__$1 = G__12731;
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
return iter__5523__auto__(blocks);
})());
if(cljs.core.seq(xs)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,(0));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
reddonkey.views.cond_to_style = (function reddonkey$views$cond_to_style(borders){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"white",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
});
reddonkey.views.blocks = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1),(1)], null)]);
reddonkey.views.board = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(5),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7),(8),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(0),(0),(10)], null)], null);
reddonkey.views.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),reddonkey.views.board,new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.views.blocks], null);
reddonkey.views.get_cell_symbol = (function reddonkey$views$get_cell_symbol(i,j,state){
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),j),i);
var vec__12666 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(0),(0)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12666,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",false,(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,i)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,j))),w,h], null);
}
});
reddonkey.views.move_to_str = (function reddonkey$views$move_to_str(p__12669){
var vec__12670 = p__12669;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"->"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-10))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<-"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"down"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"up"], null);
} else {
return null;
}
}
}
}
});
reddonkey.views.diff_to_action = (function reddonkey$views$diff_to_action(p__12673){
var vec__12674 = p__12673;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12674,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12674,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))){
return (10);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))){
return (10);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))){
return (-10);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null))){
return (-10);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null))){
return (-1);
} else {
return null;
}
}
}
}
}
}
}
}
});
reddonkey.views.game_board = (function reddonkey$views$game_board(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","state","reddonkey.subs/state",484656929)], null));
var next_moves = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","next-moves","reddonkey.subs/next-moves",1137084087)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__12677(s__12678){
return (new cljs.core.LazySeq(null,(function (){
var s__12678__$1 = s__12678;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12678__$1);
if(temp__5804__auto__){
var s__12678__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12678__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12678__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12680 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12679 = (0);
while(true){
if((i__12679 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__12679);
cljs.core.chunk_append(b__12680,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (i__12679,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__12677_$_iter__12681(s__12682){
return (new cljs.core.LazySeq(null,((function (i__12679,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves){
return (function (){
var s__12682__$1 = s__12682;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12682__$1);
if(temp__5804__auto____$1){
var s__12682__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12682__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__12682__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__12684 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__12683 = (0);
while(true){
if((i__12683 < size__5522__auto____$1)){
var i = cljs.core._nth(c__5521__auto____$1,i__12683);
cljs.core.chunk_append(b__12684,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12685 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12683,i__12679,s,vec__12685,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12684,s__12682__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12688 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(3),null);
var m = (n | (0));
var vec__12691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12691,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12691,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12691,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12691,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__12683,i__12679,s,vec__12685,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12684,s__12682__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})());

var G__12732 = (i__12683 + (1));
i__12683 = G__12732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12684),reddonkey$views$game_board_$_iter__12677_$_iter__12681(cljs.core.chunk_rest(s__12682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12684),null);
}
} else {
var i = cljs.core.first(s__12682__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12694 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12679,s,vec__12694,x,corner,w,h,i,s__12682__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12697 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697,(3),null);
var m = (n | (0));
var vec__12700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12700,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12700,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12700,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12700,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__12679,s,vec__12694,x,corner,w,h,i,s__12682__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})(),reddonkey$views$game_board_$_iter__12677_$_iter__12681(cljs.core.rest(s__12682__$2)));
}
} else {
return null;
}
break;
}
});})(i__12679,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves))
,null,null));
});})(i__12679,j,c__5521__auto__,size__5522__auto__,b__12680,s__12678__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null));

var G__12733 = (i__12679 + (1));
i__12679 = G__12733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12680),reddonkey$views$game_board_$_iter__12677(cljs.core.chunk_rest(s__12678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12680),null);
}
} else {
var j = cljs.core.first(s__12678__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (j,s__12678__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__12677_$_iter__12703(s__12704){
return (new cljs.core.LazySeq(null,(function (){
var s__12704__$1 = s__12704;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12704__$1);
if(temp__5804__auto____$1){
var s__12704__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12704__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12704__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12706 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12705 = (0);
while(true){
if((i__12705 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__12705);
cljs.core.chunk_append(b__12706,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12707 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12705,s,vec__12707,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12706,s__12704__$2,temp__5804__auto____$1,j,s__12678__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12710 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12710,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12710,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12710,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12710,(3),null);
var m = (n | (0));
var vec__12713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__12705,s,vec__12707,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12706,s__12704__$2,temp__5804__auto____$1,j,s__12678__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})());

var G__12734 = (i__12705 + (1));
i__12705 = G__12734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12706),reddonkey$views$game_board_$_iter__12677_$_iter__12703(cljs.core.chunk_rest(s__12704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12706),null);
}
} else {
var i = cljs.core.first(s__12704__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12716 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (s,vec__12716,x,corner,w,h,i,s__12704__$2,temp__5804__auto____$1,j,s__12678__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12719 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(3),null);
var m = (n | (0));
var vec__12722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(s,vec__12716,x,corner,w,h,i,s__12704__$2,temp__5804__auto____$1,j,s__12678__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})(),reddonkey$views$game_board_$_iter__12677_$_iter__12703(cljs.core.rest(s__12704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__12678__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),reddonkey$views$game_board_$_iter__12677(cljs.core.rest(s__12678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"next moves ",(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__12725(s__12726){
return (new cljs.core.LazySeq(null,(function (){
var s__12726__$1 = s__12726;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12726__$1);
if(temp__5804__auto__){
var s__12726__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12726__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12726__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12728 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12727 = (0);
while(true){
if((i__12727 < size__5522__auto__)){
var move = cljs.core._nth(c__5521__auto__,i__12727);
cljs.core.chunk_append(b__12728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12727,move,c__5521__auto__,size__5522__auto__,b__12728,s__12726__$2,temp__5804__auto__,state,next_moves){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),move], null));
});})(i__12727,move,c__5521__auto__,size__5522__auto__,b__12728,s__12726__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reddonkey.views.move_to_str(move))], null)], null));

var G__12735 = (i__12727 + (1));
i__12727 = G__12735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12728),reddonkey$views$game_board_$_iter__12725(cljs.core.chunk_rest(s__12726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12728),null);
}
} else {
var move = cljs.core.first(s__12726__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (move,s__12726__$2,temp__5804__auto__,state,next_moves){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),move], null));
});})(move,s__12726__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reddonkey.views.move_to_str(move))], null)], null),reddonkey$views$game_board_$_iter__12725(cljs.core.rest(s__12726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(next_moves));
})()], null)], null);
});
reddonkey.views.display_re_pressed_example = (function reddonkey$views$display_re_pressed_example(){
var re_pressed_example = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","re-pressed-example","reddonkey.subs/re-pressed-example",-1011523062)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Re-pressed is listening for keydown events. However, re-pressed\n      won't trigger any events until you set some keydown rules."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),reddonkey.views.dispatch_keydown_rules], null),"set keydown rules"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After clicking the button, you will have defined a rule that\n       will display a message when you type "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"hello"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),". So go ahead, try it out!"], null)], null),(function (){var temp__5804__auto__ = cljs.core.deref(re_pressed_example);
if(cljs.core.truth_(temp__5804__auto__)){
var rpe = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgrey",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px grey",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"16px"], null)], null),rpe], null);
} else {
return null;
}
})()], null);
});
reddonkey.views.main_panel = (function reddonkey$views$main_panel(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","state","reddonkey.subs/state",484656929)], null));
var next_moves = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","next-moves","reddonkey.subs/next-moves",1137084087)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Red Donkey"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddonkey.views.game_board], null)], null)], null);
});

//# sourceMappingURL=reddonkey.views.js.map
