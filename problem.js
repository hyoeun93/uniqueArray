/*
uniqueArray
takes an array and gives back an array where all the items are unique
*/

let array = [1, 2, 2, 3];

function uniqueArray(arr) {
    let seen = {};
    let out = [];
    for(let i = 0; i < arr.elngth; i++) {
        let el = a[i];

        if(!(el in seen)) {
            seen[el] = true;
            out.push(el);
        }
    }
    return out;
}

console.log(
    uniqueArray(array)
);