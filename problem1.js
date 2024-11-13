// function isPalindrome(str){
//     for (i=0; i<=str.length; i++){
//         if (str[i] == str[length-1-i]){
//             return true
//         }
//     }
//     return false
// }
// console.log(isPalindrome("malayalam"))


// function isPalindrome(str){
//     for(let i=0; i<=str.length; i++){
//         for(let j=-1; j<=str.length; j--){
//             if(str[i]=str[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(isPalindrome("malayalam"))

// program to check if the string is palindrome or not

function isPalindrome(str) {
    str = str.toLowerCase()
    str = str.replace(/ /, "")
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(isPalindrome("M ala,yal.am"));