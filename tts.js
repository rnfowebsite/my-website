let isSpeaking = false;
let utterance = null;

document.getElementById("ttsBtn").addEventListener("click", function () {
    if (isSpeaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
        this.textContent = "Speak";
        return;
    }
    const textToRead = document.getElementById("content").innerText; 
    utterance = new SpeechSynthesisUtterance(textToRead);


    utterance.rate = 1; 
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
    isSpeaking = true;
    this.textContent = "Stop";

    utterance.onend = () => {
        isSpeaking = false;
        document.getElementById("ttsBtn").textContent = "Speak";
    };
});

const loginBtn = document.getElementById("loginBtn");

    if(localStorage.getItem("loggedIn") === "true") {
        loginBtn.textContent = "Logout";
        loginBtn.href = "#";

        loginBtn.addEventListener("click", function(){
            localStorage.removeItem("loggedIn");
            alert("You have logged out.");
            location.reload();
        });
    }
	