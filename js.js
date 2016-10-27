/**
 * Created by oksanka on 22.10.16.
 */
var arr0= [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
    arr1 = [-1,-8,-2],
    arr2 = [1,7,3],
    arr3 = [1,undefined,3,5,-3],
    arr4 = [1,NaN,3,5,-3];

function arf(arr) {
    var sum = 0,
        min = arr[0],
        max = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && isNaN(arr[i]) != true) {
            sum += arr[i];
        }


        if (min > arr[i + 1]) {
            min = arr[i + 1];
        }

        if (max < arr[i + 1]) {
            max = arr[i + 1];
        }
    }

    return a = {'suma' : sum,
                'min' : min,
                'max' : max}

}

console.log(arf(arr0));
console.log(arf(arr1));
console.log(arf(arr2));
console.log(arf(arr3));
console.log(arf(arr4));




