
// 1. 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// a.
function sub(){
    let first = ages[0];
    let last = ages[ ages.length - 1 ];
    sum = first - last;
    console.log (sum);
}
sub(ages);
// b.
ages.push(5);

sub(ages);

// c.
let averageAge = 0;
function averageFn(){
    for (let i = 0; i < ages.length; i++){
        averageAge += ages[i] / ages.length;
    }
    return averageAge;
}
ages.push(25, 11, 33);
console.log(averageFn(ages));
console.log(ages);



// 2.
let names = ["Sam" , "Tommy" , "Tim" , "Sally" , "Buck" , "Bob"];

let avgNameLength = names.join('').length / names.length;
console.log(avgNameLength);


// a.
let averageLength = 0;
function averageLengthFn(){
    for (let i = 0; i < names.length; i++){
        averageLength += names[i].length / names.length;
    }
    return averageLength;
}
names.push("Hunter");
console.log(averageLengthFn(names));
console.log(names);

// b.
console.log(names.join(' '));


let allNames = "";
function concatAllNames(){
    for (let i = 0; i < names.length; i++){
        allNames = allNames + names[i] + " ";
    }
    return allNames
} console.log(concatAllNames(names));

// 3.
let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
lastElement = array[array.length - 1];
console.log(lastElement);
// 4.
firstElement = array[0];
console.log(firstElement);

// 5.
let nameLengths = [];

for (let i = 0; i < names.length; i++){
        let nameLength = names[i].length ;
        nameLengths.push(nameLength);
    }
console.log(nameLengths);

// 6.
let lengthSum = 0;
for (i = 0; i < names.length; i++){
    lengthSum += names[i].length;
}
console.log(lengthSum);

// 7.


function words(word , n){
    let words = "";
    while (n > 0){
        words += word;
        n--;

    }
    return words;
}
console.log(words("ha", 5));


// 8. 

function fullName(firstName,lastName){
    return firstName + " " + lastName;
}
console.log(fullName("Hunter","Frost"));

// 9.

let numbers = [4, 8, 15, 16, 23, 42]
function oneHundred(){
    for( i = 0; i < numbers.length; i++){
        sum += numbers[i];} 
        if(sum >= 100){
            return true;
        }else{
            return false;
        }
}
console.log(oneHundred(numbers));

// 10.

let averageNum = 0;
function averageNumFn(){
    for (let i = 0; i < numbers.length; i++){
        averageNum += numbers[i] / numbers.length;
    }
    return averageNum;
}
console.log(averageNumFn(numbers));

// 11. 
let moreNumbers = [5, 10, 15, 20, 25, 30];
let arr1avg = 0;
let arr2avg = 0;
function averageOfArrays(arr1,arr2){
    for (i = 0; i < arr1.length; i++){
        arr1avg += arr1[i] / arr1.length;
        }
    for (i = 0; i < arr2.length; i++){
        arr2avg += arr2[i] / arr2.length;
        }
    if (arr1avg > arr2avg){
        return true;
    }else {
        return false;
    }
}
console.log(averageOfArrays(numbers,moreNumbers));


// 12.
function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside == true && moneyInPocket >= 10.50){
        return true;
    }else {
        return false;
    }
}
console.log(willBuyDrink(true, 10.50));

// 13. Im making dreamcatchers for christmas and wanted to know how much leather cord I would need to cover the entire ring.  
function dreamCatcher(ringDia/*in inches*/,ringThiccness/*in mm */,leatherWidth/*in mm */){
    ringDiaCirc = (ringDia * Math.PI) * 25.4;
    ringThiccnessCirc = ringThiccness  * Math.PI;
    leatherLength = ringDiaCirc / leatherWidth * ringThiccnessCirc
    return (leatherLength / 1000).toFixed(2)
}
console.log(dreamCatcher(5,3,5) + "m or " + leatherLength.toFixed(2) +" mm of leather to cover ring.")


