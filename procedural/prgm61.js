studDetails={
    stdID:1,
    stdName:'John',
    stdage:20
}
console.log(studDetails);
console.log('--------------------');

// adding
Object.assign(studDetails,{stdGen:'Male',stdRoll:21,stdage:23})
console.log(studDetails);
console.log('--------------------');

// delete
delete studDetails.stdage
console.log(studDetails);
console.log('--------------------');

// update

'stdage' in studDetails?studDetails['stdage']:(studDetails['stdage']=24);
console.log(studDetails);
