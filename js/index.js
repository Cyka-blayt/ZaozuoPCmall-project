// 下拉导航栏
$('#headernav').find('li').mouseover(function() {
	$('.under-ul').css('display', 'none');
	if ($(this).index() == 0) {
		$('.under-ul').css('display', 'none');
	} else {
		$('.under-ul').eq($(this).index() - 1).css('display', 'block');
	}
});
$('#headernav').find('li').mouseout(function() {
	$('.under-ul').css('display', 'none');
})

// 滚动到高度出现与消失
$(window).scroll(function() {
	// 滚动距离scrollTop
	// console.log($(window).scrollTop());
	if ($(window).scrollTop() > 180) {
		$('#header-nav').slideDown(500);
		$('#nav').css('display', 'none');
	} else {
		$('#header-nav').css('display', 'none');
		$('#nav').css('display', 'block');
	}
	if ($(window).scrollTop() > 600) {
		$('#getTop').css('display', 'block');
	} else {
		$('#getTop').css('display', 'none');
	}
})

// 滑动logo变色
$('#downApp .img').hover(function() {
	$(this).css({
		'background-position': '630px 0',
	})
}, function() {
	$(this).css({
		'background-position': '560px 0',
	})
})
$('#customer .img').hover(function() {
	$(this).css({
		'background-position': '-700px 0',
	})
}, function() {
	$(this).css({
		'background-position': '840px 0',
	})
})
$('#getTop .img').hover(function() {
	$(this).css({
		'background-position': '-770px 0',
	})
}, function() {
	$(this).css({
		'background-position': '770px 0',
	})
})

// 点击返回顶部
$('#getTop').click(function() {
	$(window).scrollTop(0);
})

// 轮播图
//定时器 自动轮播
var timer = setInterval(bannerImg, 5000);
var several = 0; //下标
function bannerImg() {
	// 如果是最后一张图片 回到第一张
	// console.log($('#banner-img li').length - 1);
	if (several < $('#banner-img li').length - 1) {
		several++;
	} else {
		several = 0;
	}
	// 如果图片是第一张的时候最后一张淡出
	$('#banner-img li').eq(several).fadeIn(2000);
	if (several == 0) {
		$('#banner-img li').eq(length - 1).fadeOut(2000);
	} else {
		$('#banner-img li').eq(several - 1).fadeOut(2000);
	}
	// 下面选项样式
	for (var i = 0; i < $('#btn-bottom li').length; i++) {
		$('#btn-bottom li').eq(i).attr('class', null);
	}
	$('#btn-bottom li').eq(several).attr('class', 'active');
}
// 滑动
$('#btn-bottom li').mouseenter(function() {
	several = $(this).index();
	$(this).attr('class', 'active').siblings().attr('class', 'none');
	$('#banner-img li').eq(several).fadeIn(2000).siblings().fadeOut(2000);
	clearInterval(timer)
}).mouseleave(function() {
	timer = setInterval(bannerImg, 5000)
})
$('#banner-img li').mouseenter(function() {
	clearInterval(timer)
}).mouseleave(function() {
	timer = setInterval(bannerImg, 5000)
})
