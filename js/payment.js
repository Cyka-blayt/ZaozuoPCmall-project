var arrImg = localStorage.arrImg.split(',')
var arrTitle = localStorage.arrTitle.split(',');
var arrCount = localStorage.arrCount.split(',');
console.log(localStorage.arrCount)
console.log(localStorage.arrTitle)
console.log(localStorage.price)
console.log(localStorage.p_ress)
console.log(localStorage.p_name)
console.log(localStorage.p_phone)

var price = localStorage.price;
var province = localStorage.p_province;
var city = localStorage.p_city;
var county = localStorage.p_county;
var ress = localStorage.p_ress;
var name = localStorage.p_name;
var phone = localStorage.p_phone;
var bill = localStorage.bill;
var remarks = localStorage.remarks
$('.payment_content .price').text('￥' + price)
$('.mode .circle').click(function (){
	$('.mode .circle').attr('id',null);
	$(this).attr('id','mode_change');
	$('.payment_money .payment_content').attr('id',null);
	$('.payment_money .payment_content').eq($(this).parent().index()).attr('id','pay_content');
})
for (var i = 0;i < arrImg.length;i++) {
	$(`
		<div class="post_information">
			<div class="post_img"></div>
			<div class="post-tc">
				<p class="post_title"><p>
				<p class="post_count"><p>
			</div>
		</div>
	`).appendTo($('.information'));
	$('.post_img').eq(i).html(arrImg[i]);
	$('.post_title').eq(i).html(arrTitle[i]);
	$('.post_count').eq(i).html(arrCount[i]);
}
$('.post_name').text(name + ' / ');
$('.post_phone').text(phone + ' / ');
$('.post_province').text(province);
$('.post_city').text(city);
$('.post_county').text(county);
$('.post_ress').text(ress);
if (bill % 2 != 0) {
	$('.yn').text('普通发票')
} else {
	$('.yn').text('不开发票')
}
$('.post_remarks').text(remarks);

