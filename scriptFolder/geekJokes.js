$(Document).ready(function () {
	const settings = {
		async: true,
		crossDomain: true,
		url: "https://rapidapi.p.rapidapi.com/",
		method: "GET",
		headers: {
			"x-rapidapi-host": "world-bank-gdp.p.rapidapi.com",
			"x-rapidapi-key":
				"e4b5c01e00msh7b0b204668ea58cp1fe8d5jsn75a76eb33e33",
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
});
