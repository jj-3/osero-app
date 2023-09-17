import fs from 'fs'
import util from 'util'

const promisifyFile = util.promisify(fs.readFile)

async function main() {
  const data = await promisifyFile('package.json')
  const fileContent = data.toString()
  console.log(fileContent)
}

// function main() {
//   const readFilePromise = promisifyFile('package.json')

//   //約束が果たされたら実行するthen
//   readFilePromise.then((data) => {
//     const fileContent = data.toString()
//     console.log(fileContent)
//   })
// }

main()

//function main() {
//   let fileContent: string = 'not loaded'

//   fs.readFile('package.json', (err, data) => {
//     fileContent = data.toString()
//     console.log(fileContent)
//   })

//   console.log(fileContent)
// }