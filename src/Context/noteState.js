import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const BASE_URL = "https://googlekeepbackend.onrender.com";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    const [login, setLogin] = useState(localStorage.getItem('token') !== null);

    const fetchNotes = async () => {
        let url = `${BASE_URL}/api/note/fetchnote`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const data = await response.json();
        setNotes(data);
    }

    const addNote = async (title, description) => {
        if (title === "") {
            title = "Untitled";
        }
        else if (description === "") {
            description = "";
        }
        let url = `${BASE_URL}/api/note/addnote`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description })
        })
        const data = await response.json();
        setNotes(notes.concat(data));
    }

    const deleteNote = async (id) => {
        let url = `${BASE_URL}/api/note/deletenote/${id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        let newNote = notes.filter((note) => {
            return note._id !== id;
        })
        setNotes(newNote);
    }

    const updateNote = async (id, title, description) => {
        let url = `${BASE_URL}/api/note/updatenote/${id}`
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description })
        })
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let i = 0; i < newNotes.length; i++) {
            if (newNotes[i]._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                break;
            }
        }
        setNotes(newNotes);
    }

    const getUserData = async (password) => {
        let url = `${BASE_URL}/api/auth/getuser`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({ password })
        })
        const json = await response.json();
        return json.isAuth;
    }

    return (
        <NoteContext.Provider value={{ notes, login, setLogin, getUserData, addNote, updateNote, deleteNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;