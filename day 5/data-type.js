//string
let name = "Tanu"
console.log(name)

//number
let age = 19
console.log(age)
console.log("my age is " + age);
//float
let height = 5.6
console.log(height);
//in c,print(height); // c c++
// javasript is a  dynamic type language  (we dontneed to define the type of variable/data type)
//c c++ is a static type language(we need to define the type of variable/data type)
//int age = 19; string name = "Tanu"; float height =5.6 //c c++
// in js we can change the type of variable at any time

//boolean 
let ismarried = false
console.log(ismarried);

// is js case sensitive ?
let a = 10;// a in smaller case variable 
let A = 20;//A in capital case variable  
console.log('a,A');//10 20
// js is case sensitive language

// undefined
let x;
console.log(x);

//null
let y = null
console.log(y);

//object data type
//let objectName =(key: value , key 2:value 2 )
let person = {
    "Name": "Tanu",
    "Age": 19,
    "Height": 5.6,
    "Address": {
        "City": "Panipat",
        "Pincode": 130123
    }
}



console.log(person);
let address = {
    "key1": " string value1",
    "key2": 1234,
    "homeaddress": { "city": "Panipat" },
    "officeaddress": { "city": "noida" }
}
console.log(address);
console.log(address.homeaddress.city);
//print city of office address
console.log("my office city is " + address.officeaddress.city);

//array data type
let myfriends = ["tanu ", "vicky", "sneha ", "shubham "];
console.log(myfriends);
console.log(myfriends[0]);
console.log(myfriends[2]);
//my bestfriend is ankit and shubham

console.log("mybestfriend are " + myfriends[1] + " and " + myfriends[3]);

//data date type
let currentDate = new Date();
console.log(currentDate);
let myDOB = new Date("2006-04-13");
console.log(myDOB);
console.log(" DOB year " + myDOB.getFullYear());
console.log("DOB Month " + (myDOB.getMonth() +1) ); //31
console.log("DOB Day " + myDOB.getDate());

console.log("my expression " + 1 +5 ); //15
console.log("my expression " + (1 +5) ); 

