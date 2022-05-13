import React, {useCallback, useState} from 'react'

import {Home, ControlPanel} from './components'
import Display from "@/containers/Display"
import KeyBoard from "@/containers/KeyBoard"
import History from "@/containers/History"

export default () => {
  const [example, setExample] = useState("")

  const pressKey = useCallback(event => {
    event.persist()
    console.log(event.target.dataset.key)
    setExample(prevState => prevState + event.target.dataset.key)
  }, [])
  return (
    <Home>
      <ControlPanel>
        <Display text={example}/>
        <KeyBoard onPressKey={pressKey}/>
      </ControlPanel>
      <History />
    </Home>
  )
}
