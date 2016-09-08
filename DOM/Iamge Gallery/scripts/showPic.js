function showPic(elems){
		var source = elems.getAttribute("href");
		var replaceholder = document.getElementById("replaceholder");
		replaceholder.setAttribute("src",source);
		var text = elems.firstChild.nodeValue;
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];

}
window.onload = countBodyChildren;