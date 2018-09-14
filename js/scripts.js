function appendCurrentYear() {
	var year = new Date().getFullYear();
	console.log(year);
	$('.js-year').text(year);
}

$(document).ready(function(){
	appendCurrentYear();
});
