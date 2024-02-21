let list=[];
for (let i=0; i < 100; i++) {
    list.push(i)
}

let target = Math.floor(Math.random() * (99 - 0 + 1) + 0);
let h = list.length - 1;
let m = Math.floor((list.length - 1) / 2);
let l = 0;

while (true) {
    m = l + Math.floor((h - l) / 2);
    if (m > target) {
        h = m;
    } else if (m < target) {
        l = m;
    } else {
        break;
    }
}
