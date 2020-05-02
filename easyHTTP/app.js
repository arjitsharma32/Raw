const http = new easyHTTP;

//SYNCHRONOUS WAY - If we used a function synchronously instead of in a callback, then the function would be called before we get the data that the function needs and therefore it wouldn't work.
//const posts = http.get('https://jsonplaceholder.typicode.com/posts');
//console.log(posts);

//callback used for asynchronous behaviour, it waits to log until it gets the data
http.get('https://jsonplaceholder.typicode.com/posts',
function(posts){
	console.log(posts);
});


const data = {
	title: 'Custom Post',
	body: 'This is body'
};

//POSTING DATA - New data will be created on server
http.post('https://jsonplaceholder.typicode.com/posts',data,
	function(post){
		console.log(post);
	});

//PUT DATA - Updating data with id 1
http.put('https://jsonplaceholder.typicode.com/posts/1',data,
	function(post){
		console.log(post);
	});


//DELETE DATA - Deleting data with id 1
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(response){
	console.log(response);
});


const patchData = {
	body: 'This is a body patch'
}
//PATCH DATA - Updating data with id 1
http.patch('https://jsonplaceholder.typicode.com/posts/1',patchData,
	function(patch){
		console.log(patch);
	});
