
//     let p1=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Promise 1 resolve");
//             resolve(10)
//         },1*3000)
        
//     })

//     let p2=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Promise 2 resolve");
//             reject("Promise 2 Failed")
//         },2*3000)
        
//     })


//     let p3=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Promise 3 resolve");
//             resolve(30)
//         },3*3000)
        
//     })



// Promise.all([p1,p2,p3]).then((result)=>{
//     let total=0
//     for(var i in result){
//         total += result[i]
//     }
//     console.log(`Result is ${result}`);
//     console.log(`Total is ${total}`);

// }).catch((error)=>{
//     console.log(`Error is ${error}`);

// })




//Short Promises

let promiseCall=(function(returnData,returnmsg){
    return function(resolve,reject){
        setTimeout(()=>{
            console.log(`Promise ${returnmsg} is Resolve`)

            resolve(returnData)

        },returnData*100)
        
    }

})


let p1=new Promise(promiseCall(10,"One"))
let p2=new Promise(promiseCall(20,"Second"))
let p3=new Promise(promiseCall(30,"Third"))


Promise.all([p1,p2,p3]).then((result)=>{
    let total=0
    for(var i in result){
        total += result[i]
    }
    console.log(`Result is ${result}`);
    console.log(` Total is ${total}`);
}).catch((error)=>{
    console.log(`Error is ${error}`);
})










