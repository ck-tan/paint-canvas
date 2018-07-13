var canvas, ctx,
	h = 0, w = 0,
	prevX = 0,
	currX = 0,
	prevY = 0,
	currY = 0,
	 flag = false,
	dot_flag = false;
var penColour = "black",
	penWidth = 2;
$(document).ready(function($) {
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext("2d");
	ctx.fillStyle = penColour;
	ctx.strokeStyle = penColour;
	ctx.lineWidth = penWidth;
	
	canvas.addEventListener("mousemove", function (e) {
		var mousePos = getPosition(e.target, e);
		var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		var msgTarget = document.querySelector("#desc-one");
		msgTarget.innerHTML = message;
		draw('move', e)
	}, false);
	canvas.addEventListener("mousedown", function (e) {
		draw('down', e)
	}, false);
	window.addEventListener("mouseup", function (e) {
		draw('up', e)
	}, false);
	canvas.addEventListener("mouseout", function (e) {
		draw('out', e)
	}, false);
	canvas.addEventListener("touchstart", function (e) {
		draw('down', e)
	}, false);
	canvas.addEventListener("touchmove", function (e) {
        e.preventDefault();
		draw('move', e)
	}, false);
	canvas.addEventListener("touchend", function (e) {
        e.preventDefault();
		draw('up', e)
	}, false);
	canvas.addEventListener("touchcancel", function (e) {
        e.preventDefault();
		draw('up', e)
	}, false);
});
function setPenWidth(width) {
	penWidth = width;
}
function draw(type, e) {
	ctx.fillStyle = penColour;
	ctx.strokeStyle = penColour;
	ctx.lineWidth = penWidth;
	ctx.lineCap = "round";
	var pos = getPosition(canvas, e);
	if (type == 'down') {
		prevX = currX;
		prevY = currY;
		currX = pos.x;
		currY = pos.y;

		flag = true;
		dot_flag = true;
		if (dot_flag) {
			ctx.beginPath();
			//ctx.fillRect(currX, currY, penWidth, penWidth);
			ctx.arc(currX, currY, penWidth / 2, 0, Math.PI*2, true); 
			ctx.fill();
			ctx.closePath();
			dot_flag = false;
		}
	}
	if (type == 'up' || type == "out") {
		flag = false;
	}
	if (type == 'move') {
		if (flag) {
			prevX = currX;
			prevY = currY;
			currX = pos.x;
			currY = pos.y;
			ctx.beginPath();
			ctx.moveTo(prevX, prevY);
			ctx.lineTo(currX, currY);
			ctx.stroke();
			ctx.closePath();
		}
	}
}

function setColor(colour) {
	penColour = colour;
}
function clear() {
	if (confirm("Want to clear")) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
function save(target) {
	document.getElementById(target).style.border = "2px solid";
	var dataURL = canvas.toDataURL();
	document.getElementById(target).src = dataURL;
	document.getElementById(target).style.display = "inline";
}

function getPosition(targetCanvas, e) {
	var rect = targetCanvas.getBoundingClientRect();
    var position = {x: null, y: null};
    //if (Modernizr.touch) { //global variable detecting touch support
	if (e.touches && e.touches.length > 0) {
		position.x = e.touches[0].clientX - rect.left;
		position.y = e.touches[0].clientY - rect.top;
	} else {
		position.x = e.clientX - rect.left;
		position.y = e.clientY - rect.top;
	}
    return position;
}