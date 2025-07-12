//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const age = document.getElementById('age').value;
	const name = document.getElementById('name').value;


	if (!age || !name) {
		alert("Please enter valid details.");
		return;
	}


	const ageValidationPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (age >= 18) {
				resolve(`Welcome, ${name}. You can vote.`);
			} else {
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		}, 4000);
	});


	ageValidationPromise
	.then(message => alert(message))
	.catch(message => alert(message));
});