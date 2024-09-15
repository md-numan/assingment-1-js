



// 1


function calculateDifference(a, b) {
    return a - b;
}

     let result = calculateDifference(10, 5);
      console.log(result);





// 2


function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(7));
console.log(isOdd(2));



// 3.


function findMin(arr) {
    return Math.min(...arr);
}

let numbers = [5, 2, 9, 1, 7];
console.log(findMin(numbers));




// 4.


function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);




// 5.


function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

let numbers = [5, 2, 9, 1, 7];
let sortedNumbers = sortArrayDescending(numbers);
console.log(sortedNumbers);




// 6.



function lowercaseFirstLetter(str) {
    if (!str) return str;  // Handle empty string
    return str.charAt(0).toLowerCase() + str.slice(1);
}
let text = "Hello World";
let result = lowercaseFirstLetter(text);
console.log(result);



 // 7.


function countVowels(str){
     let vowels ='aeiouAEIOU';
     return str. split('').filter(char => vowels.includes(char)).length;
}

let text = "Hello World";
let vowelCount = countVowels(text);
console.log(vowelCount);



// 8.


function findAverage(arr){
    if (arr.length === 0) return 0;
    let sum = arr.reduce((acc, num)=> acc + num, 0);
    return sum/arr.length;
}

let number =[10,20,30,40,50];
let average = findAverage(number);
console.log(average);




