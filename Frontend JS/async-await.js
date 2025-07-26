const search=async()=>{
    console.log(country.value);

    const response=await fetch(`https://restcountries.com/v3.1/name/${country.value}?fullText=true`)
    console.log(response);
    response.json().then((data)=>{
        console.log(data);  
        //name
        let common=data[0].name.common;
        console.log(`common name : ${common}`);

        //official
        let official=data[0].name.official;
        console.log(`official name : ${official}`);

        //currencies
        let curr=[]
        for(let currency in data[0].currencies)
        {
            curr.push(data[0].currencies[currency].symbol)
            curr.push(data[0].currencies[currency].name)
        }
        console.log(`Currencies: `,curr);


        // capital
        let capital=data[0].capital
        console.log(`Capital : ${capital}`);

        // languages
        let nationallang=[]
        for(let lang in data[0].languages){
            nationallang.push(data[0].languages[lang])
        }
        console.log(`Languages: `,nationallang);
        //borders
        let border=data[0].borders
        console.log(`Borders : ${border}`);

        // area
        let area=data[0].area
        console.log(`Area : ${area}`);

        // maps
        let googlemap=data[0].maps.googleMaps
        console.log(`Googlemap : ${googlemap}`);

        // population
        let pop=data[0].population
        console.log(`Population : ${pop}`);
        
        // timezone
        let time=data[0].timezones
        console.log(`Timezone : ${time}`);

        //continent
        let conti=data[0].continents
        console.log(`Continent : ${conti}`);

        //flag
        let flag=data[0].flags.png
        console.log(`flag : ${flag}`);
    result.innerHTML+=`<div class="row g-0">
                <div class="col-md-6">
                    <img src="${flag}"
                        class="img-fluid rounded-start p-3 mt-5" alt="..." width="500px">
                    <h5 class="card-title text-center mt-2 !text-2xl">${common}</h5>
         
                </div>
                <div class="col-md-6">
                    <div class="card-body">

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Official Name – ${official}</li>
                            <li class="list-group-item">Capital – ${capital} </li>
                             <li class="list-group-item">Continent – ${conti}</li>
                            <li class="list-group-item">Currencies – ${curr}</li>
                            <li class="list-group-item">Languages – ${nationallang}</li>
                            <li class="list-group-item">Area – ${area}</li>
                            <li class="list-group-item">Borders – ${border}</li>
                            <li class="list-group-item">Time Zone – ${time}</li>
                            
                            <li class="list-group-item">Population – ${pop}</li>
                        </ul>
                         <div class="card-body text-center">
                            <a href="${googlemap}" class="card-link">Google Map</a>
                        </div>
                    </div>
                </div>
               
            </div>`
    }) 



}

