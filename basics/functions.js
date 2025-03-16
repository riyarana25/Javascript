function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
}
sayMyName //this is reference
sayMyName() //this is execution


//parameters => variable used while defining the function (a,b)
//arguements => while calling the fucntion (4,5)
function add(a,b){
    console.log(a+b);
}
//console.log is not same as return 
const res=add(4,5)
console.log("result:",res) //result: undefined (because we are not returning the value)

//therefore,the right way 
function addTwoNumbers(number1, number2){
    return number1 + number2
}
const result= addTwoNumbers(8,9)
console.log("result:",result) //17

//rest operator =>...num => it will return all the values passed in the arguement 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))//500,2000 (200 and 400 are taken by val1 and val2 respectively thus rest values are stored in num)


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 500, 1000])); //400
