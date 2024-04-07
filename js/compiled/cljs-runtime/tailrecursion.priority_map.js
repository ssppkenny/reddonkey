goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__13801(s__13802){
return (new cljs.core.LazySeq(null,(function (){
var s__13802__$1 = s__13802;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13802__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__13807 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13807,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13807,(1),null);
var iterys__5519__auto__ = ((function (s__13802__$1,vec__13807,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__13801_$_iter__13803(s__13804){
return (new cljs.core.LazySeq(null,((function (s__13802__$1,vec__13807,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function (){
var s__13804__$1 = s__13804;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13804__$1);
if(temp__5804__auto____$1){
var s__13804__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13804__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13804__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13806 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13805 = (0);
while(true){
if((i__13805 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13805);
cljs.core.chunk_append(b__13806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__13868 = (i__13805 + (1));
i__13805 = G__13868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13806),tailrecursion$priority_map$iter__13801_$_iter__13803(cljs.core.chunk_rest(s__13804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13806),null);
}
} else {
var item = cljs.core.first(s__13804__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__13801_$_iter__13803(cljs.core.rest(s__13804__$2)));
}
} else {
return null;
}
break;
}
});})(s__13802__$1,vec__13807,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
,null,null));
});})(s__13802__$1,vec__13807,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__13801(cljs.core.rest(s__13802__$1)));
} else {
var G__13869 = cljs.core.rest(s__13802__$1);
s__13802__$1 = G__13869;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__13810(s__13811){
return (new cljs.core.LazySeq(null,(function (){
var s__13811__$1 = s__13811;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13811__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__13816 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13816,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13816,(1),null);
var iterys__5519__auto__ = ((function (s__13811__$1,vec__13816,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__13810_$_iter__13812(s__13813){
return (new cljs.core.LazySeq(null,((function (s__13811__$1,vec__13816,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function (){
var s__13813__$1 = s__13813;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13813__$1);
if(temp__5804__auto____$1){
var s__13813__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13813__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13813__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13815 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13814 = (0);
while(true){
if((i__13814 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13814);
cljs.core.chunk_append(b__13815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13870 = (i__13814 + (1));
i__13814 = G__13870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13815),tailrecursion$priority_map$iter__13810_$_iter__13812(cljs.core.chunk_rest(s__13813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13815),null);
}
} else {
var item = cljs.core.first(s__13813__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13810_$_iter__13812(cljs.core.rest(s__13813__$2)));
}
} else {
return null;
}
break;
}
});})(s__13811__$1,vec__13816,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
,null,null));
});})(s__13811__$1,vec__13816,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__13810(cljs.core.rest(s__13811__$1)));
} else {
var G__13871 = cljs.core.rest(s__13811__$1);
s__13811__$1 = G__13871;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5802__auto__)){
var current_priority = temp__5802__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__13819(s__13820){
return (new cljs.core.LazySeq(null,(function (){
var s__13820__$1 = s__13820;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13820__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__13825 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13825,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13825,(1),null);
var iterys__5519__auto__ = ((function (s__13820__$1,vec__13825,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__13819_$_iter__13821(s__13822){
return (new cljs.core.LazySeq(null,((function (s__13820__$1,vec__13825,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function (){
var s__13822__$1 = s__13822;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13822__$1);
if(temp__5804__auto____$1){
var s__13822__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13822__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13822__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13824 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13823 = (0);
while(true){
if((i__13823 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13823);
cljs.core.chunk_append(b__13824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__13872 = (i__13823 + (1));
i__13823 = G__13872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13824),tailrecursion$priority_map$iter__13819_$_iter__13821(cljs.core.chunk_rest(s__13822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13824),null);
}
} else {
var item = cljs.core.first(s__13822__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__13819_$_iter__13821(cljs.core.rest(s__13822__$2)));
}
} else {
return null;
}
break;
}
});})(s__13820__$1,vec__13825,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
,null,null));
});})(s__13820__$1,vec__13825,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__13819(cljs.core.rest(s__13820__$1)));
} else {
var G__13873 = cljs.core.rest(s__13820__$1);
s__13820__$1 = G__13873;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__13828(s__13829){
return (new cljs.core.LazySeq(null,(function (){
var s__13829__$1 = s__13829;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13829__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__13834 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13834,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13834,(1),null);
var iterys__5519__auto__ = ((function (s__13829__$1,vec__13834,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__13828_$_iter__13830(s__13831){
return (new cljs.core.LazySeq(null,((function (s__13829__$1,vec__13834,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function (){
var s__13831__$1 = s__13831;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13831__$1);
if(temp__5804__auto____$1){
var s__13831__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13831__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13831__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13833 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13832 = (0);
while(true){
if((i__13832 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13832);
cljs.core.chunk_append(b__13833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13874 = (i__13832 + (1));
i__13832 = G__13874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13833),tailrecursion$priority_map$iter__13828_$_iter__13830(cljs.core.chunk_rest(s__13831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13833),null);
}
} else {
var item = cljs.core.first(s__13831__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13828_$_iter__13830(cljs.core.rest(s__13831__$2)));
}
} else {
return null;
}
break;
}
});})(s__13829__$1,vec__13834,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
,null,null));
});})(s__13829__$1,vec__13834,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__13828(cljs.core.rest(s__13829__$1)));
} else {
var G__13875 = cljs.core.rest(s__13829__$1);
s__13829__$1 = G__13875;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function (unused__10314__auto__){
var self__ = this;
var self__ = this;
var G__13837 = (arguments.length - (1));
switch (G__13837) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args13752){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13752)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__13838 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__13838.cljs$core$IFn$_invoke$arity$1 ? fexpr__13838.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__13838.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__13839(s__13840){
return (new cljs.core.LazySeq(null,(function (){
var s__13840__$1 = s__13840;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13840__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__13845 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13845,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13845,(1),null);
var iterys__5519__auto__ = ((function (s__13840__$1,vec__13845,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__13839_$_iter__13841(s__13842){
return (new cljs.core.LazySeq(null,((function (s__13840__$1,vec__13845,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function (){
var s__13842__$1 = s__13842;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13842__$1);
if(temp__5804__auto____$1){
var s__13842__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13842__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13842__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13844 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13843 = (0);
while(true){
if((i__13843 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13843);
cljs.core.chunk_append(b__13844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__13889 = (i__13843 + (1));
i__13843 = G__13889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13844),tailrecursion$priority_map$iter__13839_$_iter__13841(cljs.core.chunk_rest(s__13842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13844),null);
}
} else {
var item = cljs.core.first(s__13842__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__13839_$_iter__13841(cljs.core.rest(s__13842__$2)));
}
} else {
return null;
}
break;
}
});})(s__13840__$1,vec__13845,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
,null,null));
});})(s__13840__$1,vec__13845,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__13839(cljs.core.rest(s__13840__$1)));
} else {
var G__13890 = cljs.core.rest(s__13840__$1);
s__13840__$1 = G__13890;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__5523__auto__ = (function tailrecursion$priority_map$iter__13848(s__13849){
return (new cljs.core.LazySeq(null,(function (){
var s__13849__$1 = s__13849;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13849__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__13854 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(1),null);
var iterys__5519__auto__ = ((function (s__13849__$1,vec__13854,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__13848_$_iter__13850(s__13851){
return (new cljs.core.LazySeq(null,((function (s__13849__$1,vec__13854,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function (){
var s__13851__$1 = s__13851;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13851__$1);
if(temp__5804__auto____$1){
var s__13851__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13851__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13851__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13853 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13852 = (0);
while(true){
if((i__13852 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__13852);
cljs.core.chunk_append(b__13853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13895 = (i__13852 + (1));
i__13852 = G__13895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13853),tailrecursion$priority_map$iter__13848_$_iter__13850(cljs.core.chunk_rest(s__13851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13853),null);
}
} else {
var item = cljs.core.first(s__13851__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13848_$_iter__13850(cljs.core.rest(s__13851__$2)));
}
} else {
return null;
}
break;
}
});})(s__13849__$1,vec__13854,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
,null,null));
});})(s__13849__$1,vec__13854,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(item_set));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tailrecursion$priority_map$iter__13848(cljs.core.rest(s__13849__$1)));
} else {
var G__13900 = cljs.core.rest(s__13849__$1);
s__13849__$1 = G__13900;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__13857 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__13857) : self__.keyfn.call(null,G__13857));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__13859 = arguments.length;
switch (G__13859) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13910 = arguments.length;
var i__5770__auto___13911 = (0);
while(true){
if((i__5770__auto___13911 < len__5769__auto___13910)){
args__5775__auto__.push((arguments[i__5770__auto___13911]));

var G__13912 = (i__5770__auto___13911 + (1));
i__5770__auto___13911 = G__13912;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__13917 = cljs.core.nnext(in$);
var G__13918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13917;
out = G__13918;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq13860){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13860));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13923 = arguments.length;
var i__5770__auto___13924 = (0);
while(true){
if((i__5770__auto___13924 < len__5769__auto___13923)){
args__5775__auto__.push((arguments[i__5770__auto___13924]));

var G__13925 = (i__5770__auto___13924 + (1));
i__5770__auto___13924 = G__13925;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__13926 = cljs.core.nnext(in$);
var G__13927 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13926;
out = G__13927;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq13861){
var G__13862 = cljs.core.first(seq13861);
var seq13861__$1 = cljs.core.next(seq13861);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13862,seq13861__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13936 = arguments.length;
var i__5770__auto___13937 = (0);
while(true){
if((i__5770__auto___13937 < len__5769__auto___13936)){
args__5775__auto__.push((arguments[i__5770__auto___13937]));

var G__13938 = (i__5770__auto___13937 + (1));
i__5770__auto___13937 = G__13938;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__13939 = cljs.core.nnext(in$);
var G__13940 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13939;
out = G__13940;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq13863){
var G__13864 = cljs.core.first(seq13863);
var seq13863__$1 = cljs.core.next(seq13863);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13864,seq13863__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13941 = arguments.length;
var i__5770__auto___13942 = (0);
while(true){
if((i__5770__auto___13942 < len__5769__auto___13941)){
args__5775__auto__.push((arguments[i__5770__auto___13942]));

var G__13943 = (i__5770__auto___13942 + (1));
i__5770__auto___13942 = G__13943;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__13948 = cljs.core.nnext(in$);
var G__13949 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13948;
out = G__13949;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq13865){
var G__13866 = cljs.core.first(seq13865);
var seq13865__$1 = cljs.core.next(seq13865);
var G__13867 = cljs.core.first(seq13865__$1);
var seq13865__$2 = cljs.core.next(seq13865__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13866,G__13867,seq13865__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
