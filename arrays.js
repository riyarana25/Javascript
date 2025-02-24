const myArr= [1,2,3,4,5]

myArr.push(6) //add the value in the last
myArr.pop() //removes the last value
myArr.unshift(0) //add element in the start of the array
myArr.shift() //removes the first element
console.log(myArr)

console.log(myArr.includes(9)) //check whether the array contain the given vALUE

const newArr = myArr.join() //add all the elements of the array into the string
console.log(myArr) //[ 1, 2, 3, 4, 5 ]
console.log(newArr) // 1,2,3,4,5 (data type => string)

/* if we push the entire array into an array, it will not be merged
rather, it will take that pushed array as a single object and add the entire array as a single element
*/
const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes= ["superman", "flash","batman"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
 
//concat will merge the 2 arrays and return the new array
const all_heroes= marvel_heroes.concat(dc_heroes)
console.group(all_heroes) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//we can also use spread operator
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

//flat => it gives a new array concatening all the subarray elements to a particular depth
const myArr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //this is an complicated array
const result_arr2 = myArr2.flat(Infinity) //infinity is the depth

//creation of a array from an iterable object
console.log(Array.from("Riya")) //  [ 'R', 'i', 'y', 'a' ]

console.log(Array.from({name:"Riya"})) //interesting case

//of =>return new array from a set of elements
const s1=100
const s2=200
const s3=300
console.log(Array.of(s1,s2,s3))
