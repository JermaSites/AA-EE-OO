var cloned = {};
function playSound(soundSrc) {
	if((soundSrc === "aa" || soundSrc === "ee" || soundSrc === "oo" || soundSrc === "ws" || soundSrc === "nr") && document.getElementById("alternate").checked) {
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
			}
		 );
	}
}

document.addEventListener('keydown', function(e) {
  if (e.key == "a"){
	playSound("aa");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "e") {
    playSound("ee");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "o") {
	playSound("oo");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "j") {
    playSound("aj");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "g") {
    playSound("gas");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "0") {
    playSound("zero");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "1") {
    playSound("one");
  }
});

// "Nice, ron"
document.addEventListener('keydown', function(e) {
  if (e.key == "r") {
    playSound("nr");
  }
});

// sneeze
document.addEventListener('keydown', function(e) {
  if (e.key == "b") {
    playSound("sn");
  }
});

// "What, I sneezed, I'm not allowed to sneeze?"
document.addEventListener('keydown', function(e) {
  if (e.key == "w") {
    playSound("ws");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "t") {
    playSound("eeeuuu");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "m") {
    playSound("mmmnn");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "i") {
    playSound("urae");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "u") {
    playSound("ultra");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "c") {
    playSound("ooey");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == " ") {
	$('audio').each(function(){
		this.pause(); // Stop playing
		this.currentTime = 0; // Reset time
	}); 
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "Escape") {
    $('audio').each(function(){
		playSound(this.id);
		// this.play();
	}); 
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "y"){
	playSound("ayaya");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "s"){
	playSound("sphee");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "h"){
	playSound("whathappened");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "."){
	playSound("aHHHHhwaheha");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "n"){
	playSound("nya");
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