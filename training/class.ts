class Fraction {
  private _numerator: number
  private _denominator: number

  constructor(numerator: number, denominator: number) {
    this._numerator = numerator
    this._denominator = denominator
  }

  add(other: Fraction): Fraction {
      const resultNumerator = this._numerator * other._denominator + 
        this._denominator * other._numerator
      const resultDenominator = this._denominator * other._denominator

      return new Fraction(resultNumerator, resultDenominator)
  }

  toString(): string {
      return `${this._numerator}/${this._denominator}`
  }

  //クラスのフィールドの変更を防ぎ、内容を読み込むためのゲッター
  get numerator() {
     return this._numerator
  }
  get denominator() {
     return this._denominator
  }
}

const f1 = new Fraction(1, 2)
console.log(f1.numerator)
console.log(f1.denominator)


console.log(f1.numerator)

const f2 = new Fraction(1, 3)
console.log(f2.toString())

const result = f1.add(f2)
console.log(result.toString())



//省略記法
class Demo {
  constructor(private _fuck: number, private _kill: number) {}

  get fuck(){
     return this._fuck
  }
  get kill(){
     return this._kill
  }
}