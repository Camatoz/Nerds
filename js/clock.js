let firstStartDate = new Date("1970-01-01 00:00:00"),
	clockContainer = document.createElement('div');

clockContainer.className = "clock";
clockContainer.innerHTML = "<div class='timer'>00:00:00</div>";
document.body.appendChild(clockContainer);

let timer = document.querySelector("div.timer");



setInterval(function (){

	firstStartDate.setTime(firstStartDate.getTime()+1000);

	let hours = firstStartDate.getHours(),
		minutes = firstStartDate.getMinutes(),
		seconds = firstStartDate.getSeconds();
		

	if (hours < 10) {
		hours = "0" + hours;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	timer.innerHTML = 
		hours +
		':'+ 
		minutes +
		':'+ 
		seconds;

},1000);