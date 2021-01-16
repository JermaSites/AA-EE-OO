var cloned = {};
function playSound(soundSrc) {
	if((soundSrc === "aa" || soundSrc === "ee" || soundSrc === "oo") && document.getElementById("alternate").checked) {
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
			if (e.keyCode == 32) {
					cloned[thisClone].pause(); // Stop playing
					$(cloned[thisClone]).remove();
					delete cloned[thisClone];
				}
			}
		 );
	}
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 65){
	playSound("aa");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 69) {
    playSound("ee");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 79) {
	playSound("oo");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 74) {
    playSound("aj");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 71) {
    playSound("gas");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 48) {
    playSound("zero");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 49) {
    playSound("one");
  }
});

// "Nice, ron"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 78) {
    playSound("nr");
  }
});

// sneeze
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 83) {
    playSound("sn");
  }
});

// "What, I sneezed, I'm not allowed to sneeze?"
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 87) {
    playSound("ws");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 84) {
    playSound("eeeuuu");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 89) {
    playSound("mmmnn");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 85) {
    playSound("urae");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 73) {
    playSound("ultra");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
	$('audio').each(function(){
		this.pause(); // Stop playing
		this.currentTime = 0; // Reset time
	}); 
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    $('audio').each(function(){
		playSound(this.id);
		// this.play();
	}); 
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