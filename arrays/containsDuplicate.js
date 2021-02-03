// let input = [1,2,3,4,5];
let input = ["tet", "tut", "tt"];
let arrayItems = {};

function containsDuplicate(input){
    let isDup = false;

    for(var i=0; i<input.length;i++){
        let item = input[i];

        if(item in arrayItems){
            isDup = true;
            break;
        }
        arrayItems[item] = item;
    }

    return isDup;
}

console.log(containsDuplicate(input));