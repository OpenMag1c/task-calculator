import {useCallback, useState} from "react"
import Example from "@/helpers/example"
import updateLine from "@/helpers/updateLine"

const useCalculation = () => {
  const [example, setExample] = useState('')
  const [history, setHistory] = useState([])

  const onPressKey = useCallback(event => {
    event.persist()
    const value = event.target.dataset.key
    if (value === '=') {
      const command = new Example(example)
      const result = command.calculate()
      if (isFinite(result)) {
        setExample(result.toString())
        setHistory([...history, command])
      } else {
        alert(`Smth is wrong, You've got ${result}`)
        setExample('')
      }
    } else {
      setExample(updateLine(example, value))
    }
  }, [example, history])

  return {example, setExample, history, setHistory, onPressKey}
}

export default useCalculation
