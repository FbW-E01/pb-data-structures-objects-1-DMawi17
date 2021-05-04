/*
   _ 
  / |
  | |
  | |
  |_|
     
 
  Object Person
*/
const person2 = {
    a: "123",
    b: "456",
    c: "789",
};

for (const [key, value] of Object.entries(person2)) {
    console.log(key, value);
}

/*
 
   ____  
  |___ \ 
    __) |
   / __/ 
  |_____|
         
 
  Get Values
*/

getObjectValues = (obj) => {
    const arrayHolder = [];
    for (let x in obj) {
        arrayHolder.push(obj[x]);
    }
    return arrayHolder;
};

const arrayConstructor = getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
});

console.log(arrayConstructor);

/*
   _____ 
  |___ / 
    |_ \ 
   ___) |
  |____/ 
         
 
  Add A Method.
*/
let person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
};

function toMethod() {
    return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.age} in ${this.city}`;
}

const binder = toMethod.bind(person);
console.log(binder());

/*
 
   _  
  / | 
  | | 
  | | 
  |_| 
      
 
  Convert keys and values into an array.
*/

objectToArray = (objToArr) => {
    console.log(Object.entries(objToArr));
};

objectToArray({
    A: 1,
    B: 2,
    C: 3,
});

objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4,
}); 

/*
 
   ____  
  |___ \ 
    __) |
   / __/ 
  |_____|
         
 
  List Properties.
*/
let student = {
  name: "Mike", 
  class: "4A", 
  course: "English",
}

const getProp = (obj) => {
  emptyArray = [];
  for (prop in obj) {
    emptyArray.push(prop);
  }
  return emptyArray
}

console.log(getProp(student));

/*
 
   _____ 
  |___ / 
    |_ \ 
   ___) |
  |____/ 
         
 
  Merge.
*/

let first = { firstName: 'John' }
let last = { lastName: "Smith" }

const merged = { ...first, ...last }
console.log(merged);

// Merging 2 object with the same properties, using the spread operator, will override the second argument and replace it by the first argument.


/*
 
   _  _   
  | || |  
  | || |_ 
  |__   _|
     |_|  
          
 
     Switch Keys and Values.**
*/

let person3 = {
  name: "John", 
  job: "teacher"
}

function swap(thirdPersonObj) {
  const store = {}
  for (let prop in thirdPersonObj) {
      store[thirdPersonObj[prop]] = prop;
  }
  return store;
}

console.log(swap(person3));

/*
 
   ____  
  | ___| 
  |___ \ 
   ___) |
  |____/ 
         
  Return Keys and Values.
*/

let objOne = { a: 1, b: 2, c: 3 };
let objTwo = { key: true };

const twoForOne = (objNum) => {
  let containerArray = [a=[], b=[]];
    for (const prop in objNum) {
        a.push(prop);
        b.push(objNum[prop]);
    }
    return containerArray;
};

console.log(twoForOne(objOne)); // [["a", "b", "c"], [1, 2, 3]]
console.log(twoForOne(objTwo)); // [["key"], [true]]
