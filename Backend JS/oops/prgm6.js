// exception handling

exp=`*///**10****2-3`

try
{let result=eval(exp)
console.log(result);
}
catch{
    console.log('error due to incorrect expression');
    
}
finally{console.log('execution ended');
}
