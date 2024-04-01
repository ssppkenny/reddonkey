goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22607 = arguments.length;
var i__5770__auto___22608 = (0);
while(true){
if((i__5770__auto___22608 < len__5769__auto___22607)){
args__5775__auto__.push((arguments[i__5770__auto___22608]));

var G__22611 = (i__5770__auto___22608 + (1));
i__5770__auto___22608 = G__22611;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22185){
var G__22186 = cljs.core.first(seq22185);
var seq22185__$1 = cljs.core.next(seq22185);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22186,seq22185__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22191 = cljs.core.seq(sources);
var chunk__22192 = null;
var count__22193 = (0);
var i__22194 = (0);
while(true){
if((i__22194 < count__22193)){
var map__22202 = chunk__22192.cljs$core$IIndexed$_nth$arity$2(null,i__22194);
var map__22202__$1 = cljs.core.__destructure_map(map__22202);
var src = map__22202__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22203){var e_22612 = e22203;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22612);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22612.message)].join('')));
}

var G__22613 = seq__22191;
var G__22614 = chunk__22192;
var G__22615 = count__22193;
var G__22616 = (i__22194 + (1));
seq__22191 = G__22613;
chunk__22192 = G__22614;
count__22193 = G__22615;
i__22194 = G__22616;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22191);
if(temp__5804__auto__){
var seq__22191__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22191__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22191__$1);
var G__22617 = cljs.core.chunk_rest(seq__22191__$1);
var G__22618 = c__5568__auto__;
var G__22619 = cljs.core.count(c__5568__auto__);
var G__22620 = (0);
seq__22191 = G__22617;
chunk__22192 = G__22618;
count__22193 = G__22619;
i__22194 = G__22620;
continue;
} else {
var map__22204 = cljs.core.first(seq__22191__$1);
var map__22204__$1 = cljs.core.__destructure_map(map__22204);
var src = map__22204__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22205){var e_22622 = e22205;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22622);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22622.message)].join('')));
}

var G__22623 = cljs.core.next(seq__22191__$1);
var G__22624 = null;
var G__22625 = (0);
var G__22626 = (0);
seq__22191 = G__22623;
chunk__22192 = G__22624;
count__22193 = G__22625;
i__22194 = G__22626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22210 = cljs.core.seq(js_requires);
var chunk__22211 = null;
var count__22212 = (0);
var i__22213 = (0);
while(true){
if((i__22213 < count__22212)){
var js_ns = chunk__22211.cljs$core$IIndexed$_nth$arity$2(null,i__22213);
var require_str_22627 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22627);


var G__22628 = seq__22210;
var G__22629 = chunk__22211;
var G__22630 = count__22212;
var G__22631 = (i__22213 + (1));
seq__22210 = G__22628;
chunk__22211 = G__22629;
count__22212 = G__22630;
i__22213 = G__22631;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22210);
if(temp__5804__auto__){
var seq__22210__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22210__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22210__$1);
var G__22632 = cljs.core.chunk_rest(seq__22210__$1);
var G__22633 = c__5568__auto__;
var G__22634 = cljs.core.count(c__5568__auto__);
var G__22635 = (0);
seq__22210 = G__22632;
chunk__22211 = G__22633;
count__22212 = G__22634;
i__22213 = G__22635;
continue;
} else {
var js_ns = cljs.core.first(seq__22210__$1);
var require_str_22636 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22636);


