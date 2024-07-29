//array mathods

// 1. map( ) -> use for manupilate array mathods

const arr_Map = [1, 2, 3]
const ans_Map = arr_Map.map((data) => data + 1)
console.log(ans_Map, 'map')

//2. filter( ) -> use for filter out element from array

const arr_Filter = [1, 2, 3]
const ans_Filter = arr_Filter.filter((data) => data > 1)
console.log(ans_Filter, 'filter')

//3. sort( ) -> This method is used to arrange/sort array’s elements either in ascending or descending order.

const arr_Sort = [3, 6, 7, 1, 9, 4, 8];
const ans_Sort_Ascending = arr_Sort.sort((element_1, element_2) => element_1 > element_2 ? 1 : -1)
console.log(ans_Sort_Ascending, 'asc')
const ans_Sort_Descending = arr_Sort.sort((element_1, element_2) => element_1 > element_2 ? -1 : 1)
console.log(ans_Sort_Descending, 'des')


//4. forEach( ) -> This method helps to loop over array by executing a provided callback function for each element in an array.

const arr_ForEach = [1, 2, 3, 4, 5, 6];
const ans_ForEach = arr_ForEach.forEach((element) => {
    //you can perform any manupilation here
    //this mathod return nothing , it is only use for loop over array and perform necessary actions if require
    console.log(element, 'forEach')
})

//5. concat( ) -> This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

const arr_Concate_First = [1, 2, 3, 4];
const arr_Concate_Second = [5, 6, 7, 8];
const ans_Concate = arr_Concate_First.concat(arr_Concate_Second);
console.log(ans_Concate, 'concate')

//6. every( ) -> This method checks every element in the array that passes the condition, returning true or false as appropriate.

const arr_Every = [1, 2, 3, 4, 5];
const ans_Every = arr_Every.every((element) => element > 3)
console.log(ans_Every, 'every') // false because not every element in arr_Every  greater then 3

//7. some( ) -> This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

const arr_Some = [1, 2, 3, 4, 5, 6];
const ans_Some = arr_Some.some((element) => element > 1)
console.log(ans_Some, 'some')  // true becauuse elements are present in arr_Some which are greater then 1

//8. includes( ) -> This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

const arr_Includes = [1, 2, 3, 4, 5, 6];
const ans_Include = arr_Includes.includes(4);
console.log(ans_Include, 'include') //true  because 4 is present in array

//9. join( ) -> This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

const arr_Join = [1, 2, 3, 4, 5, 6];
const ans_join = arr_Join.join("-");
console.log(ans_join, 'join')


// 10. reduce( ) -> This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const arr_Reduce = [1, 2, 3, 4, 5, 6, 7]
const ans_Reduce = arr_Reduce.reduce((previouValue, currentValue, currentIndex, arr) => previouValue + currentValue)
console.log(ans_Reduce, 'reduce')

//11. find( ) -> This method returns the value of the first element in an array that pass the test in a testing function.

const arr_Find = [1, 2, 3, 4, 5, 6];
const ans_Find = arr_Find.find((element) => element === 4)
console.log(ans_Find, 'find') // 4

//12. findIndex( ) -> This method returns the index of the first element in an array that pass the test in a testing function.

const arr_Findindex = [3, 4, 5, 6, 6];
const ans_Findindex = arr_Findindex.findIndex((element) => element === 6)
console.log(ans_Findindex, 'find_Index') // 4

//13. indexOf( ) -> This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.

const arr_Indexof = [3, 4, 5, 6, 7, 8];
const ans_Indexof = arr_Indexof.indexOf(5)
console.log(ans_Indexof, 'indexof') //2  as element 5 is placed at index 2


//14. fill( ) -> This method fills the elements in an array with a static value and returns the modified array.

const ans_Fill = new Array(3);
console.log(ans_Fill, 'ans_Fill_Empty')
console.log(ans_Fill.fill(5), 'ans_fill_5')

//15. slice( ) -> This method returns a new array with specified start to end elements.

const arr_Slice = [1, 2, 3, 4, 5];
const ans_Slice = arr_Slice.slice(2, 4) //first argument is starting index and second index is ending index of array and remeber ending index is not include
console.log(ans_Slice, 'slice') //[3,4]

//15. splice( ) ->This  method adds and/or removes array elements. method overwrites the original array.

const arr_Splice = ["Banana", "Orange", "Apple", "Mango"];
arr_Splice.splice(2, 1, "Lemon", "Kiwi"); //first argument is starting index and second index is ending index of array and remeber ending index is not include
console.log(arr_Splice, 'splice') //[3,4]

//16. reverse( ) -> This method reverses an array in place. Element at last index will be first and element at 0 index will be last.

const arr_Reverse = [1, 2, 3, 4, 5, 6];
arr_Reverse.reverse()
console.log(arr_Reverse, 'reverse')  // remember this mathod directly modify actual array

//17. push( ) -> This method adds one or more elements to the end of array and returns the new length of the array.

const arr_Push = [1, 2, 3, 4, 5]
arr_Push.push(7)
console.log(arr_Push, 'push')

//18. pop( ) -> This method removes the last element from the end of array and returns that element.

const arr_Pop = [1, 2, 3, 4, 5]
arr_Pop.pop()
console.log(arr_Pop, 'pop')

//19. shift( ) -> This method removes the first element from an array and returns that element.

const arr_Shift = [1, 2, 3, 4, 5]
arr_Shift.shift()
console.log(arr_Shift, 'shift') // shift mathod return shifter element

//20. unshift( ) -> This method adds one or more elements to the beginning of an array and returns the new length of the array.

const arr_Unshift = [1, 2, 4, 5, 6]
arr_Unshift.unshift(7)
console.log(arr_Unshift, 'unshift')


const hash = (str) => {
    let h = 0;
    for (let i = 0; i < str.length; i += 1) {
        const char = str.charCodeAt(i);
        h = (h << 5) - h + char;
        h &= h; // Convert to 32bit integer
    }
    return new Uint32Array([h])[0].toString(36);
};

console.log(hash('shubham'))