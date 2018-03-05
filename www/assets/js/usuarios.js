var mybuttonJSON = document.getElementById('login');
mybuttonJSON.onclick = function(){
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
			var us = document.getElementById("user").value;
			var contra = document.getElementById("pass").value;
			var usuario = items[key].user;
			var pass = items[key].password;
			if (us == usuario && contra==pass){

			}
		}
	}
}
request.send();
}