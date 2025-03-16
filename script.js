'use strict'
const API='https://jsonplaceholder.typicode.com/users'
const getData=async(resource)=>{
    const reponse=await fetch(resource)
    const data=await reponse.json()
    return data
    
    
}
    
    
    
getData(API)
.then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})

// console.log('First');
// setTimeout(()=>{
//     console.log('Second');

    
// },2000)
// console.log('Third');

