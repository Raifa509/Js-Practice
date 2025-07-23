class Landing {
    // properties
    database = {
        'milan': { username: 'milan', password: 'milan123' },
        'ayra': { username: 'ayra', password: 'ayra123' },
        'ajmal': { username: 'ajmal', password: 'ajmal123' },
    }
    // method
    saveData() {
        if (this.database) {
            localStorage.setItem('database', JSON.stringify(this.database))
        }
    }
    //method-get data
    getData() {

        this.database = JSON.parse(localStorage.getItem('database'));
    }
    register() {
        console.log(regUser.value);
        console.log(regPass.value);
        if (regUser.value == '' || regPass.value == '') {
            alert('Please fill the form completely')
        }
        else {
            this.getData()
            if (regUser.value in this.database) {
                alert('User already exist.Please login')
                window.location = 'login.html'
            }
            else {
                this.database[regUser.value] = { username: regUser.value, password: regPass.value }
                this.saveData()
                alert('Registration Successfull')
                window.location = 'login.html'
            }
        }

    }
    login() {
        console.log(loginUser.value);
        console.log(loginPass.value);
        if (loginUser.value == '' || loginPass.value == '') {
            alert('Please fill the form completely')
        }
        else {
            this.getData()
            if (loginUser.value in this.database) {
                if (this.database[loginUser.value].password == loginPass.value) {
                    localStorage.setItem("user", loginUser.value)
                    alert('login successfully')
                    window.location = 'home.html'

                }
                else {
                    alert('incorrect username or password')
                }
            }
            else {
                alert('User doesnot exist')
            }
        }

    }


}

const obj = new Landing()
obj.getData()

const user = localStorage.getItem("user");
if (user) {
    document.getElementById("userdisplay").textContent = user;
}