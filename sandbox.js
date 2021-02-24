

// for (let i = 0 ; i < pratama.length ; i++) {
//     if((i / 8) == 1) {
//         console.log( i ,"dapatdibagi 8")
//     } else {
//         console.log(i , 'tidak dapat dibagi 8')
//     }
// }


// console.log(8/8)


let pratama = "afistapratama"

let pictData = []
let pictPage = []

for (let i = 1 ; i <= pratama.length ; i++) {
    // pictPage.push(action.payload[i])
    pictData.push(pratama[i - 1])

    if((i / 8) == 1 || i == pratama.length) {
      pictPage.push(pictData)
      pictData = []
    }
}

console.log(pictPage[0], pictPage[1])