function appendCurrentYear() {
	var year = new Date().getFullYear();
	$('.js-year').text(year);
}

$(document).ready(function(){
	appendCurrentYear();
});
