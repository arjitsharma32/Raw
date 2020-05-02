const http = new easyHTTP2;

http.get("https://jsonplaceholder.typicode.com/users")
	.then(data => console.log(data))
	.catch(err => console.log(err));

const data = {
	name: 'Arjit Sharma',
	username : "arjitsharma",
	email : "aj@gmail.com"
}

http.post('https://jsonplaceholder.typicode.com/users',data)
	.then(data => console.log(data))
	.catch(err => console.log(err));


http.put('https://jsonplaceholder.typicode.com/users/2',data)
	.then(data => console.log(data))
	.catch(err => console.log(err));


http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(err => console.log(err));



const patchData = {
	name: 'Rohan Shey'
}
http.patch('https://jsonplaceholder.typicode.com/users/2',patchData)
	.then(data => console.log(data))
	.catch(err => console.log(err));

