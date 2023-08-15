import React, { useContext, useState } from 'react'
import NoteContext from '../Context/noteContext'

const Noteform = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "" });

  function handleClick(e) {
    e.preventDefault();
    addNote(note.title, note.description);
    setNote({
      title: "",
      description: ""
    })
  }

  function handleChange(e) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  return (
    <div className='left'>
      <form>
        <h2>Add a new note</h2>
        <div id="inputtitle">
          <label htmlFor='#title'>Title</label>
          <input id='title' name='title' type='text' placeholder='Title' autoFocus onChange={handleChange} value={note.title} />
          <small>{note.title.length >= 3 ? "" : "*title should be of atleast 3 characters"}</small>
        </div>
        <div id="inputdescription">
          <label htmlFor='#description'>Description</label>
          <textarea id='description' name='description' type='text' placeholder='Description' onChange={handleChange} value={note.description} />
          <small>{note.description.length >= 5 ? "" : "*description should be of atleast 5 characters"}</small>
        </div>
        <button onClick={handleClick} type='submit' disabled={note.title.length < 3 || note.description.length < 5}>Add Note</button>
      </form>
    </div>
  )
}

export default Noteform;