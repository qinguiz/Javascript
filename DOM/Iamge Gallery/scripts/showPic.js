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

function prepareGallery(){
	if (!document.getElementsByTagName || !document.getElementById) return false; //检测当前浏览器是否支持DOM,不支持则返回,平稳退化
	if (!document.getElementById("imagegallery")) return false;  //平稳退化，不让javascript对结构有所依赖
	var oUl = document.getElementById("imagegallery");
	var aA = oUl.getElementsByTagName("a");
for(var i=0;i<aA.length;i++){
	if (aA[i].getAttribute("class")=="showPic") {
		aA[i].onclick = function(){
			return showPic(this) ? false : true; //当showPic返回false时，取反，启用a链接的默认事件，否则关闭默认事件
			// return false;
		}
	}
}
}
// window.onload = countBodyChildren;
// window.onload = abc; //onload事件只有最后一个才会被执行

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function createElem(){
	var gallery = document.getElementById('imagegallery');

	var placeHolder = document.createElement('img');
	placeHolder.setAttribute('id','replaceholder');
	placeHolder.setAttribute('src','images/replaceholder.png')
	var description = document.createElement('p');
	description.setAttribute('id','description');
	var desctext = document.createTextNode('Choose an image');
	description.appendChild(desctext);
	gallery.parentNode.insertBefore(placeHolder,gallery);
	gallery.parentNode.insertBefore(description,gallery);
	// document.getElementsByTagName('body')[0].appendChild(placeHolder);
	// document.getElementsByTagName('body')[0].appendChild(description);
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
addLoadEvent(prepareGallery);
addLoadEvent(createElem);