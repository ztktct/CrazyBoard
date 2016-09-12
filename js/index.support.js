$(document).ready(function() {

	$(window).on('load',function(){
		$('.index-page').addClass('jsready');
	});

    // 移动端
	var mobilereg = /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i;
	if(mobilereg.test(navigator.userAgent)){

		$('.index-page').addClass('mobile');

        // 第一次点击，显示提示
        // 第二次点击，跳转
        $('.cb-text .sp a').click(function(e){
            e.stopPropagation();
            var _self = $(this);
            var parent = $(this).parent();
            
            $('.cb-text .sp').not(parent[0]).removeClass('show');

            if(!parent.hasClass('show')){
                e.preventDefault();
                parent.parent().addClass('hide');
                parent.addClass('show');
            }
        });

        $('.index-page').click(function(){
            $('.cb-text').removeClass('hide');
            $('.cb-text .sp').removeClass('show');
        });
	}

    // 当所有动画完成之后添加类
    $('.cb-text div:first-child').on('animationend webkitAnimationEnd',function(){
    	$(this).parent().addClass('jsended');

        // 如果不是移动端，添加鼠标覆盖事件
        if(!mobilereg.test(navigator.userAgent)){
            $('.cb-text .sp').hover(function(){
                $(this).parent().addClass('hide');
                $(this).addClass('show');
            },function(){
                $(this).parent().removeClass('hide');
                $(this).removeClass('show');
            });
        }

    	// IE/Edge特别处理
    	var iereg = /(msie\s|trident.*rv:)([\w.]+)|Edge/i;
    	if(iereg.test(navigator.userAgent)){
    		$('.cb-text .sp').addClass('iehack');
    		setTimeout(function(){
    			$('.cb-text .sp').removeClass('iehack');
    		},700);
    	}

    });

    // 给IE9及以下添加类名，分别处理
    try{
        var ieVersionReg = /msie+\s\d+\.\d*/i;
        var ieVersion = navigator.userAgent.match(ieVersionReg)[0].match(/\d+\.\d*/);
        
        if(ieVersion <= 9){
            $('.index-page').addClass('ie9-')
                            .addClass('ie'+Math.abs(ieVersion));
             $('.cb-text').addClass('jsended');           

            $('.cb-text .sp').hover(function(){
                $(this).find('span:not(:first-child)').stop(true,true).animate({
                    maxWidth:'1em',
                    opacity:1
                },400);

            },function(){
                $(this).find('span:not(:first-child)').stop(true,true).animate({
                    maxWidth:'0em',
                    opacity:0
                },400)
            });
        }
    }catch(e){
        console.log('You are clever!');
    }
    
});
