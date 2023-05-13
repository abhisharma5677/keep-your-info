import React, { useState } from 'react'

const InputArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;

        setNote(preNote => {
            return {
                ...preNote,
                [name]: value
            }
        });
    }

    function handleClick(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote(() => {
            return {
                title:"",
                content:""
            }
        })
    }

    return (
        <div className='formContainer'>
            <form>
                <input name='title' placeholder='Title....' value={note.title} onChange={handleChange} />
                <textarea name='content' placeholder='Write the title content...' rows="3" value={note.content} onChange={handleChange} />
                <button type='Submit' onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default InputArea
