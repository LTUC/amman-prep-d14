// Calculate factorial with loop (without recursion)
function fact(x) {
    if (x === 0 || x === 1) {
        return 1;
    }
    var result = x;

    while (x > 1) {
        result = result * (n - 1);
        n = n - 1;
    }
    return result;
}


// program to find the factorial of a number
function factorial(x) {
    // if number is 0
    if (x === 0 || x === 1) {
        return 1;
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}