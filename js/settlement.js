var arr = [{
		pid: 1,
		img: './img/quanwu01.png',
		title: '美术馆电视柜',
		title_en: 'Gallery TV Cabinet',
		price: '￥2970',
		oldprice: '￥3299',
		pink: '全场九折叠加满1000减150',
		gray: '',
		pic: './img/details-banner01.png',
		style: '阳橙棕板式门框',
		num: 1,
		totalPrice:2970,
		discount:329
	},
	{
		pid: 2,
		title: '美术馆电视柜',
		price: '￥3600',
		oldprice: '￥3999',
		pic: './img/details-banner02.png',
		style: '脂灰玻璃门框',
		num: 2,
		totalPrice:3600,
		discount:399
	},
	{
		pid: 3,
		title: '美术馆电视柜',
		price: '￥3600',
		oldprice: '￥3999',
		pic: './img/details-banner03.png',
		style: '灰绿玻璃门框',
		num: 3,
		totalPrice:3600,
		discount:399
	},
	{
		pid: 4,
		title: '美术馆电视柜',
		price: '￥2970',
		oldprice: '￥3299',
		pic: './img/details-banner04.png',
		style: '脂灰板式门框',
		num: 1,
		totalPrice:2970,
		discount:399
	}
]

var sum = 0;
for (var i = 0;i < arr.length;i++) {
	sum = sum + (arr[i].price.slice(1) * arr[i].num);
	console.log(sum)
	$(`
		<div class="settle_content">
			<div class="settle_img">
				<img src="${arr[i].pic}">
			</div>
			<div class="settle_ns">
				<p class="settle_name">${arr[i].title}</p>
				<p class="settle_style">${arr[i].style}</p>
			</div>
			<div class="settle_time">
				<span>预计2020-11-16前发货</span>
			</div>
			<div class="settle_price">
				<span>${arr[i].price}</span>
			</div>
			<div class="settle_count">
				<span>x${arr[i].num}</span>
			</div>
		</div>
	`).appendTo($('.detailed .container'))
}

// 点击添加地址
$('.add').click(function (){
	$('#wrapper_address').css('display','block')
})
// 点击关闭
$('.shut_down').click(function (){
	$('#wrapper_address').css('display','none')
})
// 点击保存时的样式
var arr = [];
$('#submit').click(function (){
	var province = $('#province').val();	//省
	var city = $('#city').val();	//市
	var county = $('#county').val()	//区
	var ress = $('#ress').val();	//详细地址
	var user_name = $('#user_name').val();	//收货人姓名
	var user_phone = $('#user_phone').val();	//收货人手机号
	var re = /^1\d{10}$/;	//验证手机号码格式
	if (province == '省份') {
		$('#error_banner .error_words').text('请选择省份');
		$('#error_banner').css('display','block');
		setTimeout(function(){
			$('#error_banner').css('display','none');
		},3000)
	} else if (city == '地级市') {
		$('#error_banner .error_words').text('请选择市');
		$('#error_banner').css('display','block');
		setTimeout(function(){
			$('#error_banner').css('display','none');
		},3000)
	} else if (county == '市、县级市、县') {
		$('#error_banner .error_words').text('请选择区');
		$('#error_banner').css('display','block');
		setTimeout(function(){
			$('#error_banner').css('display','none');
		},3000)
	} else if (ress == '') {
		$('#error_banner .error_words').text('请输入详细地址');
		$('#error_banner').css('display','block');
		setTimeout(function(){
			$('#error_banner').css('display','none');
		},3000)
	} else if (user_name == '') {
		$('#error_banner .error_words').text('请输入收货人姓名');
		$('#error_banner').css('display','block');
		setTimeout(function(){
			$('#error_banner').css('display','none');
		},3000)
	} else if (user_phone == '') {
		$('#error_banner .error_words').text('请输入收货人电话');
		$('#error_banner').css('display','block');
		setTimeout(function(){
			$('#error_banner').css('display','none');
		},3000)
	} else if (re.test(user_phone) == false) {
			$('#error_banner .error_words').text('请输入正确的电话号码');
			$('#error_banner').css('display','block');
			setTimeout(function(){
				$('#error_banner').css('display','none');
			},3000)
	} else {
		$('#wrapper_address').css('display','none');
		$(`
			<div class="keep_ress">
				<div>
					<div class="get_np">
						<span class="get_name">${user_name}</span>
						<span class="get_phone">${user_phone}</span>
					</div>
					<div class="get_ress">
						<span class="get_province">${province}</span>
						<span class="get_city">${city}</span>
						<span class="get_county">${county}</span>
					</div>
					<div class="detailed">
						${ress}
					</div>
					<div class="remove_ress">
						<span class="left">
							默认
						</span>
						<div class="right">
							<span class="t_black">
								<img src="img/trash-black.png" width="24px">
							</span>
							<span class="t_gray">
								<img src="img/trash-gray.png" width="24px">
							</span>
						</div>
					</div>
				</div>
			</div>
		`).insertBefore($('.add'));
		arr.push($('.keep_ress'))
		
		// 点击删除
		$('.remove_ress .right').click(function (){
			var index = $('.remove_ress .right').index(this);
			$('.keep_ress').eq(index).css('display','none');	
		})
		// 点击选择收货地址
		$('.keep_ress').click(function (){
			$('.keep_ress').css({
				'border':'1px solid #9CA0A0',
				'width':'300px',
				'height':'180px',
			})
			$(this).css({
				'border':'3px solid black',
				'width':'294px',
				'height':'174px',
			})
			var name = $('.get_name').eq($(this).index()).text();
			localStorage.p_name = name;
			var phone = $('.get_phone').eq($(this).index()).text();
			localStorage.p_phone = phone;
			var province = $('.get_province').eq($(this).index()).text();
			localStorage.p_province = province;
			var city = $('.get_city').eq($(this).index()).text();
			localStorage.p_city = city;
			var county = $('.get_county').eq($(this).index()).text();
			localStorage.p_county = county;
			var ress = $('.detailed').eq($(this).index()).text();
			localStorage.p_ress = ress;
			$('.f_name').text(name);
			$('.f_phone').text(phone);
			$('.f_province').text(province);
			$('.f_ress').text(ress);
			$('.f_city').text(city);
			$('.f_county').text(county);
		})
	}
})


