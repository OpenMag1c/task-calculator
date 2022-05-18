import React from 'react'

import {ScrollDiv, NoteButton, Title} from './components'

export default React.memo(({ history, setExample }) => {
  const onNoteClick = note => {
    setExample(note.example)
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
    </ScrollDiv>
  )
})
