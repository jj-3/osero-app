function add1(v1: number, v2: number): number {
   return v1 + v2
}

const result1 = add1(1, 2)
console.log(result1)

const add2 = (v1: number, v2: number): number => {
  return v1 + v2
}

console.log(add2)

const result2 = add2(1, 2)
console.log(result2)