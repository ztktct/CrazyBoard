(function(){
	_z.ready(function(){
		let zslides = _z.getEle('.zslide-item');

		// 全屏滚动
		let slider = new _z.Zslider('.page-container',{
			sliderWrap:'.swiper-wrapper',
			sliderItem:'.zslide-item',
			effect:'slide',
			loop:false,
			showControl:true,
			sliderControl:'.paginations',
			mousewheel:true,
			fullscreen:true,
			direction:'vertical',
			onSlideChangeEnd:function(t){
				let current = zslides[t.index-1];
				if(!_z.hasClass(current, 'animate')){
					_z.addClass(current, 'animate');
				}
			}
		});

		// 全屏分页设置
		let pages = _z.getEle('.paginations')[0].getElementsByTagName('div');
		for(let i = 0, j = pages.length; i< j; i++){
			const titleArr = [
				'“软” “硬” 兼施',
				'经典的外形',
				'104配列',
				'人体工程学设计',
				'不仅仅是情怀',
				'平衡点',
				'梦想的起点',
				'便携还是稳定',
				'比快更快'
			];
			pages[i].innerHTML=`<p>${titleArr[i]}</p><span class='point'><span>`;
		}
	});
})();