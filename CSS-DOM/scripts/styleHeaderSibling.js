function styleHeaderSibling(){
	if (!document.getElementsByTagName) {return false;}
	var headers = document.getElementsByTagName("h1");
	var elem;
	for(var i=0;i<headers.length;i++){
		elem = getNextElment(headers[i].nextSibling);
		addClassName(elem,"intro");
	}
}
addLoadEvent(styleHeaderSibling)