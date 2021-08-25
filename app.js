const http = new easyHTTP;
http.get('https://jsonplaceholder.typicode.com/posts', function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
    
});