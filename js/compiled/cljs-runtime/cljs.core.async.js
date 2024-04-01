goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17454 = (function (f,blockable,meta17455){
this.f = f;
this.blockable = blockable;
this.meta17455 = meta17455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17456,meta17455__$1){
var self__ = this;
var _17456__$1 = this;
return (new cljs.core.async.t_cljs$core$async17454(self__.f,self__.blockable,meta17455__$1));
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17456){
var self__ = this;
var _17456__$1 = this;
return self__.meta17455;
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17455","meta17455",-818176457,null)], null);
}));

(cljs.core.async.t_cljs$core$async17454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17454");

(cljs.core.async.t_cljs$core$async17454.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17454.
 */
cljs.core.async.__GT_t_cljs$core$async17454 = (function cljs$core$async$__GT_t_cljs$core$async17454(f,blockable,meta17455){
return (new cljs.core.async.t_cljs$core$async17454(f,blockable,meta17455));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17450 = arguments.length;
switch (G__17450) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17454(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17475 = arguments.length;
switch (G__17475) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17485 = arguments.length;
switch (G__17485) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17493 = arguments.length;
switch (G__17493) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19628 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19628) : fn1.call(null,val_19628));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19628) : fn1.call(null,val_19628));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17502 = arguments.length;
switch (G__17502) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19637 = n;
var x_19638 = (0);
while(true){
if((x_19638 < n__5636__auto___19637)){
(a[x_19638] = x_19638);

var G__19639 = (x_19638 + (1));
x_19638 = G__19639;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17510 = (function (flag,meta17511){
this.flag = flag;
this.meta17511 = meta17511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17512,meta17511__$1){
var self__ = this;
var _17512__$1 = this;
return (new cljs.core.async.t_cljs$core$async17510(self__.flag,meta17511__$1));
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17512){
var self__ = this;
var _17512__$1 = this;
return self__.meta17511;
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17511","meta17511",135459297,null)], null);
}));

(cljs.core.async.t_cljs$core$async17510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17510");

(cljs.core.async.t_cljs$core$async17510.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17510.
 */
cljs.core.async.__GT_t_cljs$core$async17510 = (function cljs$core$async$__GT_t_cljs$core$async17510(flag,meta17511){
return (new cljs.core.async.t_cljs$core$async17510(flag,meta17511));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17510(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17519 = (function (flag,cb,meta17520){
this.flag = flag;
this.cb = cb;
this.meta17520 = meta17520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17521,meta17520__$1){
var self__ = this;
var _17521__$1 = this;
return (new cljs.core.async.t_cljs$core$async17519(self__.flag,self__.cb,meta17520__$1));
}));

(cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17521){
var self__ = this;
var _17521__$1 = this;
return self__.meta17520;
}));

(cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17520","meta17520",-324279271,null)], null);
}));

(cljs.core.async.t_cljs$core$async17519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17519");

(cljs.core.async.t_cljs$core$async17519.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17519.
 */
cljs.core.async.__GT_t_cljs$core$async17519 = (function cljs$core$async$__GT_t_cljs$core$async17519(flag,cb,meta17520){
return (new cljs.core.async.t_cljs$core$async17519(flag,cb,meta17520));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17519(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17532_SHARP_){
var G__17537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17532_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17537) : fret.call(null,G__17537));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17533_SHARP_){
var G__17538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17533_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17538) : fret.call(null,G__17538));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19648 = (i + (1));
i = G__19648;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19651 = arguments.length;
var i__5770__auto___19652 = (0);
while(true){
if((i__5770__auto___19652 < len__5769__auto___19651)){
args__5775__auto__.push((arguments[i__5770__auto___19652]));

var G__19653 = (i__5770__auto___19652 + (1));
i__5770__auto___19652 = G__19653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17542){
var map__17543 = p__17542;
var map__17543__$1 = cljs.core.__destructure_map(map__17543);
var opts = map__17543__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17540){
var G__17541 = cljs.core.first(seq17540);
var seq17540__$1 = cljs.core.next(seq17540);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17541,seq17540__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17549 = arguments.length;
switch (G__17549) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17281__auto___19661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17600){
var state_val_17601 = (state_17600[(1)]);
if((state_val_17601 === (7))){
var inst_17596 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17603_19664 = state_17600__$1;
(statearr_17603_19664[(2)] = inst_17596);

(statearr_17603_19664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (1))){
var state_17600__$1 = state_17600;
var statearr_17604_19665 = state_17600__$1;
(statearr_17604_19665[(2)] = null);

(statearr_17604_19665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (4))){
var inst_17578 = (state_17600[(7)]);
var inst_17578__$1 = (state_17600[(2)]);
var inst_17579 = (inst_17578__$1 == null);
var state_17600__$1 = (function (){var statearr_17605 = state_17600;
(statearr_17605[(7)] = inst_17578__$1);

return statearr_17605;
})();
if(cljs.core.truth_(inst_17579)){
var statearr_17606_19666 = state_17600__$1;
(statearr_17606_19666[(1)] = (5));

} else {
var statearr_17607_19667 = state_17600__$1;
(statearr_17607_19667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (13))){
var state_17600__$1 = state_17600;
var statearr_17609_19668 = state_17600__$1;
(statearr_17609_19668[(2)] = null);

(statearr_17609_19668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (6))){
var inst_17578 = (state_17600[(7)]);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17600__$1,(11),to,inst_17578);
} else {
if((state_val_17601 === (3))){
var inst_17598 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17600__$1,inst_17598);
} else {
if((state_val_17601 === (12))){
var state_17600__$1 = state_17600;
var statearr_17614_19670 = state_17600__$1;
(statearr_17614_19670[(2)] = null);

(statearr_17614_19670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (2))){
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17600__$1,(4),from);
} else {
if((state_val_17601 === (11))){
var inst_17588 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
if(cljs.core.truth_(inst_17588)){
var statearr_17623_19673 = state_17600__$1;
(statearr_17623_19673[(1)] = (12));

} else {
var statearr_17624_19674 = state_17600__$1;
(statearr_17624_19674[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (9))){
var state_17600__$1 = state_17600;
var statearr_17630_19675 = state_17600__$1;
(statearr_17630_19675[(2)] = null);

(statearr_17630_19675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (5))){
var state_17600__$1 = state_17600;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17636_19677 = state_17600__$1;
(statearr_17636_19677[(1)] = (8));

} else {
var statearr_17637_19678 = state_17600__$1;
(statearr_17637_19678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (14))){
var inst_17594 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17638_19679 = state_17600__$1;
(statearr_17638_19679[(2)] = inst_17594);

(statearr_17638_19679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (10))){
var inst_17585 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17639_19680 = state_17600__$1;
(statearr_17639_19680[(2)] = inst_17585);

(statearr_17639_19680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (8))){
var inst_17582 = cljs.core.async.close_BANG_(to);
var state_17600__$1 = state_17600;
var statearr_17640_19681 = state_17600__$1;
(statearr_17640_19681[(2)] = inst_17582);

(statearr_17640_19681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_17641 = [null,null,null,null,null,null,null,null];
(statearr_17641[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_17641[(1)] = (1));

return statearr_17641;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17600){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17600);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17643){var ex__17103__auto__ = e17643;
var statearr_17644_19682 = state_17600;
(statearr_17644_19682[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17600[(4)]))){
var statearr_17645_19684 = state_17600;
(statearr_17645_19684[(1)] = cljs.core.first((state_17600[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19686 = state_17600;
state_17600 = G__19686;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_17646 = f__17282__auto__();
(statearr_17646[(6)] = c__17281__auto___19661);

return statearr_17646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17648){
var vec__17649 = p__17648;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17649,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17649,(1),null);
var job = vec__17649;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17281__auto___19687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17657){
var state_val_17658 = (state_17657[(1)]);
if((state_val_17658 === (1))){
var state_17657__$1 = state_17657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17657__$1,(2),res,v);
} else {
if((state_val_17658 === (2))){
var inst_17653 = (state_17657[(2)]);
var inst_17654 = cljs.core.async.close_BANG_(res);
var state_17657__$1 = (function (){var statearr_17659 = state_17657;
(statearr_17659[(7)] = inst_17653);

return statearr_17659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17657__$1,inst_17654);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17660 = [null,null,null,null,null,null,null,null];
(statearr_17660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17660[(1)] = (1));

return statearr_17660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17657){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17657);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17661){var ex__17103__auto__ = e17661;
var statearr_17662_19688 = state_17657;
(statearr_17662_19688[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17657[(4)]))){
var statearr_17664_19689 = state_17657;
(statearr_17664_19689[(1)] = cljs.core.first((state_17657[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19690 = state_17657;
state_17657 = G__19690;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_17665 = f__17282__auto__();
(statearr_17665[(6)] = c__17281__auto___19687);

return statearr_17665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17666){
var vec__17667 = p__17666;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17667,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17667,(1),null);
var job = vec__17667;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19697 = n;
var __19698 = (0);
while(true){
if((__19698 < n__5636__auto___19697)){
var G__17670_19699 = type;
var G__17670_19700__$1 = (((G__17670_19699 instanceof cljs.core.Keyword))?G__17670_19699.fqn:null);
switch (G__17670_19700__$1) {
case "compute":
var c__17281__auto___19702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19698,c__17281__auto___19702,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async){
return (function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = ((function (__19698,c__17281__auto___19702,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async){
return (function (state_17684){
var state_val_17685 = (state_17684[(1)]);
if((state_val_17685 === (1))){
var state_17684__$1 = state_17684;
var statearr_17686_19703 = state_17684__$1;
(statearr_17686_19703[(2)] = null);

(statearr_17686_19703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (2))){
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17684__$1,(4),jobs);
} else {
if((state_val_17685 === (3))){
var inst_17682 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17684__$1,inst_17682);
} else {
if((state_val_17685 === (4))){
var inst_17673 = (state_17684[(2)]);
var inst_17675 = process__$1(inst_17673);
var state_17684__$1 = state_17684;
if(cljs.core.truth_(inst_17675)){
var statearr_17687_19705 = state_17684__$1;
(statearr_17687_19705[(1)] = (5));

} else {
var statearr_17688_19706 = state_17684__$1;
(statearr_17688_19706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (5))){
var state_17684__$1 = state_17684;
var statearr_17690_19707 = state_17684__$1;
(statearr_17690_19707[(2)] = null);

(statearr_17690_19707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (6))){
var state_17684__$1 = state_17684;
var statearr_17691_19708 = state_17684__$1;
(statearr_17691_19708[(2)] = null);

(statearr_17691_19708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (7))){
var inst_17680 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
var statearr_17692_19709 = state_17684__$1;
(statearr_17692_19709[(2)] = inst_17680);

(statearr_17692_19709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19698,c__17281__auto___19702,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async))
;
return ((function (__19698,switch__17099__auto__,c__17281__auto___19702,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17693 = [null,null,null,null,null,null,null];
(statearr_17693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17693[(1)] = (1));

return statearr_17693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17684){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17684);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17694){var ex__17103__auto__ = e17694;
var statearr_17695_19716 = state_17684;
(statearr_17695_19716[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17684[(4)]))){
var statearr_17696_19717 = state_17684;
(statearr_17696_19717[(1)] = cljs.core.first((state_17684[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19718 = state_17684;
state_17684 = G__19718;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
;})(__19698,switch__17099__auto__,c__17281__auto___19702,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async))
})();
var state__17283__auto__ = (function (){var statearr_17697 = f__17282__auto__();
(statearr_17697[(6)] = c__17281__auto___19702);

return statearr_17697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
});})(__19698,c__17281__auto___19702,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async))
);


break;
case "async":
var c__17281__auto___19722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19698,c__17281__auto___19722,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async){
return (function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = ((function (__19698,c__17281__auto___19722,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async){
return (function (state_17711){
var state_val_17712 = (state_17711[(1)]);
if((state_val_17712 === (1))){
var state_17711__$1 = state_17711;
var statearr_17713_19723 = state_17711__$1;
(statearr_17713_19723[(2)] = null);

(statearr_17713_19723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (2))){
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17711__$1,(4),jobs);
} else {
if((state_val_17712 === (3))){
var inst_17709 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17711__$1,inst_17709);
} else {
if((state_val_17712 === (4))){
var inst_17701 = (state_17711[(2)]);
var inst_17702 = async(inst_17701);
var state_17711__$1 = state_17711;
if(cljs.core.truth_(inst_17702)){
var statearr_17715_19725 = state_17711__$1;
(statearr_17715_19725[(1)] = (5));

} else {
var statearr_17716_19729 = state_17711__$1;
(statearr_17716_19729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (5))){
var state_17711__$1 = state_17711;
var statearr_17717_19730 = state_17711__$1;
(statearr_17717_19730[(2)] = null);

(statearr_17717_19730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (6))){
var state_17711__$1 = state_17711;
var statearr_17718_19732 = state_17711__$1;
(statearr_17718_19732[(2)] = null);

(statearr_17718_19732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17712 === (7))){
var inst_17707 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
var statearr_17719_19734 = state_17711__$1;
(statearr_17719_19734[(2)] = inst_17707);

(statearr_17719_19734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19698,c__17281__auto___19722,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async))
;
return ((function (__19698,switch__17099__auto__,c__17281__auto___19722,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17720 = [null,null,null,null,null,null,null];
(statearr_17720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17720[(1)] = (1));

return statearr_17720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17711){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17711);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17721){var ex__17103__auto__ = e17721;
var statearr_17722_19735 = state_17711;
(statearr_17722_19735[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17711[(4)]))){
var statearr_17723_19736 = state_17711;
(statearr_17723_19736[(1)] = cljs.core.first((state_17711[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19737 = state_17711;
state_17711 = G__19737;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
;})(__19698,switch__17099__auto__,c__17281__auto___19722,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async))
})();
var state__17283__auto__ = (function (){var statearr_17725 = f__17282__auto__();
(statearr_17725[(6)] = c__17281__auto___19722);

return statearr_17725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
});})(__19698,c__17281__auto___19722,G__17670_19699,G__17670_19700__$1,n__5636__auto___19697,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17670_19700__$1)].join('')));

}

var G__19744 = (__19698 + (1));
__19698 = G__19744;
continue;
} else {
}
break;
}

var c__17281__auto___19745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17748){
var state_val_17749 = (state_17748[(1)]);
if((state_val_17749 === (7))){
var inst_17744 = (state_17748[(2)]);
var state_17748__$1 = state_17748;
var statearr_17750_19746 = state_17748__$1;
(statearr_17750_19746[(2)] = inst_17744);

(statearr_17750_19746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (1))){
var state_17748__$1 = state_17748;
var statearr_17751_19747 = state_17748__$1;
(statearr_17751_19747[(2)] = null);

(statearr_17751_19747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (4))){
var inst_17728 = (state_17748[(7)]);
var inst_17728__$1 = (state_17748[(2)]);
var inst_17729 = (inst_17728__$1 == null);
var state_17748__$1 = (function (){var statearr_17753 = state_17748;
(statearr_17753[(7)] = inst_17728__$1);

return statearr_17753;
})();
if(cljs.core.truth_(inst_17729)){
var statearr_17754_19748 = state_17748__$1;
(statearr_17754_19748[(1)] = (5));

} else {
var statearr_17755_19749 = state_17748__$1;
(statearr_17755_19749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (6))){
var inst_17728 = (state_17748[(7)]);
var inst_17733 = (state_17748[(8)]);
var inst_17733__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17735 = [inst_17728,inst_17733__$1];
var inst_17736 = (new cljs.core.PersistentVector(null,2,(5),inst_17734,inst_17735,null));
var state_17748__$1 = (function (){var statearr_17756 = state_17748;
(statearr_17756[(8)] = inst_17733__$1);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17748__$1,(8),jobs,inst_17736);
} else {
if((state_val_17749 === (3))){
var inst_17746 = (state_17748[(2)]);
var state_17748__$1 = state_17748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17748__$1,inst_17746);
} else {
if((state_val_17749 === (2))){
var state_17748__$1 = state_17748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17748__$1,(4),from);
} else {
if((state_val_17749 === (9))){
var inst_17740 = (state_17748[(2)]);
var state_17748__$1 = (function (){var statearr_17757 = state_17748;
(statearr_17757[(9)] = inst_17740);

return statearr_17757;
})();
var statearr_17758_19757 = state_17748__$1;
(statearr_17758_19757[(2)] = null);

(statearr_17758_19757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (5))){
var inst_17731 = cljs.core.async.close_BANG_(jobs);
var state_17748__$1 = state_17748;
var statearr_17759_19758 = state_17748__$1;
(statearr_17759_19758[(2)] = inst_17731);

(statearr_17759_19758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (8))){
var inst_17733 = (state_17748[(8)]);
var inst_17738 = (state_17748[(2)]);
var state_17748__$1 = (function (){var statearr_17761 = state_17748;
(statearr_17761[(10)] = inst_17738);

return statearr_17761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17748__$1,(9),results,inst_17733);
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17762[(1)] = (1));

return statearr_17762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17748){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17748);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17763){var ex__17103__auto__ = e17763;
var statearr_17764_19759 = state_17748;
(statearr_17764_19759[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17748[(4)]))){
var statearr_17765_19760 = state_17748;
(statearr_17765_19760[(1)] = cljs.core.first((state_17748[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19761 = state_17748;
state_17748 = G__19761;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_17766 = f__17282__auto__();
(statearr_17766[(6)] = c__17281__auto___19745);

return statearr_17766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


var c__17281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17806){
var state_val_17807 = (state_17806[(1)]);
if((state_val_17807 === (7))){
var inst_17802 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17808_19763 = state_17806__$1;
(statearr_17808_19763[(2)] = inst_17802);

(statearr_17808_19763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (20))){
var state_17806__$1 = state_17806;
var statearr_17809_19764 = state_17806__$1;
(statearr_17809_19764[(2)] = null);

(statearr_17809_19764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (1))){
var state_17806__$1 = state_17806;
var statearr_17810_19770 = state_17806__$1;
(statearr_17810_19770[(2)] = null);

(statearr_17810_19770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (4))){
var inst_17770 = (state_17806[(7)]);
var inst_17770__$1 = (state_17806[(2)]);
var inst_17771 = (inst_17770__$1 == null);
var state_17806__$1 = (function (){var statearr_17812 = state_17806;
(statearr_17812[(7)] = inst_17770__$1);

return statearr_17812;
})();
if(cljs.core.truth_(inst_17771)){
var statearr_17813_19771 = state_17806__$1;
(statearr_17813_19771[(1)] = (5));

} else {
var statearr_17814_19772 = state_17806__$1;
(statearr_17814_19772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (15))){
var inst_17783 = (state_17806[(8)]);
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17806__$1,(18),to,inst_17783);
} else {
if((state_val_17807 === (21))){
var inst_17797 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17815_19773 = state_17806__$1;
(statearr_17815_19773[(2)] = inst_17797);

(statearr_17815_19773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (13))){
var inst_17799 = (state_17806[(2)]);
var state_17806__$1 = (function (){var statearr_17816 = state_17806;
(statearr_17816[(9)] = inst_17799);

return statearr_17816;
})();
var statearr_17817_19774 = state_17806__$1;
(statearr_17817_19774[(2)] = null);

(statearr_17817_19774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (6))){
var inst_17770 = (state_17806[(7)]);
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17806__$1,(11),inst_17770);
} else {
if((state_val_17807 === (17))){
var inst_17792 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
if(cljs.core.truth_(inst_17792)){
var statearr_17818_19775 = state_17806__$1;
(statearr_17818_19775[(1)] = (19));

} else {
var statearr_17819_19776 = state_17806__$1;
(statearr_17819_19776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (3))){
var inst_17804 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17806__$1,inst_17804);
} else {
if((state_val_17807 === (12))){
var inst_17780 = (state_17806[(10)]);
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17806__$1,(14),inst_17780);
} else {
if((state_val_17807 === (2))){
var state_17806__$1 = state_17806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17806__$1,(4),results);
} else {
if((state_val_17807 === (19))){
var state_17806__$1 = state_17806;
var statearr_17820_19782 = state_17806__$1;
(statearr_17820_19782[(2)] = null);

(statearr_17820_19782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (11))){
var inst_17780 = (state_17806[(2)]);
var state_17806__$1 = (function (){var statearr_17821 = state_17806;
(statearr_17821[(10)] = inst_17780);

return statearr_17821;
})();
var statearr_17822_19788 = state_17806__$1;
(statearr_17822_19788[(2)] = null);

(statearr_17822_19788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (9))){
var state_17806__$1 = state_17806;
var statearr_17824_19789 = state_17806__$1;
(statearr_17824_19789[(2)] = null);

(statearr_17824_19789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (5))){
var state_17806__$1 = state_17806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17825_19790 = state_17806__$1;
(statearr_17825_19790[(1)] = (8));

} else {
var statearr_17826_19791 = state_17806__$1;
(statearr_17826_19791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (14))){
var inst_17785 = (state_17806[(11)]);
var inst_17783 = (state_17806[(8)]);
var inst_17783__$1 = (state_17806[(2)]);
var inst_17784 = (inst_17783__$1 == null);
var inst_17785__$1 = cljs.core.not(inst_17784);
var state_17806__$1 = (function (){var statearr_17827 = state_17806;
(statearr_17827[(11)] = inst_17785__$1);

(statearr_17827[(8)] = inst_17783__$1);

return statearr_17827;
})();
if(inst_17785__$1){
var statearr_17828_19792 = state_17806__$1;
(statearr_17828_19792[(1)] = (15));

} else {
var statearr_17829_19793 = state_17806__$1;
(statearr_17829_19793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (16))){
var inst_17785 = (state_17806[(11)]);
var state_17806__$1 = state_17806;
var statearr_17830_19795 = state_17806__$1;
(statearr_17830_19795[(2)] = inst_17785);

(statearr_17830_19795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (10))){
var inst_17777 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17831_19798 = state_17806__$1;
(statearr_17831_19798[(2)] = inst_17777);

(statearr_17831_19798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (18))){
var inst_17788 = (state_17806[(2)]);
var state_17806__$1 = state_17806;
var statearr_17832_19799 = state_17806__$1;
(statearr_17832_19799[(2)] = inst_17788);

(statearr_17832_19799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17807 === (8))){
var inst_17774 = cljs.core.async.close_BANG_(to);
var state_17806__$1 = state_17806;
var statearr_17834_19800 = state_17806__$1;
(statearr_17834_19800[(2)] = inst_17774);

(statearr_17834_19800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17835 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17835[(1)] = (1));

return statearr_17835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17806){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17806);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17836){var ex__17103__auto__ = e17836;
var statearr_17837_19802 = state_17806;
(statearr_17837_19802[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17806[(4)]))){
var statearr_17838_19803 = state_17806;
(statearr_17838_19803[(1)] = cljs.core.first((state_17806[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19804 = state_17806;
state_17806 = G__19804;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_17839 = f__17282__auto__();
(statearr_17839[(6)] = c__17281__auto__);

return statearr_17839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));

return c__17281__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17842 = arguments.length;
switch (G__17842) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17845 = arguments.length;
switch (G__17845) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17848 = arguments.length;
switch (G__17848) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17281__auto___19823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17875){
var state_val_17876 = (state_17875[(1)]);
if((state_val_17876 === (7))){
var inst_17871 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
var statearr_17877_19831 = state_17875__$1;
(statearr_17877_19831[(2)] = inst_17871);

(statearr_17877_19831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (1))){
var state_17875__$1 = state_17875;
var statearr_17879_19832 = state_17875__$1;
(statearr_17879_19832[(2)] = null);

(statearr_17879_19832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (4))){
var inst_17852 = (state_17875[(7)]);
var inst_17852__$1 = (state_17875[(2)]);
var inst_17853 = (inst_17852__$1 == null);
var state_17875__$1 = (function (){var statearr_17880 = state_17875;
(statearr_17880[(7)] = inst_17852__$1);

return statearr_17880;
})();
if(cljs.core.truth_(inst_17853)){
var statearr_17881_19833 = state_17875__$1;
(statearr_17881_19833[(1)] = (5));

} else {
var statearr_17882_19834 = state_17875__$1;
(statearr_17882_19834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (13))){
var state_17875__$1 = state_17875;
var statearr_17883_19838 = state_17875__$1;
(statearr_17883_19838[(2)] = null);

(statearr_17883_19838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (6))){
var inst_17852 = (state_17875[(7)]);
var inst_17858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17852) : p.call(null,inst_17852));
var state_17875__$1 = state_17875;
if(cljs.core.truth_(inst_17858)){
var statearr_17884_19839 = state_17875__$1;
(statearr_17884_19839[(1)] = (9));

} else {
var statearr_17885_19840 = state_17875__$1;
(statearr_17885_19840[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (3))){
var inst_17873 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17875__$1,inst_17873);
} else {
if((state_val_17876 === (12))){
var state_17875__$1 = state_17875;
var statearr_17886_19841 = state_17875__$1;
(statearr_17886_19841[(2)] = null);

(statearr_17886_19841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (2))){
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17875__$1,(4),ch);
} else {
if((state_val_17876 === (11))){
var inst_17852 = (state_17875[(7)]);
var inst_17862 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17875__$1,(8),inst_17862,inst_17852);
} else {
if((state_val_17876 === (9))){
var state_17875__$1 = state_17875;
var statearr_17888_19842 = state_17875__$1;
(statearr_17888_19842[(2)] = tc);

(statearr_17888_19842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (5))){
var inst_17855 = cljs.core.async.close_BANG_(tc);
var inst_17856 = cljs.core.async.close_BANG_(fc);
var state_17875__$1 = (function (){var statearr_17889 = state_17875;
(statearr_17889[(8)] = inst_17855);

return statearr_17889;
})();
var statearr_17890_19850 = state_17875__$1;
(statearr_17890_19850[(2)] = inst_17856);

(statearr_17890_19850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (14))){
var inst_17869 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
var statearr_17891_19851 = state_17875__$1;
(statearr_17891_19851[(2)] = inst_17869);

(statearr_17891_19851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (10))){
var state_17875__$1 = state_17875;
var statearr_17892_19856 = state_17875__$1;
(statearr_17892_19856[(2)] = fc);

(statearr_17892_19856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17876 === (8))){
var inst_17864 = (state_17875[(2)]);
var state_17875__$1 = state_17875;
if(cljs.core.truth_(inst_17864)){
var statearr_17893_19860 = state_17875__$1;
(statearr_17893_19860[(1)] = (12));

} else {
var statearr_17894_19861 = state_17875__$1;
(statearr_17894_19861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_17896 = [null,null,null,null,null,null,null,null,null];
(statearr_17896[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_17896[(1)] = (1));

return statearr_17896;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17875){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17875);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17897){var ex__17103__auto__ = e17897;
var statearr_17898_19868 = state_17875;
(statearr_17898_19868[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17875[(4)]))){
var statearr_17899_19869 = state_17875;
(statearr_17899_19869[(1)] = cljs.core.first((state_17875[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19870 = state_17875;
state_17875 = G__19870;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_17900 = f__17282__auto__();
(statearr_17900[(6)] = c__17281__auto___19823);

return statearr_17900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17923){
var state_val_17924 = (state_17923[(1)]);
if((state_val_17924 === (7))){
var inst_17919 = (state_17923[(2)]);
var state_17923__$1 = state_17923;
var statearr_17926_19874 = state_17923__$1;
(statearr_17926_19874[(2)] = inst_17919);

(statearr_17926_19874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (1))){
var inst_17902 = init;
var inst_17903 = inst_17902;
var state_17923__$1 = (function (){var statearr_17927 = state_17923;
(statearr_17927[(7)] = inst_17903);

return statearr_17927;
})();
var statearr_17928_19875 = state_17923__$1;
(statearr_17928_19875[(2)] = null);

(statearr_17928_19875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (4))){
var inst_17906 = (state_17923[(8)]);
var inst_17906__$1 = (state_17923[(2)]);
var inst_17907 = (inst_17906__$1 == null);
var state_17923__$1 = (function (){var statearr_17929 = state_17923;
(statearr_17929[(8)] = inst_17906__$1);

return statearr_17929;
})();
if(cljs.core.truth_(inst_17907)){
var statearr_17930_19876 = state_17923__$1;
(statearr_17930_19876[(1)] = (5));

} else {
var statearr_17932_19877 = state_17923__$1;
(statearr_17932_19877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (6))){
var inst_17906 = (state_17923[(8)]);
var inst_17910 = (state_17923[(9)]);
var inst_17903 = (state_17923[(7)]);
var inst_17910__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17903,inst_17906) : f.call(null,inst_17903,inst_17906));
var inst_17911 = cljs.core.reduced_QMARK_(inst_17910__$1);
var state_17923__$1 = (function (){var statearr_17933 = state_17923;
(statearr_17933[(9)] = inst_17910__$1);

return statearr_17933;
})();
if(inst_17911){
var statearr_17934_19881 = state_17923__$1;
(statearr_17934_19881[(1)] = (8));

} else {
var statearr_17935_19882 = state_17923__$1;
(statearr_17935_19882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (3))){
var inst_17921 = (state_17923[(2)]);
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17923__$1,inst_17921);
} else {
if((state_val_17924 === (2))){
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17923__$1,(4),ch);
} else {
if((state_val_17924 === (9))){
var inst_17910 = (state_17923[(9)]);
var inst_17903 = inst_17910;
var state_17923__$1 = (function (){var statearr_17936 = state_17923;
(statearr_17936[(7)] = inst_17903);

return statearr_17936;
})();
var statearr_17937_19883 = state_17923__$1;
(statearr_17937_19883[(2)] = null);

(statearr_17937_19883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (5))){
var inst_17903 = (state_17923[(7)]);
var state_17923__$1 = state_17923;
var statearr_17939_19884 = state_17923__$1;
(statearr_17939_19884[(2)] = inst_17903);

(statearr_17939_19884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (10))){
var inst_17917 = (state_17923[(2)]);
var state_17923__$1 = state_17923;
var statearr_17940_19885 = state_17923__$1;
(statearr_17940_19885[(2)] = inst_17917);

(statearr_17940_19885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17924 === (8))){
var inst_17910 = (state_17923[(9)]);
var inst_17913 = cljs.core.deref(inst_17910);
var state_17923__$1 = state_17923;
var statearr_17941_19886 = state_17923__$1;
(statearr_17941_19886[(2)] = inst_17913);

(statearr_17941_19886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17100__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17100__auto____0 = (function (){
var statearr_17942 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17942[(0)] = cljs$core$async$reduce_$_state_machine__17100__auto__);

(statearr_17942[(1)] = (1));

return statearr_17942;
});
var cljs$core$async$reduce_$_state_machine__17100__auto____1 = (function (state_17923){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17923);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17943){var ex__17103__auto__ = e17943;
var statearr_17944_19887 = state_17923;
(statearr_17944_19887[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17923[(4)]))){
var statearr_17945_19888 = state_17923;
(statearr_17945_19888[(1)] = cljs.core.first((state_17923[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19890 = state_17923;
state_17923 = G__19890;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17100__auto__ = function(state_17923){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17100__auto____1.call(this,state_17923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17100__auto____0;
cljs$core$async$reduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17100__auto____1;
return cljs$core$async$reduce_$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_17947 = f__17282__auto__();
(statearr_17947[(6)] = c__17281__auto__);

return statearr_17947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));

return c__17281__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17953){
var state_val_17954 = (state_17953[(1)]);
if((state_val_17954 === (1))){
var inst_17948 = cljs.core.async.reduce(f__$1,init,ch);
var state_17953__$1 = state_17953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17953__$1,(2),inst_17948);
} else {
if((state_val_17954 === (2))){
var inst_17950 = (state_17953[(2)]);
var inst_17951 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17950) : f__$1.call(null,inst_17950));
var state_17953__$1 = state_17953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17953__$1,inst_17951);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17100__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17100__auto____0 = (function (){
var statearr_17956 = [null,null,null,null,null,null,null];
(statearr_17956[(0)] = cljs$core$async$transduce_$_state_machine__17100__auto__);

(statearr_17956[(1)] = (1));

return statearr_17956;
});
var cljs$core$async$transduce_$_state_machine__17100__auto____1 = (function (state_17953){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17953);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17957){var ex__17103__auto__ = e17957;
var statearr_17958_19894 = state_17953;
(statearr_17958_19894[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17953[(4)]))){
var statearr_17959_19895 = state_17953;
(statearr_17959_19895[(1)] = cljs.core.first((state_17953[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19896 = state_17953;
state_17953 = G__19896;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17100__auto__ = function(state_17953){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17100__auto____1.call(this,state_17953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17100__auto____0;
cljs$core$async$transduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17100__auto____1;
return cljs$core$async$transduce_$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_17960 = f__17282__auto__();
(statearr_17960[(6)] = c__17281__auto__);

return statearr_17960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));

return c__17281__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17963 = arguments.length;
switch (G__17963) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_17988){
var state_val_17989 = (state_17988[(1)]);
if((state_val_17989 === (7))){
var inst_17970 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_17991_19898 = state_17988__$1;
(statearr_17991_19898[(2)] = inst_17970);

(statearr_17991_19898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (1))){
var inst_17964 = cljs.core.seq(coll);
var inst_17965 = inst_17964;
var state_17988__$1 = (function (){var statearr_17992 = state_17988;
(statearr_17992[(7)] = inst_17965);

return statearr_17992;
})();
var statearr_17993_19899 = state_17988__$1;
(statearr_17993_19899[(2)] = null);

(statearr_17993_19899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (4))){
var inst_17965 = (state_17988[(7)]);
var inst_17968 = cljs.core.first(inst_17965);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17988__$1,(7),ch,inst_17968);
} else {
if((state_val_17989 === (13))){
var inst_17982 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_17994_19900 = state_17988__$1;
(statearr_17994_19900[(2)] = inst_17982);

(statearr_17994_19900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (6))){
var inst_17973 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
if(cljs.core.truth_(inst_17973)){
var statearr_17995_19901 = state_17988__$1;
(statearr_17995_19901[(1)] = (8));

} else {
var statearr_17996_19902 = state_17988__$1;
(statearr_17996_19902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (3))){
var inst_17986 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17988__$1,inst_17986);
} else {
if((state_val_17989 === (12))){
var state_17988__$1 = state_17988;
var statearr_17998_19903 = state_17988__$1;
(statearr_17998_19903[(2)] = null);

(statearr_17998_19903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (2))){
var inst_17965 = (state_17988[(7)]);
var state_17988__$1 = state_17988;
if(cljs.core.truth_(inst_17965)){
var statearr_17999_19904 = state_17988__$1;
(statearr_17999_19904[(1)] = (4));

} else {
var statearr_18000_19905 = state_17988__$1;
(statearr_18000_19905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (11))){
var inst_17979 = cljs.core.async.close_BANG_(ch);
var state_17988__$1 = state_17988;
var statearr_18001_19906 = state_17988__$1;
(statearr_18001_19906[(2)] = inst_17979);

(statearr_18001_19906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (9))){
var state_17988__$1 = state_17988;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18002_19907 = state_17988__$1;
(statearr_18002_19907[(1)] = (11));

} else {
var statearr_18003_19908 = state_17988__$1;
(statearr_18003_19908[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (5))){
var inst_17965 = (state_17988[(7)]);
var state_17988__$1 = state_17988;
var statearr_18004_19909 = state_17988__$1;
(statearr_18004_19909[(2)] = inst_17965);

(statearr_18004_19909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (10))){
var inst_17984 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_18005_19910 = state_17988__$1;
(statearr_18005_19910[(2)] = inst_17984);

(statearr_18005_19910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (8))){
var inst_17965 = (state_17988[(7)]);
var inst_17975 = cljs.core.next(inst_17965);
var inst_17965__$1 = inst_17975;
var state_17988__$1 = (function (){var statearr_18007 = state_17988;
(statearr_18007[(7)] = inst_17965__$1);

return statearr_18007;
})();
var statearr_18008_19911 = state_17988__$1;
(statearr_18008_19911[(2)] = null);

(statearr_18008_19911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18009 = [null,null,null,null,null,null,null,null];
(statearr_18009[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18009[(1)] = (1));

return statearr_18009;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17988){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17988);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18010){var ex__17103__auto__ = e18010;
var statearr_18011_19912 = state_17988;
(statearr_18011_19912[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17988[(4)]))){
var statearr_18012_19913 = state_17988;
(statearr_18012_19913[(1)] = cljs.core.first((state_17988[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19914 = state_17988;
state_17988 = G__19914;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_18014 = f__17282__auto__();
(statearr_18014[(6)] = c__17281__auto__);

return statearr_18014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));

return c__17281__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18016 = arguments.length;
switch (G__18016) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19916 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19916(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19918 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19918(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19923 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19923(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19925 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19925(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18022 = (function (ch,cs,meta18023){
this.ch = ch;
this.cs = cs;
this.meta18023 = meta18023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18024,meta18023__$1){
var self__ = this;
var _18024__$1 = this;
return (new cljs.core.async.t_cljs$core$async18022(self__.ch,self__.cs,meta18023__$1));
}));

(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18024){
var self__ = this;
var _18024__$1 = this;
return self__.meta18023;
}));

(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18023","meta18023",243996671,null)], null);
}));

(cljs.core.async.t_cljs$core$async18022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18022");

(cljs.core.async.t_cljs$core$async18022.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18022.
 */
cljs.core.async.__GT_t_cljs$core$async18022 = (function cljs$core$async$__GT_t_cljs$core$async18022(ch,cs,meta18023){
return (new cljs.core.async.t_cljs$core$async18022(ch,cs,meta18023));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18022(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17281__auto___19929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_18169){
var state_val_18170 = (state_18169[(1)]);
if((state_val_18170 === (7))){
var inst_18164 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18175_19930 = state_18169__$1;
(statearr_18175_19930[(2)] = inst_18164);

(statearr_18175_19930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (20))){
var inst_18060 = (state_18169[(7)]);
var inst_18072 = cljs.core.first(inst_18060);
var inst_18073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18072,(0),null);
var inst_18074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18072,(1),null);
var state_18169__$1 = (function (){var statearr_18179 = state_18169;
(statearr_18179[(8)] = inst_18073);

return statearr_18179;
})();
if(cljs.core.truth_(inst_18074)){
var statearr_18181_19931 = state_18169__$1;
(statearr_18181_19931[(1)] = (22));

} else {
var statearr_18182_19932 = state_18169__$1;
(statearr_18182_19932[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (27))){
var inst_18105 = (state_18169[(9)]);
var inst_18112 = (state_18169[(10)]);
var inst_18107 = (state_18169[(11)]);
var inst_18029 = (state_18169[(12)]);
var inst_18112__$1 = cljs.core._nth(inst_18105,inst_18107);
var inst_18114 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18112__$1,inst_18029,done);
var state_18169__$1 = (function (){var statearr_18187 = state_18169;
(statearr_18187[(10)] = inst_18112__$1);

return statearr_18187;
})();
if(cljs.core.truth_(inst_18114)){
var statearr_18188_19933 = state_18169__$1;
(statearr_18188_19933[(1)] = (30));

} else {
var statearr_18191_19934 = state_18169__$1;
(statearr_18191_19934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (1))){
var state_18169__$1 = state_18169;
var statearr_18193_19938 = state_18169__$1;
(statearr_18193_19938[(2)] = null);

(statearr_18193_19938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (24))){
var inst_18060 = (state_18169[(7)]);
var inst_18079 = (state_18169[(2)]);
var inst_18080 = cljs.core.next(inst_18060);
var inst_18038 = inst_18080;
var inst_18039 = null;
var inst_18040 = (0);
var inst_18041 = (0);
var state_18169__$1 = (function (){var statearr_18196 = state_18169;
(statearr_18196[(13)] = inst_18040);

(statearr_18196[(14)] = inst_18039);

(statearr_18196[(15)] = inst_18079);

(statearr_18196[(16)] = inst_18038);

(statearr_18196[(17)] = inst_18041);

return statearr_18196;
})();
var statearr_18199_19939 = state_18169__$1;
(statearr_18199_19939[(2)] = null);

(statearr_18199_19939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (39))){
var state_18169__$1 = state_18169;
var statearr_18207_19940 = state_18169__$1;
(statearr_18207_19940[(2)] = null);

(statearr_18207_19940[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (4))){
var inst_18029 = (state_18169[(12)]);
var inst_18029__$1 = (state_18169[(2)]);
var inst_18030 = (inst_18029__$1 == null);
var state_18169__$1 = (function (){var statearr_18208 = state_18169;
(statearr_18208[(12)] = inst_18029__$1);

return statearr_18208;
})();
if(cljs.core.truth_(inst_18030)){
var statearr_18210_19941 = state_18169__$1;
(statearr_18210_19941[(1)] = (5));

} else {
var statearr_18211_19942 = state_18169__$1;
(statearr_18211_19942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (15))){
var inst_18040 = (state_18169[(13)]);
var inst_18039 = (state_18169[(14)]);
var inst_18038 = (state_18169[(16)]);
var inst_18041 = (state_18169[(17)]);
var inst_18056 = (state_18169[(2)]);
var inst_18057 = (inst_18041 + (1));
var tmp18201 = inst_18040;
var tmp18202 = inst_18039;
var tmp18203 = inst_18038;
var inst_18038__$1 = tmp18203;
var inst_18039__$1 = tmp18202;
var inst_18040__$1 = tmp18201;
var inst_18041__$1 = inst_18057;
var state_18169__$1 = (function (){var statearr_18215 = state_18169;
(statearr_18215[(13)] = inst_18040__$1);

(statearr_18215[(14)] = inst_18039__$1);

(statearr_18215[(18)] = inst_18056);

(statearr_18215[(16)] = inst_18038__$1);

(statearr_18215[(17)] = inst_18041__$1);

return statearr_18215;
})();
var statearr_18217_19947 = state_18169__$1;
(statearr_18217_19947[(2)] = null);

(statearr_18217_19947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (21))){
var inst_18084 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18224_19948 = state_18169__$1;
(statearr_18224_19948[(2)] = inst_18084);

(statearr_18224_19948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (31))){
var inst_18112 = (state_18169[(10)]);
var inst_18119 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18112);
var state_18169__$1 = state_18169;
var statearr_18226_19949 = state_18169__$1;
(statearr_18226_19949[(2)] = inst_18119);

(statearr_18226_19949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (32))){
var inst_18106 = (state_18169[(19)]);
var inst_18104 = (state_18169[(20)]);
var inst_18105 = (state_18169[(9)]);
var inst_18107 = (state_18169[(11)]);
var inst_18121 = (state_18169[(2)]);
var inst_18122 = (inst_18107 + (1));
var tmp18219 = inst_18106;
var tmp18220 = inst_18104;
var tmp18221 = inst_18105;
var inst_18104__$1 = tmp18220;
var inst_18105__$1 = tmp18221;
var inst_18106__$1 = tmp18219;
var inst_18107__$1 = inst_18122;
var state_18169__$1 = (function (){var statearr_18230 = state_18169;
(statearr_18230[(19)] = inst_18106__$1);

(statearr_18230[(20)] = inst_18104__$1);

(statearr_18230[(9)] = inst_18105__$1);

(statearr_18230[(11)] = inst_18107__$1);

(statearr_18230[(21)] = inst_18121);

return statearr_18230;
})();
var statearr_18232_19957 = state_18169__$1;
(statearr_18232_19957[(2)] = null);

(statearr_18232_19957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (40))){
var inst_18137 = (state_18169[(22)]);
var inst_18141 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18137);
var state_18169__$1 = state_18169;
var statearr_18235_19958 = state_18169__$1;
(statearr_18235_19958[(2)] = inst_18141);

(statearr_18235_19958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (33))){
var inst_18128 = (state_18169[(23)]);
var inst_18130 = cljs.core.chunked_seq_QMARK_(inst_18128);
var state_18169__$1 = state_18169;
if(inst_18130){
var statearr_18238_19959 = state_18169__$1;
(statearr_18238_19959[(1)] = (36));

} else {
var statearr_18239_19960 = state_18169__$1;
(statearr_18239_19960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (13))){
var inst_18050 = (state_18169[(24)]);
var inst_18053 = cljs.core.async.close_BANG_(inst_18050);
var state_18169__$1 = state_18169;
var statearr_18243_19964 = state_18169__$1;
(statearr_18243_19964[(2)] = inst_18053);

(statearr_18243_19964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (22))){
var inst_18073 = (state_18169[(8)]);
var inst_18076 = cljs.core.async.close_BANG_(inst_18073);
var state_18169__$1 = state_18169;
var statearr_18245_19969 = state_18169__$1;
(statearr_18245_19969[(2)] = inst_18076);

(statearr_18245_19969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (36))){
var inst_18128 = (state_18169[(23)]);
var inst_18132 = cljs.core.chunk_first(inst_18128);
var inst_18133 = cljs.core.chunk_rest(inst_18128);
var inst_18134 = cljs.core.count(inst_18132);
var inst_18104 = inst_18133;
var inst_18105 = inst_18132;
var inst_18106 = inst_18134;
var inst_18107 = (0);
var state_18169__$1 = (function (){var statearr_18249 = state_18169;
(statearr_18249[(19)] = inst_18106);

(statearr_18249[(20)] = inst_18104);

(statearr_18249[(9)] = inst_18105);

(statearr_18249[(11)] = inst_18107);

return statearr_18249;
})();
var statearr_18251_19976 = state_18169__$1;
(statearr_18251_19976[(2)] = null);

(statearr_18251_19976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (41))){
var inst_18128 = (state_18169[(23)]);
var inst_18143 = (state_18169[(2)]);
var inst_18144 = cljs.core.next(inst_18128);
var inst_18104 = inst_18144;
var inst_18105 = null;
var inst_18106 = (0);
var inst_18107 = (0);
var state_18169__$1 = (function (){var statearr_18254 = state_18169;
(statearr_18254[(19)] = inst_18106);

(statearr_18254[(20)] = inst_18104);

(statearr_18254[(9)] = inst_18105);

(statearr_18254[(11)] = inst_18107);

(statearr_18254[(25)] = inst_18143);

return statearr_18254;
})();
var statearr_18257_19977 = state_18169__$1;
(statearr_18257_19977[(2)] = null);

(statearr_18257_19977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (43))){
var state_18169__$1 = state_18169;
var statearr_18259_19978 = state_18169__$1;
(statearr_18259_19978[(2)] = null);

(statearr_18259_19978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (29))){
var inst_18152 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18262_19979 = state_18169__$1;
(statearr_18262_19979[(2)] = inst_18152);

(statearr_18262_19979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (44))){
var inst_18161 = (state_18169[(2)]);
var state_18169__$1 = (function (){var statearr_18264 = state_18169;
(statearr_18264[(26)] = inst_18161);

return statearr_18264;
})();
var statearr_18266_19980 = state_18169__$1;
(statearr_18266_19980[(2)] = null);

(statearr_18266_19980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (6))){
var inst_18096 = (state_18169[(27)]);
var inst_18095 = cljs.core.deref(cs);
var inst_18096__$1 = cljs.core.keys(inst_18095);
var inst_18097 = cljs.core.count(inst_18096__$1);
var inst_18098 = cljs.core.reset_BANG_(dctr,inst_18097);
var inst_18103 = cljs.core.seq(inst_18096__$1);
var inst_18104 = inst_18103;
var inst_18105 = null;
var inst_18106 = (0);
var inst_18107 = (0);
var state_18169__$1 = (function (){var statearr_18270 = state_18169;
(statearr_18270[(19)] = inst_18106);

(statearr_18270[(20)] = inst_18104);

(statearr_18270[(9)] = inst_18105);

(statearr_18270[(28)] = inst_18098);

(statearr_18270[(11)] = inst_18107);

(statearr_18270[(27)] = inst_18096__$1);

return statearr_18270;
})();
var statearr_18272_19981 = state_18169__$1;
(statearr_18272_19981[(2)] = null);

(statearr_18272_19981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (28))){
var inst_18128 = (state_18169[(23)]);
var inst_18104 = (state_18169[(20)]);
var inst_18128__$1 = cljs.core.seq(inst_18104);
var state_18169__$1 = (function (){var statearr_18274 = state_18169;
(statearr_18274[(23)] = inst_18128__$1);

return statearr_18274;
})();
if(inst_18128__$1){
var statearr_18278_19983 = state_18169__$1;
(statearr_18278_19983[(1)] = (33));

} else {
var statearr_18279_19984 = state_18169__$1;
(statearr_18279_19984[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (25))){
var inst_18106 = (state_18169[(19)]);
var inst_18107 = (state_18169[(11)]);
var inst_18109 = (inst_18107 < inst_18106);
var inst_18110 = inst_18109;
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18110)){
var statearr_18281_19985 = state_18169__$1;
(statearr_18281_19985[(1)] = (27));

} else {
var statearr_18282_19986 = state_18169__$1;
(statearr_18282_19986[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (34))){
var state_18169__$1 = state_18169;
var statearr_18287_19987 = state_18169__$1;
(statearr_18287_19987[(2)] = null);

(statearr_18287_19987[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (17))){
var state_18169__$1 = state_18169;
var statearr_18289_19988 = state_18169__$1;
(statearr_18289_19988[(2)] = null);

(statearr_18289_19988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (3))){
var inst_18166 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18169__$1,inst_18166);
} else {
if((state_val_18170 === (12))){
var inst_18090 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18294_19989 = state_18169__$1;
(statearr_18294_19989[(2)] = inst_18090);

(statearr_18294_19989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (2))){
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18169__$1,(4),ch);
} else {
if((state_val_18170 === (23))){
var state_18169__$1 = state_18169;
var statearr_18298_19990 = state_18169__$1;
(statearr_18298_19990[(2)] = null);

(statearr_18298_19990[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (35))){
var inst_18150 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18302_19991 = state_18169__$1;
(statearr_18302_19991[(2)] = inst_18150);

(statearr_18302_19991[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (19))){
var inst_18060 = (state_18169[(7)]);
var inst_18064 = cljs.core.chunk_first(inst_18060);
var inst_18065 = cljs.core.chunk_rest(inst_18060);
var inst_18066 = cljs.core.count(inst_18064);
var inst_18038 = inst_18065;
var inst_18039 = inst_18064;
var inst_18040 = inst_18066;
var inst_18041 = (0);
var state_18169__$1 = (function (){var statearr_18305 = state_18169;
(statearr_18305[(13)] = inst_18040);

(statearr_18305[(14)] = inst_18039);

(statearr_18305[(16)] = inst_18038);

(statearr_18305[(17)] = inst_18041);

return statearr_18305;
})();
var statearr_18306_19998 = state_18169__$1;
(statearr_18306_19998[(2)] = null);

(statearr_18306_19998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (11))){
var inst_18038 = (state_18169[(16)]);
var inst_18060 = (state_18169[(7)]);
var inst_18060__$1 = cljs.core.seq(inst_18038);
var state_18169__$1 = (function (){var statearr_18311 = state_18169;
(statearr_18311[(7)] = inst_18060__$1);

return statearr_18311;
})();
if(inst_18060__$1){
var statearr_18313_20003 = state_18169__$1;
(statearr_18313_20003[(1)] = (16));

} else {
var statearr_18314_20004 = state_18169__$1;
(statearr_18314_20004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (9))){
var inst_18092 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18317_20005 = state_18169__$1;
(statearr_18317_20005[(2)] = inst_18092);

(statearr_18317_20005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (5))){
var inst_18036 = cljs.core.deref(cs);
var inst_18037 = cljs.core.seq(inst_18036);
var inst_18038 = inst_18037;
var inst_18039 = null;
var inst_18040 = (0);
var inst_18041 = (0);
var state_18169__$1 = (function (){var statearr_18323 = state_18169;
(statearr_18323[(13)] = inst_18040);

(statearr_18323[(14)] = inst_18039);

(statearr_18323[(16)] = inst_18038);

(statearr_18323[(17)] = inst_18041);

return statearr_18323;
})();
var statearr_18324_20006 = state_18169__$1;
(statearr_18324_20006[(2)] = null);

(statearr_18324_20006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (14))){
var state_18169__$1 = state_18169;
var statearr_18328_20011 = state_18169__$1;
(statearr_18328_20011[(2)] = null);

(statearr_18328_20011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (45))){
var inst_18158 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18329_20012 = state_18169__$1;
(statearr_18329_20012[(2)] = inst_18158);

(statearr_18329_20012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (26))){
var inst_18096 = (state_18169[(27)]);
var inst_18154 = (state_18169[(2)]);
var inst_18155 = cljs.core.seq(inst_18096);
var state_18169__$1 = (function (){var statearr_18331 = state_18169;
(statearr_18331[(29)] = inst_18154);

return statearr_18331;
})();
if(inst_18155){
var statearr_18335_20013 = state_18169__$1;
(statearr_18335_20013[(1)] = (42));

} else {
var statearr_18336_20014 = state_18169__$1;
(statearr_18336_20014[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (16))){
var inst_18060 = (state_18169[(7)]);
var inst_18062 = cljs.core.chunked_seq_QMARK_(inst_18060);
var state_18169__$1 = state_18169;
if(inst_18062){
var statearr_18338_20015 = state_18169__$1;
(statearr_18338_20015[(1)] = (19));

} else {
var statearr_18339_20016 = state_18169__$1;
(statearr_18339_20016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (38))){
var inst_18147 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18343_20017 = state_18169__$1;
(statearr_18343_20017[(2)] = inst_18147);

(statearr_18343_20017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (30))){
var state_18169__$1 = state_18169;
var statearr_18344_20018 = state_18169__$1;
(statearr_18344_20018[(2)] = null);

(statearr_18344_20018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (10))){
var inst_18039 = (state_18169[(14)]);
var inst_18041 = (state_18169[(17)]);
var inst_18049 = cljs.core._nth(inst_18039,inst_18041);
var inst_18050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18049,(0),null);
var inst_18051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18049,(1),null);
var state_18169__$1 = (function (){var statearr_18350 = state_18169;
(statearr_18350[(24)] = inst_18050);

return statearr_18350;
})();
if(cljs.core.truth_(inst_18051)){
var statearr_18352_20019 = state_18169__$1;
(statearr_18352_20019[(1)] = (13));

} else {
var statearr_18353_20020 = state_18169__$1;
(statearr_18353_20020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (18))){
var inst_18088 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18355_20021 = state_18169__$1;
(statearr_18355_20021[(2)] = inst_18088);

(statearr_18355_20021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (42))){
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18169__$1,(45),dchan);
} else {
if((state_val_18170 === (37))){
var inst_18128 = (state_18169[(23)]);
var inst_18137 = (state_18169[(22)]);
var inst_18029 = (state_18169[(12)]);
var inst_18137__$1 = cljs.core.first(inst_18128);
var inst_18138 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18137__$1,inst_18029,done);
var state_18169__$1 = (function (){var statearr_18360 = state_18169;
(statearr_18360[(22)] = inst_18137__$1);

return statearr_18360;
})();
if(cljs.core.truth_(inst_18138)){
var statearr_18361_20028 = state_18169__$1;
(statearr_18361_20028[(1)] = (39));

} else {
var statearr_18362_20029 = state_18169__$1;
(statearr_18362_20029[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (8))){
var inst_18040 = (state_18169[(13)]);
var inst_18041 = (state_18169[(17)]);
var inst_18043 = (inst_18041 < inst_18040);
var inst_18044 = inst_18043;
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18044)){
var statearr_18366_20030 = state_18169__$1;
(statearr_18366_20030[(1)] = (10));

} else {
var statearr_18367_20031 = state_18169__$1;
(statearr_18367_20031[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17100__auto__ = null;
var cljs$core$async$mult_$_state_machine__17100__auto____0 = (function (){
var statearr_18372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18372[(0)] = cljs$core$async$mult_$_state_machine__17100__auto__);

(statearr_18372[(1)] = (1));

return statearr_18372;
});
var cljs$core$async$mult_$_state_machine__17100__auto____1 = (function (state_18169){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18169);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18374){var ex__17103__auto__ = e18374;
var statearr_18375_20032 = state_18169;
(statearr_18375_20032[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18169[(4)]))){
var statearr_18378_20033 = state_18169;
(statearr_18378_20033[(1)] = cljs.core.first((state_18169[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20034 = state_18169;
state_18169 = G__20034;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17100__auto__ = function(state_18169){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17100__auto____1.call(this,state_18169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17100__auto____0;
cljs$core$async$mult_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17100__auto____1;
return cljs$core$async$mult_$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_18381 = f__17282__auto__();
(statearr_18381[(6)] = c__17281__auto___19929);

return statearr_18381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18387 = arguments.length;
switch (G__18387) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20038 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20038(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20039 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20039(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20040 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20040(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20041 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20041(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20048 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20048(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20049 = arguments.length;
var i__5770__auto___20050 = (0);
while(true){
if((i__5770__auto___20050 < len__5769__auto___20049)){
args__5775__auto__.push((arguments[i__5770__auto___20050]));

var G__20051 = (i__5770__auto___20050 + (1));
i__5770__auto___20050 = G__20051;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18436){
var map__18437 = p__18436;
var map__18437__$1 = cljs.core.__destructure_map(map__18437);
var opts = map__18437__$1;
var statearr_18438_20052 = state;
(statearr_18438_20052[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18441_20053 = state;
(statearr_18441_20053[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18442_20054 = state;
(statearr_18442_20054[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18432){
var G__18433 = cljs.core.first(seq18432);
var seq18432__$1 = cljs.core.next(seq18432);
var G__18434 = cljs.core.first(seq18432__$1);
var seq18432__$2 = cljs.core.next(seq18432__$1);
var G__18435 = cljs.core.first(seq18432__$2);
var seq18432__$3 = cljs.core.next(seq18432__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18433,G__18434,G__18435,seq18432__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18456 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18457){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18457 = meta18457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18458,meta18457__$1){
var self__ = this;
var _18458__$1 = this;
return (new cljs.core.async.t_cljs$core$async18456(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18457__$1));
}));

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18458){
var self__ = this;
var _18458__$1 = this;
return self__.meta18457;
}));

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18456.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18457","meta18457",-665374234,null)], null);
}));

(cljs.core.async.t_cljs$core$async18456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18456");

(cljs.core.async.t_cljs$core$async18456.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18456.
 */
cljs.core.async.__GT_t_cljs$core$async18456 = (function cljs$core$async$__GT_t_cljs$core$async18456(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18457){
return (new cljs.core.async.t_cljs$core$async18456(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18457));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18456(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17281__auto___20059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_18555){
var state_val_18556 = (state_18555[(1)]);
if((state_val_18556 === (7))){
var inst_18511 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
if(cljs.core.truth_(inst_18511)){
var statearr_18561_20060 = state_18555__$1;
(statearr_18561_20060[(1)] = (8));

} else {
var statearr_18562_20061 = state_18555__$1;
(statearr_18562_20061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (20))){
var inst_18504 = (state_18555[(7)]);
var state_18555__$1 = state_18555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18555__$1,(23),out,inst_18504);
} else {
if((state_val_18556 === (1))){
var inst_18479 = calc_state();
var inst_18480 = cljs.core.__destructure_map(inst_18479);
var inst_18481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18480,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18480,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18480,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18488 = inst_18479;
var state_18555__$1 = (function (){var statearr_18567 = state_18555;
(statearr_18567[(8)] = inst_18487);

(statearr_18567[(9)] = inst_18481);

(statearr_18567[(10)] = inst_18482);

(statearr_18567[(11)] = inst_18488);

return statearr_18567;
})();
var statearr_18568_20065 = state_18555__$1;
(statearr_18568_20065[(2)] = null);

(statearr_18568_20065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (24))){
var inst_18491 = (state_18555[(12)]);
var inst_18488 = inst_18491;
var state_18555__$1 = (function (){var statearr_18570 = state_18555;
(statearr_18570[(11)] = inst_18488);

return statearr_18570;
})();
var statearr_18571_20066 = state_18555__$1;
(statearr_18571_20066[(2)] = null);

(statearr_18571_20066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (4))){
var inst_18506 = (state_18555[(13)]);
var inst_18504 = (state_18555[(7)]);
var inst_18502 = (state_18555[(2)]);
var inst_18504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18502,(0),null);
var inst_18505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18502,(1),null);
var inst_18506__$1 = (inst_18504__$1 == null);
var state_18555__$1 = (function (){var statearr_18572 = state_18555;
(statearr_18572[(13)] = inst_18506__$1);

(statearr_18572[(14)] = inst_18505);

(statearr_18572[(7)] = inst_18504__$1);

return statearr_18572;
})();
if(cljs.core.truth_(inst_18506__$1)){
var statearr_18573_20068 = state_18555__$1;
(statearr_18573_20068[(1)] = (5));

} else {
var statearr_18574_20069 = state_18555__$1;
(statearr_18574_20069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (15))){
var inst_18525 = (state_18555[(15)]);
var inst_18495 = (state_18555[(16)]);
var inst_18525__$1 = cljs.core.empty_QMARK_(inst_18495);
var state_18555__$1 = (function (){var statearr_18575 = state_18555;
(statearr_18575[(15)] = inst_18525__$1);

return statearr_18575;
})();
if(inst_18525__$1){
var statearr_18580_20074 = state_18555__$1;
(statearr_18580_20074[(1)] = (17));

} else {
var statearr_18581_20075 = state_18555__$1;
(statearr_18581_20075[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (21))){
var inst_18491 = (state_18555[(12)]);
var inst_18488 = inst_18491;
var state_18555__$1 = (function (){var statearr_18585 = state_18555;
(statearr_18585[(11)] = inst_18488);

return statearr_18585;
})();
var statearr_18587_20076 = state_18555__$1;
(statearr_18587_20076[(2)] = null);

(statearr_18587_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (13))){
var inst_18518 = (state_18555[(2)]);
var inst_18519 = calc_state();
var inst_18488 = inst_18519;
var state_18555__$1 = (function (){var statearr_18588 = state_18555;
(statearr_18588[(11)] = inst_18488);

(statearr_18588[(17)] = inst_18518);

return statearr_18588;
})();
var statearr_18589_20077 = state_18555__$1;
(statearr_18589_20077[(2)] = null);

(statearr_18589_20077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (22))){
var inst_18548 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
var statearr_18593_20078 = state_18555__$1;
(statearr_18593_20078[(2)] = inst_18548);

(statearr_18593_20078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (6))){
var inst_18505 = (state_18555[(14)]);
var inst_18509 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18505,change);
var state_18555__$1 = state_18555;
var statearr_18595_20079 = state_18555__$1;
(statearr_18595_20079[(2)] = inst_18509);

(statearr_18595_20079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (25))){
var state_18555__$1 = state_18555;
var statearr_18596_20080 = state_18555__$1;
(statearr_18596_20080[(2)] = null);

(statearr_18596_20080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (17))){
var inst_18505 = (state_18555[(14)]);
var inst_18496 = (state_18555[(18)]);
var inst_18527 = (inst_18496.cljs$core$IFn$_invoke$arity$1 ? inst_18496.cljs$core$IFn$_invoke$arity$1(inst_18505) : inst_18496.call(null,inst_18505));
var inst_18528 = cljs.core.not(inst_18527);
var state_18555__$1 = state_18555;
var statearr_18600_20081 = state_18555__$1;
(statearr_18600_20081[(2)] = inst_18528);

(statearr_18600_20081[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (3))){
var inst_18552 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18555__$1,inst_18552);
} else {
if((state_val_18556 === (12))){
var state_18555__$1 = state_18555;
var statearr_18602_20082 = state_18555__$1;
(statearr_18602_20082[(2)] = null);

(statearr_18602_20082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (2))){
var inst_18491 = (state_18555[(12)]);
var inst_18488 = (state_18555[(11)]);
var inst_18491__$1 = cljs.core.__destructure_map(inst_18488);
var inst_18495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18491__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18491__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18491__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18555__$1 = (function (){var statearr_18603 = state_18555;
(statearr_18603[(12)] = inst_18491__$1);

(statearr_18603[(16)] = inst_18495);

(statearr_18603[(18)] = inst_18496);

return statearr_18603;
})();
return cljs.core.async.ioc_alts_BANG_(state_18555__$1,(4),inst_18497);
} else {
if((state_val_18556 === (23))){
var inst_18539 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
if(cljs.core.truth_(inst_18539)){
var statearr_18608_20085 = state_18555__$1;
(statearr_18608_20085[(1)] = (24));

} else {
var statearr_18609_20086 = state_18555__$1;
(statearr_18609_20086[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (19))){
var inst_18534 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
var statearr_18610_20088 = state_18555__$1;
(statearr_18610_20088[(2)] = inst_18534);

(statearr_18610_20088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (11))){
var inst_18505 = (state_18555[(14)]);
var inst_18515 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18505);
var state_18555__$1 = state_18555;
var statearr_18611_20089 = state_18555__$1;
(statearr_18611_20089[(2)] = inst_18515);

(statearr_18611_20089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (9))){
var inst_18495 = (state_18555[(16)]);
var inst_18522 = (state_18555[(19)]);
var inst_18505 = (state_18555[(14)]);
var inst_18522__$1 = (inst_18495.cljs$core$IFn$_invoke$arity$1 ? inst_18495.cljs$core$IFn$_invoke$arity$1(inst_18505) : inst_18495.call(null,inst_18505));
var state_18555__$1 = (function (){var statearr_18613 = state_18555;
(statearr_18613[(19)] = inst_18522__$1);

return statearr_18613;
})();
if(cljs.core.truth_(inst_18522__$1)){
var statearr_18614_20090 = state_18555__$1;
(statearr_18614_20090[(1)] = (14));

} else {
var statearr_18615_20091 = state_18555__$1;
(statearr_18615_20091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (5))){
var inst_18506 = (state_18555[(13)]);
var state_18555__$1 = state_18555;
var statearr_18616_20093 = state_18555__$1;
(statearr_18616_20093[(2)] = inst_18506);

(statearr_18616_20093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (14))){
var inst_18522 = (state_18555[(19)]);
var state_18555__$1 = state_18555;
var statearr_18617_20095 = state_18555__$1;
(statearr_18617_20095[(2)] = inst_18522);

(statearr_18617_20095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (26))){
var inst_18544 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
var statearr_18622_20096 = state_18555__$1;
(statearr_18622_20096[(2)] = inst_18544);

(statearr_18622_20096[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (16))){
var inst_18536 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
if(cljs.core.truth_(inst_18536)){
var statearr_18626_20097 = state_18555__$1;
(statearr_18626_20097[(1)] = (20));

} else {
var statearr_18627_20098 = state_18555__$1;
(statearr_18627_20098[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (10))){
var inst_18550 = (state_18555[(2)]);
var state_18555__$1 = state_18555;
var statearr_18629_20099 = state_18555__$1;
(statearr_18629_20099[(2)] = inst_18550);

(statearr_18629_20099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (18))){
var inst_18525 = (state_18555[(15)]);
var state_18555__$1 = state_18555;
var statearr_18630_20100 = state_18555__$1;
(statearr_18630_20100[(2)] = inst_18525);

(statearr_18630_20100[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18556 === (8))){
var inst_18504 = (state_18555[(7)]);
var inst_18513 = (inst_18504 == null);
var state_18555__$1 = state_18555;
if(cljs.core.truth_(inst_18513)){
var statearr_18634_20104 = state_18555__$1;
(statearr_18634_20104[(1)] = (11));

} else {
var statearr_18635_20105 = state_18555__$1;
(statearr_18635_20105[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17100__auto__ = null;
var cljs$core$async$mix_$_state_machine__17100__auto____0 = (function (){
var statearr_18640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18640[(0)] = cljs$core$async$mix_$_state_machine__17100__auto__);

(statearr_18640[(1)] = (1));

return statearr_18640;
});
var cljs$core$async$mix_$_state_machine__17100__auto____1 = (function (state_18555){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18555);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18642){var ex__17103__auto__ = e18642;
var statearr_18643_20106 = state_18555;
(statearr_18643_20106[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18555[(4)]))){
var statearr_18644_20107 = state_18555;
(statearr_18644_20107[(1)] = cljs.core.first((state_18555[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20108 = state_18555;
state_18555 = G__20108;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17100__auto__ = function(state_18555){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17100__auto____1.call(this,state_18555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17100__auto____0;
cljs$core$async$mix_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17100__auto____1;
return cljs$core$async$mix_$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_18648 = f__17282__auto__();
(statearr_18648[(6)] = c__17281__auto___20059);

return statearr_18648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20111 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20111(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20112 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20112(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20113 = (function() {
var G__20114 = null;
var G__20114__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20114__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20114 = function(p,v){
switch(arguments.length){
case 1:
return G__20114__1.call(this,p);
case 2:
return G__20114__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20114.cljs$core$IFn$_invoke$arity$1 = G__20114__1;
G__20114.cljs$core$IFn$_invoke$arity$2 = G__20114__2;
return G__20114;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18658 = arguments.length;
switch (G__18658) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20113(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20113(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18662 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18663){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18663 = meta18663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18664,meta18663__$1){
var self__ = this;
var _18664__$1 = this;
return (new cljs.core.async.t_cljs$core$async18662(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18663__$1));
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18664){
var self__ = this;
var _18664__$1 = this;
return self__.meta18663;
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18662.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18663","meta18663",2127873605,null)], null);
}));

(cljs.core.async.t_cljs$core$async18662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18662");

(cljs.core.async.t_cljs$core$async18662.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18662.
 */
cljs.core.async.__GT_t_cljs$core$async18662 = (function cljs$core$async$__GT_t_cljs$core$async18662(ch,topic_fn,buf_fn,mults,ensure_mult,meta18663){
return (new cljs.core.async.t_cljs$core$async18662(ch,topic_fn,buf_fn,mults,ensure_mult,meta18663));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18661 = arguments.length;
switch (G__18661) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18659_SHARP_){
if(cljs.core.truth_((p1__18659_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18659_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18659_SHARP_.call(null,topic)))){
return p1__18659_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18659_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18662(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17281__auto___20123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_18742){
var state_val_18743 = (state_18742[(1)]);
if((state_val_18743 === (7))){
var inst_18738 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18744_20125 = state_18742__$1;
(statearr_18744_20125[(2)] = inst_18738);

(statearr_18744_20125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (20))){
var state_18742__$1 = state_18742;
var statearr_18745_20127 = state_18742__$1;
(statearr_18745_20127[(2)] = null);

(statearr_18745_20127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (1))){
var state_18742__$1 = state_18742;
var statearr_18746_20128 = state_18742__$1;
(statearr_18746_20128[(2)] = null);

(statearr_18746_20128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (24))){
var inst_18721 = (state_18742[(7)]);
var inst_18730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18721);
var state_18742__$1 = state_18742;
var statearr_18747_20129 = state_18742__$1;
(statearr_18747_20129[(2)] = inst_18730);

(statearr_18747_20129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (4))){
var inst_18669 = (state_18742[(8)]);
var inst_18669__$1 = (state_18742[(2)]);
var inst_18670 = (inst_18669__$1 == null);
var state_18742__$1 = (function (){var statearr_18748 = state_18742;
(statearr_18748[(8)] = inst_18669__$1);

return statearr_18748;
})();
if(cljs.core.truth_(inst_18670)){
var statearr_18749_20130 = state_18742__$1;
(statearr_18749_20130[(1)] = (5));

} else {
var statearr_18750_20131 = state_18742__$1;
(statearr_18750_20131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (15))){
var inst_18715 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18751_20132 = state_18742__$1;
(statearr_18751_20132[(2)] = inst_18715);

(statearr_18751_20132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (21))){
var inst_18735 = (state_18742[(2)]);
var state_18742__$1 = (function (){var statearr_18752 = state_18742;
(statearr_18752[(9)] = inst_18735);

return statearr_18752;
})();
var statearr_18753_20133 = state_18742__$1;
(statearr_18753_20133[(2)] = null);

(statearr_18753_20133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (13))){
var inst_18695 = (state_18742[(10)]);
var inst_18697 = cljs.core.chunked_seq_QMARK_(inst_18695);
var state_18742__$1 = state_18742;
if(inst_18697){
var statearr_18754_20134 = state_18742__$1;
(statearr_18754_20134[(1)] = (16));

} else {
var statearr_18756_20135 = state_18742__$1;
(statearr_18756_20135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (22))){
var inst_18727 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
if(cljs.core.truth_(inst_18727)){
var statearr_18758_20136 = state_18742__$1;
(statearr_18758_20136[(1)] = (23));

} else {
var statearr_18759_20137 = state_18742__$1;
(statearr_18759_20137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (6))){
var inst_18721 = (state_18742[(7)]);
var inst_18723 = (state_18742[(11)]);
var inst_18669 = (state_18742[(8)]);
var inst_18721__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18669) : topic_fn.call(null,inst_18669));
var inst_18722 = cljs.core.deref(mults);
var inst_18723__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18722,inst_18721__$1);
var state_18742__$1 = (function (){var statearr_18760 = state_18742;
(statearr_18760[(7)] = inst_18721__$1);

(statearr_18760[(11)] = inst_18723__$1);

return statearr_18760;
})();
if(cljs.core.truth_(inst_18723__$1)){
var statearr_18761_20138 = state_18742__$1;
(statearr_18761_20138[(1)] = (19));

} else {
var statearr_18762_20139 = state_18742__$1;
(statearr_18762_20139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (25))){
var inst_18732 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18764_20140 = state_18742__$1;
(statearr_18764_20140[(2)] = inst_18732);

(statearr_18764_20140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (17))){
var inst_18695 = (state_18742[(10)]);
var inst_18706 = cljs.core.first(inst_18695);
var inst_18707 = cljs.core.async.muxch_STAR_(inst_18706);
var inst_18708 = cljs.core.async.close_BANG_(inst_18707);
var inst_18709 = cljs.core.next(inst_18695);
var inst_18680 = inst_18709;
var inst_18681 = null;
var inst_18682 = (0);
var inst_18683 = (0);
var state_18742__$1 = (function (){var statearr_18768 = state_18742;
(statearr_18768[(12)] = inst_18708);

(statearr_18768[(13)] = inst_18683);

(statearr_18768[(14)] = inst_18681);

(statearr_18768[(15)] = inst_18682);

(statearr_18768[(16)] = inst_18680);

return statearr_18768;
})();
var statearr_18769_20148 = state_18742__$1;
(statearr_18769_20148[(2)] = null);

(statearr_18769_20148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (3))){
var inst_18740 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18742__$1,inst_18740);
} else {
if((state_val_18743 === (12))){
var inst_18717 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18771_20149 = state_18742__$1;
(statearr_18771_20149[(2)] = inst_18717);

(statearr_18771_20149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (2))){
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18742__$1,(4),ch);
} else {
if((state_val_18743 === (23))){
var state_18742__$1 = state_18742;
var statearr_18772_20150 = state_18742__$1;
(statearr_18772_20150[(2)] = null);

(statearr_18772_20150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (19))){
var inst_18723 = (state_18742[(11)]);
var inst_18669 = (state_18742[(8)]);
var inst_18725 = cljs.core.async.muxch_STAR_(inst_18723);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18742__$1,(22),inst_18725,inst_18669);
} else {
if((state_val_18743 === (11))){
var inst_18695 = (state_18742[(10)]);
var inst_18680 = (state_18742[(16)]);
var inst_18695__$1 = cljs.core.seq(inst_18680);
var state_18742__$1 = (function (){var statearr_18774 = state_18742;
(statearr_18774[(10)] = inst_18695__$1);

return statearr_18774;
})();
if(inst_18695__$1){
var statearr_18775_20154 = state_18742__$1;
(statearr_18775_20154[(1)] = (13));

} else {
var statearr_18776_20155 = state_18742__$1;
(statearr_18776_20155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (9))){
var inst_18719 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18777_20156 = state_18742__$1;
(statearr_18777_20156[(2)] = inst_18719);

(statearr_18777_20156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (5))){
var inst_18677 = cljs.core.deref(mults);
var inst_18678 = cljs.core.vals(inst_18677);
var inst_18679 = cljs.core.seq(inst_18678);
var inst_18680 = inst_18679;
var inst_18681 = null;
var inst_18682 = (0);
var inst_18683 = (0);
var state_18742__$1 = (function (){var statearr_18779 = state_18742;
(statearr_18779[(13)] = inst_18683);

(statearr_18779[(14)] = inst_18681);

(statearr_18779[(15)] = inst_18682);

(statearr_18779[(16)] = inst_18680);

return statearr_18779;
})();
var statearr_18780_20160 = state_18742__$1;
(statearr_18780_20160[(2)] = null);

(statearr_18780_20160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (14))){
var state_18742__$1 = state_18742;
var statearr_18786_20161 = state_18742__$1;
(statearr_18786_20161[(2)] = null);

(statearr_18786_20161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (16))){
var inst_18695 = (state_18742[(10)]);
var inst_18699 = cljs.core.chunk_first(inst_18695);
var inst_18700 = cljs.core.chunk_rest(inst_18695);
var inst_18703 = cljs.core.count(inst_18699);
var inst_18680 = inst_18700;
var inst_18681 = inst_18699;
var inst_18682 = inst_18703;
var inst_18683 = (0);
var state_18742__$1 = (function (){var statearr_18787 = state_18742;
(statearr_18787[(13)] = inst_18683);

(statearr_18787[(14)] = inst_18681);

(statearr_18787[(15)] = inst_18682);

(statearr_18787[(16)] = inst_18680);

return statearr_18787;
})();
var statearr_18788_20162 = state_18742__$1;
(statearr_18788_20162[(2)] = null);

(statearr_18788_20162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (10))){
var inst_18683 = (state_18742[(13)]);
var inst_18681 = (state_18742[(14)]);
var inst_18682 = (state_18742[(15)]);
var inst_18680 = (state_18742[(16)]);
var inst_18689 = cljs.core._nth(inst_18681,inst_18683);
var inst_18690 = cljs.core.async.muxch_STAR_(inst_18689);
var inst_18691 = cljs.core.async.close_BANG_(inst_18690);
var inst_18692 = (inst_18683 + (1));
var tmp18782 = inst_18681;
var tmp18783 = inst_18682;
var tmp18784 = inst_18680;
var inst_18680__$1 = tmp18784;
var inst_18681__$1 = tmp18782;
var inst_18682__$1 = tmp18783;
var inst_18683__$1 = inst_18692;
var state_18742__$1 = (function (){var statearr_18789 = state_18742;
(statearr_18789[(13)] = inst_18683__$1);

(statearr_18789[(14)] = inst_18681__$1);

(statearr_18789[(17)] = inst_18691);

(statearr_18789[(15)] = inst_18682__$1);

(statearr_18789[(16)] = inst_18680__$1);

return statearr_18789;
})();
var statearr_18793_20163 = state_18742__$1;
(statearr_18793_20163[(2)] = null);

(statearr_18793_20163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (18))){
var inst_18712 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18794_20164 = state_18742__$1;
(statearr_18794_20164[(2)] = inst_18712);

(statearr_18794_20164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (8))){
var inst_18683 = (state_18742[(13)]);
var inst_18682 = (state_18742[(15)]);
var inst_18686 = (inst_18683 < inst_18682);
var inst_18687 = inst_18686;
var state_18742__$1 = state_18742;
if(cljs.core.truth_(inst_18687)){
var statearr_18795_20165 = state_18742__$1;
(statearr_18795_20165[(1)] = (10));

} else {
var statearr_18796_20166 = state_18742__$1;
(statearr_18796_20166[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18797[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18797[(1)] = (1));

return statearr_18797;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18742){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18742);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18798){var ex__17103__auto__ = e18798;
var statearr_18799_20167 = state_18742;
(statearr_18799_20167[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18742[(4)]))){
var statearr_18800_20172 = state_18742;
(statearr_18800_20172[(1)] = cljs.core.first((state_18742[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20173 = state_18742;
state_18742 = G__20173;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_18814 = f__17282__auto__();
(statearr_18814[(6)] = c__17281__auto___20123);

return statearr_18814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18822 = arguments.length;
switch (G__18822) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18837 = arguments.length;
switch (G__18837) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18843 = arguments.length;
switch (G__18843) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17281__auto___20181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_18894){
var state_val_18895 = (state_18894[(1)]);
if((state_val_18895 === (7))){
var state_18894__$1 = state_18894;
var statearr_18896_20182 = state_18894__$1;
(statearr_18896_20182[(2)] = null);

(statearr_18896_20182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (1))){
var state_18894__$1 = state_18894;
var statearr_18897_20183 = state_18894__$1;
(statearr_18897_20183[(2)] = null);

(statearr_18897_20183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (4))){
var inst_18851 = (state_18894[(7)]);
var inst_18850 = (state_18894[(8)]);
var inst_18854 = (inst_18851 < inst_18850);
var state_18894__$1 = state_18894;
if(cljs.core.truth_(inst_18854)){
var statearr_18898_20184 = state_18894__$1;
(statearr_18898_20184[(1)] = (6));

} else {
var statearr_18899_20185 = state_18894__$1;
(statearr_18899_20185[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (15))){
var inst_18880 = (state_18894[(9)]);
var inst_18885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18880);
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18894__$1,(17),out,inst_18885);
} else {
if((state_val_18895 === (13))){
var inst_18880 = (state_18894[(9)]);
var inst_18880__$1 = (state_18894[(2)]);
var inst_18881 = cljs.core.some(cljs.core.nil_QMARK_,inst_18880__$1);
var state_18894__$1 = (function (){var statearr_18900 = state_18894;
(statearr_18900[(9)] = inst_18880__$1);

return statearr_18900;
})();
if(cljs.core.truth_(inst_18881)){
var statearr_18902_20186 = state_18894__$1;
(statearr_18902_20186[(1)] = (14));

} else {
var statearr_18903_20187 = state_18894__$1;
(statearr_18903_20187[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (6))){
var state_18894__$1 = state_18894;
var statearr_18904_20191 = state_18894__$1;
(statearr_18904_20191[(2)] = null);

(statearr_18904_20191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (17))){
var inst_18887 = (state_18894[(2)]);
var state_18894__$1 = (function (){var statearr_18907 = state_18894;
(statearr_18907[(10)] = inst_18887);

return statearr_18907;
})();
var statearr_18908_20192 = state_18894__$1;
(statearr_18908_20192[(2)] = null);

(statearr_18908_20192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (3))){
var inst_18892 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18894__$1,inst_18892);
} else {
if((state_val_18895 === (12))){
var _ = (function (){var statearr_18910 = state_18894;
(statearr_18910[(4)] = cljs.core.rest((state_18894[(4)])));

return statearr_18910;
})();
var state_18894__$1 = state_18894;
var ex18906 = (state_18894__$1[(2)]);
var statearr_18912_20197 = state_18894__$1;
(statearr_18912_20197[(5)] = ex18906);


if((ex18906 instanceof Object)){
var statearr_18916_20198 = state_18894__$1;
(statearr_18916_20198[(1)] = (11));

(statearr_18916_20198[(5)] = null);

} else {
throw ex18906;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (2))){
var inst_18849 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18850 = cnt;
var inst_18851 = (0);
var state_18894__$1 = (function (){var statearr_18917 = state_18894;
(statearr_18917[(7)] = inst_18851);

(statearr_18917[(8)] = inst_18850);

(statearr_18917[(11)] = inst_18849);

return statearr_18917;
})();
var statearr_18918_20199 = state_18894__$1;
(statearr_18918_20199[(2)] = null);

(statearr_18918_20199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (11))){
var inst_18858 = (state_18894[(2)]);
var inst_18859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18894__$1 = (function (){var statearr_18919 = state_18894;
(statearr_18919[(12)] = inst_18858);

return statearr_18919;
})();
var statearr_18920_20202 = state_18894__$1;
(statearr_18920_20202[(2)] = inst_18859);

(statearr_18920_20202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (9))){
var inst_18851 = (state_18894[(7)]);
var _ = (function (){var statearr_18921 = state_18894;
(statearr_18921[(4)] = cljs.core.cons((12),(state_18894[(4)])));

return statearr_18921;
})();
var inst_18866 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18851) : chs__$1.call(null,inst_18851));
var inst_18867 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18851) : done.call(null,inst_18851));
var inst_18868 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18866,inst_18867);
var ___$1 = (function (){var statearr_18922 = state_18894;
(statearr_18922[(4)] = cljs.core.rest((state_18894[(4)])));

return statearr_18922;
})();
var state_18894__$1 = state_18894;
var statearr_18923_20203 = state_18894__$1;
(statearr_18923_20203[(2)] = inst_18868);

(statearr_18923_20203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (5))){
var inst_18878 = (state_18894[(2)]);
var state_18894__$1 = (function (){var statearr_18924 = state_18894;
(statearr_18924[(13)] = inst_18878);

return statearr_18924;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18894__$1,(13),dchan);
} else {
if((state_val_18895 === (14))){
var inst_18883 = cljs.core.async.close_BANG_(out);
var state_18894__$1 = state_18894;
var statearr_18925_20210 = state_18894__$1;
(statearr_18925_20210[(2)] = inst_18883);

(statearr_18925_20210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (16))){
var inst_18890 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
var statearr_18926_20211 = state_18894__$1;
(statearr_18926_20211[(2)] = inst_18890);

(statearr_18926_20211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (10))){
var inst_18851 = (state_18894[(7)]);
var inst_18871 = (state_18894[(2)]);
var inst_18872 = (inst_18851 + (1));
var inst_18851__$1 = inst_18872;
var state_18894__$1 = (function (){var statearr_18927 = state_18894;
(statearr_18927[(7)] = inst_18851__$1);

(statearr_18927[(14)] = inst_18871);

return statearr_18927;
})();
var statearr_18928_20212 = state_18894__$1;
(statearr_18928_20212[(2)] = null);

(statearr_18928_20212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (8))){
var inst_18876 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
var statearr_18929_20213 = state_18894__$1;
(statearr_18929_20213[(2)] = inst_18876);

(statearr_18929_20213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18930[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18930[(1)] = (1));

return statearr_18930;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18894){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18894);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18931){var ex__17103__auto__ = e18931;
var statearr_18932_20214 = state_18894;
(statearr_18932_20214[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18894[(4)]))){
var statearr_18933_20215 = state_18894;
(statearr_18933_20215[(1)] = cljs.core.first((state_18894[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20216 = state_18894;
state_18894 = G__20216;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_18938 = f__17282__auto__();
(statearr_18938[(6)] = c__17281__auto___20181);

return statearr_18938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18944 = arguments.length;
switch (G__18944) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17281__auto___20226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_18981){
var state_val_18982 = (state_18981[(1)]);
if((state_val_18982 === (7))){
var inst_18958 = (state_18981[(7)]);
var inst_18957 = (state_18981[(8)]);
var inst_18957__$1 = (state_18981[(2)]);
var inst_18958__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18957__$1,(0),null);
var inst_18959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18957__$1,(1),null);
var inst_18960 = (inst_18958__$1 == null);
var state_18981__$1 = (function (){var statearr_18983 = state_18981;
(statearr_18983[(7)] = inst_18958__$1);

(statearr_18983[(8)] = inst_18957__$1);

(statearr_18983[(9)] = inst_18959);

return statearr_18983;
})();
if(cljs.core.truth_(inst_18960)){
var statearr_18984_20231 = state_18981__$1;
(statearr_18984_20231[(1)] = (8));

} else {
var statearr_18985_20232 = state_18981__$1;
(statearr_18985_20232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (1))){
var inst_18946 = cljs.core.vec(chs);
var inst_18947 = inst_18946;
var state_18981__$1 = (function (){var statearr_18986 = state_18981;
(statearr_18986[(10)] = inst_18947);

return statearr_18986;
})();
var statearr_18987_20237 = state_18981__$1;
(statearr_18987_20237[(2)] = null);

(statearr_18987_20237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (4))){
var inst_18947 = (state_18981[(10)]);
var state_18981__$1 = state_18981;
return cljs.core.async.ioc_alts_BANG_(state_18981__$1,(7),inst_18947);
} else {
if((state_val_18982 === (6))){
var inst_18977 = (state_18981[(2)]);
var state_18981__$1 = state_18981;
var statearr_18988_20243 = state_18981__$1;
(statearr_18988_20243[(2)] = inst_18977);

(statearr_18988_20243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (3))){
var inst_18979 = (state_18981[(2)]);
var state_18981__$1 = state_18981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18981__$1,inst_18979);
} else {
if((state_val_18982 === (2))){
var inst_18947 = (state_18981[(10)]);
var inst_18950 = cljs.core.count(inst_18947);
var inst_18951 = (inst_18950 > (0));
var state_18981__$1 = state_18981;
if(cljs.core.truth_(inst_18951)){
var statearr_18994_20250 = state_18981__$1;
(statearr_18994_20250[(1)] = (4));

} else {
var statearr_18995_20255 = state_18981__$1;
(statearr_18995_20255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (11))){
var inst_18947 = (state_18981[(10)]);
var inst_18970 = (state_18981[(2)]);
var tmp18989 = inst_18947;
var inst_18947__$1 = tmp18989;
var state_18981__$1 = (function (){var statearr_18996 = state_18981;
(statearr_18996[(11)] = inst_18970);

(statearr_18996[(10)] = inst_18947__$1);

return statearr_18996;
})();
var statearr_18997_20257 = state_18981__$1;
(statearr_18997_20257[(2)] = null);

(statearr_18997_20257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (9))){
var inst_18958 = (state_18981[(7)]);
var state_18981__$1 = state_18981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18981__$1,(11),out,inst_18958);
} else {
if((state_val_18982 === (5))){
var inst_18975 = cljs.core.async.close_BANG_(out);
var state_18981__$1 = state_18981;
var statearr_19002_20263 = state_18981__$1;
(statearr_19002_20263[(2)] = inst_18975);

(statearr_19002_20263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (10))){
var inst_18973 = (state_18981[(2)]);
var state_18981__$1 = state_18981;
var statearr_19003_20266 = state_18981__$1;
(statearr_19003_20266[(2)] = inst_18973);

(statearr_19003_20266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18982 === (8))){
var inst_18958 = (state_18981[(7)]);
var inst_18957 = (state_18981[(8)]);
var inst_18959 = (state_18981[(9)]);
var inst_18947 = (state_18981[(10)]);
var inst_18965 = (function (){var cs = inst_18947;
var vec__18953 = inst_18957;
var v = inst_18958;
var c = inst_18959;
return (function (p1__18940_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18940_SHARP_);
});
})();
var inst_18966 = cljs.core.filterv(inst_18965,inst_18947);
var inst_18947__$1 = inst_18966;
var state_18981__$1 = (function (){var statearr_19004 = state_18981;
(statearr_19004[(10)] = inst_18947__$1);

return statearr_19004;
})();
var statearr_19005_20271 = state_18981__$1;
(statearr_19005_20271[(2)] = null);

(statearr_19005_20271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19006[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19006[(1)] = (1));

return statearr_19006;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18981){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18981);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19007){var ex__17103__auto__ = e19007;
var statearr_19008_20272 = state_18981;
(statearr_19008_20272[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18981[(4)]))){
var statearr_19009_20274 = state_18981;
(statearr_19009_20274[(1)] = cljs.core.first((state_18981[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20275 = state_18981;
state_18981 = G__20275;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_19010 = f__17282__auto__();
(statearr_19010[(6)] = c__17281__auto___20226);

return statearr_19010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19014 = arguments.length;
switch (G__19014) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17281__auto___20278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_19041){
var state_val_19042 = (state_19041[(1)]);
if((state_val_19042 === (7))){
var inst_19023 = (state_19041[(7)]);
var inst_19023__$1 = (state_19041[(2)]);
var inst_19024 = (inst_19023__$1 == null);
var inst_19025 = cljs.core.not(inst_19024);
var state_19041__$1 = (function (){var statearr_19043 = state_19041;
(statearr_19043[(7)] = inst_19023__$1);

return statearr_19043;
})();
if(inst_19025){
var statearr_19044_20279 = state_19041__$1;
(statearr_19044_20279[(1)] = (8));

} else {
var statearr_19045_20280 = state_19041__$1;
(statearr_19045_20280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (1))){
var inst_19018 = (0);
var state_19041__$1 = (function (){var statearr_19046 = state_19041;
(statearr_19046[(8)] = inst_19018);

return statearr_19046;
})();
var statearr_19047_20281 = state_19041__$1;
(statearr_19047_20281[(2)] = null);

(statearr_19047_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (4))){
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19041__$1,(7),ch);
} else {
if((state_val_19042 === (6))){
var inst_19036 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19048_20282 = state_19041__$1;
(statearr_19048_20282[(2)] = inst_19036);

(statearr_19048_20282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (3))){
var inst_19038 = (state_19041[(2)]);
var inst_19039 = cljs.core.async.close_BANG_(out);
var state_19041__$1 = (function (){var statearr_19049 = state_19041;
(statearr_19049[(9)] = inst_19038);

return statearr_19049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19041__$1,inst_19039);
} else {
if((state_val_19042 === (2))){
var inst_19018 = (state_19041[(8)]);
var inst_19020 = (inst_19018 < n);
var state_19041__$1 = state_19041;
if(cljs.core.truth_(inst_19020)){
var statearr_19050_20283 = state_19041__$1;
(statearr_19050_20283[(1)] = (4));

} else {
var statearr_19051_20284 = state_19041__$1;
(statearr_19051_20284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (11))){
var inst_19018 = (state_19041[(8)]);
var inst_19028 = (state_19041[(2)]);
var inst_19029 = (inst_19018 + (1));
var inst_19018__$1 = inst_19029;
var state_19041__$1 = (function (){var statearr_19052 = state_19041;
(statearr_19052[(10)] = inst_19028);

(statearr_19052[(8)] = inst_19018__$1);

return statearr_19052;
})();
var statearr_19053_20286 = state_19041__$1;
(statearr_19053_20286[(2)] = null);

(statearr_19053_20286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (9))){
var state_19041__$1 = state_19041;
var statearr_19054_20287 = state_19041__$1;
(statearr_19054_20287[(2)] = null);

(statearr_19054_20287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (5))){
var state_19041__$1 = state_19041;
var statearr_19055_20291 = state_19041__$1;
(statearr_19055_20291[(2)] = null);

(statearr_19055_20291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (10))){
var inst_19033 = (state_19041[(2)]);
var state_19041__$1 = state_19041;
var statearr_19056_20292 = state_19041__$1;
(statearr_19056_20292[(2)] = inst_19033);

(statearr_19056_20292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19042 === (8))){
var inst_19023 = (state_19041[(7)]);
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19041__$1,(11),out,inst_19023);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19057[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19057[(1)] = (1));

return statearr_19057;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19041){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19041);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19058){var ex__17103__auto__ = e19058;
var statearr_19059_20297 = state_19041;
(statearr_19059_20297[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19041[(4)]))){
var statearr_19060_20298 = state_19041;
(statearr_19060_20298[(1)] = cljs.core.first((state_19041[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20299 = state_19041;
state_19041 = G__20299;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_19061 = f__17282__auto__();
(statearr_19061[(6)] = c__17281__auto___20278);

return statearr_19061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19066 = (function (f,ch,meta19064,_,fn1,meta19067){
this.f = f;
this.ch = ch;
this.meta19064 = meta19064;
this._ = _;
this.fn1 = fn1;
this.meta19067 = meta19067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19068,meta19067__$1){
var self__ = this;
var _19068__$1 = this;
return (new cljs.core.async.t_cljs$core$async19066(self__.f,self__.ch,self__.meta19064,self__._,self__.fn1,meta19067__$1));
}));

(cljs.core.async.t_cljs$core$async19066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19068){
var self__ = this;
var _19068__$1 = this;
return self__.meta19067;
}));

(cljs.core.async.t_cljs$core$async19066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19062_SHARP_){
var G__19069 = (((p1__19062_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19062_SHARP_) : self__.f.call(null,p1__19062_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19069) : f1.call(null,G__19069));
});
}));

(cljs.core.async.t_cljs$core$async19066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19064","meta19064",1869211836,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19063","cljs.core.async/t_cljs$core$async19063",1075461023,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19067","meta19067",-1664181558,null)], null);
}));

(cljs.core.async.t_cljs$core$async19066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19066");

(cljs.core.async.t_cljs$core$async19066.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19066.
 */
cljs.core.async.__GT_t_cljs$core$async19066 = (function cljs$core$async$__GT_t_cljs$core$async19066(f,ch,meta19064,_,fn1,meta19067){
return (new cljs.core.async.t_cljs$core$async19066(f,ch,meta19064,_,fn1,meta19067));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19063 = (function (f,ch,meta19064){
this.f = f;
this.ch = ch;
this.meta19064 = meta19064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19065,meta19064__$1){
var self__ = this;
var _19065__$1 = this;
return (new cljs.core.async.t_cljs$core$async19063(self__.f,self__.ch,meta19064__$1));
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19065){
var self__ = this;
var _19065__$1 = this;
return self__.meta19064;
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19066(self__.f,self__.ch,self__.meta19064,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19071 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19071) : self__.f.call(null,G__19071));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19064","meta19064",1869211836,null)], null);
}));

(cljs.core.async.t_cljs$core$async19063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19063");

(cljs.core.async.t_cljs$core$async19063.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19063.
 */
cljs.core.async.__GT_t_cljs$core$async19063 = (function cljs$core$async$__GT_t_cljs$core$async19063(f,ch,meta19064){
return (new cljs.core.async.t_cljs$core$async19063(f,ch,meta19064));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19063(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19075 = (function (f,ch,meta19076){
this.f = f;
this.ch = ch;
this.meta19076 = meta19076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19077,meta19076__$1){
var self__ = this;
var _19077__$1 = this;
return (new cljs.core.async.t_cljs$core$async19075(self__.f,self__.ch,meta19076__$1));
}));

(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19077){
var self__ = this;
var _19077__$1 = this;
return self__.meta19076;
}));

(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19076","meta19076",-562600458,null)], null);
}));

(cljs.core.async.t_cljs$core$async19075.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19075");

(cljs.core.async.t_cljs$core$async19075.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19075");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19075.
 */
cljs.core.async.__GT_t_cljs$core$async19075 = (function cljs$core$async$__GT_t_cljs$core$async19075(f,ch,meta19076){
return (new cljs.core.async.t_cljs$core$async19075(f,ch,meta19076));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19075(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19082 = (function (p,ch,meta19083){
this.p = p;
this.ch = ch;
this.meta19083 = meta19083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19084,meta19083__$1){
var self__ = this;
var _19084__$1 = this;
return (new cljs.core.async.t_cljs$core$async19082(self__.p,self__.ch,meta19083__$1));
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19084){
var self__ = this;
var _19084__$1 = this;
return self__.meta19083;
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19083","meta19083",-1557071861,null)], null);
}));

(cljs.core.async.t_cljs$core$async19082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19082");

(cljs.core.async.t_cljs$core$async19082.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19082.
 */
cljs.core.async.__GT_t_cljs$core$async19082 = (function cljs$core$async$__GT_t_cljs$core$async19082(p,ch,meta19083){
return (new cljs.core.async.t_cljs$core$async19082(p,ch,meta19083));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19082(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19106 = arguments.length;
switch (G__19106) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17281__auto___20327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_19147){
var state_val_19148 = (state_19147[(1)]);
if((state_val_19148 === (7))){
var inst_19143 = (state_19147[(2)]);
var state_19147__$1 = state_19147;
var statearr_19151_20329 = state_19147__$1;
(statearr_19151_20329[(2)] = inst_19143);

(statearr_19151_20329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (1))){
var state_19147__$1 = state_19147;
var statearr_19152_20334 = state_19147__$1;
(statearr_19152_20334[(2)] = null);

(statearr_19152_20334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (4))){
var inst_19129 = (state_19147[(7)]);
var inst_19129__$1 = (state_19147[(2)]);
var inst_19130 = (inst_19129__$1 == null);
var state_19147__$1 = (function (){var statearr_19153 = state_19147;
(statearr_19153[(7)] = inst_19129__$1);

return statearr_19153;
})();
if(cljs.core.truth_(inst_19130)){
var statearr_19155_20348 = state_19147__$1;
(statearr_19155_20348[(1)] = (5));

} else {
var statearr_19156_20349 = state_19147__$1;
(statearr_19156_20349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (6))){
var inst_19129 = (state_19147[(7)]);
var inst_19134 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19129) : p.call(null,inst_19129));
var state_19147__$1 = state_19147;
if(cljs.core.truth_(inst_19134)){
var statearr_19157_20351 = state_19147__$1;
(statearr_19157_20351[(1)] = (8));

} else {
var statearr_19158_20352 = state_19147__$1;
(statearr_19158_20352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (3))){
var inst_19145 = (state_19147[(2)]);
var state_19147__$1 = state_19147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19147__$1,inst_19145);
} else {
if((state_val_19148 === (2))){
var state_19147__$1 = state_19147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19147__$1,(4),ch);
} else {
if((state_val_19148 === (11))){
var inst_19137 = (state_19147[(2)]);
var state_19147__$1 = state_19147;
var statearr_19159_20358 = state_19147__$1;
(statearr_19159_20358[(2)] = inst_19137);

(statearr_19159_20358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (9))){
var state_19147__$1 = state_19147;
var statearr_19160_20362 = state_19147__$1;
(statearr_19160_20362[(2)] = null);

(statearr_19160_20362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (5))){
var inst_19132 = cljs.core.async.close_BANG_(out);
var state_19147__$1 = state_19147;
var statearr_19164_20363 = state_19147__$1;
(statearr_19164_20363[(2)] = inst_19132);

(statearr_19164_20363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (10))){
var inst_19140 = (state_19147[(2)]);
var state_19147__$1 = (function (){var statearr_19165 = state_19147;
(statearr_19165[(8)] = inst_19140);

return statearr_19165;
})();
var statearr_19166_20364 = state_19147__$1;
(statearr_19166_20364[(2)] = null);

(statearr_19166_20364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (8))){
var inst_19129 = (state_19147[(7)]);
var state_19147__$1 = state_19147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19147__$1,(11),out,inst_19129);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19167 = [null,null,null,null,null,null,null,null,null];
(statearr_19167[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19167[(1)] = (1));

return statearr_19167;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19147){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19147);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19168){var ex__17103__auto__ = e19168;
var statearr_19169_20376 = state_19147;
(statearr_19169_20376[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19147[(4)]))){
var statearr_19170_20382 = state_19147;
(statearr_19170_20382[(1)] = cljs.core.first((state_19147[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20385 = state_19147;
state_19147 = G__20385;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_19171 = f__17282__auto__();
(statearr_19171[(6)] = c__17281__auto___20327);

return statearr_19171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19173 = arguments.length;
switch (G__19173) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_19235){
var state_val_19236 = (state_19235[(1)]);
if((state_val_19236 === (7))){
var inst_19231 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19237_20412 = state_19235__$1;
(statearr_19237_20412[(2)] = inst_19231);

(statearr_19237_20412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (20))){
var inst_19201 = (state_19235[(7)]);
var inst_19212 = (state_19235[(2)]);
var inst_19213 = cljs.core.next(inst_19201);
var inst_19187 = inst_19213;
var inst_19188 = null;
var inst_19189 = (0);
var inst_19190 = (0);
var state_19235__$1 = (function (){var statearr_19238 = state_19235;
(statearr_19238[(8)] = inst_19190);

(statearr_19238[(9)] = inst_19189);

(statearr_19238[(10)] = inst_19187);

(statearr_19238[(11)] = inst_19212);

(statearr_19238[(12)] = inst_19188);

return statearr_19238;
})();
var statearr_19239_20414 = state_19235__$1;
(statearr_19239_20414[(2)] = null);

(statearr_19239_20414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (1))){
var state_19235__$1 = state_19235;
var statearr_19240_20422 = state_19235__$1;
(statearr_19240_20422[(2)] = null);

(statearr_19240_20422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (4))){
var inst_19176 = (state_19235[(13)]);
var inst_19176__$1 = (state_19235[(2)]);
var inst_19177 = (inst_19176__$1 == null);
var state_19235__$1 = (function (){var statearr_19241 = state_19235;
(statearr_19241[(13)] = inst_19176__$1);

return statearr_19241;
})();
if(cljs.core.truth_(inst_19177)){
var statearr_19242_20424 = state_19235__$1;
(statearr_19242_20424[(1)] = (5));

} else {
var statearr_19245_20425 = state_19235__$1;
(statearr_19245_20425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (15))){
var state_19235__$1 = state_19235;
var statearr_19255_20427 = state_19235__$1;
(statearr_19255_20427[(2)] = null);

(statearr_19255_20427[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (21))){
var state_19235__$1 = state_19235;
var statearr_19256_20432 = state_19235__$1;
(statearr_19256_20432[(2)] = null);

(statearr_19256_20432[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (13))){
var inst_19190 = (state_19235[(8)]);
var inst_19189 = (state_19235[(9)]);
var inst_19187 = (state_19235[(10)]);
var inst_19188 = (state_19235[(12)]);
var inst_19197 = (state_19235[(2)]);
var inst_19198 = (inst_19190 + (1));
var tmp19249 = inst_19189;
var tmp19250 = inst_19187;
var tmp19251 = inst_19188;
var inst_19187__$1 = tmp19250;
var inst_19188__$1 = tmp19251;
var inst_19189__$1 = tmp19249;
var inst_19190__$1 = inst_19198;
var state_19235__$1 = (function (){var statearr_19260 = state_19235;
(statearr_19260[(14)] = inst_19197);

(statearr_19260[(8)] = inst_19190__$1);

(statearr_19260[(9)] = inst_19189__$1);

(statearr_19260[(10)] = inst_19187__$1);

(statearr_19260[(12)] = inst_19188__$1);

return statearr_19260;
})();
var statearr_19261_20443 = state_19235__$1;
(statearr_19261_20443[(2)] = null);

(statearr_19261_20443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (22))){
var state_19235__$1 = state_19235;
var statearr_19262_20444 = state_19235__$1;
(statearr_19262_20444[(2)] = null);

(statearr_19262_20444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (6))){
var inst_19176 = (state_19235[(13)]);
var inst_19185 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19176) : f.call(null,inst_19176));
var inst_19186 = cljs.core.seq(inst_19185);
var inst_19187 = inst_19186;
var inst_19188 = null;
var inst_19189 = (0);
var inst_19190 = (0);
var state_19235__$1 = (function (){var statearr_19263 = state_19235;
(statearr_19263[(8)] = inst_19190);

(statearr_19263[(9)] = inst_19189);

(statearr_19263[(10)] = inst_19187);

(statearr_19263[(12)] = inst_19188);

return statearr_19263;
})();
var statearr_19264_20453 = state_19235__$1;
(statearr_19264_20453[(2)] = null);

(statearr_19264_20453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (17))){
var inst_19201 = (state_19235[(7)]);
var inst_19205 = cljs.core.chunk_first(inst_19201);
var inst_19206 = cljs.core.chunk_rest(inst_19201);
var inst_19207 = cljs.core.count(inst_19205);
var inst_19187 = inst_19206;
var inst_19188 = inst_19205;
var inst_19189 = inst_19207;
var inst_19190 = (0);
var state_19235__$1 = (function (){var statearr_19265 = state_19235;
(statearr_19265[(8)] = inst_19190);

(statearr_19265[(9)] = inst_19189);

(statearr_19265[(10)] = inst_19187);

(statearr_19265[(12)] = inst_19188);

return statearr_19265;
})();
var statearr_19266_20458 = state_19235__$1;
(statearr_19266_20458[(2)] = null);

(statearr_19266_20458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (3))){
var inst_19233 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19235__$1,inst_19233);
} else {
if((state_val_19236 === (12))){
var inst_19221 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19267_20460 = state_19235__$1;
(statearr_19267_20460[(2)] = inst_19221);

(statearr_19267_20460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (2))){
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19235__$1,(4),in$);
} else {
if((state_val_19236 === (23))){
var inst_19229 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19268_20462 = state_19235__$1;
(statearr_19268_20462[(2)] = inst_19229);

(statearr_19268_20462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (19))){
var inst_19216 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19269_20466 = state_19235__$1;
(statearr_19269_20466[(2)] = inst_19216);

(statearr_19269_20466[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (11))){
var inst_19201 = (state_19235[(7)]);
var inst_19187 = (state_19235[(10)]);
var inst_19201__$1 = cljs.core.seq(inst_19187);
var state_19235__$1 = (function (){var statearr_19270 = state_19235;
(statearr_19270[(7)] = inst_19201__$1);

return statearr_19270;
})();
if(inst_19201__$1){
var statearr_19271_20472 = state_19235__$1;
(statearr_19271_20472[(1)] = (14));

} else {
var statearr_19272_20473 = state_19235__$1;
(statearr_19272_20473[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (9))){
var inst_19223 = (state_19235[(2)]);
var inst_19224 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19235__$1 = (function (){var statearr_19273 = state_19235;
(statearr_19273[(15)] = inst_19223);

return statearr_19273;
})();
if(cljs.core.truth_(inst_19224)){
var statearr_19274_20478 = state_19235__$1;
(statearr_19274_20478[(1)] = (21));

} else {
var statearr_19275_20479 = state_19235__$1;
(statearr_19275_20479[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (5))){
var inst_19179 = cljs.core.async.close_BANG_(out);
var state_19235__$1 = state_19235;
var statearr_19276_20480 = state_19235__$1;
(statearr_19276_20480[(2)] = inst_19179);

(statearr_19276_20480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (14))){
var inst_19201 = (state_19235[(7)]);
var inst_19203 = cljs.core.chunked_seq_QMARK_(inst_19201);
var state_19235__$1 = state_19235;
if(inst_19203){
var statearr_19278_20482 = state_19235__$1;
(statearr_19278_20482[(1)] = (17));

} else {
var statearr_19279_20483 = state_19235__$1;
(statearr_19279_20483[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (16))){
var inst_19219 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19281_20484 = state_19235__$1;
(statearr_19281_20484[(2)] = inst_19219);

(statearr_19281_20484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (10))){
var inst_19190 = (state_19235[(8)]);
var inst_19188 = (state_19235[(12)]);
var inst_19195 = cljs.core._nth(inst_19188,inst_19190);
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19235__$1,(13),out,inst_19195);
} else {
if((state_val_19236 === (18))){
var inst_19201 = (state_19235[(7)]);
var inst_19210 = cljs.core.first(inst_19201);
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19235__$1,(20),out,inst_19210);
} else {
if((state_val_19236 === (8))){
var inst_19190 = (state_19235[(8)]);
var inst_19189 = (state_19235[(9)]);
var inst_19192 = (inst_19190 < inst_19189);
var inst_19193 = inst_19192;
var state_19235__$1 = state_19235;
if(cljs.core.truth_(inst_19193)){
var statearr_19282_20490 = state_19235__$1;
(statearr_19282_20490[(1)] = (10));

} else {
var statearr_19283_20491 = state_19235__$1;
(statearr_19283_20491[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_19286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19286[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__);

(statearr_19286[(1)] = (1));

return statearr_19286;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1 = (function (state_19235){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19235);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19287){var ex__17103__auto__ = e19287;
var statearr_19288_20492 = state_19235;
(statearr_19288_20492[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19235[(4)]))){
var statearr_19290_20493 = state_19235;
(statearr_19290_20493[(1)] = cljs.core.first((state_19235[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20496 = state_19235;
state_19235 = G__20496;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__ = function(state_19235){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1.call(this,state_19235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_19292 = f__17282__auto__();
(statearr_19292[(6)] = c__17281__auto__);

return statearr_19292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));

return c__17281__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19296 = arguments.length;
switch (G__19296) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19298 = arguments.length;
switch (G__19298) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19300 = arguments.length;
switch (G__19300) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17281__auto___20520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_19327){
var state_val_19328 = (state_19327[(1)]);
if((state_val_19328 === (7))){
var inst_19322 = (state_19327[(2)]);
var state_19327__$1 = state_19327;
var statearr_19329_20521 = state_19327__$1;
(statearr_19329_20521[(2)] = inst_19322);

(statearr_19329_20521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (1))){
var inst_19304 = null;
var state_19327__$1 = (function (){var statearr_19330 = state_19327;
(statearr_19330[(7)] = inst_19304);

return statearr_19330;
})();
var statearr_19331_20522 = state_19327__$1;
(statearr_19331_20522[(2)] = null);

(statearr_19331_20522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (4))){
var inst_19307 = (state_19327[(8)]);
var inst_19307__$1 = (state_19327[(2)]);
var inst_19308 = (inst_19307__$1 == null);
var inst_19309 = cljs.core.not(inst_19308);
var state_19327__$1 = (function (){var statearr_19342 = state_19327;
(statearr_19342[(8)] = inst_19307__$1);

return statearr_19342;
})();
if(inst_19309){
var statearr_19343_20523 = state_19327__$1;
(statearr_19343_20523[(1)] = (5));

} else {
var statearr_19344_20524 = state_19327__$1;
(statearr_19344_20524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (6))){
var state_19327__$1 = state_19327;
var statearr_19348_20525 = state_19327__$1;
(statearr_19348_20525[(2)] = null);

(statearr_19348_20525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (3))){
var inst_19324 = (state_19327[(2)]);
var inst_19325 = cljs.core.async.close_BANG_(out);
var state_19327__$1 = (function (){var statearr_19349 = state_19327;
(statearr_19349[(9)] = inst_19324);

return statearr_19349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19327__$1,inst_19325);
} else {
if((state_val_19328 === (2))){
var state_19327__$1 = state_19327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19327__$1,(4),ch);
} else {
if((state_val_19328 === (11))){
var inst_19307 = (state_19327[(8)]);
var inst_19316 = (state_19327[(2)]);
var inst_19304 = inst_19307;
var state_19327__$1 = (function (){var statearr_19350 = state_19327;
(statearr_19350[(10)] = inst_19316);

(statearr_19350[(7)] = inst_19304);

return statearr_19350;
})();
var statearr_19351_20532 = state_19327__$1;
(statearr_19351_20532[(2)] = null);

(statearr_19351_20532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (9))){
var inst_19307 = (state_19327[(8)]);
var state_19327__$1 = state_19327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19327__$1,(11),out,inst_19307);
} else {
if((state_val_19328 === (5))){
var inst_19307 = (state_19327[(8)]);
var inst_19304 = (state_19327[(7)]);
var inst_19311 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19307,inst_19304);
var state_19327__$1 = state_19327;
if(inst_19311){
var statearr_19363_20533 = state_19327__$1;
(statearr_19363_20533[(1)] = (8));

} else {
var statearr_19364_20534 = state_19327__$1;
(statearr_19364_20534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (10))){
var inst_19319 = (state_19327[(2)]);
var state_19327__$1 = state_19327;
var statearr_19365_20535 = state_19327__$1;
(statearr_19365_20535[(2)] = inst_19319);

(statearr_19365_20535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19328 === (8))){
var inst_19304 = (state_19327[(7)]);
var tmp19359 = inst_19304;
var inst_19304__$1 = tmp19359;
var state_19327__$1 = (function (){var statearr_19366 = state_19327;
(statearr_19366[(7)] = inst_19304__$1);

return statearr_19366;
})();
var statearr_19367_20536 = state_19327__$1;
(statearr_19367_20536[(2)] = null);

(statearr_19367_20536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19368[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19368[(1)] = (1));

return statearr_19368;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19327){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19327);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19369){var ex__17103__auto__ = e19369;
var statearr_19370_20541 = state_19327;
(statearr_19370_20541[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19327[(4)]))){
var statearr_19374_20542 = state_19327;
(statearr_19374_20542[(1)] = cljs.core.first((state_19327[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20543 = state_19327;
state_19327 = G__20543;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_19382 = f__17282__auto__();
(statearr_19382[(6)] = c__17281__auto___20520);

return statearr_19382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19391 = arguments.length;
switch (G__19391) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17281__auto___20553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_19431){
var state_val_19432 = (state_19431[(1)]);
if((state_val_19432 === (7))){
var inst_19427 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
var statearr_19433_20555 = state_19431__$1;
(statearr_19433_20555[(2)] = inst_19427);

(statearr_19433_20555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (1))){
var inst_19394 = (new Array(n));
var inst_19395 = inst_19394;
var inst_19396 = (0);
var state_19431__$1 = (function (){var statearr_19434 = state_19431;
(statearr_19434[(7)] = inst_19395);

(statearr_19434[(8)] = inst_19396);

return statearr_19434;
})();
var statearr_19435_20557 = state_19431__$1;
(statearr_19435_20557[(2)] = null);

(statearr_19435_20557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (4))){
var inst_19399 = (state_19431[(9)]);
var inst_19399__$1 = (state_19431[(2)]);
var inst_19400 = (inst_19399__$1 == null);
var inst_19401 = cljs.core.not(inst_19400);
var state_19431__$1 = (function (){var statearr_19436 = state_19431;
(statearr_19436[(9)] = inst_19399__$1);

return statearr_19436;
})();
if(inst_19401){
var statearr_19437_20566 = state_19431__$1;
(statearr_19437_20566[(1)] = (5));

} else {
var statearr_19438_20572 = state_19431__$1;
(statearr_19438_20572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (15))){
var inst_19421 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
var statearr_19439_20574 = state_19431__$1;
(statearr_19439_20574[(2)] = inst_19421);

(statearr_19439_20574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (13))){
var state_19431__$1 = state_19431;
var statearr_19440_20579 = state_19431__$1;
(statearr_19440_20579[(2)] = null);

(statearr_19440_20579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (6))){
var inst_19396 = (state_19431[(8)]);
var inst_19417 = (inst_19396 > (0));
var state_19431__$1 = state_19431;
if(cljs.core.truth_(inst_19417)){
var statearr_19441_20583 = state_19431__$1;
(statearr_19441_20583[(1)] = (12));

} else {
var statearr_19442_20588 = state_19431__$1;
(statearr_19442_20588[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (3))){
var inst_19429 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19431__$1,inst_19429);
} else {
if((state_val_19432 === (12))){
var inst_19395 = (state_19431[(7)]);
var inst_19419 = cljs.core.vec(inst_19395);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19431__$1,(15),out,inst_19419);
} else {
if((state_val_19432 === (2))){
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19431__$1,(4),ch);
} else {
if((state_val_19432 === (11))){
var inst_19411 = (state_19431[(2)]);
var inst_19412 = (new Array(n));
var inst_19395 = inst_19412;
var inst_19396 = (0);
var state_19431__$1 = (function (){var statearr_19443 = state_19431;
(statearr_19443[(7)] = inst_19395);

(statearr_19443[(10)] = inst_19411);

(statearr_19443[(8)] = inst_19396);

return statearr_19443;
})();
var statearr_19444_20596 = state_19431__$1;
(statearr_19444_20596[(2)] = null);

(statearr_19444_20596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (9))){
var inst_19395 = (state_19431[(7)]);
var inst_19409 = cljs.core.vec(inst_19395);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19431__$1,(11),out,inst_19409);
} else {
if((state_val_19432 === (5))){
var inst_19404 = (state_19431[(11)]);
var inst_19395 = (state_19431[(7)]);
var inst_19399 = (state_19431[(9)]);
var inst_19396 = (state_19431[(8)]);
var inst_19403 = (inst_19395[inst_19396] = inst_19399);
var inst_19404__$1 = (inst_19396 + (1));
var inst_19405 = (inst_19404__$1 < n);
var state_19431__$1 = (function (){var statearr_19445 = state_19431;
(statearr_19445[(11)] = inst_19404__$1);

(statearr_19445[(12)] = inst_19403);

return statearr_19445;
})();
if(cljs.core.truth_(inst_19405)){
var statearr_19446_20601 = state_19431__$1;
(statearr_19446_20601[(1)] = (8));

} else {
var statearr_19447_20602 = state_19431__$1;
(statearr_19447_20602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (14))){
var inst_19424 = (state_19431[(2)]);
var inst_19425 = cljs.core.async.close_BANG_(out);
var state_19431__$1 = (function (){var statearr_19451 = state_19431;
(statearr_19451[(13)] = inst_19424);

return statearr_19451;
})();
var statearr_19452_20607 = state_19431__$1;
(statearr_19452_20607[(2)] = inst_19425);

(statearr_19452_20607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (10))){
var inst_19415 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
var statearr_19453_20614 = state_19431__$1;
(statearr_19453_20614[(2)] = inst_19415);

(statearr_19453_20614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19432 === (8))){
var inst_19404 = (state_19431[(11)]);
var inst_19395 = (state_19431[(7)]);
var tmp19448 = inst_19395;
var inst_19395__$1 = tmp19448;
var inst_19396 = inst_19404;
var state_19431__$1 = (function (){var statearr_19454 = state_19431;
(statearr_19454[(7)] = inst_19395__$1);

(statearr_19454[(8)] = inst_19396);

return statearr_19454;
})();
var statearr_19455_20615 = state_19431__$1;
(statearr_19455_20615[(2)] = null);

(statearr_19455_20615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19457[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19457[(1)] = (1));

return statearr_19457;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19431){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19431);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19468){var ex__17103__auto__ = e19468;
var statearr_19469_20627 = state_19431;
(statearr_19469_20627[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19431[(4)]))){
var statearr_19470_20628 = state_19431;
(statearr_19470_20628[(1)] = cljs.core.first((state_19431[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20635 = state_19431;
state_19431 = G__20635;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_19471 = f__17282__auto__();
(statearr_19471[(6)] = c__17281__auto___20553);

return statearr_19471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19475 = arguments.length;
switch (G__19475) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17281__auto___20641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17282__auto__ = (function (){var switch__17099__auto__ = (function (state_19520){
var state_val_19521 = (state_19520[(1)]);
if((state_val_19521 === (7))){
var inst_19516 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19522_20642 = state_19520__$1;
(statearr_19522_20642[(2)] = inst_19516);

(statearr_19522_20642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (1))){
var inst_19476 = [];
var inst_19477 = inst_19476;
var inst_19478 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19520__$1 = (function (){var statearr_19523 = state_19520;
(statearr_19523[(7)] = inst_19478);

(statearr_19523[(8)] = inst_19477);

return statearr_19523;
})();
var statearr_19524_20645 = state_19520__$1;
(statearr_19524_20645[(2)] = null);

(statearr_19524_20645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (4))){
var inst_19481 = (state_19520[(9)]);
var inst_19481__$1 = (state_19520[(2)]);
var inst_19482 = (inst_19481__$1 == null);
var inst_19483 = cljs.core.not(inst_19482);
var state_19520__$1 = (function (){var statearr_19525 = state_19520;
(statearr_19525[(9)] = inst_19481__$1);

return statearr_19525;
})();
if(inst_19483){
var statearr_19526_20653 = state_19520__$1;
(statearr_19526_20653[(1)] = (5));

} else {
var statearr_19527_20655 = state_19520__$1;
(statearr_19527_20655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (15))){
var inst_19477 = (state_19520[(8)]);
var inst_19508 = cljs.core.vec(inst_19477);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19520__$1,(18),out,inst_19508);
} else {
if((state_val_19521 === (13))){
var inst_19503 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19528_20665 = state_19520__$1;
(statearr_19528_20665[(2)] = inst_19503);

(statearr_19528_20665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (6))){
var inst_19477 = (state_19520[(8)]);
var inst_19505 = inst_19477.length;
var inst_19506 = (inst_19505 > (0));
var state_19520__$1 = state_19520;
if(cljs.core.truth_(inst_19506)){
var statearr_19529_20674 = state_19520__$1;
(statearr_19529_20674[(1)] = (15));

} else {
var statearr_19530_20675 = state_19520__$1;
(statearr_19530_20675[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (17))){
var inst_19513 = (state_19520[(2)]);
var inst_19514 = cljs.core.async.close_BANG_(out);
var state_19520__$1 = (function (){var statearr_19533 = state_19520;
(statearr_19533[(10)] = inst_19513);

return statearr_19533;
})();
var statearr_19534_20676 = state_19520__$1;
(statearr_19534_20676[(2)] = inst_19514);

(statearr_19534_20676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (3))){
var inst_19518 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19520__$1,inst_19518);
} else {
if((state_val_19521 === (12))){
var inst_19477 = (state_19520[(8)]);
var inst_19496 = cljs.core.vec(inst_19477);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19520__$1,(14),out,inst_19496);
} else {
if((state_val_19521 === (2))){
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19520__$1,(4),ch);
} else {
if((state_val_19521 === (11))){
var inst_19485 = (state_19520[(11)]);
var inst_19477 = (state_19520[(8)]);
var inst_19481 = (state_19520[(9)]);
var inst_19493 = inst_19477.push(inst_19481);
var tmp19535 = inst_19477;
var inst_19477__$1 = tmp19535;
var inst_19478 = inst_19485;
var state_19520__$1 = (function (){var statearr_19537 = state_19520;
(statearr_19537[(7)] = inst_19478);

(statearr_19537[(8)] = inst_19477__$1);

(statearr_19537[(12)] = inst_19493);

return statearr_19537;
})();
var statearr_19538_20685 = state_19520__$1;
(statearr_19538_20685[(2)] = null);

(statearr_19538_20685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (9))){
var inst_19478 = (state_19520[(7)]);
var inst_19489 = cljs.core.keyword_identical_QMARK_(inst_19478,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19520__$1 = state_19520;
var statearr_19539_20690 = state_19520__$1;
(statearr_19539_20690[(2)] = inst_19489);

(statearr_19539_20690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (5))){
var inst_19485 = (state_19520[(11)]);
var inst_19478 = (state_19520[(7)]);
var inst_19486 = (state_19520[(13)]);
var inst_19481 = (state_19520[(9)]);
var inst_19485__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19481) : f.call(null,inst_19481));
var inst_19486__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19485__$1,inst_19478);
var state_19520__$1 = (function (){var statearr_19540 = state_19520;
(statearr_19540[(11)] = inst_19485__$1);

(statearr_19540[(13)] = inst_19486__$1);

return statearr_19540;
})();
if(inst_19486__$1){
var statearr_19541_20691 = state_19520__$1;
(statearr_19541_20691[(1)] = (8));

} else {
var statearr_19542_20692 = state_19520__$1;
(statearr_19542_20692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (14))){
var inst_19485 = (state_19520[(11)]);
var inst_19481 = (state_19520[(9)]);
var inst_19498 = (state_19520[(2)]);
var inst_19499 = [];
var inst_19500 = inst_19499.push(inst_19481);
var inst_19477 = inst_19499;
var inst_19478 = inst_19485;
var state_19520__$1 = (function (){var statearr_19552 = state_19520;
(statearr_19552[(7)] = inst_19478);

(statearr_19552[(8)] = inst_19477);

(statearr_19552[(14)] = inst_19500);

(statearr_19552[(15)] = inst_19498);

return statearr_19552;
})();
var statearr_19553_20696 = state_19520__$1;
(statearr_19553_20696[(2)] = null);

(statearr_19553_20696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (16))){
var state_19520__$1 = state_19520;
var statearr_19554_20697 = state_19520__$1;
(statearr_19554_20697[(2)] = null);

(statearr_19554_20697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (10))){
var inst_19491 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
if(cljs.core.truth_(inst_19491)){
var statearr_19555_20698 = state_19520__$1;
(statearr_19555_20698[(1)] = (11));

} else {
var statearr_19556_20699 = state_19520__$1;
(statearr_19556_20699[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (18))){
var inst_19510 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19557_20701 = state_19520__$1;
(statearr_19557_20701[(2)] = inst_19510);

(statearr_19557_20701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (8))){
var inst_19486 = (state_19520[(13)]);
var state_19520__$1 = state_19520;
var statearr_19559_20702 = state_19520__$1;
(statearr_19559_20702[(2)] = inst_19486);

(statearr_19559_20702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19560[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19560[(1)] = (1));

return statearr_19560;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19520){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19520);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19561){var ex__17103__auto__ = e19561;
var statearr_19562_20705 = state_19520;
(statearr_19562_20705[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19520[(4)]))){
var statearr_19563_20706 = state_19520;
(statearr_19563_20706[(1)] = cljs.core.first((state_19520[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20707 = state_19520;
state_19520 = G__20707;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17283__auto__ = (function (){var statearr_19564 = f__17282__auto__();
(statearr_19564[(6)] = c__17281__auto___20641);

return statearr_19564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17283__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
