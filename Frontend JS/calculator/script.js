function display(num){
    result.innerHTML+=num
}
function clearAll(){
    result.innerHTML=''
    result.innerHTML='0'
}
function back(){
    result.innerHTML=result.innerHTML.slice(0,-1)
}
function equalbtn(){
    try{
        result.innerHTML=eval(result.innerHTML)
}
    catch(error)
    {
        result.innerHTML='error'
        setTimeout(()=>{
            result.innerHTML=''
        },1000)
    }
}