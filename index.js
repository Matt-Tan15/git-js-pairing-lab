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

console.log(multiply(5, 3))
