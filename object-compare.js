const first2 = {a:1, b:2};
const second2 = {b:2, a:1};

// if(JSON.stringify(first2) === JSON.stringify(second2)){
//     console.log("equal")
// }
// console.log(1)

function compareObject(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}

const isEqual = compareObject(first2, second2);
console.log(isEqual);