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
reddonkey.views.in_rectangle_QMARK_ = (function reddonkey$views$in_rectangle_QMARK_(x,y,p__12555){
var vec__12556 = p__12555;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(3),null);
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
var xs = cljs.core.vec((function (){var iter__5523__auto__ = (function reddonkey$views$find_rect_style_$_iter__12559(s__12560){
return (new cljs.core.LazySeq(null,(function (){
var s__12560__$1 = s__12560;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12560__$1);
if(temp__5804__auto__){
var s__12560__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12560__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12560__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12562 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12561 = (0);
while(true){
if((i__12561 < size__5522__auto__)){
var vec__12563 = cljs.core._nth(c__5521__auto__,i__12561);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
cljs.core.chunk_append(b__12562,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null));

var G__12632 = (i__12561 + (1));
i__12561 = G__12632;
continue;
} else {
var G__12633 = (i__12561 + (1));
i__12561 = G__12633;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12562),reddonkey$views$find_rect_style_$_iter__12559(cljs.core.chunk_rest(s__12560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12562),null);
}
} else {
var vec__12566 = cljs.core.first(s__12560__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(3),null);
if(cljs.core.truth_(reddonkey.views.in_rectangle_QMARK_(x,y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,w,h], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,y),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((y + (1)),(b + h)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + w),(x + (1)))], null),reddonkey$views$find_rect_style_$_iter__12559(cljs.core.rest(s__12560__$2)));
} else {
var G__12634 = cljs.core.rest(s__12560__$2);
s__12560__$1 = G__12634;
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
var vec__12569 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(0),(0)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",false,(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,i)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,j))),w,h], null);
}
});
reddonkey.views.move_to_str = (function reddonkey$views$move_to_str(p__12572){
var vec__12573 = p__12572;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573,(1),null);
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
reddonkey.views.diff_to_action = (function reddonkey$views$diff_to_action(p__12576){
var vec__12577 = p__12576;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(1),null);
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
var lst = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12580){
var vec__12581 = p__12580;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,n);
}),next_moves);
return cljs.core.seq(lst);
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
})], null),"Solve"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5523__auto__ = (function reddonkey$views$main_panel_$_iter__12584(s__12585){
return (new cljs.core.LazySeq(null,(function (){
var s__12585__$1 = s__12585;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12585__$1);
if(temp__5804__auto__){
var s__12585__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12585__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12585__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12587 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12586 = (0);
while(true){
if((i__12586 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__12586);
cljs.core.chunk_append(b__12587,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (i__12586,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function reddonkey$views$main_panel_$_iter__12584_$_iter__12588(s__12589){
return (new cljs.core.LazySeq(null,((function (i__12586,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (){
var s__12589__$1 = s__12589;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12589__$1);
if(temp__5804__auto____$1){
var s__12589__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12589__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__12589__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__12591 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__12590 = (0);
while(true){
if((i__12590 < size__5522__auto____$1)){
var i = cljs.core._nth(c__5521__auto____$1,i__12590);
cljs.core.chunk_append(b__12591,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12592 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__12590,i__12586,s,vec__12592,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12591,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__12590,i__12586,s,vec__12592,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12591,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12590,i__12586,s,vec__12592,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12591,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__12595 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595,(3),null);
var m = (n | (0));
var vec__12598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12598,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12598,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12598,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12598,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(i__12590,i__12586,s,vec__12592,x,corner,w,h,i,c__5521__auto____$1,size__5522__auto____$1,b__12591,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})());

var G__12635 = (i__12590 + (1));
i__12590 = G__12635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12591),reddonkey$views$main_panel_$_iter__12584_$_iter__12588(cljs.core.chunk_rest(s__12589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12591),null);
}
} else {
var i = cljs.core.first(s__12589__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12601 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__12586,s,vec__12601,x,corner,w,h,i,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__12586,s,vec__12601,x,corner,w,h,i,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12586,s,vec__12601,x,corner,w,h,i,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__12604 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(3),null);
var m = (n | (0));
var vec__12607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12607,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12607,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12607,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12607,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(i__12586,s,vec__12601,x,corner,w,h,i,s__12589__$2,temp__5804__auto____$1,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})(),reddonkey$views$main_panel_$_iter__12584_$_iter__12588(cljs.core.rest(s__12589__$2)));
}
} else {
return null;
}
break;
}
});})(i__12586,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,null,null));
});})(i__12586,j,c__5521__auto__,size__5522__auto__,b__12587,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__12636 = (i__12586 + (1));
i__12586 = G__12636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12587),reddonkey$views$main_panel_$_iter__12584(cljs.core.chunk_rest(s__12585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12587),null);
}
} else {
var j = cljs.core.first(s__12585__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"255px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),(function (){var iter__5523__auto__ = ((function (j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function reddonkey$views$main_panel_$_iter__12584_$_iter__12610(s__12611){
return (new cljs.core.LazySeq(null,(function (){
var s__12611__$1 = s__12611;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12611__$1);
if(temp__5804__auto____$1){
var s__12611__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12611__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12611__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12613 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12612 = (0);
while(true){
if((i__12612 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__12612);
cljs.core.chunk_append(b__12613,(function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12614 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__12612,s,vec__12614,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12613,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(i__12612,s,vec__12614,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12613,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (i__12612,s,vec__12614,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12613,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__12617 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12617,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12617,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12617,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12617,(3),null);
var m = (n | (0));
var vec__12620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12620,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12620,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12620,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12620,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(i__12612,s,vec__12614,x,corner,w,h,i,c__5521__auto__,size__5522__auto__,b__12613,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})());

var G__12637 = (i__12612 + (1));
i__12612 = G__12637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12613),reddonkey$views$main_panel_$_iter__12584_$_iter__12610(cljs.core.chunk_rest(s__12611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12613),null);
}
} else {
var i = cljs.core.first(s__12611__$2);
return cljs.core.cons((function (){var s = reddonkey.views.get_cell_symbol(i,j,cljs.core.deref(state));
var vec__12623 = s;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12623,(0),null);
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12623,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12623,(2),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12623,(3),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")){
if(reddonkey.views.can_move_QMARK_(cljs.core.deref(state),i,j,cljs.core.deref(next_moves))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),s], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(board)))),(cljs.core.truth_(corner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),".png"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((w * (50))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((h * (50))),"px"].join('')], null)], null):"")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jtk_dvlp.re_frame.dragndrop.dropzone,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"my-entity","my-entity",-1894964063),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (s,vec__12623,x,corner,w,h,i,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
return e.preventDefault();
});})(s,vec__12623,x,corner,w,h,i,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (s,vec__12623,x,corner,w,h,i,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving){
return (function (e){
var vec__12626 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vec(e)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626,(0),null);
var corner__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626,(1),null);
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626,(2),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626,(3),null);
var m = (n | (0));
var vec__12629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),m);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(3),null);
var diff = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)));
var a__$1 = reddonkey.views.diff_to_action(diff);
if((!((a__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reddonkey.events","move","reddonkey.events/move",233217537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,a__$1], null)], null));
} else {
return null;
}
});})(s,vec__12623,x,corner,w,h,i,s__12611__$2,temp__5804__auto____$1,j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reddonkey.views.cond_to_style(reddonkey.views.find_rect_style(i,j,cljs.core.vals(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
}
})(),reddonkey$views$main_panel_$_iter__12584_$_iter__12610(cljs.core.rest(s__12611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__12585__$2,temp__5804__auto__,board,solve,state,next_moves,solving))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),reddonkey$views$main_panel_$_iter__12584(cljs.core.rest(s__12585__$2)));
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
