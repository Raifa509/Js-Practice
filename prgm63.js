txt='hai hello all hello world all'
// find the word count of the given text
//o/p={hai:1,hello:2,all:2,world:1}

newTxt=txt.split(' ');

let Obtxt={};

for(let item of newTxt){
    
    if(Obtxt[item])
    {
        Obtxt[item]+=1
    }
    else{
        Obtxt[item]=1
    }
}
console.log(Obtxt);

console.log('----------------');
op={}
txt.split(' ').forEach((item)=>item in op? op[item]+=1:op[item]=1)
console.log(op);

console.log('----------------');

// w.a.p to print the first recursive/repeated letter from the given pattern
pattern:'ABCDBCAD'
//op:B



// w.a.p to display the number count and display as object with key as the nimber and value as the count
a=[10,20,30,40,30,50,40,10,50,30]
obArr={}
a.forEach((item)=>item in obArr?obArr[item]+=1:obArr[item]=1)
console.log(obArr);

