// // 'use strict'    // mod restrittiva. can applicare a tutto il file o a singole funzioni
// //           ▬▬▬▬▬▬▬▬▬▬▬▬ ParseIntError ▬▬▬▬▬▬▬▬▬▬▬▬ 
// console.log('▬▬▬▬▬▬▬▬▬▬▬▬ ParseIntError ▬▬▬▬▬▬▬▬▬▬▬▬')

// function parseIntWithError(selectedString) {
//     const result = parseInt(selectedString);
//     if (isNaN(result)) {
//         throw new Error('sei un cretino, non hau messo un numero!!!!')

//     } else {
//         return result
//     }
// }


// try {
//     const numero = parseIntWithError('caffe    ')
//     console.log(numero)
// } catch (error) {
//     console.log(error.message)
//     console.log('caro utente, forse è colpa mia,ma qualcosa non è andato a buon fine. potresti reinserire il numero? grazie stronzo')

// }

// //           ▬▬▬▬▬▬▬▬▬▬▬▬ IndexOfError ▬▬▬▬▬▬▬▬▬▬▬▬ 
// console.log('▬▬▬▬▬▬▬▬▬▬▬▬ IndexOfError ▬▬▬▬▬▬▬▬▬▬▬▬')
// function indexOfWhithError(array, element) {
//     if (array.length === 0) {
//         throw new EmptyArrayError('che cazzo combini? mi hai passato un array vuoto!')
//     } else {
//         const index = array.indexOf(element);
//         if (index === -1) {
//             throw new ElementNotFoundError(' non ho trovato un belin di niente!!')
//         } else {
//             return index;

//         }
//     }
// }

// try {
//     const index = indexOfWhithError(['pippo', 'pluto', 'paperino'], pluto)
//     console.log(index);
// } catch (error) {
//     if (error instanceof EmptyArrayError) {
//         console.log('caro utente esplodi ti prego perche l array è vuoto boia cane')
//     } else if (error instanceof ElementNotFoundError) {
//         console.log('ho cercato in lungo e in largo ma piuìdfèoiahfahdhua')
//     } else {
//         console.log('qualcosa si è porcnonadnakndokandonkaèodnaodnaodnbapijubfaòiuhfòauhfòahfòkauhfòahfòkhaòfkuhòau')
//     }
// }

// function isElementInArray(array,element) {
//     try {
//         indexOfWhithError(array,element);
//         return true
//     } catch (error) {
//         if (error instanceof ElementNotFoundError) {
//             return false;
//         }else{
//             throw error
//         }
//     }
// }

// try {
//     const isInside = isElementInArray(['qui','quo','qua'],'quoi')
// } catch (error) {
//     console.log(error.message)
    
// }

// class multiplicator



// // ERRORI di tipo generico che passano solo messaggi
// // console.log(indexOfError(['simone','jing'],'davide'))
// // console.log(indexOfError(['simone','jing'],'jing'))
// // console.log(indexOfError([],'davide'))