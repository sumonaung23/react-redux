import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

import React from 'react'
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
    if (canSave) {
        try {
            setAddRequestStatus('pending');
            dispatch(addNewPost({ title, body: content, userId })).unwrap();

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
            /* const actionResult = await dispatch(addNewPost({ title, body: content, userId }));

            if (addNewPost.fulfilled.match(actionResult)) {
                setTitle('');
                setContent('');
                setUserId('');
            } else {
                console.error('Failed to save the post');
            } */
        } catch (err) {
            console.error('An error occurred:', err);
        } finally {
            setAddRequestStatus('idle');
        }
    }
};


    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className="addPost">
            <h2>Add a New Post</h2>
            <form className="addPostForm">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                    />

                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=''></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    />

                <button type="button" 
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                        className="btn"
                    >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm