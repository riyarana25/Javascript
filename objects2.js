// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//we can do multiple nesting
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname)

//merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


const obj4 = { obj1, obj2 } // it will take the whole obj as a single element 
console.log(obj4) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//assign=> copies the value of source object and move it to a single target object(new)
const obj5 = Object.assign({}, obj1, obj2, obj4)
console.log(obj5) //{'1': 'a','2': 'b','3': 'a','4': 'b',}

//spread operator
const obj6 = {...obj1,...obj2}

//objects inside array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email //since it is an array, so to access 1st object we will write users[1] and then object elements can be accessed further by .

console.log(Object.keys(tinderUser)) //it will give an array of all the keys
console.log(Object.entries(tinderUser)) //return an array containing key :values of the object


//JSON=>in this, both key and value are of string type
// {
//     "name": "riya",
//     "age": "19"

// }

[
    {},
    {},
    {}
]