var pick = 0;
$('.fangkuai').click(function (){
	++pick;
	if(pick % 2 != 0) {
		$('.fangkuai img').css('display','block');
		$('.fangkuai').css('background','#008000');
		$('.invoice_word').text('普通发票')
	} else {
		$('.fangkuai img').css('display','none');
		$('.fangkuai').css('background','#FFFFFF');
		$('.invoice_word').text('我要开发票')
	}
})
$('#count_price').text('￥' + sum);
$('#count_actual').text('￥' + sum);
$('.fr_price').text('￥' + sum)

var n = 0;
$('.check_green').click(function (){
	++n;
	console.log(n)
	if (n % 2 != 0) {
		$('.check_green img').css('display','block')
		$('.check_green').css('background','#008000');
	} else {
		$('.check_green img').css('display','none')
		$('.check_green').css('background','#FFFFFF');
	}
})
// 点击跳转到支付界面
$('.fixed_btn').click(function (){
	console.log(n);
	if (n % 2 != 0) {
		if ($('.post_information .f_name').text() == '') {
			$('#ress_error').css('display','block');
			setTimeout(function(){
				$('#ress_error').css('display','none');
			},3000)
		} else {
			location.assign('payment.html');	//跳转地址
		}
		// 传图片数据
		var arrImg = [];
		for (var i = 0;i < $('.settle_img').length;i++) {
			arrImg.push($('.settle_img').eq(i).html())
		}
		localStorage.arrImg =  arrImg;
		// 传名称&&价格
		var arrTitle = [];
		for (var i = 0;i < $('.settle_name').length;i++) {
			arrTitle.push($('.settle_name').eq(i).html())
		}
		localStorage.arrTitle = arrTitle;
		localStorage.price = sum;
		// 数量
		var arrCount = [];
		for (var i = 0;i < $('.settle_count').length;i++) {
			arrCount.push($('.settle_count').eq(i).html())
		}
		localStorage.arrCount = arrCount;
		// 传递是否开发票
		localStorage.bill = pick;
		// 备注内容
		localStorage.remarks = $('textarea').val();
	} else {
		$('.rule_error').css('display','block');
		setTimeout(function (){
			$('.rule_error').css('display','none');
		},3000)
		
	}
})

// 滚动高度定位结算框
$(window).scroll(function (){
	console.log($(window).scrollTop())
	if ($(window).scrollTop() > 1550) {
		$('.fixed_bottom').css('position','static')
	} else {
		$('.fixed_bottom').css('position','fixed')
	}
})