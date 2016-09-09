function showPic(elems){
	if (!document.getElementById("replaceholder")) {return false;}
		var source = elems.getAttribute("href");
		var replaceholder = document.getElementById("replaceholder");
		replaceholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		var text = elems.firstChild.nodeValue;
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
		}
		return true;
	}

// function countBodyChildren(){
// 	var body_element = document.getElementsByTagName("body")[0];

// }
// window.onload = countBodyChildren;

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

function abc(){
	if (!document.getElementsByTagName || !document.getElementById) return false; //检测当前浏览器是否支持DOM,不支持则返回,平稳退化
	if (!document.getElementById("imagegallery")) return false;  //平稳退化，不让javascript对结构有所依赖
	var oUl = document.getElementById("imagegallery");
	var aA = oUl.getElementsByTagName("a");
for(var i=0;i<aA.length;i++){
	if (aA[i].getAttribute("class")=="showPic") {
		aA[i].onclick = function(){
			return !showPic(this); //当showPic返回false时，取反，启用a链接的默认事件，否则关闭默认事件
			// return false;
		}
	}
}
}
// window.onload = countBodyChildren;
// window.onload = abc; //onload事件只有最后一个才会被执行
