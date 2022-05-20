import React from 'react'

import {ScrollDiv, HistoryButton, Title} from './components'
import {CLEAR_ALL, HISTORY} from "@/constants/names"

export default React.memo(({ history, setExample, updateHistory }) => {
  const onNoteClick = note => {
    setExample(note.example)
  }
  const clearHistory = () => {
    updateHistory([])
  }

  return (
    <ScrollDiv>
      <Title>{HISTORY}</Title>
      {history.map(note =>
        <HistoryButton
          type="button"
          key={note.id}
          onClick={() => onNoteClick(note)}
        >
          {note.example}
        </HistoryButton>,
      )}
      {history.length > 0 &&
        <HistoryButton
        type="button"
        onClick={clearHistory}>
          {CLEAR_ALL}
        </HistoryButton>}
    </ScrollDiv>
  )
})
