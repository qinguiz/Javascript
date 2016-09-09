function showPic(elems){
		var source = elems.getAttribute("href");
		var replaceholder = document.getElementById("replaceholder");
		replaceholder.setAttribute("src",source);
		var text = elems.firstChild.nodeValue;
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
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
	if (!document.getElementsByTagName) return false;
	var aA = document.getElementsByTagName("a");
for(var i=0;i<aA.length;i++){
	if (aA[i].getAttribute("class")=="showPic") {
		aA[i].onclick = function(){
			showPic(this);
			return false;
		}
	}
}
}
window.onload = abc;