import React from 'react'

import {Panel} from './components'
import {ControlButton} from "@/components/ControlButton"
import {CONTROL_BUTTONS} from "@/constants/buttons"

export default React.memo(({onPressKey}) => {
  return (
    <Panel>
      {CONTROL_BUTTONS.map(button =>
        <ControlButton
          key={button}
          type="button"
          data-key={button}
          onClick={onPressKey}
        >
          {button}
        </ControlButton>)}
    </Panel>
  )
})
