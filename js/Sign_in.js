// 登录页面的选项卡
// console.log($('#content .welcome li'))
$('#content .welcome li').click(function () {
	console.log($(this).index())
	$('#content .welcome li').attr('class',null);
	$(this).attr('class','active');
	$('#option').children('div').removeClass('active');
	if ($(this).index() == 2) {
		$('#option').children('div').eq($(this).index() - 1).addClass('active');
	} else {
		$('#option').children('div').eq($(this).index()).addClass('active');
	}
})

// 两个数之间的随机数
function Range(n, m) {
	var num = parseInt(Math.random() * (m - n + 1) + n);
	return num;
}
// 随机数
function Asc(n) {
	var sum = '';
	for (var i = 0; i < n; i) {
		var a = Range(48, 57);
		if (a >= 48 && a <= 57) {
			i++;
			var b = String.fromCharCode(a);
			sum += b;
		}
	}
	return sum;
}
$('#getCode').click(function (){
	$(this).text(Asc(5))
})

