/* function avg(...args){
    let sum = 0;
    for (const item of args){
            sum += item;
    }
    return sum  / args.length;
}
console.log(avg (2, 3, 4, 5)); */

//arrow change 3.5

const avg = (...args) => {
    let sum = 0;
    for (const item of args){
            sum += item;
    }
    return sum  / args.length;
}
setTimeout(() => {
    console.log("This massage will display");
    console.log(avg (2, 3, 4, 5));
}, 1000);

