function add(v1: number, v2: number) {
   return v1 + v2
}

function calculate(
  v1: number, 
  v2: number, 
  callback: (a: number, b: number) => number
  ): number {
    return callback(v1, v2)
}

const addResult = calculate(1, 2, add)
console.log(addResult)


//時間差で呼び出す関数
// function hello() {
//   console.log('hello')
// }

// setTimeout(hello, 5000)

setTimeout(() => {
  console.log('hello')
}, 5000)