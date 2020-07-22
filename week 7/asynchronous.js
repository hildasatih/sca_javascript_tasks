

const records = async () =>{
    const response = await fetch('HilsMultinationals/EmployeeRecords.json');
    const data = await response.json();
    return data;


}


console.log('one');
console.log('two');
records().then((data)=>{
    console.log('promise resolve', data);
}).catch((error)=>{

})

console.log('three');
console.log('four');