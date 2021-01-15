// 顶部导航下拉
$('#fixed-ul').find('li').mouseover(function() {
	$('.fixed-underul').css('display', 'none');
	if ($(this).index() == 0) {
		$('.fixed-underul').css('display', 'none');
	} else {
		$('.fixed-underul').eq($(this).index() - 1).css('display', 'block');
	}
});
$('#fixed-ul').find('li').mouseout(function() {
	$('.fixed-underul').css('display', 'none');
})

// 侧导航栏
$(window).scroll(function() {
	// 滚动距离scrollTop
	// console.log($(window).scrollTop());
	if ($(window).scrollTop() > 700) {
		$('#getTop').css('display','block');
	} else {
		$('#getTop').css('display','none');
	}
})
// 点击返回顶部
$('#getTop').click(function (){
	$(window).scrollTop(0);
})

var if_sigin = 0;
// 判断登录注册内容是否正确
$('#btn').click(function () {
	var re = /^1\d{10}$/;
	if ($('#phone').val() == '' || $('#code').val() == '') {
		$(this).css('outline-color','red');
	} else if ($('#code').val() != $('#getCode').text()) {
		$(this).css('outline-color','red');
	} else if (re.test($('#phone').val()) == false) {
		$(this).css('outline-color','red');
		
	} else {
		$(this).css('background','black');
		window.location.assign("index.html");
		if_sigin = 1;
		localStorage.if_sigin = if_sigin;
	}
})
$('#btn1').click(function () {
	var re = /^1\d{10}$/;
	if ($('#phone').val() == '' || $('#code').val() == '') {
		$(this).css('outline-color','red');
	} else if ($('#code').val() != $('#getCode').text()) {
		$(this).css('outline-color','red');
	} else if (re.test($('#phone').val()) == false) {
		$(this).css('outline-color','red');
		
	} else {
		$(this).css('background','black');
		window.location.assign("index.html");
		if_sigin = 1;
		localStorage.if_sigin = if_sigin;
	}
})
$('#btn2').click(function () {
	var re = /^1\d{10}$/;
	if ($('#phone').val() == '' || $('#password').val() == '') {
		$(this).css('outline-color','red');
	} else if (re.test($('#phone').val()) == false) {
		$(this).css('outline-color','red');
	} else {
		$(this).css('background','black');
		window.location.assign("index.html");
		if_sigin = 1;
		localStorage.if_sigin = if_sigin;
	}
})
$('#btn3').click(function () {
	var re1 = /^1\d{10}$/;
	var re2 = /\W/ig;
	if ($('#phone').val() == '' || $('#password').val() == '') {
		$(this).css('outline-color','red');
	} else if (re1.test($('#phone').val()) == false) {
		$(this).css('outline-color','red');
	} else if ($("#pasw").val().length < 6 || $("#pasw").val().length > 12) {
		$(this).css('outline-color','red');
	} else if (re2.test($('#pasw').val()) == true) {
		$(this).css('outline-color','red');
	} else {
		$(this).css('background','black');
		window.location.assign("index.html");
		if_sigin = 1;
		localStorage.if_sigin = if_sigin;
	}
})
$('.sign_out').click(function () {
	if_sigin = 0;
	localStorage.if_sigin = if_sigin;
	console.log(if_sigin)
})
console.log($('.sign_out'))
if (localStorage.if_sigin == 1) {
	// 下拉菜单
	$('#pw').mouseover(function () {
		$('#user-nav').css({
			'display':'block',
		})
	}).mouseout(function () {
		$('#user-nav').css({
			'display':'none',
		})
	})
	$('.sign-user').mouseenter(function () {
		$('#user-nav1').css({
			'display':'block',
		})
	}).mouseleave(function () {
		$('#user-nav1').css({
			'display':'none',
		})
	})
} else {
	$('#pw').click(function () {
		location.assign('sign_in.html');
	})
	$('.sign-user').click(function () {
		location.assign('sign_in.html');
	})
}
console.log(if_sigin)

//购物车按钮跳转
$('#sw').click(function (){
	location.assign('shopcart.html');
})
//主页面跳转购物车按钮 
 $('.shop_jump').click(function (){
	 location.assign('shopcart.html');
 })