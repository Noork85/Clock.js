var clock = {
	totalSeconds: 200,
	getSeconds: function() {
		var seconds = this.totalSeconds % 60;
		return seconds < 10 ? "0" + seconds : seconds;
	},
	getMinutes: function() {
		var minutes = Math.floor(this.totalSeconds / 60) % 60;
		return minutes < 10 ? "0" + minutes : minutes;
	},
	getHours: function() {
		var hours = Math.floor((this.totalSeconds / 60) / 60);
		return hours < 10 ? "0" + hours : hours;
	},
	printTime: function() {
		return (`${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`);
	},
	tick: function(startSeconds) {
		if(startSeconds !== undefined) {
			this.totalSeconds = startSeconds;
		}
		this.totalSeconds++;
		console.log(this.printTime());
		setTimeout(this.tick.bind(this), 1000);
	}
};