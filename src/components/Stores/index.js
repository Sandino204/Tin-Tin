import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

function Stores({storyimg, userId, userName}){

    const history =  useHistory()


    function handleShowStory(){
        history.push(`/story/${userId}`)
    }

    return(
        <div className="storyT ml-2" onClick={() => handleShowStory()}>
            <img src={storyimg} alt={userName} className="rounded-circle"></img>
            <p>{userName}</p>
        </div>
    )
}

export default Stores