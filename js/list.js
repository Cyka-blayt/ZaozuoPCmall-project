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
	$('#current').css('display','block')
})
// 详情页内容
var arr = [
	{
		id:1,
		img:'./img/quanwu01.png',
		title:'美术馆电视柜',
		title_en:'Gallery TV Cabinet',
		price:'￥2970',
		oldprice:'￥3299',
		pink:'全场九折叠加满1000减150',
		gray:'',
		pic1:'./img/details-banner02.png',
		pic2:'./img/details-banner03.png',
		pic3:'./img/details-banner04.png',
		pic4:'./img/details-banner01.png',
		price1:'￥3600',
		oldprice1:'￥3999',
		price2:'￥3600',
		oldprice2:'￥3999',
		price3:'￥2970',
		oldprice3:'￥3299',
		style1:'脂灰玻璃门框',
		style2:'灰绿玻璃门框',
		style3:'脂灰板式门框',
		style4:'阳橙棕板式门框'
	},
	{
		id:2,
		img:'./img/quanwu02.png',
		title:'美术馆茶几',
		price:'￥2340起',
		oldprice:'￥2599起',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
		
	},
	{
		id:3,
		img:'./img/quanwu03.png',
		title:'美术馆书柜',
		price:'￥4140',
		oldprice:'￥4599',
		pink:'全场九折叠加满1000减150',
		gray:''
		
	},
	{
		id:4,
		img:'./img/quanwu04.png',
		title:'美术馆餐桌1.6米',
		price:'￥4500',
		oldprice:'￥4999',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
		
	},
	{
		id:5,
		img:'./img/quanwu05.png',
		title:'美术馆餐边柜',
		price:'￥2970起',
		oldprice:'￥4999',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:6,
		img:'./img/quanwu06.png',
		title:'美术馆床',
		price:'￥6300起',
		oldprice:'￥6999起',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:7,
		img:'./img/quanwu07.png',
		title:'美术馆衣柜',
		price:'￥3600起',
		oldprice:'￥3999起',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:8,
		img:'./img/quanwu08.png',
		title:'美术馆陈列柜',
		price:'￥4500',
		oldprice:'￥4999',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:9,
		img:'./img/quanwu09.png',
		title:'美术馆玄关柜',
		price:'￥2700',
		oldprice:'￥2999',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:10,
		img:'./img/quanwu10.png',
		title:'美术馆鞋柜',
		price:'￥1800',
		oldprice:'￥1999',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:11,
		img:'./img/quanwu11.png',
		title:'美术馆换鞋凳',
		price:'￥1440',
		oldprice:'￥1599',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:12,
		img:'./img/quanwu12.png',
		title:'美术馆餐斗柜',
		price:'￥3330',
		oldprice:'￥3699',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:13,
		img:'./img/quanwu13.png',
		title:'美术馆梳妆台',
		price:'￥4140',
		oldprice:'￥4599',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:14,
		img:'./img/quanwu14.png',
		title:'美术馆床头柜',
		price:'￥1170起',
		oldprice:'￥1299',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:15,
		img:'./img/quanwu15.png',
		title:'美术馆墙镜',
		price:'￥1080',
		oldprice:'￥1199',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:16,
		img:'./img/quanwu16.png',
		title:'美术衣帽架',
		price:'￥360',
		oldprice:'￥399',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:17,
		img:'./img/quanwu17.png',
		title:'画板咖啡几®',
		price:'￥1880',
		oldprice:'￥1999',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:18,
		img:'./img/quanwu18.png',
		title:'画板电视柜®',
		price:'￥3240',
		oldprice:'￥3599',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:19,
		img:'./img/quanwu19.png',
		title:'画板玄关柜®',
		price:'￥1880',
		oldprice:'￥1999',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:20,
		img:'./img/quanwu20.png',
		title:'画板鞋柜®',
		price:'￥1440',
		oldprice:'￥1599',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:21,
		img:'./img/quanwu21.png',
		title:'新画板餐厅柜®',
		price:'￥5220',
		oldprice:'￥5799',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:22,
		img:'./img/quanwu22.png',
		title:'画板书架®',
		price:'￥360',
		oldprice:'￥399',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:23,
		img:'./img/quanwu23.png',
		title:'画板餐桌®一长桌1.6米',
		price:'￥2700',
		oldprice:'￥2999',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:24,
		img:'./img/quanwu24.png',
		title:'画板床®',
		price:'￥3240',
		oldprice:'￥3599',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:25,
		img:'./img/quanwu25.png',
		title:'画板衣柜®',
		price:'￥6300',
		oldprice:'￥6999',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:26,
		img:'./img/quanwu26.png',
		title:'新画板斗柜®',
		price:'￥3600',
		oldprice:'￥3999',
		pink:'全场九折叠加满1000减150',
		gray:'3色可选'
	},
	{
		id:27,
		img:'./img/quanwu27.png',
		title:'画板床头柜®',
		price:'￥900',
		oldprice:'￥999',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:28,
		img:'./img/quanwu28.png',
		title:'画板格®',
		price:'￥450',
		oldprice:'￥499',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:29,
		img:'./img/quanwu29.png',
		title:'山雪电视柜',
		price:'￥1880',
		oldprice:'￥1999',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:30,
		img:'./img/quanwu30.png',
		title:'山雪书',
		price:'￥2160起',
		oldprice:'￥2399起',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:31,
		img:'./img/quanwu31.png',
		title:'山雪鞋柜',
		price:'￥1880',
		oldprice:'￥1999',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:32,
		img:'./img/quanwu32.png',
		title:'山雪床',
		price:'￥2610',
		oldprice:'￥2899',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:33,
		img:'./img/quanwu33.png',
		title:'山雪床头柜',
		price:'￥630',
		oldprice:'￥699',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:34,
		img:'./img/quanwu34.png',
		title:'山雪边柜',
		price:'￥2070',
		oldprice:'￥2299',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:35,
		img:'./img/quanwu35.png',
		title:'山雪长桌1.2/1.6米',
		price:'￥1800起',
		oldprice:'￥1999起',
		pink:'全场九折叠加满1000减150',
		gray:'2色可选'
	},
	{
		id:36,
		img:'./img/quanwu36.png',
		title:'青山储物格',
		price:'￥486',
		oldprice:'￥539',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:37,
		img:'./img/quanwu37.png',
		title:'青山衣帽架',
		price:'￥270',
		oldprice:'￥299',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
	{
		id:38,
		img:'./img/quanwu38.png',
		title:'COSMO星格™衣柜·斗柜',
		price:'￥3150',
		oldprice:'￥3499',
		pink:'全场九折叠加满1000减150',
		gray:''
	},
]
for (var i = 0;i < arr.length;i++) {
	$(`<div class = 'wrapper' onclick = 'Jump(${arr[i].id})'>
		<div class = 'img'><img src = '${arr[i].img}' width = '280px'></div>
		<div class = 'li-title'>${arr[i].title}</div>
		<div class = 'li-price'>${arr[i].price}<s>${arr[i].oldprice}</s></div>
		<div class = 'tag'>
			<div class = 'li-pink'>${arr[i].pink}</div>
			<div class = 'li-gray'>${arr[i].gray}</div>
		</div>
	</div>`).appendTo($('#content'));
}
function Jump(id) {
	location.assign('Details.html?' + id)
}

$(window).scroll(function (){
	if ($(window).scrollTop() > 350) {
		$('#side .go-top').css('display','block')
	} else {
		$('#side .go-top').css('display','none')
	}
})

$('#side .go-top').click(function (){
	$(window).scrollTop(0);
})