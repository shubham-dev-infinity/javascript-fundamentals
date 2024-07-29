// when  javascript perform garbage collectoion operation it will remnove data from memory if that data is not reachable.  but suppose that object is present in object or array and letter we assign that object null it will stil place in memory becuase then that object is accesible from that array using arr[index].
// map is data structure to use key value pair , so we assign object as key and letter we assign null to that object we still access that object example :

const map_ = new Map()
let obj_ = {
    name: 'shubham'
}
map_.set(obj_, 'i am the value of obj_')
// obj_ = null                       // -----> uncomment this please when you want to see log


map_.forEach((value,key)=>console.log(key))

// SO  The first difference between Map and WeakMap is that keys must be objects, not primitive values for weakmMap: you will get error if you use other data type as key in weakMap
// if one the key of weakmap which are object get null then that key is unreachable and it will released form memory


//***  MOST IMPORTANT NOTICE : WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.
// Reason : The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. So, technically, the current element count of a WeakMap is not known. The engine may have cleaned it up or not, or did it partially. For that reason, methods that access all keys/values are not supported.

// Use case: additional data
// The main area of application for WeakMap is an additional data storage.
// If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.
// We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.

// 2. to track of visiter's count
// 3. in caching , as we do not need to memory clean up 



// samwe for weakSet
// WeakSet behaves similarly:

// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// An object exists in the set while it is reachable from somewhere else.
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.
// Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

// For instance, we can add users to WeakSet to keep track of those who visited our site: