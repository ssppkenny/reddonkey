
shadow.cljs.devtools.client.env.module_loaded('app');

try { reddonkey.core.init(); } catch (e) { console.error("An error occurred when calling (reddonkey.core/init)"); throw(e); }