
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
 
function calculateSum(counter){
    var sum = 0;
    for (var i = 0 ; i <= counter ;  i++){
       sum = sum + i;
    }
    return sum;

}
function calculateMul(counter){
    var mul = 1;
    for (var i = 1 ; i <= counter ;  i++){
       mul = mul * i;
    }
    return mul ;

}

function handleFirstRequest(req,res){
    console.log(req.body);
    var counter = req.query.counter;  //sending data from data
    //var counter = req.headers.counters;    //sending data from headers   
    //var counter = req.body.counters;
    
    
        var calculatedsum = calculateSum(counter);
        var calculatemul = calculateMul(counter);
        var answerObject ={
            sum: calculatedsum,
            mul: calculatemul
        };
    
        res.status(200).send(answerObject)   
}
 
//app.get('/', handleFirstRequest);
app.get('/', handleFirstRequest);

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)
 




