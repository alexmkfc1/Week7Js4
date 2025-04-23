
//step 1 a
let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];
let subtract = ages[ages.length - 1] - ages[0];
console.log(subtract);

//step 1 b
ages.push(10);
subtract = ages[ages.length - 1] - ages[0];
console.log(ages);
console.log(subtract);

//step 1 c
let sum = 0;
for (let i = 0; i < ages.length; i++){
    sum += ages[i];
}
let average = sum / ages.length;
console.log( 'Average age: ',average);

//step 2 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//step 2 a
let totalLetters = 0;
for (let i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log('Average number of letters: ', averageLetters);

//step 2 b
let concatNames = '';
for (let i = 0 ; i < names.length; i++){
    concatNames += names[i] + ' ';
}
console.log("Concatenated names: ", concatNames);

//step 3 last element
let firstName = names.length - 1;
console.log('Last element: ', names[firstName]);

//step 4 first element
firstName = names[0];
console.log('First element: ', firstName);

//step 5
let nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log('Name lengths: ', nameLengths);

//step 6
let sumNameLengths = 0;
for (let i = 0 ; i < nameLengths.length; i++){
    sumNameLengths += nameLengths[i];
}
console.log('Sum of name lengths: ', sumNameLengths);

//step 7
function repeat(word, n){
    return word.repeat(n);
}
console.log(repeat('Hello', 3));

//step 8
function person(firstName, lastName){
    return firstName + ' ' + lastName;
    }
console.log(person('Bob', 'Smith'));

//step 9    
function numbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum > 100;
}
console.log(numbers([1,2,3,4,5]));

//step 10
function averageNumbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log(averageNumbers([1,2,3,4,5]));

//step 11
function compareArrays(array1, array2){
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array1.length; i++){
        sum1 += array1[i] ;
    }
    for (let i=0; i <array2.length; i++ ){
        sum2 += array2[i];
    }
    return sum1 / array1.length > sum2 / array2.length;
}
console.log(compareArrays([1,2,3,4,5], [6,7,8,9,10]));

//step 12
function willBuyDrink(isHotOutside, moneyInPocket){
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 11));

//step 13
function fruits(fruit){
    return fruit.sort();
} 
let fruit = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'peach', 'plum'];
console.log(fruits(fruit));