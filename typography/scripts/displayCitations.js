function displayCitation(){
	var quotes = document.getElementsByTagName("blockquote");
	for(var i=0;i<quotes.length;i++){
		if (!quotes[i].getAttribute("cite")) {continue;} //假如当前遍历的bloackquote没有cite属性，就跳过此次循环
		//保存cite属性到 url变量
		var url = quotes[i].getAttribute("cite");
		// alert(quote[i].lastChild.nodeType) // 3
		var quoteChild = quotes[i].getElementsByTagName("*");
		//如果quote里不存在子元素节点，则推出这次循环
		if (quoteChild.length < 1) {continue;}
		//得到quote最后一个子元素节点
		var elem = quoteChild[quoteChild.length - 1];
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);

	}
}
addLoadEvent(displayCitation)