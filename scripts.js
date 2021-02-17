var cloned = {};
function playSound(soundSrc) {
	if((soundSrc === "a" || soundSrc === "e" || soundSrc === "o") && document.getElementById("alternate").checked) {
		soundSrc = soundSrc + "_alt";
	}
	if (document.getElementById("overlap").checked) {
		document.getElementById(soundSrc).pause();
		document.getElementById(soundSrc).currentTime = 0;
		document.getElementById(soundSrc).play();
	}
	else {
		var thisClone = Object.keys(cloned).length;
		cloned[thisClone] = $("#" + soundSrc).clone()[0];
		cloned[thisClone].play();
		cloned[thisClone].classList.add('clone');
		cloned[thisClone].onended = function() {
			$(cloned[thisClone]).remove();
			delete cloned[thisClone];
		};
		document.addEventListener('keydown', function(e) {
			if (e.key == " ") {
				cloned[thisClone].pause(); // Stop playing
				$(cloned[thisClone]).remove();
				delete cloned[thisClone];
			}
		});
	}
}

document.addEventListener('keydown', function(e) {
	if (e.key == " ") {
		$('audio').each(function() {
			this.pause(); // Stop playing
			this.currentTime = 0; // Reset time
		}); 
	} else if (e.key == "Escape") {
		$('audio').each(function(){
			playSound(this.id);
			// this.play();
		});
	} else if(['a', 'e', 'o', 'j', 'y', 's', 'n', 'h', 'b', 'r', 'w', 'g', '0', '1', 't', 'm', 'i', 'u', 'c'].indexOf(e.key) >= 0) {
		playSound(e.key);
	}
});

function show_alternate() {
	document.getElementById("options-help-alternate").style.display = "flex";
}

function hide_alternate() {
	document.getElementById("options-help-alternate").style.display = "none";
}
function show_overlap() {
	document.getElementById("options-help-overlap").style.display = "flex";
}

function hide_overlap() {
	document.getElementById("options-help-overlap").style.display = "none";
}

$( "tr" ).click(function() {
	if($(this).attr('class') === 'all') {
	$('audio').each(function(){
		playSound(this.id);
		// this.play();
	});
	} else if($(this).attr('class') === 'spacebar') {
	for(var i = 0; Object.keys(cloned).length; i++) {
		$(cloned[i]).trigger("pause"); // Stop playing
		$(cloned[i]).remove();
		delete cloned[i];
	}
	} else {
		playSound($(this).attr('class'));
	}
});