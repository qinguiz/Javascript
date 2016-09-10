function displayAbbreviation(){
	var aAbbr = document.getElementsByTagName("abbr");
	if (aAbbr < 1) {return false;}
	var defs = new Array();
	for(var i=0;i<aAbbr.length;i++){
		var current_abbr = aAbbr[i];
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
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header)
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviation);