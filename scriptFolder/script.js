$(document).ready(function () {
	var symbol = "AAPL";
	var queryURL =
		"https://cloud.iexapis.com/stable/stock/" + symbol + "/quote/?token=";

	var key = "pk_31b3f462a6af4e42b65e8b1c000e0a03";
	$.ajax({
		url: queryURL + key,
		method: "GET",
	}).then(function (response) {
		console.log(response);
	});
});
$(document).ready(function () {
	$.ajax({
		url: "https://data.usajobs.gov/api/codelist/agencysubelements",
		method: "GET",
	}).then(function (response) {
		console.log(response);
	});
});
