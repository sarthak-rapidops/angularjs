export {}
let msg = "hello welcome"
console.log(msg)

// variable type basic 

let isBeginner: boolean = true;
let total :number =10;
let name: string = "abc"

// template string

let sentence: string = `my name is ${name} i am a beginner in typescript`

// two more type null and undefind
let n:null = null;
let u :undefined = undefined; 
let nu:boolean = null;
let un:string =undefined;

//array type
let list1:number[]= [1,2,3];
let list2: Array<number> = [1,2,3];
 
//tuple type
let person1: [string, number] =["abc",33]

//enum type
enum color {Red, green, blue};
let c:color = color.green
console.log(c); 

//any type
let randomValue:any =10;
randomValue =true;
randomValue="abc";

//unkonw type
let myvariable:unknown = 10;

// type inference
 let a;
 a=10;
 a= true;

let multiType: number | boolean;
multiType = 20;
multiType = true;


// function 
function add(no1:number, no2:number):number//last number type is number type
{
    return no1 + no2;
}
add(5,10);

function demo(no1:number, no2?:number):number{
    //no2 is optional parameter because we put ?
    return no1 + no2;
    // as we are not passing second argument thats why no2 is undefined
    //optional parameter is always be after the required parameter

}
demo(5)

 // interface
 interface Person{
     firstname: string;
     lastname: string;
 } 
function fullname(person:Person){
    console.log(`${person.firstname} ${person.lastname}`)
}
let p ={
    firstname:"abc",
    lastname:"xyz"
}
fullname(p)

// classs and access modifiers
// default public 
class employee{
    empname: string,
    constructor(name:string){
        this.empname= name;
    }
    greet(){
        console.log((`good morning ${this.empname}`))
    }
}

let emp = new employee('abc')
console.log(emp.empname)
emp.greet()

// inheritance

class manager extends employee{
    constructor(mname:string){
        super(mname);
    }
    work() {
        console.log("working")
    }
}
let m = new manager("xyz");
m.work()
m.greet()
console.log(m.empname)



