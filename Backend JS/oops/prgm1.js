class Employee{
    empid;
    empName;
    empDeg;
    empLoc;

    constructor(id,name,desg,loc)
    {
        this.empid=id
        this.empName=name
        this.empDeg=desg
        this.empLoc=loc
    }
    display()
    {
        console.log(`given name is ${this.empName}`);
        
    }
}

const user1=new Employee(1000,'Neel','developer','kochi');
user1.display()