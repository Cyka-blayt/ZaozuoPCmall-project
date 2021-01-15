// 获取class的节点
function elementsClassname(nodes, classname) {
	var oDivAll = nodes.getElementsByTagName('*'); //nodes下面的所有元素
	var res = [];
	for (var i = 0; i < oDivAll.length; i++) {
		if (oDivAll[i].className == classname) {
			res.push(oDivAll[i]);
		}
	}
	return res;
}
//获取不同类型元素的节点
function $(str) {
	switch (str.charAt(0)) {
		case '#':
			return document.getElementById(str.slice(1));
			break;
		case '.':
			return elementsClassname(document, str.slice(1));
			break;
		case '[':
			return document.getElementsByName(str.slice(8, str.length - 1));
		default:
			return document.getElementsByTagName(str);
	}
}
// 两个数之间的随机数
function Range(n, m) {
	var num = parseInt(Math.random() * (m - n + 1) + n);
	return num;
}
// 类似随机生成验证码
function Asc(n) {
	var sum = '';
	for (var i = 0; i < n; i) {
		var a = Range(48, 122);
		if (a >= 48 && a <= 57 || a >= 97 && a <= 122 || a >= 65 && a <= 90) {
			i++;
			var b = String.fromCharCode(a);
			sum += b;
		}
	}
	return sum;
}

//str:需要元素的父元素，re：被删除的元素只适合id下的元素
function repbianqian(str, re) {
	var repl = biaoqian(str).getElementsByTagName(re)[0]
	console.log(repl)
	biaoqian(str).removeChild(repl)
}

function biaoqian(str) {
	switch (str.charAt(0)) {
		case '#':
			return document.getElementById(str.slice(1));
			break;
		case '.':
			return classname1(document, str.slice(1));
			break;
		default:
			return document.getElementsByTagName(str);
			break;

	}
}

//需要添加的标签，str添加标签的位置，num不是id标签时添加在第几个元素下（可省略）
function addbianqian(bq, str, num) {
	var bianqianx = document.createElement(bq)
	if (str.charAt(0) == '#') {
		biaoqian(str).appendChild(bianqianx)
	} else {
		biaoqian(str)[num].appendChild(bianqianx)
	}
}
// 获取当前时间
function getTimming() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var hours = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	var day = d.getDay();
	return year + '年' + month + '月' + date + '日 ' + '星期' + day + " " + hours + ':' + min + ':' + sec;
}
