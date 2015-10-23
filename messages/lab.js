var request = new XMLHttpRequest();

function parse() {
	request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			data = request.responseText;
			msg = JSON.parse(data);
			elem = document.getElementById("messages");
			for (var i = 0; i < msg.length; i++){
				elem.innerHTML += "<p>" + msg[i].content + " " +
					msg[i].username + "</p>";
			};
		}
	}
	request.send(null);
}