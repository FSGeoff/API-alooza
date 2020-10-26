$(document).ready(function () {
	$.ajax({
		url:
			"https://api.nasa.gov/planetary/apod?api_key=LUimB0rbE98ueat6SLIqRXtqePaRUwZPGeJJhQxS",
		method: "GET",
	}).then(function (response) {
		console.log(response);
		console.log(response.title);
		console.log(response.url);
		console.log(response.hdurl);
		console.log(response.explanation);

		const uniDiv = $("<div>");
		uniDiv.attr("class", "text-center");
		uniDiv.attr("id", "space-div");

		const uniHeader = $("<h2>");
		uniHeader.attr("class", "uni-hdr");
		uniHeader.attr("id", "nasa-hdr");
		uniHeader.text(response.title);
		uniDiv.append(uniHeader);

		const uniPic = $("<img>");
		uniPic.attr("class", "uni-img");
		uniPic.attr("id", "nasa-img");
		uniPic.attr("src", response.url);
		uniDiv.append(uniPic);

		const uniText = $("<p>");
		uniText.attr("class", "uni-txt");
		uniText.attr("id", "nasa-txt");
		uniText.css("text-align", "justify");
		uniText.text(response.explanation);
		uniDiv.append(uniText);

		$("#universe-pics").append(uniDiv);
	});
});
