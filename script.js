const card = document.getElementById('card')
const envelope = document.getElementById('envelope-img') 
const message = document.getElementById('message')
var count=1;
const shop1 = document.getElementById('shop1id')
const shop1bought = document.getElementById('shop1bought')
const shop2 = document.getElementById('shop2id')
const shop2bought = document.getElementById('shop2bought')
const shop3 = document.getElementById('shop3id');
const shop3bought = document.getElementById('shop3bought');
const shop4 = document.getElementById('shop4id');
const shop4bought = document.getElementById('shop4bought');
const openClose = document.getElementById("open-close");
var counter = document.getElementById('counter');
let autoEnv = false
let mailman = false
let pigeon = false
let redbull = false

function switchImage() {
    console.log("testing")
    document.getElementById("counter").innerHTML = count;
    if (autoEnv == false) {
        if (envelope.src.endsWith("open.png")) {
            envelope.src="closed.png";
            openClose.textContent = "Click to open the envelope and put in a card!";
            confetti();
        }
        else if (envelope.src.endsWith("closed.png")) {
            envelope.src="open.png";
            openClose.textContent = "Click to seal, send, and get a new envelope!";
            if (redbull == false) {
                count++;
            }
            if (redbull == true) {
                count = count + 2;
            }
        }
    }
    if (autoEnv == true) {
        envelope.src="closed.png";
        openClose.textContent = "Click to send the envelope!";
        if (redbull == false) {
            count++;
        }
        if (redbull == true) {
            count = count + 2;
        }
        confetti();
    }
}

shop1.addEventListener('click', function() {
    if (count >= 30) {
        count = count - 30;
        confetti();
        shop1bought.textContent = "(Bought!)"
        shop1.remove();
        counter.textContent = count;
        autoEnv = true;
    }
    }
)

shop2.addEventListener('click', function(){
    if (count>=50) {
        count = count - 50;
        confetti();
        shop2bought.textContent = "(Bought!)"
        shop2.remove();
        counter.textContent = count;
        mailman = true;
        if (mailman == true) {
            setInterval(() => {
                count = count + 1;
                counter.textContent = count;
            }, 1000);
        }
    }
})

shop3.addEventListener('click', function(){
    if (count>=100) {
        count = count - 100;
        confetti();
        shop3bought.textContent = "(Bought!)";
        shop3.remove();
        counter.textContent = count;
        pigeon=true;
        if (pigeon == true) {
            setInterval(() => {
                count = count + 3;
                counter.textContent = count;
            }, 1000);
        }
    }
})

shop4.addEventListener('click', function() {
    if (count>=200) {
        count = count - 200;
        confetti();
        shop4bought.textContent = "(Bought!)"
        shop4.remove();
        redbull = true;
    }
})