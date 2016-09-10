function styleHeaderSibling(target,class){
	if (!document.getElementsByTagName) {return false;}
	var headers = document.getElementsByTagName(target);
	var elem;
	for(var i=0;i<headers.length;i++){
		elem = getNextElment(headers[i].nextSibling);
		addClassName(elem,class);
	}
}
addLoadEvent(styleHeaderSibling)