var G__22637 = cljs.core.next(seq__22210__$1);
var G__22638 = null;
var G__22639 = (0);
var G__22640 = (0);
seq__22210 = G__22637;
chunk__22211 = G__22638;
count__22212 = G__22639;
i__22213 = G__22640;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22223){
var map__22224 = p__22223;
var map__22224__$1 = cljs.core.__destructure_map(map__22224);
var msg = map__22224__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22225(s__22226){
return (new cljs.core.LazySeq(null,(function (){
var s__22226__$1 = s__22226;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22226__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22231 = cljs.core.first(xs__6360__auto__);
var map__22231__$1 = cljs.core.__destructure_map(map__22231);
var src = map__22231__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22231__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22231__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22226__$1,map__22231,map__22231__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22224,map__22224__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22225_$_iter__22227(s__22228){
return (new cljs.core.LazySeq(null,((function (s__22226__$1,map__22231,map__22231__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22224,map__22224__$1,msg,info,reload_info){
return (function (){
var s__22228__$1 = s__22228;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22228__$1);
if(temp__5804__auto____$1){
var s__22228__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22228__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22228__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22230 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22229 = (0);
while(true){
if((i__22229 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22229);
cljs.core.chunk_append(b__22230,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22644 = (i__22229 + (1));
i__22229 = G__22644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22230),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22225_$_iter__22227(cljs.core.chunk_rest(s__22228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22230),null);
}
} else {
var warning = cljs.core.first(s__22228__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22225_$_iter__22227(cljs.core.rest(s__22228__$2)));
}
} else {
return null;
}
break;
}
});})(s__22226__$1,map__22231,map__22231__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22224,map__22224__$1,msg,info,reload_info))
,null,null));
});})(s__22226__$1,map__22231,map__22231__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22224,map__22224__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22225(cljs.core.rest(s__22226__$1)));
} else {
var G__22645 = cljs.core.rest(s__22226__$1);
s__22226__$1 = G__22645;
continue;
}
} else {
var G__22646 = cljs.core.rest(s__22226__$1);
s__22226__$1 = G__22646;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22243_22647 = cljs.core.seq(warnings);
var chunk__22245_22648 = null;
var count__22246_22649 = (0);
var i__22247_22650 = (0);
while(true){
if((i__22247_22650 < count__22246_22649)){
var map__22259_22651 = chunk__22245_22648.cljs$core$IIndexed$_nth$arity$2(null,i__22247_22650);
var map__22259_22652__$1 = cljs.core.__destructure_map(map__22259_22651);
var w_22653 = map__22259_22652__$1;
var msg_22654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22259_22652__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22259_22652__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22259_22652__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22259_22652__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22657)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22655),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22656),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22654__$1)].join(''));


var G__22658 = seq__22243_22647;
var G__22659 = chunk__22245_22648;
var G__22660 = count__22246_22649;
var G__22661 = (i__22247_22650 + (1));
seq__22243_22647 = G__22658;
chunk__22245_22648 = G__22659;
count__22246_22649 = G__22660;
i__22247_22650 = G__22661;
continue;
} else {
var temp__5804__auto___22662 = cljs.core.seq(seq__22243_22647);
if(temp__5804__auto___22662){
var seq__22243_22663__$1 = temp__5804__auto___22662;
if(cljs.core.chunked_seq_QMARK_(seq__22243_22663__$1)){
var c__5568__auto___22664 = cljs.core.chunk_first(seq__22243_22663__$1);
var G__22665 = cljs.core.chunk_rest(seq__22243_22663__$1);
var G__22666 = c__5568__auto___22664;
var G__22667 = cljs.core.count(c__5568__auto___22664);
var G__22668 = (0);
seq__22243_22647 = G__22665;
chunk__22245_22648 = G__22666;
count__22246_22649 = G__22667;
i__22247_22650 = G__22668;
continue;
} else {
var map__22260_22669 = cljs.core.first(seq__22243_22663__$1);
var map__22260_22670__$1 = cljs.core.__destructure_map(map__22260_22669);
var w_22671 = map__22260_22670__$1;
var msg_22672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260_22670__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260_22670__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260_22670__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260_22670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22675)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22673),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22674),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22672__$1)].join(''));


