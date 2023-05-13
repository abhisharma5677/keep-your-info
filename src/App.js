import React, { useState , useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import InputArea from './InputArea'


//TO GET THE DATA FROM THE LOCAL STORAGE...
const getLocalStorageData = () => {
  const List = localStorage.getItem("Keeper");

  if(List){
    return JSON.parse(localStorage.getItem("Keeper"));
  }
  else{
    return [];
  }
}


const App = () => {
  const [noteArray, setNoteArray] = useState(getLocalStorageData);


  //To set data into the local storage...
  useEffect(() => {
    localStorage.setItem("Keeper" , JSON.stringify(noteArray))
  }, [noteArray] );


  function addNote(newNote) {
    setNoteArray(preValue => {
      return [...preValue, newNote]
    });
  }

  function deleteContent(id) {
    setNoteArray(preValue => {
      return preValue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <InputArea onAdd={addNote} />

      <div className='Container'>
        {noteArray.map((detail, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={detail.title}
              content={detail.content}
              onDelete={deleteContent}
            />
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default App
