goog.provide('reddonkey.views');
reddonkey.views.dispatch_keydown_rules = (function reddonkey$views$dispatch_keydown_rules(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","init","reddonkey.events/init",332125316),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(32)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","solve","reddonkey.events/solve",1181565963),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(83)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
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
reddonkey.views.in_rectangle_QMARK_ = (function reddonkey$views$in_rectangle_QMARK_(x,y,p__15183){
var vec__15184 = p__15183;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15184,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15184,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15184,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15184,(3),null);
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
var xs = cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$views$find_rect_style_$_iter__15187(s__15188){
return (new cljs.core.LazySeq(null,(function (){
var s__15188__$1 = s__15188;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15188__$1);
if(temp__5804__auto__){
var s__15188__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15188__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15188__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15190 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15189 = (0);
while(true){
if((i__15189 < size__5522__auto__)){
var vec__15191 = cljs.core._nth(c__5521__auto__,i__15189);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15191,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15191,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15191,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15191,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
cljs.core.chunk_append(b__15190,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null));

var G__15264 = (i__15189 + (1));
i__15189 = G__15264;
continue;
} else {
var G__15265 = (i__15189 + (1));
i__15189 = G__15265;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15190),reddonkey$views$find_rect_style_$_iter__15187(cljs.core.chunk_rest(s__15188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15190),null);
}
} else {
var vec__15194 = cljs.core.first(s__15188__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null),reddonkey$views$find_rect_style_$_iter__15187(cljs.core.rest(s__15188__$2)));
} else {
var G__15266 = cljs.core.rest(s__15188__$2);
s__15188__$1 = G__15266;
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
reddonkey.views.cond_to_style = (function reddonkey$views$cond_to_style(borders,onclick){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"-web-touch-callout","-web-touch-callout",-193173916),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["solid","none","white","50px","0px","white","grid","50px","0px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),onclick], null);
});
reddonkey.views.blocks = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1),(1)], null)]);
reddonkey.views.board = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(5),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7),(8),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(0),(0),(10)], null)], null);
reddonkey.views.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),reddonkey.views.board,new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),reddonkey.views.blocks], null);
reddonkey.views.get_cell_symbol = (function reddonkey$views$get_cell_symbol(i,j,state){
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),j),i);
var vec__15197 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(0),(0)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15197,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15197,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15197,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15197,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",false,(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,i)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,j))),w,h], null);
}
});
reddonkey.views.move_to_str = (function reddonkey$views$move_to_str(p__15200){
var vec__15201 = p__15200;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(1),null);
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
reddonkey.views.diff_to_action = (function reddonkey$views$diff_to_action(p__15204){
var vec__15205 = p__15204;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15205,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15205,(1),null);
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
var lst = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__15208){
var vec__15209 = p__15208;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,n);
}),next_moves);
return cljs.core.seq(lst);
});
reddonkey.views.next_move = (function reddonkey$views$next_move(state,i,j,next_moves){
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),j),i);
var moves = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__15212){
var vec__15213 = p__15212;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15213,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15213,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,n);
}),next_moves);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([moves], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(moves),(1))){
return cljs.core.first(moves);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
reddonkey.views.main_panel = (function reddonkey$views$main_panel(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","state","reddonkey.subs/state",484656929)], null));
var next_moves = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","next-moves","reddonkey.subs/next-moves",1137084087)], null));
var solving = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.subs","solving","reddonkey.subs/solving",1815365687)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return reddonkey.views.dispatch_keydown_rules();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var board = cljs.core.deref(state);
var solve = cljs.core.deref(solving);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Red Donkey"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","solve","reddonkey.events/solve",1181565963),(1)], null));
})], null),"Solve"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5523__auto__ = (function reddonkey$views$main_panel_$_iter__15216(s__15217){
return (new cljs.core.LazySeq(null,(function (){
var s__15217__$1 = s__15217;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15217__$1);
if(temp__5804__auto__){
var s__15217__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15217__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15217__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15219 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15218 = (0);
while(true){
if((i__15218 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__15218);
cljs.core.chunk_append(b__15219,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (i__15218,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function reddonkey$views$main_panel_$_iter__15216_$_iter__15220(s__15221){
return (new cljs.core.LazySeq(null,((function (i__15218,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (){
var s__15221__$1 = s__15221;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15221__$1);
if(temp__5804__auto____$1){
var s__15221__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15221__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__15221__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__15223 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__15222 = (0);
while(true){
if((i__15222 < size__5522__auto____$1)){
var i = cljs.core._nth(c__5521__auto____$1,i__15222);
cljs.core.chunk_append(b__15223,(function (){var s = reddonkey.views.get_cell_symbol(i,j,board);
var vec__15224 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (_){
var nm = reddonkey.views.next_move(cljs.core.deref(state),i,j,cljs.core.deref(next_moves));
if(cljs.core.seq(nm)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),nm], null));
} else {
return null;
}
});})(i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__15227 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15227,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15227,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15227,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15227,(3),null);
var m = (n | (0));
var vec__15230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15230,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15230,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15230,(2),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15230,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))),((function (i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15222,i__15218,s,vec__15224,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__15223,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})());

var G__15267 = (i__15222 + (1));
i__15222 = G__15267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15223),reddonkey$views$main_panel_$_iter__15216_$_iter__15220(cljs.core.chunk_rest(s__15221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15223),null);
}
} else {
var i = cljs.core.first(s__15221__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,board);
var vec__15233 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15233,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15233,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15233,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15233,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (_){
var nm = reddonkey.views.next_move(cljs.core.deref(state),i,j,cljs.core.deref(next_moves));
if(cljs.core.seq(nm)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),nm], null));
} else {
return null;
}
});})(i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__15236 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(3),null);
var m = (n | (0));
var vec__15239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,(2),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))),((function (i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15218,s,vec__15233,x,corner,w,h,i,s__15221__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})(),reddonkey$views$main_panel_$_iter__15216_$_iter__15220(cljs.core.rest(s__15221__$2)));
}
} else {
return null;
}
break;
}
});})(i__15218,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,null,null));
});})(i__15218,j,c__5521__auto__,size__5522__auto__,b__15219,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__15268 = (i__15218 + (1));
i__15218 = G__15268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15219),reddonkey$views$main_panel_$_iter__15216(cljs.core.chunk_rest(s__15217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15219),null);
}
} else {
var j = cljs.core.first(s__15217__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function reddonkey$views$main_panel_$_iter__15216_$_iter__15242(s__15243){
return (new cljs.core.LazySeq(null,(function (){
var s__15243__$1 = s__15243;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15243__$1);
if(temp__5804__auto____$1){
var s__15243__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15243__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15243__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15245 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15244 = (0);
while(true){
if((i__15244 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__15244);
cljs.core.chunk_append(b__15245,(function (){var s = reddonkey.views.get_cell_symbol(i,j,board);
var vec__15246 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (_){
var nm = reddonkey.views.next_move(cljs.core.deref(state),i,j,cljs.core.deref(next_moves));
if(cljs.core.seq(nm)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),nm], null));
} else {
return null;
}
});})(i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__15249 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(3),null);
var m = (n | (0));
var vec__15252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(2),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))),((function (i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__15244,s,vec__15246,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__15245,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})());

var G__15269 = (i__15244 + (1));
i__15244 = G__15269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15245),reddonkey$views$main_panel_$_iter__15216_$_iter__15242(cljs.core.chunk_rest(s__15243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15245),null);
}
} else {
var i = cljs.core.first(s__15243__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,board);
var vec__15255 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (_){
var nm = reddonkey.views.next_move(cljs.core.deref(state),i,j,cljs.core.deref(next_moves));
if(cljs.core.seq(nm)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),nm], null));
} else {
return null;
}
});})(s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board))),((function (s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__15258 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258,(3),null);
var m = (n | (0));
var vec__15261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(2),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))),((function (s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(s,vec__15255,x,corner,w,h,i,s__15243__$2,temp__5804__auto____$1,j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})(),reddonkey$views$main_panel_$_iter__15216_$_iter__15242(cljs.core.rest(s__15243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__15217__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),reddonkey$views$main_panel_$_iter__15216(cljs.core.rest(s__15217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(5)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),(cljs.core.truth_(solve)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"progress.gif",new cljs.core.Keyword(null,"height","height",1025178622),"30px"], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
})], null));
});

//# sourceMappingURL=reddonkey.views.js.map
