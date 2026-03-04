//// 20 basic questions

// Q. 1

obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

let summedObj = {}
for (const key in obj){
    summedObj[key] = obj[key].reduce((ac, cv) => ac+cv, 0);
}

console.log(summedObj); 

// Q. 2

lst = ["apple", "banana", "apple", "orange", "banana", "apple"];
obj = lst.reduce((a,c) => ((a[c] = (a[c] || 0)+1), a), {});
console.log(obj);

// Q. 3

obj = { a: "x", b: "y", c: "z" };
new_obj = {};
for (const key in obj){
    new_obj[obj[key]] = key;
}
console.log(new_obj)

// Q. 4

obj = { food: 100, travel: 50, bills: 200, entertainment: 75 }

let maxKey = Object.keys(obj).reduce((max, key) => obj[key] > obj[max] ? key : max);
console.log(maxKey);
