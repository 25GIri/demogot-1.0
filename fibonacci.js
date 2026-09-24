// Another random helper file
function calculateFibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log("Fibonacci(10):", calculateFibonacci(10));
