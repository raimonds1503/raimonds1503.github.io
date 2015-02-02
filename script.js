$(document).ready(function() {
	//Random Background
	var random = getRandomInt(1, 3);
	$('#wrapper').addClass('me' + random);
	
	//Random hover color
	animateLogo();
	setInterval(function() {
		animateLogo();
	}, 5000);
	
	//Is streaming?
	checkOnlineStatus();
	setInterval(function() {
		checkOnlineStatus();
	}, 10000);
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

function checkOnlineStatus() {
	$.ajax({
		url: "https://api.twitch.tv/kraken/streams/drraylv",
		dataType: "jsonp",
		success: function (data) {
			if(data.stream != null) {
				$('.disclaimer').fadeIn('slow');
			} else {
				$('.disclaimer').fadeOut('slow');
			}
		}
	});
}

function animateLogo() {
	$('h1').animate({
		color: getRandomColor()
	}, 3000);
}