// AJAX API calls

// create an instance for the class
const http=new XMLHttpRequest()
console.log(http.readyState);

// establish connection
//here we are taking the todo data from jsonplaceholder website - SO use 'GET'
http.open("GET",'https://jsonplaceholder.typicode.com/todos')

// send a request

http.send()

// property inside the class- its value changes during the process
console.log(http.readyState);

// its the eventlistener that detect the change of the ready state
http.onreadystatechange=()=>{
    console.log(http.readyState);
    if(http.readyState==4){
        if(http.status>=200 && http.status<300)
        {
            //change to array object
            let alltodos=JSON.parse(http.responseText)
            console.log(alltodos);

            alltodos.forEach((item)=>{
                result.innerHTML+=`<tr>
                 <td>${item.userId}</td>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td>${item.completed}</td>
                </tr>`
            })
            
            
        }
        else{
            console.log('No data');
            
        }
    }
    else{
        console.log('No Response');
        
    }
    
}

