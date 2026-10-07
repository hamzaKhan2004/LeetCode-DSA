var isHappy = function(n){
    // Normal Method
    // const seen = new Set();
    // while(n !== 1){
    //     if(seen.has(n)){
    //         return false;
    //     }
    //     seen.add(n);
    //     let sum = 0;
    //     while(n > 0){
    //         let rem = n % 10;
    //         sum += rem **2;
    //         n = Math.floor(n / 10);
    //     }
    //     n = sum;
    // }
    // return true;

    // Fast And Slow Pointer

    let digit = (number) =>{
        let sum = 0;
        while(number > 0){
            let rem = number % 10;
            sum += rem*rem;
            number = Math.floor(number/10)
        }
        return sum;
    }

    let slow = n;
    let fast = n;
    while(fast != 1){
        slow = digit(slow);
        fast = digit(digit(fast));
        if(slow == fast && slow != 1){
            return false;
        }
    }
    return true;
}