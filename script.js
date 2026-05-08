const card = document.getElementById('card')
const envelope = document.getElementById('envelope-img') 
const message = document.getElementById('message')

function switchImage() {
    console.log("testing")
    if (envelope.src.endsWith("open.jpg")) {
        envelope.src="closed.jpg";
    }
    else if (envelope.src.endsWith("closed.jpg")) {
        envelope.src="open.jpg";
    }
    confetti();
}