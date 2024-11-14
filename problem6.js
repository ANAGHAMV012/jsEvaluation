function safeParse(jsonString){
    try{
        return JSON.parse(jsonString)
    }
    catch (error){
        return {error: "Invalid"}
    }
}
const valid ='{"name": "anagha", "age":30}'
console.log(safeParse(valid))
const invalid ='{name: "anagha", age:30}'
console.log(safeParse(invalid))