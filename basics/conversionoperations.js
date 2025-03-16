let score="33abc"

console.log(typeof score); 
console.log(typeof(score)); //as a method

let valueInNumber =Number(score)
console.log(typeof valueInNumber); // type is => number

console.log(valueInNumber); // answer will be => NaN (because the string is the mix of number and char i.e, 33abc)

// in boolean algebra
// 1=>true and 0=>false (1 stands for true)

// **************************** Operations ********************************

console.log("1"+2) //12 (concatenation)
console.log(1+"2") //12
console.log("1"+2+2) //122 (if there is an string in the starting, then it will take the remaining variables as strings only)
console.log(1+2+"2") //32 

console.log(true); // output=> true
console.log(+true); // output=> 1
//  console.log(true+); //error
console.log(+""); //output=> 0
 
// **************************** Comparisons ********************************
console.log(2>1) //returns boolean value=> true
console.log("2">1) // true(it converts string to number because data types must be similar while comparing)

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true
// The reason is that an equality check == and comparisons > < >= works differently
//comparisons convert null to a number,treating it as 0

console.log("2"===2) //it checks data type as well



// **************************** Stacks and Heaps ********************************
// stack memory => stored in (primitive) data types => it gives copy
// heap memory => stored in (non-primitive) data types => it gives reference of the original value


//stack 
let user_name= "riya"
let newname = user_name
newname="saiyam"

console.log(newname) //saiyam
console.log(user_name) //riya
// here original name remains the same because in stack memory a copy is created but it doesnt change original value itself

//heap
let user1={
    name:"riya",
    email:"user1@google.com"
}
let user2 =user1
user2.email="user2@google.com"

console.log(user2) //user2@google.com
console.log(user1) //user2@google.com
// here it will point to the refernce of the original value this any change will reflect in the original value 








