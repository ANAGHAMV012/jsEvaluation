function counter(){
    let countervalue=1
    return{
        increment(){
            countervalue++
            return countervalue
        },
        decrement(){
            countervalue--
            return countervalue;
        }
    }
}
const myCounter = counter()
console.log(myCounter.increment())
console.log(myCounter.decrement())