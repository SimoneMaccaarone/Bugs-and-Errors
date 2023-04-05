// /// esercizio 1

// function multiplyBy2Maybe(selectedNumber){

//     const randomNumber = Math.random()

//     if(randomNumber <= 0.2){
//         return selectedNumber * 2;
//     }else{
//         throw new MultiplicatorUnitFailed();
//     }
// }

// try {
//     const result = multiplyBy2Maybe(5);
//     console.log(result);
// } catch (error) {
//     console.log(error.message);

// }

// function reliableMultiplyBy2(selectedNumber){
//     try {
//         const result = multiplyBy2Maybe(selectedNumber);
//         return result;
//     } catch (error) {
//         console.log(error.message);reliableMultiplyBy2(selectedNumber0)

//     }
// }

// console.log(reliableMultiplyBy2(5));

// esercizi 2

const box1 = new Box();

function withBoxUnlocked(box, func) {
    box.unlock();
    try {
        func(box);
    } catch (error) {
        throw error;
    } finally {
        box.lock();
    }
}

withBoxUnlocked(box1, (box) => {
    box.content.push('gold piece');
});

console.log(box1);


try {
    withBoxUnlocked(box1, (box) => {
        throw new Error('Pirates on the horizon! Abort!');
    });
} catch (e) {
    console.log('erro raised:' + e);

}