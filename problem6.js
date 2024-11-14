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









Typing     : [43wpm][80%]
Focus      : [4hrs 42min][1427hrs 2min]
CT         : [02hr 59min][1295hrs 7min]
ACT        : [20min][1040hrs 61min]
HTML       : [00][18956]
CSS        : [00][14197]
JS	       : [03][10217]
Json       : [00][1897]
sql        : [00][70]
TS         : [00][258]
Total      : [03][67973]
days       : #144