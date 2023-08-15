import React, { useContext, useState } from 'react';
import Updatebox from './Updatebox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteContext from '../Context/noteContext';

const Note = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const [popup, setpopup] = useState(false);

    const updateState = (val)=>{
        setpopup(val);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteNote(props.note._id);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        setpopup(true);
    }

    return (
        <>
            <div className='note'>
                <h3>{props.note.title}</h3>
                <p>{props.note.description}</p>
                <p id='timestamp'>{props.note.date}</p>
                <div className="functions">
                    <button onClick={handleUpdate}><EditIcon /></button>
                    <button onClick={handleDelete}><DeleteIcon /></button>
                </div>
            </div>
            {popup &&
                <div className="popup">
                    <Updatebox note={props.note} onUpdate={updateState}/>
                </div>
            }
        </>
    )
}

export default Note