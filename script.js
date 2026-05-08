const card = document.getElementById('card')
const envelope = document.getElementById('envelope-img') 
const message = document.getElementById('message')
var count=0;
const shop1 = document.getElementById('shop1id')

function switchImage() {
    console.log("testing")
    document.getElementById("counter").innerHTML = count;
    if (envelope.src.endsWith("open.jpg")) {
        envelope.src="closed.jpg";
        confetti();
    }
    else if (envelope.src.endsWith("closed.jpg")) {
        envelope.src="open.jpg";
        count++;
    }
}

shop1.addEventListener('click', function() {
    if (count >= 15) {
        count = count - 15
        shop1.remove();
    }
    
})