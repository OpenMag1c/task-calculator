import React from 'react'
import {Home, ControlPanel} from './components'
import Display from "@/containers/Display"
import KeyBoard from "@/containers/KeyBoard"
import History from "@/containers/History"
import useCalculation from "@/pages/Home/useCalculation"

export default () => {
  const {example, setExample, history, onPressKey} = useCalculation()

  return (
    <Home>
      <ControlPanel>
        <Display text={example} />
        <KeyBoard onPressKey={onPressKey} />
      </ControlPanel>
      <History history={history} setExample={setExample}/>
    </Home>
  )
}
