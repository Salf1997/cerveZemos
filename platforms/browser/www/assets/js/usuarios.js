var mybuttonJSON = document.getElementById('login');
mybuttonJSON.onclick = function(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
    var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'assets/js/users.json');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
	        console.log(request.responseText);
			var encontrado = false;
			while ((encontrado==false) && (var key in items)){
				var usuario = items[key].user;
				var pass = items[key].password;
				if (us.localeCompare(usuario)==0 && contra.localeCompare(pass)==0){
					var output = '<a href="index.html"></a>';
					console.log(output);
					encontrado=true;
				}
			}
		}
	}
	request.send();
}

function login() {
var user = document.getElementById("user").value;
var pass = document.getElementById("pass").value;
if(user == "usuario1" && pass == "usuario1") {
    alert("Logged In");
    locate="index.html";
    document.getElementById("demo").innerHTML = "index.html";
    return false;
} else {
    alert("wrong user/pass");
    return false;
    }
}

