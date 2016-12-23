function randombg() {
	// http://stackoverflow.com/questions/16264253/sharing-a-variable-between-multiple-html-pages
	document.body.style.backgroundColor = sessionStorage.getItem("randomColor");
    
}

function CheckBrowser() {
    if ('sessionStorage' in window && window['sessionStorage'] !== null) {
        return true;
    } else {
    	window.alert("false");
        return false;
    }
}

function randomcolor() {
	if(CheckBrowser()) {
    	// http://stackoverflow.com/questions/16010827/html5-localstorage-checking-if-a-key-exists
    	if(sessionStorage.getItem("randomColor") === null) {
        	// Values between 0x581845 and 0x300A24 (difference is 0x280e21)
        	var r = ("00"+Math.floor(0x30+(0x28*Math.random())).toString(16)).slice(-2);
        	var g = ("00"+Math.floor(0x0A+(0x0C*Math.random())).toString(16)).slice(-2);
        	var b = ("00"+Math.floor(0x24+(0x21*Math.random())).toString(16)).slice(-2);
        	var color = "#"+r+g+b;
        	sessionStorage.setItem("randomColor", color);
        	//window.alert(color);     
    	}
	}
}