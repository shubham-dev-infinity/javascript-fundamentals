let type_Number: number = 5;
let type_String: string = 'shubham'
let type_Boolean: boolean = true
interface type_Interface {
    name: string;
    age: number
    email?: string //conditional types
}
function type_Function(arg: type_Interface): string {
    const { name, age, email } = arg;
    return name + age + email  //if we add string with number , result will always be a string
}

const arrow_Function = (args: type_Interface): string => {
    return args.name
}

interface type_Object_Interface {
    firstName: string;
    age: number
    email?: string //conditional types
}

const type_Object: type_Object_Interface = {
    firstName: "shubham",
    age: 12,
    email: '1@gmail.com'
} // or also we can define type of object if we do not know how many record in object but we know that key and value both are string then

const type_Object_Record: Record<string, string> = {
    ket_1: 'value_1',
    key_2: 'value_2',
    // key_4: 2   //this is error
}

const type_For_Array: [number, string, boolean?] = [1, "shubham"]