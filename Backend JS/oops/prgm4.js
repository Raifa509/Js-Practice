// inheritance

class A{
    methoda(){
        console.log('inside Method A');
        
    }
}
class B extends A{
    methodb(){
        console.log('inside Method B');
        
    }
}
const obj=new B()
obj.methodb()
obj.methoda()

console.log('----------------');

// multilevel inheritance

class A{
    methoda(){
        console.log('inside Method A');
        
    }
}
class B extends A{
    methodb(){
        console.log('inside Method B');
        
    }
}

class C extends B{
    methodc(){
        console.log('inside Method C');
        
    }
}

const multi=new C()
multi.methodc()
multi.methodb()
multi.methoda()

// heirarcial inheritance

class A{
    methoda(){
        console.log('inside Method A');
        
    }
}
class B extends A{
    methodb(){
        console.log('inside Method B');
        
    }
}

class C extends A{
    methodc(){
        console.log('inside Method C');
        
    }
}

const h1=new C()
h1.methodc()
h1.methoda()

const h2=new B()
h2.methodb()
h2.methoda()
