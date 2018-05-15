function submitAnswers(){
	const total = 5;
	const score = 0;

	//get user input
	const q0 = document.forms["quizForm1"]["q0"].value;
	const q1 = document.forms["quizForm1"]["q1"].value;
	const q2 = document.forms["quizForm1"]["q2"].value;
	const q3 = document.forms["quizForm1"]["q3"].value;
	const q4 = document.forms["quizForm1"]["q4"].value;

	const answers = ['A', 'B', 'B', 'A', 'C']

	console.log(q0);
	console.log(q1);
	console.log(q2);
	console.log(q3);
	console.log(q4);

	for(let i = 0; i < total; i++){
		if(eval('q' + i) == null || eval('q' + i) == ''){
			alert('Answer question '+ i+1);
			return false;
		} else if (eval('q' + i) == answers[i]) {
			score = score + 1;
		}
	}
	console.log(score);

	//display answers
	const results = document.getElementById('results');
	results.innerHTML = '<h2> You Scored <span>'+score+'</span> out of <span>'+total+'</span></h2>';
	alert('You Scored ' + score + ' out of ' + total);

	return false;
}