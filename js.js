let x = [-3, 5, 1, 3, 2, 10];
// x.reverse();
// document.write(x);

let first = 0;
let last = x.length - 1;
while (first<last){
    let a = x[first];
    x[first] = x[last];
    x[last] = a;
    first++;
    last--;
}
document.write(x);

