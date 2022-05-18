import { v4 as uuidv4 } from 'uuid'
import solveExample from "@/helpers/calculation/solveExample"

class Example {
  constructor(example) {
    this.id = uuidv4()
    this.example = example
  }

  calculate() {
    return solveExample(this.example).toString()
  }
}

export default Example
