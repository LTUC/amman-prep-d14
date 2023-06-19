// Factorial
// 4! = 4*3! => 4* 6 = 24
// 3! = 3*2! => 3*2 = 6
// 2! = 2* 1 => 2
function fact(n) {
    if (n == 1) return 1

    else {
        return n * fact(n - 1)
    }
}
fact(3)

// Steps to solve any problem by using recursion:

//1-  when should the function stop (base case)
//2-  how can we break down big problem into similar smaller problems


// find the summation from a givin number to 1
// way 1: recursion 
function sum(num) {
    //  base case
    if (num == 1) return 1
    else {
        return num + sum(num - 1)
    }
}
console.log(sum(5))

// way2: loop
function sumLoop(num){
    
var sum = 0;

for (let i = num; i >= 1; i--) {
    sum += i
    
}
return sum

}


console.log('sumLoop',sumLoop(5))

// Fibonacci Sequence 
// 0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	...
// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	...

function febo(index){
    //  base case
    if (index <= 1) return index
    else{
        return febo(index-1) + febo(index -2)
    }
}
console.log('febo', febo(4))
