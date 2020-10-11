$(document).ready(function () {
	$.ajax({
		url:
			"http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=89d07faa-bc02-4484-99e9-7e6411db16ee",
		method: "GET",
	}).then(function (response) {
		console.log(response);
	});
});
