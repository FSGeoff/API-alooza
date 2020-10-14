$(document).ready(function () {
	// 	var symbol = "AAPL";
	// 	var queryURL =
	// 		"https://cloud.iexapis.com/stable/stock/" + symbol + "/quote/?token=";

	// 	var key = "pk_31b3f462a6af4e42b65e8b1c000e0a03";
	// 	$.ajax({
	// 		url: queryURL + key,
	// 		method: "GET",
	// 	}).then(function (response) {
	// 		console.log(response);
	// 	});
	// });
	// $(document).ready(function () {
	// 	$.ajax({
	// 		url: "https://data.usajobs.gov/api/codelist/agencysubelements",
	// 		method: "GET",
	// 	}).then(function (response) {
	// 		console.log(response);
	// 	});

	const settings = {
		async: true,
		crossDomain: true,
		url: "https://rapidapi.p.rapidapi.com/search?q=covid&language=en",
		method: "GET",
		headers: {
			"x-rapidapi-host": "webit-news-search.p.rapidapi.com",
			"x-rapidapi-key":
				"e4b5c01e00msh7b0b204668ea58cp1fe8d5jsn75a76eb33e33",
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response.data.results);
		var array = response.data.results;
		for (let i = 0; i < array.length; i++) {
			console.log(array[i].title);
			console.log(array[i].url);
		}
	});
});
