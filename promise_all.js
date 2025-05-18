const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];



promises = urls.map ( url => {
    return fetch(url);
})

Promise.all(promises)
.then((response)=>Promise.all(response.map((resp)=>resp.json())))
.then((data)=>console.log(data))