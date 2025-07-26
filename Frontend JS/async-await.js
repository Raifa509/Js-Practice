const search=async()=>{
    console.log(country.value);

    const response=await fetch(`https://restcountries.com/v3.1/name/${country.value}?fullText=true`)
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
        
    })
    
    
}

