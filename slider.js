var currentPos = 0;
var slide = function(input) {
	var currentPic = document.getElementById('slider').children[currentPos];
	currentPic.className = 'pic';
	currentPos += input;
    if(currentPos > 3) {
    	currentPos = 0;
    }
    if(currentPos < 0) {
    	currentPos = 3;
    }
	var nextPic = document.getElementById('slider').children[currentPos];
	nextPic.className += 'active';  
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