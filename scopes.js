let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a); //INNER: 10 
}
console.log(a); //300
// console.log(b); //ReferenceError: b is not defined


//functions inside function
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //ReferenceError: website is not defined
    two()
}
one() //hitesh

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); //hitesh youtube
    }
    //console.log(website); //error(out of scope)
}
// console.log(username); //error(out of scope)

//*********************** interesting ***************************

//here we are just declaring a function
console.log(addone(5)) //6
function addone(num){
    return num + 1
}


//here we are storing the function in a variable along with declaration(this is called hosting)
addTwo(5)//error =>Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
