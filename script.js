'use strict'
const API='https://jsonplaceholder.typicode.com/userss'
const getData=async(resource)=>{
    try{
        const reponse=await fetch(resource)
    if(!reponse.ok)
        throw new Error("Ma'lumotni olishda xatolik")
    const data=await reponse.json()
    return data
   
    }catch(error){
        console.error("Xatolik",error.message);
        
    } 
    
}
    
    
    
getData(API)


// console.log('First');
// setTimeout(()=>{
//     console.log('Second');

    
// },2000)
// console.log('Third');

