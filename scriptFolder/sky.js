$(document).ready(function () {
	const settings = {
		async: true,
		crossDomain: true,
		url:
			"https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-12-01",
		method: "GET",
		headers: {
			"x-rapidapi-host":
				"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key":
				"e4b5c01e00msh7b0b204668ea58cp1fe8d5jsn75a76eb33e33",
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(
			"Departing on: " + response.Quotes[0].OutboundLeg.DepartureDate
		);
		console.log("Departing from: " + response.Places[0].Name);
		console.log("Arriving at: " + response.Places[1].Name);
		console.log("Direct Flight: " + response.Quotes[0].Direct);
		console.log("Minimum Price " + response.Quotes[0].MinPrice);

		for (let i = 0; i < response.Carriers.length; i++) {
			console.log(
				"The Airlines available for this flight are; " +
					response.Carriers[i].Name
			);
		}

		console.log(
			"Departure Airport Code: " + response.Places[0].SkyscannerCode
		);
		console.log(
			"Arrival Airport Code: " + response.Places[1].SkyscannerCode
		);
		console.log("____________________________________________");
		// console.log(response);
		// console.log(response.Quotes);
		// console.log(response.Places);
	});

	const _settings = {
		async: true,
		crossDomain: true,
		url:
			"https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/JFK-sky/SFO-sky/2020-12-08",
		method: "GET",
		headers: {
			"x-rapidapi-host":
				"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key":
				"e4b5c01e00msh7b0b204668ea58cp1fe8d5jsn75a76eb33e33",
		},
	};

	$.ajax(_settings).done(function (_response) {
		console.log(
			"Returning on: " + _response.Quotes[0].OutboundLeg.DepartureDate
		);
		console.log("Departing from: " + _response.Places[1].Name);
		console.log("Arriving at: " + _response.Places[0].Name);
		console.log("Direct Flight: " + _response.Quotes[0].Direct);
		console.log("Minimum Price " + _response.Quotes[0].MinPrice);

		for (let i = 0; i < _response.Carriers.length; i++) {
			console.log(
				"The Airlines available for this flight are; " +
					_response.Carriers[i].Name
			);
		}

		console.log(
			"Departure Airport Code: " + _response.Places[1].SkyscannerCode
		);
		console.log(
			"Arrival Airport Code: " + _response.Places[0].SkyscannerCode
		);

		console.log("____________________________________________");
		// console.log(_response);
		// console.log(_response.Quotes);
		// console.log(_response.Places);
	});
});
