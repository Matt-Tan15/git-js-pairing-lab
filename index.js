//Code your solutions in this file
//1
function fiveToOneHundred() {
    for(let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

//2
function multiplesOfThree() {
    for(let i = 1; i<=100; i++){
        if(i % 3 == 0) {
            console.log(i)
        }
    }
}

//3
const multiplesOfThreeOrFive = () => {
    for(let i = 1; i < 101; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

//4
function untilNum(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}

//5
const multiply = (num1, num2) => {
    return num1 * num2;
};

//6
const add = (num1,num2) => {
   let sum = num1 + num2;
   if(num1 === num2) {
    return sum * 3   
   }
   else return sum
}

//7
function isNegative(num) {
    if (num < 0) {
    return true;
    } else 
     return false;
    } 

//8
const triangleArea = (base, height) => {
    return (base*height)/2
}

//9
const betweenTwentyAndForty = (num) => {
    if(num >= 20 && num <= 100){
        return true
    }
    else return false
}

//10
function largest(a, b, c) {
    if (a > b && c < a) {
        return a
    }
    else if (a < b && c < b) {
        return b
    }
    else return c
}