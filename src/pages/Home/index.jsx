import React from 'react'
import {Home, ControlPanel} from './components'
import Display from "@/components/Display"
import KeyPad from "@/containers/KeyPad"
import History from "@/containers/History"
import useCalculation from "@/pages/Home/useCalculation"

export default () => {
  const {example, setExample, history, updateHistory, onPressKey} = useCalculation()

  return (
    <Home>
      <ControlPanel>
        <Display text={example} />
        <KeyPad onPressKey={onPressKey} />
      </ControlPanel>
      <History
        history={history}
        setExample={setExample}
        updateHistory={updateHistory}
      />
    </Home>
  )
}
