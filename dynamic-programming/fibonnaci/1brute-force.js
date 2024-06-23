// Return the nth Fibonnaci number.
//fib(1) = 1; fib(2) = 1

const fibonnaci =(n) => {
    if(n <= 2){
        return 1;
    }

    return fibonnaci(n-1) + fibonnaci(n-2);
}
console.log(fibonnaci(3));
console.log(fibonnaci(6));
console.log(fibonnaci(9));
console.log(fibonnaci(50));

/*
    Time complexity = O(2^n)
    Space complexity = O(n)
*/

