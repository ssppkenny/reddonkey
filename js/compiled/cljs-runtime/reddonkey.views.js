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
reddonkey.views.in_rectangle_QMARK_ = (function reddonkey$views$in_rectangle_QMARK_(x,y,p__24705){
var vec__24706 = p__24705;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(3),null);
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
var xs = cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$views$find_rect_style_$_iter__24709(s__24710){
return (new cljs.core.LazySeq(null,(function (){
var s__24710__$1 = s__24710;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24710__$1);
if(temp__5804__auto__){
var s__24710__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24710__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24710__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24712 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24711 = (0);
while(true){
if((i__24711 < size__5522__auto__)){
var vec__24713 = cljs.core._nth(c__5521__auto__,i__24711);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24713,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
cljs.core.chunk_append(b__24712,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null));

var G__24754 = (i__24711 + (1));
i__24711 = G__24754;
continue;
} else {
var G__24755 = (i__24711 + (1));
i__24711 = G__24755;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24712),reddonkey$views$find_rect_style_$_iter__24709(cljs.core.chunk_rest(s__24710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24712),null);
}
} else {
var vec__24716 = cljs.core.first(s__24710__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24716,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24716,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24716,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24716,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null),reddonkey$views$find_rect_style_$_iter__24709(cljs.core.rest(s__24710__$2)));
} else {
var G__24756 = cljs.core.rest(s__24710__$2);
s__24710__$1 = G__24756;
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
var vec__24719 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(0),(0)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24719,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24719,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24719,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24719,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",false,(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,i)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,j))),w,h], null);
}
});
reddonkey.views.move_to_str = (function reddonkey$views$move_to_str(p__24722){
var vec__24723 = p__24722;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24723,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24723,(1),null);
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
reddonkey.views.game_board = (function reddonkey$views$game_board(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","state","reddonkey.subs/state",484656929)], null));
var next_moves = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","next-moves","reddonkey.subs/next-moves",1137084087)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__24726(s__24727){
return (new cljs.core.LazySeq(null,(function (){
var s__24727__$1 = s__24727;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24727__$1);
if(temp__5804__auto__){
var s__24727__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24727__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24727__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24729 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24728 = (0);
while(true){
if((i__24728 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__24728);
cljs.core.chunk_append(b__24729,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (i__24728,j,c__5521__auto__,size__5522__auto__,b__24729,s__24727__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__24726_$_iter__24730(s__24731){
return (new cljs.core.LazySeq(null,((function (i__24728,j,c__5521__auto__,size__5522__auto__,b__24729,s__24727__$2,temp__5804__auto__,state,next_moves){
return (function (){
var s__24731__$1 = s__24731;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24731__$1);
if(temp__5804__auto____$1){
var s__24731__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24731__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__24731__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__24733 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__24732 = (0);
while(true){
if((i__24732 < size__5522__auto____$1)){
var i = cljs.core._nth(c__5521__auto____$1,i__24732);
cljs.core.chunk_append(b__24733,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(function (){var vec__24734 = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(3),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = corner;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0");
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null);
} else {
return "";
}
})()], null));

var G__24757 = (i__24732 + (1));
i__24732 = G__24757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24733),reddonkey$views$game_board_$_iter__24726_$_iter__24730(cljs.core.chunk_rest(s__24731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24733),null);
}
} else {
var i = cljs.core.first(s__24731__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(function (){var vec__24737 = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24737,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24737,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24737,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24737,(3),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = corner;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0");
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null);
} else {
return "";
}
})()], null),reddonkey$views$game_board_$_iter__24726_$_iter__24730(cljs.core.rest(s__24731__$2)));
}
} else {
return null;
}
break;
}
});})(i__24728,j,c__5521__auto__,size__5522__auto__,b__24729,s__24727__$2,temp__5804__auto__,state,next_moves))
,null,null));
});})(i__24728,j,c__5521__auto__,size__5522__auto__,b__24729,s__24727__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null));

var G__24758 = (i__24728 + (1));
i__24728 = G__24758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24729),reddonkey$views$game_board_$_iter__24726(cljs.core.chunk_rest(s__24727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24729),null);
}
} else {
var j = cljs.core.first(s__24727__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (j,s__24727__$2,temp__5804__auto__,state,next_moves){
return (function reddonkey$views$game_board_$_iter__24726_$_iter__24740(s__24741){
return (new cljs.core.LazySeq(null,(function (){
var s__24741__$1 = s__24741;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24741__$1);
if(temp__5804__auto____$1){
var s__24741__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24741__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24741__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24743 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24742 = (0);
while(true){
if((i__24742 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__24742);
cljs.core.chunk_append(b__24743,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(function (){var vec__24744 = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24744,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24744,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24744,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24744,(3),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = corner;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0");
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null);
} else {
return "";
}
})()], null));

var G__24759 = (i__24742 + (1));
i__24742 = G__24759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24743),reddonkey$views$game_board_$_iter__24726_$_iter__24740(cljs.core.chunk_rest(s__24741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24743),null);
}
} else {
var i = cljs.core.first(s__24741__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),(function (){var vec__24747 = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24747,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24747,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24747,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24747,(3),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = corner;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0");
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null);
} else {
return "";
}
})()], null),reddonkey$views$game_board_$_iter__24726_$_iter__24740(cljs.core.rest(s__24741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__24727__$2,temp__5804__auto__,state,next_moves))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),reddonkey$views$game_board_$_iter__24726(cljs.core.rest(s__24727__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"next moves ",(function (){var iter__5523__auto__ = (function reddonkey$views$game_board_$_iter__24750(s__24751){
return (new cljs.core.LazySeq(null,(function (){
var s__24751__$1 = s__24751;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24751__$1);
if(temp__5804__auto__){
var s__24751__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24751__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24751__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24753 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24752 = (0);
while(true){
if((i__24752 < size__5522__auto__)){
var move = cljs.core._nth(c__5521__auto__,i__24752);
cljs.core.chunk_append(b__24753,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24752,move,c__5521__auto__,size__5522__auto__,b__24753,s__24751__$2,temp__5804__auto__,state,next_moves){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),move], null));
});})(i__24752,move,c__5521__auto__,size__5522__auto__,b__24753,s__24751__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reddonkey.views.move_to_str(move))], null)], null));

var G__24760 = (i__24752 + (1));
i__24752 = G__24760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24753),reddonkey$views$game_board_$_iter__24750(cljs.core.chunk_rest(s__24751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24753),null);
}
} else {
var move = cljs.core.first(s__24751__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (move,s__24751__$2,temp__5804__auto__,state,next_moves){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),move], null));
});})(move,s__24751__$2,temp__5804__auto__,state,next_moves))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reddonkey.views.move_to_str(move))], null)], null),reddonkey$views$game_board_$_iter__24750(cljs.core.rest(s__24751__$2)));
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
