// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let ctr = 0;
const ctrFn = () =>{
    ctr ++;
    console.log(ctr);

    setTimeout(ctrFn, 1000);
}

ctrFn();