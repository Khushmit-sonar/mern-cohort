 

 const promiseOne = new Promise(function(resolve,reject){
    //do an asyc task
    //db call 

    setTimeout (function(){
        console.log('Asyc task is complete');
        resolve()
    },2000)
 });


 promiseOne.then(function(){
    console.log("Promise consumed");
 }); 


 //---------------------------------------------------------------
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
 }).then(function(){
    console.log("Async 2 resolved");
 });

 //---------------------------------------------------------------------------

 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "ky@gmail.com"})
    })
 });

 promiseThree.then(function(user){
    console.log(user)
 })

//----------------------------------------------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Khushmit", passwords: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },100)
});
 
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"));


//------------------------------------------------------------------------

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: "javascript", password : "123"})
        }else {
            reject('Error: js went wrong')
        }
    },1000)
});


async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



//--------------------------------------------------------------
async function getAllUser(){

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ", error);
    }

}


getAllUser()
