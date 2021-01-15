//订单页选项卡
$('.if-payment li').click(function () {
	$('.if-payment li').removeClass('active');
	$(this).addClass('active');
	$('.wrapper .container').attr('id',null);
	$('.wrapper .container').eq($(this).index()).attr('id','content')
})
// 订单页提示信息
$('.if-payment .tips').mouseover(function () {
	$('.if-payment .tips-content').css('display','block');
}).mouseout(function () {
	$('.if-payment .tips-content').css('display','none');
})
//优惠券页选项卡
$('.coupon li').click(function () {
	$('.coupon li').removeClass('active');
	$(this).addClass('active');
	$('#coupon-content .container').attr('id',null);
	$('#coupon-content .container').eq($(this).index()).attr('id','content')
})

$('#coupon-content .tips').mouseover(function () {
	$('#coupon-content .tips-content').css('display','block');
}).mouseout(function () {
	$('#coupon-content .tips-content').css('display','none');
})
// 提示是否卡券兑换成功
var youhui = 'tthl';

$('.bt').eq(0).click(function (){
	if ($('.duihuan').eq(0).val() != youhui) {
		$('.tips_wrapper').css('display','block');
		$('.tips_wrapper .content_word').text('兑换码错误')
	} else {
		$('.tips_wrapper').css('display','block');
		$('.tips_wrapper .content_word').text('获得年费大礼包')
	}
})
var codeKahao = '615690409';
var codeDuihuan = 'aying';
$('.bt').eq(1).click(function (){
	if ($('.kahao').val() == codeKahao && $('.duihuan').eq(1).val() == codeDuihuan) {
		$('.tips_wrapper').css('display','block');
		$('.tips_wrapper .content_word').text('获得兰博基尼五元代金券')
	} else {
		$('.tips_wrapper').css('display','block');
		$('.tips_wrapper .content_word').text('卡号或兑换码错误')
	}
})
// 关闭按钮
$('.close').click(function (){
	$('.tips_wrapper').css('display','none');
})