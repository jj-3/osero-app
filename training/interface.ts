const Stone = 0
const Paper = 1
const Scissors = 2

interface HandGenarator {
  generate(): number
}

class RandomHandGenerator implements HandGenarator {
   generate(): number {
     return Math.floor(Math.random() * 3)
   }

   gererateArray(): number[] {
    return []
   }
}

class Janken {
    play(handGenarato: HandGenarator) {
      const handGenarator = new RandomHandGenerator()

      const computerHand = handGenarator.generate()

      console.log(`computerHand = ${computerHand}`)

      //勝敗判定などがつづく・・・
    }
}

const janken = new Janken()

const generator = new RandomHandGenerator()
janken.play(generator)

class StoneHandGenerator  implements HandGenarator {
   generate(): number {
    return Stone
   }
}

const generator2 = new StoneHandGenerator()
janken.play(generator2)