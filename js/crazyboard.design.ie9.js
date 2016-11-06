'use strict';

(function () {
	_z.ready(function () {
		var zslides = _z.getEle('.zslide-item');
		var page_back = _z.getEle('#page_back');

		// 全屏滚动
		var slider = new _z.Zslider('.page-container', {
			sliderWrap: '.swiper-wrapper',
			sliderItem: '.zslide-item',
			effect: 'slide',
			loop: false,
			showControl: true,
			sliderControl: '.paginations',
			mousewheel: true,
			fullscreen: true,
			direction: 'vertical',
			onSlideChangeEnd: function onSlideChangeEnd(t) {
				var current = zslides[t.index - 1];
				if (!_z.hasClass(current, 'animate')) {
					_z.addClass(current, 'animate');
				}
				if (t.index == 1) {
				    _z.addClass(page_back, 'hide');
				} else {
				    _z.removeClass(page_back, 'hide');
				}
			}
		});

		// 全屏分页设置
		var pages = _z.getEle('.paginations')[0].getElementsByTagName('div');
		for (var i = 0, j = pages.length; i < j; i++) {
			var titleArr = ['“软” “硬” 兼施', '经典的外形', '104配列', '人体工程学设计', '不仅仅是情怀', '平衡点', '梦想的起点', '便携还是稳定', '比快更快'];
			pages[i].innerHTML = '<p>' + titleArr[i] + '</p><span class=\'point\'><span>';
		}

		// 回到顶部
		_z.addEvent(page_back,'click',function(){
			slider.slideTo(1);
		});

		// 第一页 开关灯
		var toggle = _z.getEle('.btn-toggle')[0];
		var page01 = _z.getEle('.page01')[0];
		_z.addEvent(toggle, 'click', function () {
		    if (_z.hasClass(page01, 'show')) {
		        _z.removeClass(page01, 'show');
		    } else {
		        _z.addClass(page01, 'show');
		    }
		});

		// 第7页 内部切换
		var slider2 = new _z.Zslider('.page01_inside', {
			sliderWrap: '.swiper-wrapper',
			sliderItem: '.swiper-slide',
			effect: 'fade',
			showControl: true,
			sliderControl: '.inside-pagination',
			fullscreen: true
		});
		// 内部分页设置
		var pages2 = _z.getEle('.inside-pagination')[0].getElementsByTagName('div');
		for (var i = 0, j = pages2.length; i < j; i++) {
			var typeArr = [['红轴', '#EB4C48'], ['青轴', '#8ad901'], ['茶轴', "#815332"]];
			pages2[i].innerHTML = '<p>' + typeArr[i][0] + '</p><span class=\'point\' style=\'background-color:'+ typeArr[i][1] +'\'></span>';
		}
	});
})();