var G__22676 = cljs.core.next(seq__22243_22663__$1);
var G__22677 = null;
var G__22678 = (0);
var G__22679 = (0);
seq__22243_22647 = G__22676;
chunk__22245_22648 = G__22677;
count__22246_22649 = G__22678;
i__22247_22650 = G__22679;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22222_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22222_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22261){
var map__22262 = p__22261;
var map__22262__$1 = cljs.core.__destructure_map(map__22262);
var msg = map__22262__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22262__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22262__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22263 = cljs.core.seq(updates);
var chunk__22265 = null;
var count__22266 = (0);
var i__22267 = (0);
while(true){
if((i__22267 < count__22266)){
var path = chunk__22265.cljs$core$IIndexed$_nth$arity$2(null,i__22267);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22433_22680 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22437_22681 = null;
var count__22438_22682 = (0);
var i__22439_22683 = (0);
while(true){
if((i__22439_22683 < count__22438_22682)){
var node_22684 = chunk__22437_22681.cljs$core$IIndexed$_nth$arity$2(null,i__22439_22683);
if(cljs.core.not(node_22684.shadow$old)){
var path_match_22685 = shadow.cljs.devtools.client.browser.match_paths(node_22684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22685)){
var new_link_22686 = (function (){var G__22474 = node_22684.cloneNode(true);
G__22474.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22685),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22474;
})();
(node_22684.shadow$old = true);

(new_link_22686.onload = ((function (seq__22433_22680,chunk__22437_22681,count__22438_22682,i__22439_22683,seq__22263,chunk__22265,count__22266,i__22267,new_link_22686,path_match_22685,node_22684,path,map__22262,map__22262__$1,msg,updates,reload_info){
return (function (e){
var seq__22475_22687 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22477_22688 = null;
var count__22478_22689 = (0);
var i__22479_22690 = (0);
while(true){
if((i__22479_22690 < count__22478_22689)){
var map__22484_22691 = chunk__22477_22688.cljs$core$IIndexed$_nth$arity$2(null,i__22479_22690);
var map__22484_22692__$1 = cljs.core.__destructure_map(map__22484_22691);
var task_22693 = map__22484_22692__$1;
var fn_str_22694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22484_22692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22484_22692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22696 = goog.getObjectByName(fn_str_22694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22695)].join(''));

(fn_obj_22696.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22696.cljs$core$IFn$_invoke$arity$2(path,new_link_22686) : fn_obj_22696.call(null,path,new_link_22686));


var G__22697 = seq__22475_22687;
var G__22698 = chunk__22477_22688;
var G__22699 = count__22478_22689;
var G__22700 = (i__22479_22690 + (1));
seq__22475_22687 = G__22697;
chunk__22477_22688 = G__22698;
count__22478_22689 = G__22699;
i__22479_22690 = G__22700;
continue;
} else {
var temp__5804__auto___22701 = cljs.core.seq(seq__22475_22687);
if(temp__5804__auto___22701){
var seq__22475_22702__$1 = temp__5804__auto___22701;
if(cljs.core.chunked_seq_QMARK_(seq__22475_22702__$1)){
var c__5568__auto___22703 = cljs.core.chunk_first(seq__22475_22702__$1);
var G__22704 = cljs.core.chunk_rest(seq__22475_22702__$1);
var G__22705 = c__5568__auto___22703;
var G__22706 = cljs.core.count(c__5568__auto___22703);
var G__22707 = (0);
seq__22475_22687 = G__22704;
chunk__22477_22688 = G__22705;
count__22478_22689 = G__22706;
i__22479_22690 = G__22707;
continue;
} else {
var map__22486_22708 = cljs.core.first(seq__22475_22702__$1);
var map__22486_22709__$1 = cljs.core.__destructure_map(map__22486_22708);
var task_22710 = map__22486_22709__$1;
var fn_str_22711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486_22709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486_22709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22713 = goog.getObjectByName(fn_str_22711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22712)].join(''));

(fn_obj_22713.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22713.cljs$core$IFn$_invoke$arity$2(path,new_link_22686) : fn_obj_22713.call(null,path,new_link_22686));


var G__22714 = cljs.core.next(seq__22475_22702__$1);
var G__22715 = null;
var G__22716 = (0);
var G__22717 = (0);
seq__22475_22687 = G__22714;
chunk__22477_22688 = G__22715;
count__22478_22689 = G__22716;
i__22479_22690 = G__22717;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22684);
});})(seq__22433_22680,chunk__22437_22681,count__22438_22682,i__22439_22683,seq__22263,chunk__22265,count__22266,i__22267,new_link_22686,path_match_22685,node_22684,path,map__22262,map__22262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22685], 0));

goog.dom.insertSiblingAfter(new_link_22686,node_22684);


var G__22718 = seq__22433_22680;
var G__22719 = chunk__22437_22681;
var G__22720 = count__22438_22682;
var G__22721 = (i__22439_22683 + (1));
seq__22433_22680 = G__22718;
chunk__22437_22681 = G__22719;
count__22438_22682 = G__22720;
i__22439_22683 = G__22721;
continue;
} else {
var G__22722 = seq__22433_22680;
var G__22723 = chunk__22437_22681;
var G__22724 = count__22438_22682;
var G__22725 = (i__22439_22683 + (1));
seq__22433_22680 = G__22722;
chunk__22437_22681 = G__22723;
count__22438_22682 = G__22724;
i__22439_22683 = G__22725;
continue;
}
} else {
var G__22726 = seq__22433_22680;
var G__22727 = chunk__22437_22681;
var G__22728 = count__22438_22682;
var G__22729 = (i__22439_22683 + (1));
seq__22433_22680 = G__22726;
chunk__22437_22681 = G__22727;
count__22438_22682 = G__22728;
i__22439_22683 = G__22729;
continue;
}
} else {
var temp__5804__auto___22730 = cljs.core.seq(seq__22433_22680);
if(temp__5804__auto___22730){
var seq__22433_22731__$1 = temp__5804__auto___22730;
if(cljs.core.chunked_seq_QMARK_(seq__22433_22731__$1)){
var c__5568__auto___22732 = cljs.core.chunk_first(seq__22433_22731__$1);
var G__22733 = cljs.core.chunk_rest(seq__22433_22731__$1);
var G__22734 = c__5568__auto___22732;
var G__22735 = cljs.core.count(c__5568__auto___22732);
var G__22736 = (0);
seq__22433_22680 = G__22733;
chunk__22437_22681 = G__22734;
count__22438_22682 = G__22735;
i__22439_22683 = G__22736;
continue;
} else {
var node_22737 = cljs.core.first(seq__22433_22731__$1);
if(cljs.core.not(node_22737.shadow$old)){
var path_match_22738 = shadow.cljs.devtools.client.browser.match_paths(node_22737.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22738)){
var new_link_22739 = (function (){var G__22492 = node_22737.cloneNode(true);
G__22492.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22738),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22492;
})();
(node_22737.shadow$old = true);

(new_link_22739.onload = ((function (seq__22433_22680,chunk__22437_22681,count__22438_22682,i__22439_22683,seq__22263,chunk__22265,count__22266,i__22267,new_link_22739,path_match_22738,node_22737,seq__22433_22731__$1,temp__5804__auto___22730,path,map__22262,map__22262__$1,msg,updates,reload_info){
return (function (e){
var seq__22493_22740 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22495_22741 = null;
var count__22496_22742 = (0);
var i__22497_22743 = (0);
while(true){
if((i__22497_22743 < count__22496_22742)){
var map__22502_22744 = chunk__22495_22741.cljs$core$IIndexed$_nth$arity$2(null,i__22497_22743);
var map__22502_22745__$1 = cljs.core.__destructure_map(map__22502_22744);
var task_22746 = map__22502_22745__$1;
var fn_str_22747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22502_22745__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22502_22745__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22749 = goog.getObjectByName(fn_str_22747,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22748)].join(''));

(fn_obj_22749.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22749.cljs$core$IFn$_invoke$arity$2(path,new_link_22739) : fn_obj_22749.call(null,path,new_link_22739));


var G__22750 = seq__22493_22740;
var G__22751 = chunk__22495_22741;
var G__22752 = count__22496_22742;
var G__22753 = (i__22497_22743 + (1));
seq__22493_22740 = G__22750;
chunk__22495_22741 = G__22751;
count__22496_22742 = G__22752;
i__22497_22743 = G__22753;
continue;
} else {
var temp__5804__auto___22754__$1 = cljs.core.seq(seq__22493_22740);
if(temp__5804__auto___22754__$1){
var seq__22493_22755__$1 = temp__5804__auto___22754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22493_22755__$1)){
var c__5568__auto___22756 = cljs.core.chunk_first(seq__22493_22755__$1);
var G__22757 = cljs.core.chunk_rest(seq__22493_22755__$1);
var G__22758 = c__5568__auto___22756;
var G__22759 = cljs.core.count(c__5568__auto___22756);
var G__22760 = (0);
seq__22493_22740 = G__22757;
chunk__22495_22741 = G__22758;
count__22496_22742 = G__22759;
i__22497_22743 = G__22760;
continue;
} else {
var map__22503_22761 = cljs.core.first(seq__22493_22755__$1);
var map__22503_22762__$1 = cljs.core.__destructure_map(map__22503_22761);
var task_22763 = map__22503_22762__$1;
var fn_str_22764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22503_22762__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22503_22762__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22766 = goog.getObjectByName(fn_str_22764,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22765)].join(''));

(fn_obj_22766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22766.cljs$core$IFn$_invoke$arity$2(path,new_link_22739) : fn_obj_22766.call(null,path,new_link_22739));


var G__22767 = cljs.core.next(seq__22493_22755__$1);
var G__22768 = null;
var G__22769 = (0);
var G__22770 = (0);
seq__22493_22740 = G__22767;
chunk__22495_22741 = G__22768;
count__22496_22742 = G__22769;
i__22497_22743 = G__22770;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22737);
});})(seq__22433_22680,chunk__22437_22681,count__22438_22682,i__22439_22683,seq__22263,chunk__22265,count__22266,i__22267,new_link_22739,path_match_22738,node_22737,seq__22433_22731__$1,temp__5804__auto___22730,path,map__22262,map__22262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22738], 0));

goog.dom.insertSiblingAfter(new_link_22739,node_22737);


var G__22771 = cljs.core.next(seq__22433_22731__$1);
var G__22772 = null;
var G__22773 = (0);
var G__22774 = (0);
seq__22433_22680 = G__22771;
chunk__22437_22681 = G__22772;
count__22438_22682 = G__22773;
i__22439_22683 = G__22774;
continue;
} else {
var G__22775 = cljs.core.next(seq__22433_22731__$1);
var G__22776 = null;
var G__22777 = (0);
var G__22778 = (0);
seq__22433_22680 = G__22775;
chunk__22437_22681 = G__22776;
count__22438_22682 = G__22777;
i__22439_22683 = G__22778;
continue;
}
} else {
var G__22779 = cljs.core.next(seq__22433_22731__$1);
var G__22780 = null;
var G__22781 = (0);
var G__22782 = (0);
seq__22433_22680 = G__22779;
chunk__22437_22681 = G__22780;
count__22438_22682 = G__22781;
i__22439_22683 = G__22782;
continue;
}
}
} else {
}
}
break;
}


