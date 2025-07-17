class Student{
    constructor(id,name,mark)
    {
        this.stdId=id
        this.stdName=name
        this.stdMark=mark
    }
    display()
    {
        console.log(`ID : ${this.stdId}, Name : ${this.stdName}, Mark : ${this.stdMark}`);
        
    }
}
const s1=new Student(1,'Riyan',45);
s1.display()
const s2=new Student(2,'Ridhan',30);
s2.display()
const s3=new Student(3,'Ajmal',48);
s3.display()