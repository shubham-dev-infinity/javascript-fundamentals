// ----->   SET    <----- 

// map use for store key value pair same as object but difference is map can have any type of key meaning Nan , object, true can be key in map while in traditional object all keys are string
let map = new Map()
map.set(true, 3)
console.log(map.get(true)) // boolean is used as key

let obj = { name: "shubham" }
map.set(obj, 'this is value of object')

console.log(map.get(obj))

//we can iterate over map using it's inbuild foreach mathod

map.forEach((value, key) => {
    console.log(map.get(key) === value)
})

//we can create a map using plan object by get all plan object's entries using  Object.entries(obj) and pass this array to map 

let derived_Map_From_Obj = new Map(Object.entries(obj));



// ----->   SET    <----- 

// set is one type of array but all values are unique if we insert same value in set it automatically remove that repeated value

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
    console.log(user) // John (then Pete and Mary)
}
//we can use forEach loop and  for...of both loop in set too same as map

// Summary
// Map – is a collection of keyed values.

// Methods and properties:

// new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
// map.set(key, value) – stores the value by the key, returns the map itself.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
// The differences from a regular Object:
// Any keys, objects can be keys.
// Additional convenient methods, the size property.


// Set – is a collection of unique values.
// Methods and properties:

// new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
// set.add(value) – adds a value (does nothing if value exists), returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
// Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.
