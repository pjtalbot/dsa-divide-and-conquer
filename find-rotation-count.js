function findRotationCount(arr) {
    let high = arr.length -1
    let low = 0

    if (arr[low] < arr[high]) return 0

    while (high > low) {
        let mid = Math.floor((high - low) / 2)
        
        if (arr[mid] > arr[mid +1]){
            if (arr[mid] < arr[mid - 1]) return arr.length - mid
        }
        if (arr[mid] < arr[high]) {
            high = mid
        }
        if (arr[mid] < arr[low]){
            low = mid
        }
    }
    

  
}

module.exports = findRotationCount