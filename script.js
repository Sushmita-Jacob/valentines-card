const card = document.getElementById('card')
const envelope = document.getElementById('envelope-img') 
const message = document.getElementById('message')
var count=0;

function switchImage() {
    console.log("testing")
    document.getElementById("counter").innerHTML = count;
    if (envelope.src.endsWith("open.jpg")) {
        envelope.src="closed.jpg";
    }
    else if (envelope.src.endsWith("closed.jpg")) {
        envelope.src="open.jpg";
        count++;
    }
    confetti();
}