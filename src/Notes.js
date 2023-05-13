import React from 'react'

const Notes = (props) => {

  function clickEvent(){
    props.onDelete(props.id);
  }

  return (
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={clickEvent} className='DeleteButton'>DELETE</button>
    </div>
  )
}

export default Notes
