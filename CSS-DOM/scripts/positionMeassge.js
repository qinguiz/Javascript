function positionMessage(){
	if (!document.getElementById) {return false;}
	if (!document.getElementById("message")) {return false;}
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	moveElement("message",200,100,20)
	if (!document.getElementById("message2")) {return false;}
	var elem2 = document.getElementById("message2");
	elem2.style.position = "absolute";
	elem2.style.left = "50px";
	elem2.style.top = "50px";
	moveElement("message2",120,120,20)
}

function moveMessage(){
	var elem = document.getElementById("message");
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == 200 && ypos == 100) {return true;}
	if (xpos < 200) {xpos++;}
	if (xpos > 200) {xpos--;}
	if (ypos < 100) {ypos++;}
	if (ypos > 100) {ypos--;}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	movement = setTimeout("moveMessage()",10)
}

addLoadEvent(positionMessage);