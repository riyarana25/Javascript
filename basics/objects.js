//object literals
const mySym =Symbol("key1")

const JSUser={
    name:"Riya",
    "full name": "Riya Rana",
    [mySym]:"myKey1",
    age:18,
    location:"Delhi"
}

//ways to access
console.log(JSUser.name) //Riya
console.log(JSUser["name"]) //Riya
// console.log(JSUser.full name) //it will give error as it it the wrong way to access because key is a string itself
console.log(JSUser["full name"]) //Riya Rana
console.log(JSUser.mySym) //output=> undefined (wrong syntax)
console.log(JSUser[mySym]) //myKey1

//freeze=> to prevent the modification in the existing properties
Object.freeze(JSUser)

//comment out the freezing part first before executing this
JSUser.greeting= function(){
    console.log("Hello JS user");
}
console.log(JSUser.greeting) //output=> [function(anonymous)] (function return nahi hua hai, only uska reference aya hai)
console.log(JSUser.greeting()) //Hello JS user

JSUser.greeting2= function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JSUser.greeting2())

