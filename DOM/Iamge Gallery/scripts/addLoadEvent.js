function showPic(elems){
	if (!document.getElementById("replaceholder")) { return false; }
		var source = elems.getAttribute("href");
		var replaceholder = document.getElementById("replaceholder");
		if (replaceholder.nodeName != "IMG") {return false;} //检测是否是图片
		replaceholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		var text = elems.firstChild.nodeValue;
		var description = document.getElementById("description");
		if (description.firstChild.nodeType != 3) {return false;} //检查是否是文本节点
		description.firstChild.nodeValue = text;
		}
		return true;
	}

function prepareGallery(){
	if (!document.getElementsByTagName || !document.getElementById) return false; //检测当前浏览器是否支持DOM,不支持则返回,平稳退化
	if (!document.getElementById("imagegallery")) return false;  //平稳退化，不让javascript对结构有所依赖
	var oUl = document.getElementById("imagegallery");
	var aA = oUl.getElementsByTagName("a");
for(var i=0;i<aA.length;i++){
	if (aA[i].getAttribute("class")=="showPic") {
		aA[i].onclick = function(){
			return showPic(this) ? false : true;
			// return false;
		}
		// aA[i].onkeypress = aA[i].onclick; onkeypress是触发onclick，所以不用写onkeypress也是可以的
	}
}
}

function addLoadEvent(func){
	var oldonload = window.onload; //把window.onload事件处理函数的值存入变量oldonload;
	if (typeof window.onload != 'function') {
		window.onload = func; //如果这个处理函数没有绑定任何函数，就把新函数添加给它；
	}else{
		window.onload = function(){ //如果这个处理函数已经绑定了一些函数，就把新函数追加到现有指令的末尾
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);
