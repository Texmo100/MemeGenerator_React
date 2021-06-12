import React, { Component } from 'react'

class BodyGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: ''
        }

        this.textHandle = this.textHandle.bind(this)
    }

    textHandle = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="body-app">
                <div className="m-generator-container">
                    {/* Meme View Image */}
                    <image className="meme-view" src='../images/image-01.jpg' alt="meme"/>

                    {/* Meme Form */}
                    <div className="meme-form">
                        <div className="input-container">
                            <label>Top Text</label>
                            <input
                                type="text"
                                name="topText"
                                value={this.topText}
                                placeholder="top text"
                                onChange={this.textHandle}
                            />
                        </div>

                        <div className="input-container">
                            <label>Top Text</label>
                            <input
                                type="text"
                                name="bottomText"
                                value={this.bottomText}
                                placeholder="bottom text"
                                onChange={this.textHandle}
                            />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default BodyGenerator