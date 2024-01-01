// function receivesAFunction(){
//     console.log("Hello!");
//     return returnsANamedFunction();
// }

// function returnsANamedFunction(){
//     return receivesAFunction
// }

// function returnsAnAnonymousFunction(){
//    return ()=>{
//     console.log("Anaonymous Function")
//     }
// }

function receivesAFunction(callback){
    console.log("Hello!");
    callback()
}

function returnsANamedFunction(){
    function namedFunction(){

    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
   return ()=>{
    console.log("Anaonymous Function")
    }
}
