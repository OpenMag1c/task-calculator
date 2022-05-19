import React from 'react'

import {ScrollDiv, NoteButton, Title} from './components'

export default React.memo(({ history, setExample, setHistory }) => {
  const onNoteClick = note => {
    setExample(note.example)
  }
  const clearHistory = () => {
    setHistory([])
  }

  return (
    <ScrollDiv>
      <Title>History</Title>
      {history.map(note =>
        <NoteButton
          type="button"
          key={note.id}
          onClick={() => onNoteClick(note)}
        >
          {note.example}
        </NoteButton>,
      )}
      {history.length > 0 &&
        <NoteButton
        type="button"
        onClick={clearHistory}>
          Clear all
        </NoteButton>}
    </ScrollDiv>
  )
})
