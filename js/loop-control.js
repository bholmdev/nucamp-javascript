for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
// stops at 4 from 0 so 5 increments
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// continues to 4 from 0 and skips 5 so 9 increments
/*
0
1
2
3
4
6
7
8
9
*/