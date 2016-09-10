function addLoadEvent(func){
	var oldonlaod = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonlaod();
			func();
		}
	}
}