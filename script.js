//still need start button
//split questions up and show answer right after

var questions = [
	{question: " What is JavaScript?", answer: "scripting"},
	{question: "Arrays in JavaScript are defined by which of the following statements?", answer: "values"}
];

var timeLimit = 60; // still need to find how to minus time for wrong answers

function startTimer() {
	var timeLeft = timeLimit;
	var timer = setInterval(function() {
		timeLeft--;
		document.getElementById("timer").innerHTML = "Time remaining: " + timeLeft + " seconds";
		if (timeLeft <= 0) {
			clearInterval(timer);
			checkAnswers();
		}
	}, 1000);
}

function checkAnswers() {
	var correctAnswers = 0;
	var userAnswers = [];
	for (var i = 0; i < questions.length; i++) {
		var q = questions[i].question;
		var a = questions[i].answer;
		var ua = document.querySelector('input[name="q' + (i+1) + '"]:checked');
		if (ua) {
			ua = ua.value;
			userAnswers.push(ua);
			if (ua == a) {
				correctAnswers++;
			}
		}
	}
	var results = document.getElementById("results");
	results.innerHTML = "You got " + correctAnswers + " out of " + questions.length + " correct!";
	//still need alert boxes
	results.innerHTML += "Your answers: " + userAnswers.join(", ");
	
	results.innerHTML += "Time taken: " + (timeLimit - document.getElementById("timer").textContent.split(":")[1]) + " seconds";
}

window.onload = function() {
	startTimer();
};

//still need to log initials and score