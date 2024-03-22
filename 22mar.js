//Indexed Collection
//includes array and typed array

// Creating an array
const arr= new Array("element0","element1","element2","element3","element4");
console.log(arr);
console.log(arr.length);

const arr3 = [1,2,3,4,5];
let len=arr3.length;
console.log(len);

// arrays can also be assigned as a property of a new or an existing object:

const obj = { prop: ["Lalita","Dewandi","Rasila"] };
console.log(obj);

const arr2 = [42];
console.log(arr2);

const arr4 = Array(42);
console.log(arr4);  //creates an array with no elements and arr.length set to 42.

let ary= Array.of("Night","Fall");
console.log(ary);

const arr6 = ["one", "two", "three"];
console.log(arr6[2])
console.log(arr6["length"])

const arr7= new Array(
    "name","Rita","","" ,"" ,"" );
console.log("Third indexed element is: ",arr7[3]);

const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
console.log(emp);

const check=[];
check[0.5]="olly"
console.log(check.length)
console.log(check);
console.log(Object.hasOwn(check, 0.5));

const myArray7 = ["Mango", "Apple", "Orange"];
console.log(myArray7);

const cat= [];
cat[30] = ["Dusty"];
console.log(cat.length);


const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats.length = 0;
console.log(cats); // []; the cats array is empty

cats.length = 3;
console.log(cats); // [ <3 empty items> ]


const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

const jersey=["mI","cSK","rCB","lSG"]
jersey.forEach((jersey)=> console.log(jersey));

const lab= new Array("test","tube");
console.log(lab.join("_"));
let b= lab.toString();
console.log(typeof b);

const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - ");


const array=[1,2,3,4,5,6,7,8,9];
let x = array.pop();
console.log(array);

let myArry= ["1", "2", "3"];
myArry = myArry.concat("a", "b", "c");
console.log(myArry);

const myArray1 = ["1", "2"];
myArray1.push("3");
console.log(myArray1);

const myArray2 = ["1", "2", "3"];
const first = myArray2.shift();
console.log(myArray2);
console.log(first);
myArray2.unshift("4", "5");
console.log(myArray2);

let myArray3 = ["a", "b", "c", "d", "e"];
myArray3 = myArray3.slice(1, 4);
console.log(myArray3);

const myArray4 = ["a", "b", "c", "d", "e"];
console.log(myArray4.at(-2));
myArray4.reverse();
console.log(myArray4);

let myArray5 = [1, 2, [3, 4],[5,6],[7,8]];
myArray5 = myArray5.flat();
console.log(myArray5);

const myArray6 = [4,8,6,9,1];
myArray6.sort();
console.log(myArray6);
