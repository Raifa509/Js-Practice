const check = (event) => {
    event.preventDefault(); // avoid reload

    // let agenum = Number(age.value);
    // if (agenum == '') {
    //     para.innerHTML = 'Please enter a data';
    //     para.style.color = 'blue';
    // } 
    // else if (isNaN(agenum)) {
    //     para.innerHTML = 'Please enter a valid data';
    //     para.style.color = 'orange';
    // } 
    // else {
    //     if (agenum < 18) {
    //         para.innerHTML = 'Not Eligible';
    //         para.style.color = 'red';
    //     } 
    //     else {
    //         para.innerHTML = 'Eligible';
    //         para.style.color = 'green';
    //     }
    // }
    if(age.value){
        if(age.value>=18)
        {
            para.innerHTML = 'Eligible to vote';
            para.style.color = 'green';
        }
        else if(age.value<18)
        {
             para.innerHTML = 'Not Eligible to vote';
            para.style.color = 'red';
        }
        else{
        para.innerHTML = 'Please enter a valid data';
        para.style.color = 'orange';
        }
    }
    else{
        para.innerHTML = 'Please enter a data';
        para.style.color = 'blue';
    }
};
