
// const data = null;
// let request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/users");
// request.send();
// request.onload = () => {
//     console.log(request);
//     if (request.statues === 200) {
//         console.log(JSON.parse(request.response));
//     } else {
//         console.log(`error ${request.status} ${request.statusText}`);
//     }
// }
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true");
xhr.setRequestHeader("x-rapidapi-host", "numbersapi.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");

xhr.send(data);