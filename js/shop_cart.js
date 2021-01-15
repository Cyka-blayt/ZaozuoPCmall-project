var arr = [{
		pid: 1,
		img: './img/quanwu01.png',
		title: '美术馆电视柜',
		title_en: 'Gallery TV Cabinet',
		price: '￥2970',
		oldprice: '￥3299',
		pink: '全场九折叠加满1000减150',
		gray: '',
		pic1: './img/details-banner02.png',
		pic2: './img/details-banner03.png',
		pic3: './img/details-banner04.png',
		pic: './img/details-banner01.png',
		style: '阳橙棕板式门框',
		num: 1,
		totalPrice: 2970,
		discount: 329
	},
	{
		pid: 2,
		title: '美术馆电视柜',
		price: '￥3600',
		oldprice: '￥3999',
		pic: './img/details-banner02.png',
		style: '脂灰玻璃门框',
		num: 1,
		totalPrice: 3600,
		discount: 399
	},
	{
		pid: 3,
		title: '美术馆电视柜',
		price: '￥3600',
		oldprice: '￥3999',
		pic: './img/details-banner03.png',
		style: '灰绿玻璃门框',
		num: 1,
		totalPrice: 3600,
		discount: 399
	},
	{
		pid: 4,
		title: '美术馆电视柜',
		price: '￥2970',
		oldprice: '￥3299',
		pic: './img/details-banner04.png',
		style: '脂灰板式门框',
		num: 1,
		totalPrice: 2970,
		discount: 399
	}
]

// var Jid = location.search.slice(1);


for (var i = 0; i < arr.length; i++) {
	$(
		`
		<table cellspacing="" cellpadding="" class="item">
			<tr>
				<td class="checkbox"><input type="checkbox" name="" /></td>
				<td class="arrImg"><img src = "${arr[i].pic}"></td>
				<td  class="items_name">
					<p class = 'name'>${arr[i].title}</p>
					<p class = 'style'>${arr[i].style}</p>
				</td>
				<td  class="time"><span>预计2020-11-14前发货</span></td>
				<td class="price">
					<p class = 'price_new'>${arr[i].price}</p>
					<p class = 'price_old'><s>${arr[i].oldprice}</s></p>
				</td>
				<td class="count">
					<div>
						<span class="num_minus">-</span>
						<span class="num">${arr[i].num}</span>
						<span class="num_plus">+</span>
					</div>
				</td>
				<td class="remove">
					<span>删除</span>
				</td>
			</tr>
		</table>
	`
	).appendTo($('#goods'));
}
$(window).scroll(function() {
	// console.log($(window).scrollTop())
	if ($(window).scrollTop() > 650) {
		$('.settle').css('position', 'static')
	} else {
		$('.settle').css('position', 'fixed')
	}
})
var goodsSelect = [];
var count = 0;
$('.checkbox input').click(function() {
	var index = $('.checkbox input').index(this);
	console.log(index)
	console.log(this)
	if (this.checked) {
		count++;
		goodsSelect.push(arr[index]);
	} else {
		count--;
		var i = goodsSelect.indexOf(arr[index]);
		goodsSelect.splice(i, 1);
	}
	//当全选泽时，全选框的状态改为true
	if (count === arr.length) {
		$('#checkbox input')[0].checked = true;
	} else {
		$('#checkbox input')[0].checked = false;
	}

	console.log(count);
	// 改变总价结算的方法
	goodstotalPrice();
})
// 全选的按钮控制上面的按钮
$('#checkbox input').click(function() {
	if (this.checked) {
		goodsSelect = [];
		count = arr.length
		console.log(arr)
		$('.checkbox input').prop('checked', true);
		goodsSelect = arr.concat();
	} else {
		$('.checkbox input').prop('checked', false);
		goodsSelect = [];
	}
	goodstotalPrice()
})

// +
$('.num_plus').click(function() {
	var index = $('.num_plus').index(this);
	arr[index].num++;
	console.log(arr[index])
	$('.num').eq(index).text(arr[index].num);
	goodsPrice(index);
	goodstotalPrice()
})

// -
$('.num_minus').click(function() {
	var index = $('.num_minus').index(this);
	arr[index].num--;
	console.log(arr[index].num)
	if (arr[index].num <= 1) {
		arr[index].num = 1;
	}
	$('.num').eq(index).text(arr[index].num);

	goodsPrice(index);
	goodstotalPrice()
})

// 删除
$('.remove').click(function() {
	var index = $('.remove').index(this);
	$('.item')[index].remove();
	var i = goodsSelect.indexOf(arr[index]);
	if (i > -1) {
		goodsSelect.splice(i, 1);
		arr.splice(index, 1);
	} else {
		arr.splice(index, 1);
	}
	count = goodsSelect.length;
	if (count == arr.length) {
		$('#checkbox input')[0].checked = true;
	}
	if (arr.length == 0) {
		$('.wrapper').css('display', 'block');
		$('.shop-wrapper').css('display', 'none')
	} else {
		$('.wrapper').css('display', 'none');
		$('.shop-wrapper').css('display', 'block')
	}
	goodstotalPrice()
	console.log(arr)
	console.log(goodsSelect)
	console.log(arr.length)
})
// 计算单价
function goodsPrice(index) {
	arr[index].discount = (arr[index].oldprice.slice(1) - arr[index].price.slice(1)) * arr[index].num;
	arr[index].totalPrice = arr[index].price.slice(1) * arr[index].num;
	$('.price_new').eq(index).text('¥' + arr[index].totalPrice);
}
// 把选中的购物车里面的单价和数量算出总价
function goodstotalPrice() {
	var total = 0;
	var discount = 0;
	var sum = 0;
	for (var i = 0; i < goodsSelect.length; i++) {
		total = total + goodsSelect[i].totalPrice;
		discount = discount + goodsSelect[i].discount;
		sum = sum + goodsSelect[i].num;
	}
	$('.price_total').text('¥' + total);
	$('.price_discount').text('¥' + discount);
	$('.item_count').text(sum)
}
$('.item_btn').click(function() {
	location.assign('settlement.html');
})
