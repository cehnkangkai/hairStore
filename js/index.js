//登录界面的显示与隐藏
$(function(){
	$("#login_tog").click(function(){
		$(".div_login").show();
	});
	$("#login_close").click(function(){
		$(".div_login").hide();
	});
	$(".login_input").click(function(){
		if(this.value==""){
			$(this).css("border-bottom","1px solid rgb(27,129,62)").siblings(".login_span").addClass("span_find");
		}
	});
	$(".login_input").blur(function(){
		if(this.value==""){
			$(this).css("border-bottom","1px solid #ccc");
			$(this).siblings(".login_span").removeClass("span_find");
		}
	});
})

//首页的个人中心显示
$(function(){
	$("#login_tog").hover(function(){
		$(".login_hide").show();
	}).mouseleave(function(){
		$(".login_hide").hide();
	})
	$(".login_hide").hover(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).hide();
	})
})

//商城部分按钮背景颜色的改变
$(function(){
	$('.screen li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})



