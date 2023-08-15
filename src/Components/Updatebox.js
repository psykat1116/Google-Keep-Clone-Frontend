import React, { useState, useContext } from 'react'
import NoteContext from '../Context/noteContext';

const Updatebox = (props) => {
    const context = useContext(NoteContext)
    const { updateNote } = context;
    const [note, setNote] = useState({ title: props.note.title, description: props.note.description });

    function handleClick(e) {
        e.preventDefault();
        console.log(note);
        updateNote(props.note._id, note.title, note.description);
        props.onUpdate(false);
    }

    function handleClose(e) {
        e.preventDefault();
        props.onUpdate(false);
    }

    function handleChange(e) {
        console.log(e.target.value);
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            <form>
                <h2>Update note</h2>
                <div id="inputtitle">
                    <label htmlFor='#title'>Title</label>
                    <input id='title' name='title' type='text' placeholder='Title' autoFocus value={note.title} onChange={handleChange} />
                </div>
                <div id="inputdescription">
                    <label htmlFor='#description'>Description</label>
                    <textarea id='description' name='description' type='text' placeholder='Description' value={note.description} onChange={handleChange} />
                </div>
                <button type='submit' onClick={handleClick}>Update Note</button>
                <button type='submit' onClick={handleClose}>Cancel</button>
            </form>
        </>
    )
}

export default Updatebox