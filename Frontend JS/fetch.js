// fetch
fetch('https://fakestoreapi.com/products').then((response)=>{ //url-return promise -to get positive response use then
    //lots of data- json() to access body-array of object
    // remove unncessary responses
    response.json().then((products)=>{ //json return promise-then() -to access the result
        console.log(products);
        products.forEach((item)=>{
            result.innerHTML+=`
             <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${item.image}" alt="..." style='height:300px'/>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${item.title}</h5>
                                    <!-- Product price-->
                                    <span class='text-primary'>${item.price}</span>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>` 
        })
        
        
    })
    
}).catch((error)=>{
    console.log(error);
    
})