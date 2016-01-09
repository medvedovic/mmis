function fadeOut(element) {
	var op = 1;
	var timerFO = setInterval( function() {
		if( op <= 0) {
			window.clearInterval(timerFO);
			element.style.display = 'none';
		}
		op -= 0.1;
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ')';
	}, 50);
}

function fadeIn(element) {
	element.style.display = 'block';
	var op = 0;
	var timerFI = setInterval( function() {
		if (op >= 1) {
			window.clearInterval(timerFI);
		}
		op += 0.1;
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ')';
	}, 50);
}

var currentPos = 0;
var slide = function(input) {
	var currentPic = document.getElementById('slider').children[currentPos];
	fadeOut(currentPic);
	currentPos += input;
    if(currentPos > 3) {
    	currentPos = 0;
    }
    if(currentPos < 0) {
    	currentPos = 3;
    }
	var nextPic = document.getElementById('slider').children[currentPos];
	fadeIn(nextPic);
}

function slideNext() {
	stopLoop();
	slide(1);
	startLoop();
}

function slidePrev() {
	stopLoop();
	slide(-1);
	startLoop();
}

function stopLoop() {
	window.clearInterval(loop);
}

function startLoop() {
	loop = setInterval(slideNext, 3000);
}

document.getElementById('next').onclick = slideNext;
document.getElementById('prev').onclick = slidePrev;
document.getElementById('slider').onmouseover = stopLoop;
document.getElementById('slider').onmouseleave = startLoop;

window.onload = function() {
	startLoop();	
}