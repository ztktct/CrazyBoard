$(document).ready(function() {

	$('.index-page').addClass('jsready')

    // .sp下的第一个span元素
    // 若它的animationend事件触发，表示第一步动画完成
    var first_span = $('.cb-text .sp span:first-child');

    first_span.on('animationend webkitAnimationEnd', function() {
        $(this).parent().addClass('step01-over');
    });

    // 当所有动画完成之后添加类
    $('.cb-text div:first-child').on('animationend webkitAnimationEnd',function(){
    	$(this).parent().addClass('jsended');

    	$('.cb-text .sp').hover(function(){
    		$(this).parent().addClass('hide');
    		$(this).addClass('show');
    	},function(){
    		$(this).parent().removeClass('hide');
    		$(this).removeClass('show');
    	});
    });
});
