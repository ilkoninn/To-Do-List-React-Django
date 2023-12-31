import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';


function NotePage(){
    
    let {noteId} = useParams();
    let [note, setNote] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getNote();
    }, [noteId]);

    let getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}`);
        if(noteId !== 'new'){
            let data = await response.json()
            setNote(data)
        }
    }

    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
    }

    let createNote = async () => {
        fetch(`/api/notes/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
        )
        navigate('/')
    }

    let handleSubmit = () => {
        if (noteId !== 'new' && note.body == '') {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== null) {
            createNote()
        }
        navigate('/')
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }
        
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit}/>
                </h3>
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
