//QUESTION => 1

//Write a program that uses filter to remove all negative numbers from an array of numbers
let arrayOfNum:number[]=[-1,-2,3,-4,-5,6,-7,8,-9];
let removeNeg:number[]=arrayOfNum.filter((negRem)=>{
if(negRem>0){
    return true;
}

})
console.log("Positive numbers are",removeNeg)



//QUESTION => 2

//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let newArray:number[]=[1,2,3,4,5];
let updatedArray:number[]=newArray.map((newData)=>(newData*2))
console.log(updatedArray);

//QUESTION => 3

//Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
// use the filter method to create a new array containing only the fruits with more than 5 characters.


let arrayFruits:string[]=["apple", "banana", "cherry", "date", "grape"];

let newArrayFruits:string[]=arrayFruits.filter((nwFruits)=>{

if(nwFruits.length > 5){
    return true
}

})
console.log("more than five characters=",newArrayFruits)

//QUESTION => 4

//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// use the map and filter methods together to create a new array containing the squares of even numbers.

let arrayMem:any[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updArrayMem=arrayMem.map((newAr)=> newAr**2).filter((newAr)=>{
if(newAr %2==0){

    return true;
}

})
console.log("square of even numbers",updArrayMem);

//QUESTION => 5

//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], 
//use the map method to create a new array where each temperature is converted to Fahrenheit 
    //using the formula (Celsius * 9/5) + 32.

    let tempCelcius:number[]=[0, 10, 20, 30, 40];
    let convertFahrenheit:number[]=tempCelcius.map((celcius)=>{
    
        return (celcius*9/5) +32;

    })
    console.log("fahrenheit temp=",convertFahrenheit)

    // QUESTION => 6


    
    //Given an array of numbers [3, 6, 9, 12, 15, 18], 
    //use the map and filter methods together to create a new array containing the doubled values of odd numbers.
    let arOfNum:number[]=[3, 6, 9, 12, 15, 18];
    let updtOfArNum=arOfNum.filter((nwData)=>nwData %2!==0).map((nwData)=>nwData *2);
    console.log("double value of odd numbers =",updtOfArNum)

    // QUESTION => 7

    //Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], 
    //use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

    let arrayOfName:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
    arrayOfName.forEach((arrayOfName)=>{console.log(`${arrayOfName}!`)})