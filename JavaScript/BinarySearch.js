let list=[];
for (let i=0; i < 100; i++) {
    list.push(i)
}

let l = 0;
let h = list.length - 1;
let m = l + Math.floor((h - l) / 2);
let target = Math.floor(Math.random() * (99 - 0 + 1) + 0);

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
