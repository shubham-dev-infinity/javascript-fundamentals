//1. Lowercase Method: toLowerCase() -> The lowercase method returns a string with all values converted to lowercase letters.
const str_Lowercase = "MY NAME IS SHUBHAM";
const ans_Lowercase = str_Lowercase.toLowerCase()
console.log(ans_Lowercase, 'lowercase')

//2. Uppercase Method: toUpperCase() -> The uppercase method returns a string with all values converted to uppercase.
const str_Uppercase = "MY NAME IS SHUBHAM";
const ans_Uppercase = str_Uppercase.toLowerCase()
console.log(ans_Uppercase, 'upercase')

//3. String Method: toString() -> The string method returns a string or string object as a string. 
const str_ToString = 123;
const ans_ToString = str_ToString.toString()
console.log(ans_ToString, typeof ans_ToString, typeof str_ToString, 'toString')

//4. Substring Method: substring() ->The substring method extracts characters from a string between two specified indices.
const str_Substring = "My name is Shubham."
const ans_Substring = str_Substring.substring(3, 10);  // The substring includes the characters up to, but not including, the character indicated by end(second parameter). If end is omitted, the characters from start through the end of the original string are returned.
console.log(ans_Substring, 'sub')

//5. Includes Method: includes() -> The includes method returns a string if it contains a specified value.
const str_Includes = "My name is Shubham";
const ans_Includes = str_Includes.includes('Shubham') // this is case-sensitive meaning shubham and Shubham Are different
console.log(ans_Includes, 'include') //true but is i pass shubham(with small s) it will return false

//6. Match Method: match() -> The match method returns a string object with a matching value. mostly use for regular expression
const str_Match = "My name is Shubham";
const ans_Match = str_Match.match("Shubham") // this will return object which will provide basic information
console.log(ans_Match, 'match')

//7. Concat Method: concat() -> The contact method returns two or more joined strings.
const str_Concate_first = "shubham";
const str_Concate_second = "bhai";
console.log(str_Concate_first + str_Concate_second, "concate")

//8. Trim Method: trim() ->The trim method removes unneeded whitespace from the start and end of a string.
const str_Trim = "  My name is shubham ";
const ans_Trim = str_Trim.trim()
console.log(ans_Trim, 'trim')

//9. Eval Method: eval() -> The eval method allows code written as a string to be evaluated and executed.
const str_Eval = "3>2 ? false : true"
const ans_Eval = eval(str_Eval)
console.log(ans_Eval, 'eval')

//10. Replace Method: replace() -> The string replace method returns a new string to replace a piece of an existing string.
const str_Replace = "My name is shubham";
const ans_Replace = str_Replace.replace("shubham", "transcode");
console.log(ans_Replace, 'replace')

//11. Test Method: test() -> The test method checks if there is a match in a string. It returns the value, True or False, depending on the outcome. 
const str_Test = "Transcode Solution"
let regex = new RegExp("Trans",)
console.log(regex.test(str_Test), 'test') //test mathod run on regex object only

//12. Repeat Method: repeat()  -> The repeat() method is used to repeat a given string a specified number of times. 
const str_Repeat = "shubham "
const ans_Repeat = str_Repeat.repeat(3)
console.log(ans_Repeat, "repeat")

//13. Search Method: search() -> The search() method is used to search for a pattern in a string and returns the index position of the match. 
const str_Search = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?"
const regex_Search = /[^\w\s]/g; // Any character that is not a word character or whitespace
console.log(str_Search.search(regex_Search), 'search') //43 because . is placed at 43 index on above string

//14. search index mathod : string.indexOf(substr, [start]) -> returns the index position of character value passed with method. If not found, -1 is returned.
//note: this mathos is case-sensitive meaning shubham ans Shubham is different
const str_Indexof = "My name is shubham";
console.log(str_Indexof.indexOf('a'), "a's index") //return first a's index
console.log(str_Indexof.indexOf("shubham"))
console.log(str_Indexof.indexOf("name", 15)) //start searching from 15th index

//15. search index mathod :  string.lastIndexOf(substr, [end]) ->  returns the last index position of character value passed with method. If not found, -1 is returned.
//note: this mathos is case-sensitive meaning shubham ans Shubham is different
const str_Last_Indexof = "Java and Javascript are not same";
console.log(str_Last_Indexof.lastIndexOf('a'), "a's index") //return first a's index
console.log(str_Last_Indexof.lastIndexOf("java")) // -1  because as i said it is case semsitive 
console.log(str_Last_Indexof.lastIndexOf("Java")) // 9  because as mathod's nature it will give last mathchde elements index 
console.log(str_Last_Indexof.lastIndexOf("and", 15)) //5 here 15 index menns last to 15th index