/*

$('div').mousewheel()

*/
$.fn.extend({
	mousewheel:function(upcallback,downcallback){
		this.each(function(i,obj){
			//this == obj  == 原生js对象
			if(document.attachEvent){
			obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
			}else if(document.addEventListener){
			obj.addEventListener("mousewheel",scrollFn,false);
			//chrome,safari -webkit-
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
			//firefox -moz-
			}
			function scrollFn(e){
				var ev=e||window.event;
				var n=ev.wheelDelta||ev.detail;
				if(n==120||n==-3||n==-1){
					upcallback.call(obj);
				}
				if(n==-120||n==3||n==1){
					downcallback.call(obj);
				}
				if(ev.preventDefault){
					ev.preventDefault();
				}else{
					ev.returnValue=false;
				}
			}
		})
	}
})
