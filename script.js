const choices = ["congrulations! you got 0.3'd", "you lost! change your pfp to robert for >10 minutes", "you wake up, and you see robert behind you","set your pfp to marcus for 1 day", "play acg for a hour straight, in PUBLIC server", "oh you are an acg player? name all the badges"]

async function onClick() {
    let choice = Math.floor(Math.random() * choices.length)
    //alert(choices[Math.floor(Math.random() * choices.length)])
    let counter = 10

    while(counter <= 6000) {
        counter+=100
        await setTimeout(function() {if (choice == choices.length-1) { choice = 0} else {choice++} document.getElementById("choice").innerText = choices[choice] }, counter)
    }
}
