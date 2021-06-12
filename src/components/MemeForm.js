import React from 'react'


const MemeForm = (props) => {
    return (
        <form className="meme-form" onSubmit={props.submitHandle}>
            <h1>Meme generator</h1>
            <div className="input-container">
                <label>Top Text</label>
                <input
                    type="text"
                    name="topText"
                    value={props.topText}
                    placeholder="top text"
                    onChange={props.textHandle}
                />
            </div>

            <div className="input-container">
                <label>Bottom Text</label>
                <input
                    type="text"
                    name="bottomText"
                    value={props.bottomText}
                    placeholder="bottom text"
                    onChange={props.textHandle}
                />
            </div>

            <button className="submit-button">Gen</button>

        </form>
    )
}

export default MemeForm