const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //we should not simply write username, use (this.username) because "this" refers to current context         
        console.log(this); /*{
                               username: 'hitesh',
                               price: 999,
                               welcomeMessage: [Function: welcomeMessage]        
                              } */
    }
}
user.welcomeMessage()
user.username = "sam"
console.log(this) // output => {} //empty scope


function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai() //undefined 
// "this" only works inside objects, we cant use this in functions

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);
}
chai2() //undefined (same case as above as we are defining a function inside an object chai2)

//even if we remove function keyword and rather put => after () in the above code(chai2), it will give the undefined output
const chai3 =  () => {
    let username = "hitesh"
    console.log(this.username); //undefined
}
chai3()

//explicit return
const add1 = (num1, num2) => {
    return num1 + num2
}

//implicit return 
const add2 = (num1, num2) =>  num1 + num2

const add3 = (num1, num2) => ( num1 + num2 )
//if using {} => "return" keyword must be written
//if using () => no need to write return


const addTwo = (num1, num2) => ({username: "hitesh"})
//if we are writing an object it must be wrapped inside {}
