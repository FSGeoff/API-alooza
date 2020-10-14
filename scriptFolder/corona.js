$(document).ready(function () {
	const settings = {
		async: true,
		crossDomain: true,
		url: "https://rapidapi.p.rapidapi.com/v1/total?country=USA",
		method: "GET",
		headers: {
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key":
				"e4b5c01e00msh7b0b204668ea58cp1fe8d5jsn75a76eb33e33",
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log(response.data.location);
		console.log(response.data.confirmed);
		console.log(response.data.recovered);
		console.log(response.data.deaths);
	});
});
