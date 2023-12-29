function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleTimeString();
}
showTime();
setInterval(function () {
	showTime();}, 1000);
function showDate() {
        document.getElementById('currentDate').innerHTML = new Date().toLocaleDateString();
    }
    showDate();
    setInterval(function () {
        showDate();});