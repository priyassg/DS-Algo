// Return the nth Fibonnaci number.
//fib(1) = 1; fib(2) = 1

const fibonnaci =(n, memo = {}) => {
    if(memo[n] !== undefined){
        return memo[n];
    }
    if(n <= 2){
        return 1;
    }

    memo[n] =  fibonnaci(n-1, memo) + fibonnaci(n-2, memo);
    return memo[n];
}

console.log(fibonnaci(3));
console.log(fibonnaci(6));
console.log(fibonnaci(9));
console.log(fibonnaci(50));

/*
    Time complexity = O(n)
    Space complexity = O(n)
*/