var G__22783 = seq__22263;
var G__22784 = chunk__22265;
var G__22785 = count__22266;
var G__22786 = (i__22267 + (1));
seq__22263 = G__22783;
chunk__22265 = G__22784;
count__22266 = G__22785;
i__22267 = G__22786;
continue;
} else {
var G__22788 = seq__22263;
var G__22789 = chunk__22265;
var G__22790 = count__22266;
var G__22791 = (i__22267 + (1));
seq__22263 = G__22788;
chunk__22265 = G__22789;
count__22266 = G__22790;
i__22267 = G__22791;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22263);
if(temp__5804__auto__){
var seq__22263__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22263__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22263__$1);
var G__22792 = cljs.core.chunk_rest(seq__22263__$1);
var G__22793 = c__5568__auto__;
var G__22794 = cljs.core.count(c__5568__auto__);
var G__22795 = (0);
seq__22263 = G__22792;
chunk__22265 = G__22793;
count__22266 = G__22794;
i__22267 = G__22795;
continue;
} else {
var path = cljs.core.first(seq__22263__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22505_22796 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22509_22797 = null;
var count__22510_22798 = (0);
var i__22511_22799 = (0);
while(true){
if((i__22511_22799 < count__22510_22798)){
var node_22800 = chunk__22509_22797.cljs$core$IIndexed$_nth$arity$2(null,i__22511_22799);
if(cljs.core.not(node_22800.shadow$old)){
var path_match_22801 = shadow.cljs.devtools.client.browser.match_paths(node_22800.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22801)){
var new_link_22802 = (function (){var G__22539 = node_22800.cloneNode(true);
G__22539.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22801),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22539;
})();
(node_22800.shadow$old = true);

(new_link_22802.onload = ((function (seq__22505_22796,chunk__22509_22797,count__22510_22798,i__22511_22799,seq__22263,chunk__22265,count__22266,i__22267,new_link_22802,path_match_22801,node_22800,path,seq__22263__$1,temp__5804__auto__,map__22262,map__22262__$1,msg,updates,reload_info){
return (function (e){
var seq__22540_22803 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22542_22804 = null;
var count__22543_22805 = (0);
var i__22544_22806 = (0);
while(true){
if((i__22544_22806 < count__22543_22805)){
var map__22552_22807 = chunk__22542_22804.cljs$core$IIndexed$_nth$arity$2(null,i__22544_22806);
var map__22552_22808__$1 = cljs.core.__destructure_map(map__22552_22807);
var task_22809 = map__22552_22808__$1;
var fn_str_22810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22552_22808__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22552_22808__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22812 = goog.getObjectByName(fn_str_22810,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22811)].join(''));

(fn_obj_22812.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22812.cljs$core$IFn$_invoke$arity$2(path,new_link_22802) : fn_obj_22812.call(null,path,new_link_22802));


var G__22813 = seq__22540_22803;
var G__22814 = chunk__22542_22804;
var G__22815 = count__22543_22805;
var G__22816 = (i__22544_22806 + (1));
seq__22540_22803 = G__22813;
chunk__22542_22804 = G__22814;
count__22543_22805 = G__22815;
i__22544_22806 = G__22816;
continue;
} else {
var temp__5804__auto___22817__$1 = cljs.core.seq(seq__22540_22803);
if(temp__5804__auto___22817__$1){
var seq__22540_22818__$1 = temp__5804__auto___22817__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22540_22818__$1)){
var c__5568__auto___22819 = cljs.core.chunk_first(seq__22540_22818__$1);
var G__22820 = cljs.core.chunk_rest(seq__22540_22818__$1);
var G__22821 = c__5568__auto___22819;
var G__22822 = cljs.core.count(c__5568__auto___22819);
var G__22823 = (0);
seq__22540_22803 = G__22820;
chunk__22542_22804 = G__22821;
count__22543_22805 = G__22822;
i__22544_22806 = G__22823;
continue;
} else {
var map__22557_22826 = cljs.core.first(seq__22540_22818__$1);
var map__22557_22827__$1 = cljs.core.__destructure_map(map__22557_22826);
var task_22828 = map__22557_22827__$1;
var fn_str_22829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22557_22827__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22557_22827__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22832 = goog.getObjectByName(fn_str_22829,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22830)].join(''));

(fn_obj_22832.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22832.cljs$core$IFn$_invoke$arity$2(path,new_link_22802) : fn_obj_22832.call(null,path,new_link_22802));


var G__22833 = cljs.core.next(seq__22540_22818__$1);
var G__22834 = null;
var G__22835 = (0);
var G__22836 = (0);
seq__22540_22803 = G__22833;
chunk__22542_22804 = G__22834;
count__22543_22805 = G__22835;
i__22544_22806 = G__22836;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22800);
});})(seq__22505_22796,chunk__22509_22797,count__22510_22798,i__22511_22799,seq__22263,chunk__22265,count__22266,i__22267,new_link_22802,path_match_22801,node_22800,path,seq__22263__$1,temp__5804__auto__,map__22262,map__22262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22801], 0));

goog.dom.insertSiblingAfter(new_link_22802,node_22800);


var G__22837 = seq__22505_22796;
var G__22838 = chunk__22509_22797;
var G__22839 = count__22510_22798;
var G__22840 = (i__22511_22799 + (1));
seq__22505_22796 = G__22837;
chunk__22509_22797 = G__22838;
count__22510_22798 = G__22839;
i__22511_22799 = G__22840;
continue;
} else {
var G__22841 = seq__22505_22796;
var G__22842 = chunk__22509_22797;
var G__22843 = count__22510_22798;
var G__22844 = (i__22511_22799 + (1));
seq__22505_22796 = G__22841;
chunk__22509_22797 = G__22842;
count__22510_22798 = G__22843;
i__22511_22799 = G__22844;
continue;
}
} else {
var G__22845 = seq__22505_22796;
var G__22846 = chunk__22509_22797;
var G__22847 = count__22510_22798;
var G__22848 = (i__22511_22799 + (1));
seq__22505_22796 = G__22845;
chunk__22509_22797 = G__22846;
count__22510_22798 = G__22847;
i__22511_22799 = G__22848;
continue;
}
} else {
var temp__5804__auto___22849__$1 = cljs.core.seq(seq__22505_22796);
if(temp__5804__auto___22849__$1){
var seq__22505_22850__$1 = temp__5804__auto___22849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22505_22850__$1)){
var c__5568__auto___22851 = cljs.core.chunk_first(seq__22505_22850__$1);
var G__22852 = cljs.core.chunk_rest(seq__22505_22850__$1);
var G__22853 = c__5568__auto___22851;
var G__22854 = cljs.core.count(c__5568__auto___22851);
var G__22855 = (0);
seq__22505_22796 = G__22852;
chunk__22509_22797 = G__22853;
count__22510_22798 = G__22854;
i__22511_22799 = G__22855;
continue;
} else {
var node_22856 = cljs.core.first(seq__22505_22850__$1);
if(cljs.core.not(node_22856.shadow$old)){
var path_match_22857 = shadow.cljs.devtools.client.browser.match_paths(node_22856.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22857)){
var new_link_22858 = (function (){var G__22558 = node_22856.cloneNode(true);
G__22558.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22857),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22558;
})();
(node_22856.shadow$old = true);

(new_link_22858.onload = ((function (seq__22505_22796,chunk__22509_22797,count__22510_22798,i__22511_22799,seq__22263,chunk__22265,count__22266,i__22267,new_link_22858,path_match_22857,node_22856,seq__22505_22850__$1,temp__5804__auto___22849__$1,path,seq__22263__$1,temp__5804__auto__,map__22262,map__22262__$1,msg,updates,reload_info){
return (function (e){
var seq__22559_22859 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22561_22860 = null;
var count__22562_22861 = (0);
var i__22563_22862 = (0);
while(true){
if((i__22563_22862 < count__22562_22861)){
var map__22570_22863 = chunk__22561_22860.cljs$core$IIndexed$_nth$arity$2(null,i__22563_22862);
var map__22570_22864__$1 = cljs.core.__destructure_map(map__22570_22863);
var task_22865 = map__22570_22864__$1;
var fn_str_22866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570_22864__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570_22864__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22868 = goog.getObjectByName(fn_str_22866,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22867)].join(''));

(fn_obj_22868.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22868.cljs$core$IFn$_invoke$arity$2(path,new_link_22858) : fn_obj_22868.call(null,path,new_link_22858));


var G__22869 = seq__22559_22859;
var G__22870 = chunk__22561_22860;
var G__22871 = count__22562_22861;
var G__22872 = (i__22563_22862 + (1));
seq__22559_22859 = G__22869;
chunk__22561_22860 = G__22870;
count__22562_22861 = G__22871;
i__22563_22862 = G__22872;
continue;
} else {
var temp__5804__auto___22873__$2 = cljs.core.seq(seq__22559_22859);
if(temp__5804__auto___22873__$2){
var seq__22559_22874__$1 = temp__5804__auto___22873__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22559_22874__$1)){
var c__5568__auto___22875 = cljs.core.chunk_first(seq__22559_22874__$1);
var G__22876 = cljs.core.chunk_rest(seq__22559_22874__$1);
var G__22877 = c__5568__auto___22875;
var G__22878 = cljs.core.count(c__5568__auto___22875);
var G__22879 = (0);
seq__22559_22859 = G__22876;
chunk__22561_22860 = G__22877;
count__22562_22861 = G__22878;
i__22563_22862 = G__22879;
continue;
} else {
var map__22571_22880 = cljs.core.first(seq__22559_22874__$1);
var map__22571_22881__$1 = cljs.core.__destructure_map(map__22571_22880);
var task_22882 = map__22571_22881__$1;
var fn_str_22883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571_22881__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571_22881__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22885 = goog.getObjectByName(fn_str_22883,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22884)].join(''));

(fn_obj_22885.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22885.cljs$core$IFn$_invoke$arity$2(path,new_link_22858) : fn_obj_22885.call(null,path,new_link_22858));


var G__22886 = cljs.core.next(seq__22559_22874__$1);
var G__22887 = null;
var G__22888 = (0);
var G__22889 = (0);
seq__22559_22859 = G__22886;
chunk__22561_22860 = G__22887;
count__22562_22861 = G__22888;
i__22563_22862 = G__22889;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22856);
});})(seq__22505_22796,chunk__22509_22797,count__22510_22798,i__22511_22799,seq__22263,chunk__22265,count__22266,i__22267,new_link_22858,path_match_22857,node_22856,seq__22505_22850__$1,temp__5804__auto___22849__$1,path,seq__22263__$1,temp__5804__auto__,map__22262,map__22262__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22857], 0));

