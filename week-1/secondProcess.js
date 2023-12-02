

function logresponsebody(jsonBody){
    console.log(jsonBody)
}

function callbackFn(result){
   result.json().then(logresponsebody)
}

var sendObj ={
    method: "GET"
};

fetch("http://localhost:3000?counter=50",sendObj).then(callbackFn) 