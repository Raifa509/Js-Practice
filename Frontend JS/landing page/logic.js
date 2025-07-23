class Landing{
    // properties
    database={
        'milan':{username:'milan',password:'milan123'},
        'ayra':{username:'ayra',password:'ayra123'},
        'ajmal':{username:'ajmal',password:'ajmal123'},
    }
    // method
    saveData(){
        if(this.database)
        {
             localStorage.setItem('database',JSON.stringify(this.database))
        } 
    }
    //method-get data
    getData(){
        const content=JSON.parse(localStorage.getItem('database'))
        console.log(content);
    }
    //method - register
    register(){
        console.log(regUser.value);
        console.log(regPass.value);
        if(regUser.value=='' || regPass.value=='')
        {
            alert('Please fill the form completely')
        }
        else{
            this.getData()
            if(regUser.value in this.database){
            alert('User already exist.Please login')
             window.location='login.html'
        }
        else{
            this.database[regUser.value]={username:regUser.value,password:regPass.value}
            this.saveData()
            alert('Registration Successfull')
            window.location='login.html'
        }
        }
        
    }

    //method-login
    login(){
        console.log(loginUser.value);
        console.log(loginPass.value);
        if(loginUser.value=='' || loginPass.value=='')
        {
            alert('Please fill the form completely')
        }
        else{
            this.getData()
            if(loginUser.value in this.database){
                if(this.database[loginUser.value].password)
                {
                    if(loginUser.value==this.database.username && loginPass.value==this.database.password)
                    {
                        alert('login success')
                        window.location='home.html'
                    }
                }
            }
            else{
                alert('User doesnot exist')
            }
        }
        
    }
}
const obj=new Landing()
obj.getData()