




/* Logging in */



function focus_user_field(){
	var e = document.querySelector("#user");
	if (e.value == "user"){
		e.value = "";
		e.style.color = "black";
	}
}



function focus_pw_field(){
	var e = document.querySelector("#pw");
	if (e.type == "text"){
		e.value = "";
		e.style.color = "black";
		e.type = "password";
	}
}




function login(){
	var e1 = document.querySelector("#user");
	var e2 = document.querySelector("#pw");
	// delete old cookie
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	
	
	// invalid input
	if (e2.type != "password" || 
		e1.value == "user" || 
		e1.value.indexOf(' ') != -1 || 
		e2.value.indexOf(' ') != -1 || 
		e1.value.length < 3 || 
		e2.value.length < 3){
		alert("Bad login input!");
		return;
	}
	// if ok
	document.cookie = "username=".concat(e1.value);
	
}



function check_logged_in(){
	const USERNAME = "username=";
	var ix = document.cookie.indexOf(USERNAME);
	if (ix == -1){return;}
	
	// if cookie already planted
	var a = decodeURIComponent(document.cookie).split(';');
	for (s of a){
		if (s.indexOf(USERNAME) == -1){continue;}
		s = s.trim();
		ix = s.indexOf('=') + 1;
		s = s.substr(ix);
	}
	
	// logged in state
	document.getElementById("form").remove();
	var b = document.createElement("BUTTON");
	b.innerHTML = "Log out";
	b.id = "button";
	b.onclick = logout;
	var p = document.getElementById("userbanner");
	p.appendChild(b);
	
	var d = document.createElement("DIV");
	d.innerHTML = "logged in as: " + s;
	p.appendChild(d);
	
	b.style.float = "right";
	d.style.float = "right";
	d.style.paddingRight = "5px";

}


function logout(){
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	location.reload();
}






/* Events */



