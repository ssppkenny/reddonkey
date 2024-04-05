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
reddonkey.views.in_rectangle_QMARK_ = (function reddonkey$views$in_rectangle_QMARK_(x,y,p__12400){
var vec__12401 = p__12400;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(3),null);
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
var xs = cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$views$find_rect_style_$_iter__12404(s__12405){
return (new cljs.core.LazySeq(null,(function (){
var s__12405__$1 = s__12405;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12405__$1);
if(temp__5804__auto__){
var s__12405__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12405__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12405__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12407 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12406 = (0);
while(true){
if((i__12406 < size__5522__auto__)){
var vec__12408 = cljs.core._nth(c__5521__auto__,i__12406);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
cljs.core.chunk_append(b__12407,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null));

var G__12481 = (i__12406 + (1));
i__12406 = G__12481;
continue;
} else {
var G__12482 = (i__12406 + (1));
i__12406 = G__12482;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12407),reddonkey$views$find_rect_style_$_iter__12404(cljs.core.chunk_rest(s__12405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12407),null);
}
} else {
var vec__12411 = cljs.core.first(s__12405__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null),reddonkey$views$find_rect_style_$_iter__12404(cljs.core.rest(s__12405__$2)));
} else {
var G__12483 = cljs.core.rest(s__12405__$2);
s__12405__$1 = G__12483;
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"-web-touch-callout","-web-touch-callout",-193173916),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["solid","none","white","50px","0px","white","grid","50px","0px"])], null);
});
reddonkey.views.blocks = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1),(1)], null)]);
reddonkey.views.board = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(5),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7),(8),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(0),(0),(10)], null)], null);
reddonkey.views.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),reddonkey.views.board,new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.views.blocks], null);
reddonkey.views.get_cell_symbol = (function reddonkey$views$get_cell_symbol(i,j,state){
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),j),i);
var vec__12414 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(0),(0)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",false,(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,i)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,j))),w,h], null);
}
});
reddonkey.views.move_to_str = (function reddonkey$views$move_to_str(p__12417){
var vec__12418 = p__12417;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(1),null);
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
reddonkey.views.diff_to_action = (function reddonkey$views$diff_to_action(p__12421){
var vec__12422 = p__12421;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12422,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12422,(1),null);
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
reddonkey.views.can_move_QMARK_ = (function reddonkey$views$can_move_QMARK_(state,i,j,next_moves){
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),j),i);
var lst = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12425){
var vec__12426 = p__12425;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12426,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12426,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,n);
}),next_moves);
return cljs.core.seq(lst);
});
reddonkey.views.game_board = (function reddonkey$views$game_board(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","state","reddonkey.subs/state",484656929)], null));
var next_moves = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","next-moves","reddonkey.subs/next-moves",1137084087)], null));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__12429(s__12430){
return (new cljs.core.LazySeq(null,(function (){
var s__12430__$1 = s__12430;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12430__$1);
if(temp__5804__auto__){
var s__12430__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12430__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12430__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12432 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12431 = (0);
while(true){
if((i__12431 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__12431);
cljs.core.chunk_append(b__12432,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (i__12431,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__12429_$_iter__12433(s__12434){
return (new cljs.core.LazySeq(null,((function (i__12431,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (){
var s__12434__$1 = s__12434;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12434__$1);
if(temp__5804__auto____$1){
var s__12434__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12434__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__12434__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__12436 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__12435 = (0);
while(true){
if((i__12435 < size__5522__auto____$1)){
var i = cljs.core._nth(c__5521__auto____$1,i__12435);
cljs.core.chunk_append(b__12436,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12437 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__12435,i__12431,s,vec__12437,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12436,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
return e.preventDefault();
});})(i__12435,i__12431,s,vec__12437,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12436,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12435,i__12431,s,vec__12437,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12436,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12440 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(3),null);
var m = (n | (0));
var vec__12443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__12435,i__12431,s,vec__12437,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12436,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})());

var G__12484 = (i__12435 + (1));
i__12435 = G__12484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12436),reddonkey$views$game_board_$_iter__12429_$_iter__12433(cljs.core.chunk_rest(s__12434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12436),null);
}
} else {
var i = cljs.core.first(s__12434__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12446 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__12431,s,vec__12446,x,corner,w,h,i,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
return e.preventDefault();
});})(i__12431,s,vec__12446,x,corner,w,h,i,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12431,s,vec__12446,x,corner,w,h,i,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12449 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12449,(3),null);
var m = (n | (0));
var vec__12452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__12431,s,vec__12446,x,corner,w,h,i,s__12434__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})(),reddonkey$views$game_board_$_iter__12429_$_iter__12433(cljs.core.rest(s__12434__$2)));
}
} else {
return null;
}
break;
}
});})(i__12431,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves))
,null,null));
});})(i__12431,j,c__5521__auto__,size__5522__auto__,b__12432,s__12430__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__12485 = (i__12431 + (1));
i__12431 = G__12485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12432),reddonkey$views$game_board_$_iter__12429(cljs.core.chunk_rest(s__12430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12432),null);
}
} else {
var j = cljs.core.first(s__12430__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (j,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__12429_$_iter__12455(s__12456){
return (new cljs.core.LazySeq(null,(function (){
var s__12456__$1 = s__12456;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12456__$1);
if(temp__5804__auto____$1){
var s__12456__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12456__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12456__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12458 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12457 = (0);
while(true){
if((i__12457 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__12457);
cljs.core.chunk_append(b__12458,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12459 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12459,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12459,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12459,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12459,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__12457,s,vec__12459,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12458,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
return e.preventDefault();
});})(i__12457,s,vec__12459,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12458,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12457,s,vec__12459,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12458,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12462 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12462,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12462,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12462,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12462,(3),null);
var m = (n | (0));
var vec__12465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(i__12457,s,vec__12459,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12458,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})());

var G__12486 = (i__12457 + (1));
i__12457 = G__12486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12458),reddonkey$views$game_board_$_iter__12429_$_iter__12455(cljs.core.chunk_rest(s__12456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12458),null);
}
} else {
var i = cljs.core.first(s__12456__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12468 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (s,vec__12468,x,corner,w,h,i,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
return e.preventDefault();
});})(s,vec__12468,x,corner,w,h,i,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (s,vec__12468,x,corner,w,h,i,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves){
return (function (e){
var vec__12471 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471,(3),null);
var m = (n | (0));
var vec__12474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], 0));
});})(s,vec__12468,x,corner,w,h,i,s__12456__$2,temp__5804__auto____$1,j,s__12430__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})(),reddonkey$views$game_board_$_iter__12429_$_iter__12455(cljs.core.rest(s__12456__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__12430__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),reddonkey$views$game_board_$_iter__12429(cljs.core.rest(s__12430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5)));
})(),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__12477(s__12478){
return (new cljs.core.LazySeq(null,(function (){
var s__12478__$1 = s__12478;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12478__$1);
if(temp__5804__auto__){
var s__12478__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12478__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12478__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12480 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12479 = (0);
while(true){
if((i__12479 < size__5522__auto__)){
var move = cljs.core._nth(c__5521__auto__,i__12479);
cljs.core.chunk_append(b__12480,"");

var G__12487 = (i__12479 + (1));
i__12479 = G__12487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12480),reddonkey$views$game_board_$_iter__12477(cljs.core.chunk_rest(s__12478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12480),null);
}
} else {
var move = cljs.core.first(s__12478__$2);
return cljs.core.cons("",reddonkey$views$game_board_$_iter__12477(cljs.core.rest(s__12478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(next_moves));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
});
reddonkey.views.main_panel = (function reddonkey$views$main_panel(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","state","reddonkey.subs/state",484656929)], null));
var board = cljs.core.deref(state);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compoment-did-mount","compoment-did-mount",628742071),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mounted"], 0));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Red Donkey"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddonkey.views.game_board], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
})], null));
});

//# sourceMappingURL=reddonkey.views.js.map
