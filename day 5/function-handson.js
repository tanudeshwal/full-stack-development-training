///function is a block of code that performs a specific task
//function functionName(parameter1, parameter2) 
//function is a keyword
function greet(){
    //block of code 
    console.log("hello , my name is tanu ");
    console.log("I am learning JavaScript function, ")
    //block end here
}
//function call--> write name of function (greet)with paramenter{}
greet;

//function with parameter
function greetwithName(name){
    //name is a parameter
    console.log("hello , my name is "+ name);
}
greetwithName("tanu");


//function with return value
function addNumbers(a,b){
    return a + b;
}
let result = addNumbers(10,20);
console.log("The Sum is : "+result);

//sub function
function subNumber(a,b){
    return a-b;
}
let result2=(10,20);
console.log("the sub is : " + result2);



