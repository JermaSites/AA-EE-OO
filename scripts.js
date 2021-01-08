function playSound(soundSrc) {
	if (document.getElementById("overlap").checked) {
		document.getElementById(soundSrc).pause();
		document.getElementById(soundSrc).currentTime = 0;
		document.getElementById(soundSrc).play();
	}
	else {
		var cloned = $("#" + soundSrc).clone()[0];

		cloned.play();

		cloned.onended = function() {
			$(cloned).remove();
		}
	}
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 65){
	if (document.getElementById("alternate").checked) {
		playSound("aa_alt");
	}
	else {
		playSound("aa");
	}  
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 69) {
    if (document.getElementById("alternate").checked) {
		playSound("ee_alt");
	}
	else {
		playSound("ee");
	}  
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 79) {
    if (document.getElementById("alternate").checked) {
		playSound("oo_alt");
	}
	else {
		playSound("oo");
	}  
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    playSound("aj");
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