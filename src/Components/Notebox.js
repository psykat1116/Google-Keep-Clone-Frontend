import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Note from './Note'
import NoteContext from '../Context/noteContext';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, fetchNotes } = context;
  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchNotes();
    }
    else {
      Navigate("/login");
    }
    //eslint-disable-next-line
  }, [])

  return (
    <div className="box">
      <h2>My Notes</h2>
      <div className='right'>
        {notes.length > 0 && notes.map((note) => {
          return <Note key={note._id} note={note} />;
        })}
      </div>
    </div>
  )
}

export default Notes