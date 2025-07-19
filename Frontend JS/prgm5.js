function getTime()
{
    const time=new Date()
    let hour=time.getHours()
    let min=time.getMinutes()
    let sec=time.getSeconds()
    result.innerHTML=`${hour}:${min}:${sec} ${hour>=12 ? `PM`:`AM`}`
    setTimeout(()=>{
        getTime()
    },1000)
}
getTime()