function playSound(soundSrc) {
	var cloned = $(soundSrc).clone()[0];

    cloned.play();

    cloned.onended = function() {
        $(cloned).remove();
    }
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 65) {
    playSound("#aa");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 69) {
    playSound("#ee");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 79) {
    playSound("#oo");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    playSound("#aj");
  }
});
