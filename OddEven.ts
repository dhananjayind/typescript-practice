function  oddEvenCheck(num: number): boolean {
    if (num % 2 === 0) {
        console.log(`${num} is an even number.`);
        return true;
    }else {
        console.log(`${num} is an odd number.`);
        return false;
    }
}

console.log(oddEvenCheck(4)); // true
console.log(oddEvenCheck(7)); // false

