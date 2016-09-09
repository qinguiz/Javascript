function showPic(elems){
		var source = elems.getAttribute("href");
		var replaceholder = document.getElementById("replaceholder");
		replaceholder.setAttribute("src",source);
		var text = elems.firstChild.nodeValue;
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	}

var links = function getElementsByClassName(node,classname){
	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	}else{
		var results = [];
		var elems = node.getElementsByTagName("*");
		for(var i=0;i<elems.length;i++){
			if (elems[i].className.indexOf(classname) != -1) {
				results[results.length] = elems[i];
			}
		}
		return results
	}
}

function prepareGallery(){
	if (!document.getElementsByTagName || !document.getElementById) return false; //检测当前浏览器是否支持DOM,不支持则返回,平稳退化
	if (!document.getElementById("imagegallery")) return false;  //平稳退化，不让javascript对结构有所依赖
	var oUl = document.getElementById("imagegallery");
	var aA = oUl.getElementsByTagName("a");
for(var i=0;i<aA.length;i++){
	if (aA[i].getAttribute("class")=="showPic") {
		aA[i].onclick = function(){
			showPic(this);
			return false;
		}
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
