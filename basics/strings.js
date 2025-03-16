//declaration
const name= "riya rana"
const age= 20
//another way 
const name2 = new String(`RiyaR`)

console.log(`my name is ${name} and my age is ${age}`);

//Accessing key value pair
console.log(name[0])

console.log(name.length) //4
console.log(name.toUpperCase()) // RIYA
console.log(name.indexOf('y')) //2 

console.log(name.substring(0,3)) //riy
console.log(name.slice(-6,-2)) // a ra (negative values will reverse the string and give substring fromn reverse order)
// we can only use negative indices in slicing, not substring

//trim and replace
//trim => remove extra white spaces
const a = "     hello      "
console.log(a.trim())

//replace =>
const url ="https://riya.com/riya%20rana" //https://riya.com/riya-rana
console.log(url.replace('%20','-'))




