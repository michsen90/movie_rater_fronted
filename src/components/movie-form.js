import React, { useState, useEffect } from "react";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function MovieForm(props){

    const [title, setTitile] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['mr-token']);

    useEffect( () => {
        setTitile(props.movie.title)
        setDescription(props.movie.description)
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(props.movie.id, {title: title, description: description}, token['mr-token'])
        .then(resp => props.updateMovie(resp))
        .catch( error => console.log(error));
    }

    const createClicked = () => {
        API.createMovie({title: title, description: description}, token['mr-token'])
        .then(resp => props.movieCreated(resp))
        .catch( error => console.log(error));
    }

    const isDisabled = title.length === 0 || description ===0;

    return (
        <React.Fragment>
            { props.movie ? (
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input id="title" placeholder="title" type="text" value={title} onChange={evt => setTitile(evt.target.value)}/><br/>
                    <label htmlFor="description">Description</label><br/>
                    <textarea id="description" placeholder="description" type="text" value={description} onChange={evt => setDescription(evt.target.value)}></textarea><br/>
                    { props.movie.id ? 
                        <button onClick={updateClicked} disabled={isDisabled}>Update</button> :
                        <button onClick={createClicked} disabled={isDisabled}>Create</button>
                    }
                    
                </div>
                ) : null }
        </React.Fragment>
    )
}

export default MovieForm;