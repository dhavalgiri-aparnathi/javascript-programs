const myFunction = () => {
	const date = new Date()
	
	let hours = date.getHours() % 12
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	hours = addZero(hours)
	minutes = addZero(minutes)
	seconds = addZero(seconds)

	document.getElementById('clock-container').innerHTML = hours + ":" + minutes + ":" + seconds

	setTimeout(myFunction, 1000)
}

const addZero = (i) => {
	if (i < 10) {
		i = "0" + i
	}
	return i
}