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
reddonkey.views.in_rectangle_QMARK_ = (function reddonkey$views$in_rectangle_QMARK_(x,y,p__16184){
var vec__16185 = p__16184;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(3),null);
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
var xs = cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$views$find_rect_style_$_iter__16188(s__16189){
return (new cljs.core.LazySeq(null,(function (){
var s__16189__$1 = s__16189;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16189__$1);
if(temp__5804__auto__){
var s__16189__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16189__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16189__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16191 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16190 = (0);
while(true){
if((i__16190 < size__5522__auto__)){
var vec__16192 = cljs.core._nth(c__5521__auto__,i__16190);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
cljs.core.chunk_append(b__16191,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null));

var G__16261 = (i__16190 + (1));
i__16190 = G__16261;
continue;
} else {
var G__16262 = (i__16190 + (1));
i__16190 = G__16262;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16191),reddonkey$views$find_rect_style_$_iter__16188(cljs.core.chunk_rest(s__16189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16191),null);
}
} else {
var vec__16195 = cljs.core.first(s__16189__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16195,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16195,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16195,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16195,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null),reddonkey$views$find_rect_style_$_iter__16188(cljs.core.rest(s__16189__$2)));
} else {
var G__16263 = cljs.core.rest(s__16189__$2);
s__16189__$1 = G__16263;
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
var vec__16198 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(0),(0)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",false,(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,i)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,j))),w,h], null);
}
});
reddonkey.views.move_to_str = (function reddonkey$views$move_to_str(p__16201){
var vec__16202 = p__16201;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(1),null);
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
reddonkey.views.diff_to_action = (function reddonkey$views$diff_to_action(p__16205){
var vec__16206 = p__16205;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(1),null);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__16209(s__16210){
return (new cljs.core.LazySeq(null,(function (){
var s__16210__$1 = s__16210;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16210__$1);
if(temp__5804__auto__){
var s__16210__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16210__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16210__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16212 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16211 = (0);
while(true){
if((i__16211 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__16211);
cljs.core.chunk_append(b__16212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (i__16211,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__16209_$_iter__16213(s__16214){
return (new cljs.core.LazySeq(null,((function (i__16211,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves){
return (function (){
var s__16214__$1 = s__16214;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16214__$1);
if(temp__5804__auto____$1){
var s__16214__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16214__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__16214__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__16216 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__16215 = (0);
while(true){
if((i__16215 < size__5522__auto____$1)){
var i = cljs.core._nth(c__5521__auto____$1,i__16215);
cljs.core.chunk_append(b__16216,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__16217 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__16215,i__16211,s,vec__16217,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__16216,s__16214__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__16220 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(3),null);
var m = (n | (0));
var vec__16223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16223,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16223,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16223,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16223,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$2(corner__$1,re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null)));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__16215,i__16211,s,vec__16217,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__16216,s__16214__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})());

var G__16264 = (i__16215 + (1));
i__16215 = G__16264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16216),reddonkey$views$game_board_$_iter__16209_$_iter__16213(cljs.core.chunk_rest(s__16214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16216),null);
}
} else {
var i = cljs.core.first(s__16214__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__16226 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__16211,s,vec__16226,x,corner,w,h,i,s__16214__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__16229 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16229,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16229,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16229,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16229,(3),null);
var m = (n | (0));
var vec__16232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$2(corner__$1,re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null)));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__16211,s,vec__16226,x,corner,w,h,i,s__16214__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})(),reddonkey$views$game_board_$_iter__16209_$_iter__16213(cljs.core.rest(s__16214__$2)));
}
} else {
return null;
}
break;
}
});})(i__16211,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves))
,null,null));
});})(i__16211,j,c__5521__auto__,size__5522__auto__,b__16212,s__16210__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null));

var G__16265 = (i__16211 + (1));
i__16211 = G__16265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16212),reddonkey$views$game_board_$_iter__16209(cljs.core.chunk_rest(s__16210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16212),null);
}
} else {
var j = cljs.core.first(s__16210__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (j,s__16210__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__16209_$_iter__16235(s__16236){
return (new cljs.core.LazySeq(null,(function (){
var s__16236__$1 = s__16236;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16236__$1);
if(temp__5804__auto____$1){
var s__16236__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16236__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16236__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16238 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16237 = (0);
while(true){
if((i__16237 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__16237);
cljs.core.chunk_append(b__16238,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__16239 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__16237,s,vec__16239,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__16238,s__16236__$2,temp__5804__auto____$1,j,s__16210__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__16242 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16242,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16242,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16242,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16242,(3),null);
var m = (n | (0));
var vec__16245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16245,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16245,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16245,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16245,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$2(corner__$1,re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null)));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__16237,s,vec__16239,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__16238,s__16236__$2,temp__5804__auto____$1,j,s__16210__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})());

var G__16266 = (i__16237 + (1));
i__16237 = G__16266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16238),reddonkey$views$game_board_$_iter__16209_$_iter__16235(cljs.core.chunk_rest(s__16236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16238),null);
}
} else {
var i = cljs.core.first(s__16236__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__16248 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (s,vec__16248,x,corner,w,h,i,s__16236__$2,temp__5804__auto____$1,j,s__16210__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__16251 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(3),null);
var m = (n | (0));
var vec__16254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(3),null);
var diff = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var a__$1 = reddonkey.views.diff_to_action(diff);
new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$2(corner__$1,re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null)));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(s,vec__16248,x,corner,w,h,i,s__16236__$2,temp__5804__auto____$1,j,s__16210__$2,temp__5804__auto__,state,next_moves))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null)], null);
}
})(),reddonkey$views$game_board_$_iter__16209_$_iter__16235(cljs.core.rest(s__16236__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__16210__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),reddonkey$views$game_board_$_iter__16209(cljs.core.rest(s__16210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"next moves ",(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__16257(s__16258){
return (new cljs.core.LazySeq(null,(function (){
var s__16258__$1 = s__16258;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16258__$1);
if(temp__5804__auto__){
var s__16258__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16258__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16258__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16260 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16259 = (0);
while(true){
if((i__16259 < size__5522__auto__)){
var move = cljs.core._nth(c__5521__auto__,i__16259);
cljs.core.chunk_append(b__16260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16259,move,c__5521__auto__,size__5522__auto__,b__16260,s__16258__$2,temp__5804__auto__,state,next_moves){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),move], null));
});})(i__16259,move,c__5521__auto__,size__5522__auto__,b__16260,s__16258__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reddonkey.views.move_to_str(move))], null)], null));

var G__16267 = (i__16259 + (1));
i__16259 = G__16267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16260),reddonkey$views$game_board_$_iter__16257(cljs.core.chunk_rest(s__16258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16260),null);
}
} else {
var move = cljs.core.first(s__16258__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (move,s__16258__$2,temp__5804__auto__,state,next_moves){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),move], null));
});})(move,s__16258__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reddonkey.views.move_to_str(move))], null)], null),reddonkey$views$game_board_$_iter__16257(cljs.core.rest(s__16258__$2)));
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
