$(document).ready(function () {
	$.ajax({
		url: "https://api.exchangeratesapi.io/latest?base=USD",
		method: "GET",
	}).then(function (response) {
		console.log(response.rates);
	});
});
