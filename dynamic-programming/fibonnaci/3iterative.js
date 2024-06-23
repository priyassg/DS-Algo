// Return the nth Fibonnaci number.
//fib(1) = 1; fib(2) = 1

const fibonnaci =(n) => {
    if(n <=2 ) return 1;
    const memo = {};
    memo[1] = 1;
    memo[2] = 1;
    
    for(let i = 3; i<= n; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
}

console.log(fibonnaci(3));
console.log(fibonnaci(6));
console.log(fibonnaci(9));
console.log(fibonnaci(50));

/*
    Time complexity = O(n)
    Space complexity = O(n)
*/

