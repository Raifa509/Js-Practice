// rest 

class A{
    methoda(...arg)
    {
        console.log(arg);
        let sum=arg.reduce((n1,n2)=>n1+n2)
        console.log(sum);  
    }
}
const obj=new A()
obj.methoda(2,3,5)

// overriding

class over{
    op(n1,n2)
    {
        console.log(`sum${n1+n2}`);
        
    }
     op(n1,n2)
    {
        console.log(`sub${n1-n2}`);

        
    }
     op(n1,n2)
    {
        console.log(`prd${n1*n2}`);
        
    }
     op(n1,n2)
    {
        console.log(`remai${n1/n2}`);
        
    }
}

const o=new over()
o.op(2,5)