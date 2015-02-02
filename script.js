$(document).ready(function() {
	//Random Background
	var random = getRandomInt(1, 3);
	$('#wrapper').addClass('me' + random);
	
	//Random hover color
	$('h1').animate({
			color: getRandomColor()
		}, 3000);
	setInterval(function() {
		console.log("animating");
		$('h1').animate({
			color: getRandomColor()
		}, 3000);
	}, 5000);
	
	//Is streaming?
	$.get("https://api.twitch.tv/kraken/channels/drraylv", function(data) {
		console.log(JSON.decode(data));
	});
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}