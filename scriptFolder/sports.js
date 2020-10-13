$(document).ready(function () {
	$.ajax({
		url:
			"http://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=89d07faa-bc02-4484-99e9-7e6411db16ee",
		method: "GET",
	}).then(function (response) {
		for (let i = 0; i < response.length; i++) {
			// console.log(response[i]);
			console.log(response[i].DESTINATION);
			console.log(response[i].LINE);
			console.log(response[i].NEXT_ARR);
		}
	});
});
