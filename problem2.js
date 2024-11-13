function uniqueValues(arr){
    arr = [3,3,5,5,6]
    const newArray=[...new Set(arr)]
    return newArray
}
console.log(uniqueValues())