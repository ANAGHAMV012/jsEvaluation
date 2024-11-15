function deepClone() {
    const original ={
        name: "anagha",
        details:{
            age: 21,
            place: "India"
        },
        arr: [4,7,2,5]
    }
    const cloned=JSON.parse(JSON.stringify(original))
    cloned.name="jiya"
    cloned.details.age=30
    cloned.arr=[9,5,2]
    console.log("original:", original)
    console.log("cloned:", cloned)
}
console.log(deepClone())