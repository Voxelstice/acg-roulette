const choices = ["congrulations! you got 0.3'd", "you lost! change your pfp to robert for >10 minutes", "you wake up, and you see robert behind you","set your pfp to marcus for 1 day", "play acg for a hour straight, in PUBLIC server", "oh you are an acg player? name all the badges", "airpod shotty, BANG (dont talk in any comms app for a minute)", "speak 0.3 language for 3 minutes"]

// i am very good at mathematical
let toWait = 0;
for (let i = 1; i <= 100; i++) {
	toWait += i
}

async function onClick() {
	const thetext = document.getElementById("choice")
	let choice = Math.floor(Math.random() * choices.length)
	let counter = 0
	function s() {
		if (Math.random() < .5) {
			choice++;
			choice %= choices.length;
			thetext.innerText = choices[choice];
		}
		counter += 1;
		if (counter < 100) {
			setTimeout(s, counter);
		}
	}
	s()

	thetext.style.animation="roulette 1s linear infinite alternate-reverse"
	setTimeout(() => {
		console.log('ok done')
		thetext.style.animation=""
	}, toWait)
}
