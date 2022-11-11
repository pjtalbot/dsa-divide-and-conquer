function findFloor(arr, num) {
    // Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
    let l = 0
    let r = arr.length -1

//     if (low > high) return -1;
//   if (num >= arr[high]) return arr[high];

//   let mid = Math.floor((low + high) / 2)

//   if (arr[mid] === num) return arr[mid];

//   if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
//     return arr[mid - 1];
//   }

//   if (num < arr[mid]) {
//     return findFloor(arr, num, low, mid - 1);
//   }

//   return findFloor(arr, num, mid + 1, high)
    if (num > arr[r]) {
        return arr[r]
    }
    
    while (l <= r && l != r) {
        let middle = Math.floor((l + r) / 2)

        if (arr[middle] === num) {
            console.log[arr[middle]]
            return arr[middle]
        }
        if (arr[middle] < num) {
            l = middle
        }
        if (arr[middle] > num) {
            r = middle
        }
        if ( middle > 0 && arr[middle - 1] < num && arr[middle] > num) {
            console.log(arr[middle-1])
            return arr[middle - 1]
        }
        if (arr[middle + 1] > num && arr[middle < num]) {
            return arr[middle]
        }
    }
    return -1;



  
}

module.exports = findFloor