goog.dom.insertSiblingAfter(new_link_22858,node_22856);


var G__22890 = cljs.core.next(seq__22505_22850__$1);
var G__22891 = null;
var G__22892 = (0);
var G__22893 = (0);
seq__22505_22796 = G__22890;
chunk__22509_22797 = G__22891;
count__22510_22798 = G__22892;
i__22511_22799 = G__22893;
continue;
} else {
var G__22894 = cljs.core.next(seq__22505_22850__$1);
var G__22895 = null;
var G__22896 = (0);
var G__22897 = (0);
seq__22505_22796 = G__22894;
chunk__22509_22797 = G__22895;
count__22510_22798 = G__22896;
i__22511_22799 = G__22897;
continue;
}
} else {
var G__22898 = cljs.core.next(seq__22505_22850__$1);
var G__22899 = null;
var G__22900 = (0);
var G__22901 = (0);
seq__22505_22796 = G__22898;
chunk__22509_22797 = G__22899;
count__22510_22798 = G__22900;
i__22511_22799 = G__22901;
continue;
}
}
} else {
}
}
break;
}


var G__22902 = cljs.core.next(seq__22263__$1);
var G__22903 = null;
var G__22904 = (0);
var G__22905 = (0);
seq__22263 = G__22902;
chunk__22265 = G__22903;
count__22266 = G__22904;
i__22267 = G__22905;
continue;
} else {
var G__22906 = cljs.core.next(seq__22263__$1);
var G__22907 = null;
var G__22908 = (0);
var G__22909 = (0);
seq__22263 = G__22906;
chunk__22265 = G__22907;
count__22266 = G__22908;
i__22267 = G__22909;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22583){
var map__22584 = p__22583;
var map__22584__$1 = cljs.core.__destructure_map(map__22584);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22584__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22585,done,error){
var map__22586 = p__22585;
var map__22586__$1 = cljs.core.__destructure_map(map__22586);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22586__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22587,done,error){
var map__22588 = p__22587;
var map__22588__$1 = cljs.core.__destructure_map(map__22588);
var msg = map__22588__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22588__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22588__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22588__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22589){
var map__22590 = p__22589;
var map__22590__$1 = cljs.core.__destructure_map(map__22590);
var src = map__22590__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22591 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22591) : done.call(null,G__22591));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22592){
var map__22593 = p__22592;
var map__22593__$1 = cljs.core.__destructure_map(map__22593);
var msg__$1 = map__22593__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22593__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22594){var ex = e22594;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22595){
var map__22596 = p__22595;
var map__22596__$1 = cljs.core.__destructure_map(map__22596);
var env = map__22596__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22596__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22599){
var map__22600 = p__22599;
var map__22600__$1 = cljs.core.__destructure_map(map__22600);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22603){
var map__22604 = p__22603;
var map__22604__$1 = cljs.core.__destructure_map(map__22604);
var svc = map__22604__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22604__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
