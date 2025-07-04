// callback function
function greet(name,callme)
{
    console.log(`Hii ${name}`);
    callme();
    
}
 function callback(){
    console.log(`inside the call back function`);
    
 }

 greet("peter",callback);

//  nested function

function parent(){
    console.log('inside the parent function');
    function child() {
        console.log('inside the child function'); 
    }
    child()
}
parent()

// asynchronus function
setTimeout(()=>console.log('asynchrounus function'),5000);
