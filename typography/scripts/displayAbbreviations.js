function displayAbbreviation(){
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {return false;}
	var aAbbr = document.getElementsByTagName("abbr");
	if (aAbbr < 1) {return false;}
	var defs = new Array();
	//遍历abbr标签
	for(var i=0;i<aAbbr.length;i++){
		var current_abbr = aAbbr[i];
		if (current_abbr.childNodes.length < 1) {continue;}//兼容IE7版本前的abbr问题  "如果当前没有节点，就立刻开始下一次循环"
		var definition = current_abbr.getAttribute("title")
		var key = current_abbr.lastChild.nodeValue
		defs[key] = definition;
	}
	var dlist = document.createElement("dl");
	// var dtitle = document.createElement("dt");
	// var dtitle_text = document.createTextNode(key)
	for(key in defs){
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		dtitle.appendChild(dtitle_text);
		dlist.appendChild(dtitle);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) {return false;} //兼容IE浏览器问题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header)
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviation);