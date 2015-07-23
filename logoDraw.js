function logoDraw() {
	var canvas = document.getElementById('logo');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		//outlining rectangle
		ctx.strokeRect(0,0,250,100);
		// capital M
		ctx.moveTo(20,100);
		ctx.lineTo(20,0);
		ctx.lineTo(50,100);
		ctx.lineTo(80,0);
		ctx.lineTo(80,100);
		// capital K
		ctx.moveTo(110,100)
		ctx.lineTo(110,0);
		ctx.moveTo(110,50);
		ctx.lineTo(150,100);
		ctx.moveTo(110,50);
		ctx.lineTo(150,0);
		// capital D
		ctx.moveTo(180,100);
		ctx.lineTo(180,0);
		ctx.moveTo(180,50);
		ctx.arc(180,50,45,180, Math.PI / 2, false);
		ctx.stroke();
		
	}
}