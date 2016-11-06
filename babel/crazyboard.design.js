(function() {
    // 判断有无类
    let hasClass = function(obj, classN) {
        let classArray = obj.className.split(' ');
        for (let i = 0, j = classArray.length; i < j; i++) {
            if (classArray[i] === classN) {
                return true;
            }
        }
        return false;
    }

    // 添加类
    let addClass = function(obj, classN) {
        if (!hasClass(obj, classN)) {
            obj.className += ' ' + classN;
        }
    }

    // 删除类
    let removeClass = function(obj, classN) {
        let classArray = obj.className.split(' ');
        let newArray = new Array();
        if (!hasClass(obj, classN)) {
            return;
        }
        for (let i = 0, j = classArray.length; i < j; i++) {
            if (classArray[i] !== classN) {
                newArray.push(classArray[i]);
            }
        }
        obj.className = newArray.join(' ');
    }

    const d = document;

    const on = function(obj, event, fn){
        if(d.addEventListener){
            obj.addEventListener(event, fn);
        }else if(d.attachEvent){
            obj.attachEvent(event, fn);
        }else{
            obj['on'+event]=fn;
        }
    };

    // on(d,'DOMContentLoaded', function() {
    _z.ready(function(){
        // 全屏滚动
        let page_back = d.getElementById('page_back'); // 回到顶部按钮
        let swiper = new Swiper('.page-container', {
            speed: 500,
            mousewheelControl: true,
            direction: 'vertical',
            pagination: '.paginations',
            paginationClickable: true,
            setWrapperSize: true,
            noSwiping: true,
            noSwipingClass: 'txt-wrap',
            paginationBulletRender: function ( index, className) {
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
            	return `<div class='${className}'><p>${titleArr[index]}</p><span class='point'><span></div>`;
            },
            onSlideChangeStart: function(t){
            	let current = t.slides[t.previousIndex];
            	if(hasClass(current, 'animate')){
            		removeClass(current, 'animate');
            	}
                // 第一张，隐藏回到顶部
                if(t.activeIndex == 0){
                    addClass(page_back,'hide');
                }else{
                    removeClass(page_back,'hide');
                }
            },
            onSlideChangeEnd: function(t) {
            	let current = t.slides[t.activeIndex];
            	if(!hasClass(current, 'animate')){
            		addClass(current, 'animate');
            	}
            }
        });

        on(page_back, 'click',function(){
            swiper.slideTo(0);
        })

        // 第一页 开关灯
        let toggle = d.getElementById('btn-toggle');
        let page01 = d.querySelector('.page01');
        on(toggle, 'click', function() {
        	if(hasClass(page01,'show')){
        		removeClass(page01,'show')
        	}else{
        		addClass(page01,'show')
        	}
        });

        // 第7页 内部切换
        let swiper2 = new Swiper('#page01_inside', {
            speed: 500,
            pagination: '.inside-pagination',
            paginationClickable: true,
            setWrapperSize: true,
            effect : 'fade',
            paginationBulletRender: function ( index, className) {
            	// 此处根据不同的颜色进行修改！！！！
            	const typeArr = [
            		['红轴','#EB4C48'],
                    ['青轴','#8ad901'],
            		['茶轴',"#815332"]
            	];
            	return `<div class='${className}'>
			            	<p>${typeArr[index][0]}</p>
			            	<span class='point' style='background:${typeArr[index][1]}'><span>
            			</div>`;
            },
        });

    });
})();
