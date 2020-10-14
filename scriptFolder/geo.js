$(document).ready(function () {
	const settings = {
		async: true,
		crossDomain: true,
		url: "https://rapidapi.p.rapidapi.com/latlon.php?location=Atlanta",
		method: "GET",
		headers: {
			"x-rapidapi-host":
				"devru-latitude-longitude-find-v1.p.rapidapi.com",
			"x-rapidapi-key":
				"e4b5c01e00msh7b0b204668ea58cp1fe8d5jsn75a76eb33e33",
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
});
