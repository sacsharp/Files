
console.log("loaded");
(function(b,e){
	var d="2.3";
	var a=b.CombineConfig("TeX.errors");
	MathJax.Extension["TeX/errors"]={version:d,config:a};
	b.Register.StartupHook("TeX Jax Ready",function(){
	MathJax.Hub.Register.MessageHook("Math Processing Error",function (error) {
         window.webkit.messageHandlers["scriptHandler"].postMessage(error[0]);
	console.log(error);
                        });
                        MathJax.Hub.Register.MessageHook("TeX Jax - parse error",function (error) {
                         window.webkit.messageHandlers["scriptHandler"].postMessage(error[0]);
                        console.log(error);
                                                });
//		var f=MathJax.InputJax.TeX.formatError;
//		MathJax.InputJax.TeX.Augment({formatError:function(j,i,k,g){
//			console.log(j);
//            showAndroidToast(j);
//
//			// if(a.disabled){
//			// 	return f.apply(this,arguments)
//			// }
//			// var h=j.message.replace(/\n.*/,"");
//			b.signal.Post(["TeX Jax - parse error",j,i,k,g]);
//			// var m=a.inlineDelimiters;
//			// var l=(k||a.multiLine);
//			// if(!k){
//			// 	i=m[0]+i+m[1]
//			// }
//			// if(l){
//			// 	i=i.replace(/ /g,c)
//			// }else{
//			// 	i=i.replace(/\n/g," ")
//			// }
//			return MathJax.ElementJax.mml.merror(i).With({isError:true,multiLine:k})}
//		})
	});
	b.Startup.signal.Post("TeX errors Ready")})(MathJax.Hub,MathJax.HTML);MathJax.Ajax.loadComplete("https://github.com/sacsharp/Files/blob/master/errors.js");
