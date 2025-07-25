// fetch
fetch('https://fakestoreapi.com/products').then((response)=>{ //url-return promise -to get positive response use then
    console.log(response);//lots of data- json() to access body-array of object
    // remove unncessary responses
    response.json().then((products)=>{ //json return promise-then() -to access the result
        console.log(products);
        
        
    })
    
}).catch((error)=>{
    console.log(error);
    
})