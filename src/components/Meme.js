import React from 'react'

const Meme = (props) => {
    return (
        <div className="meme">
            <img className="meme-view" src={props.meme} alt="meme" />
            <p className="top">{props.topText}</p>
            <p className="bottom">{props.bottomText}</p>
        </div>
    )
}

export default Meme