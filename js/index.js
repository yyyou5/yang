$(function(){
	var $screen = $('.screen');
	var $as = $('.nav a');
	var len = $screen.length;
	$screen.css('top','100%').eq(0).css('top',0)
	var now=0;
	var next=0;
	var clientH=document.documentElement.clientHeight;
	var flag=true;
	$screen.mousewheel(function(){
		if(!flag){
			return;
		}
		flag=false;
		next--;
		if(next<0){
			next=len-1;
		}
		$as.eq(now).css('color','');
		$as.eq(next).css('color','#ffffff');
		$screen.eq(now).css('zIndex','0');

		$screen.eq(next).css({'zIndex':10,top:'-100%'});
		$screen.eq(next).animate({top:0},500,function(){
			$screen.eq(now).css('top','100%');
			now=next;
			flag=true;
			if(next ==1){
				$screen.eq(next).addClass("active")
			}else{
				$screen.removeClass("active")
			}
		});
	},function(){
		if(!flag){
			return;
		}
		flag=false;
		next++;
		if(next>=len){
			next=0;
		}
		$as.eq(now).css('color','');
		$as.eq(next).css('color','#fff');
		$screen.eq(now).css('zIndex','0');
		$screen.eq(next).css({'zIndex':10,top:'100%'});
		$screen.eq(next).animate({top:0},500,function(){
			$screen.eq(now).css('top','-100%');
			now=next;
			flag=true;
			if(next ==1){
				$screen.eq(next).addClass("active")
			}else{
				$screen.removeClass("active")
			}
		});
	})
	$as.click(function(){
		var index = $(this).index();
		if(!flag||index==now){
			return;
		}

		flag=false;
		$as.eq(now).css('color','');
		$as.eq(index).css('color','#fff');

		if(index>now){
			$screen.eq(index).css({'zIndex':10,top:'100%'});
		}else{
			$screen.eq(index).css({'zIndex':10,top:'-100%'});
		}
		$screen.eq(now).css('zIndex','0');
		$screen.eq(index).animate({top:0},500,function(){
			$screen.eq(now).css('top','-100%');
			now=next=index;
			flag=true;
			if(next ==1){
				$screen.eq(next).addClass("active")
			}else{
				$screen.removeClass("active")
			}
		})
	})

	var cw = $(window).width()/2;
	var ch = $(window).height()/2;
	var zs1 = $('.screen:first');
	var zs3 = $('.zs3');
	var zs2 = $('.zs2');
	var zs4 = $('.zs4');
	var zs5 = $('.zs5');
	var zs6 = $('.zs6');
	$(document).mousemove(function(e){
		var mx = e.clientX;
		var my = e.clientY;
		var x = mx-cw;
		var y = my - ch;
		zs3.css({left:x*.02,marginTop:y*.02})
		zs2.css({left:-x*.03,marginTop:-y*.02})
		zs4.css({left:x*.02,marginTop:y*.02})
		zs5.css({left:-x*.03,marginTop:-y*.02})
		zs6.css({left:x*.02,marginTop:y*.02})
		zs1.css({marginLeft:x*.01,marginTop: y*.01+'px'})
		// zs3.css({left:x*.02,marginTop:y*.02})
		
	})
})