//favicon
dontGo({
	title: 'Test!!',
	faviconSrc: 'assets/coolsmiley.ico',
});


$(document).ready(function() {
	// $("#audio").get(0).play();
	$("#mac").hide();
	$(".loading-dots").hide();
});



$(window).mousemove(function() {
	console.log("mouse moved...");
	setTimeout(function(){
		$("#mac").show();
		$(".loading-dots").show();
	}, 100);
});


// window.onfocus = function () {
//   console.log("user is active");
// };
//
// window.onblur = function () {
//   console.log("user is NOT");
// };

var audio = $("#audio")[0];

var pattern1 = $("#mac-page");
var pattern2 = $("#mac-page-2");
var pattern3 = $("#mac-page-3");

var patterns = ["pattern1", "pattern2", "pattern3"];

var choosePattern = function () {
	var randomPattern = patterns[Math.floor(Math.random() * 3)];
	return randomPattern;
};




function handleVisibilityChange() {
  if (document.hidden) {
    // audio.play(); // If the page is hidden, play audio
		$("#mac").hide();
		$(".loading-dots").hide();
			choosePattern(function() { //calling the function choosePattern to choose a pattern
			$(randomPattern).show(); //the chosen patttern should show on the browser
			});

  } else  {
    // audio.pause(); // if the page is shown, pause audio
		choosePattern(function() {
		$(randomPattern).hide(); //grabbing that same chosen pattern and hiding it on the browser
		});
		console.log("activity is visible..");
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);




$(window).keydown(function(event) {
  if (event.keyCode == "9") {
		window.location.replace('mac.html');
		window.open("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=fomo");
    console.log("Hey! Ctrl+T event captured!");
  }
});
