import React, { Component } from 'react'

class BodyGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: '',
            allMemes: []
        }

        this.textHandle = this.textHandle.bind(this)
    }

    componentDidMount = () => {
        fetch('https://api.imgflip.com/get_memes')
         .then(response => response.json())
         .then(response => {
             const {data} = response
             const {memes} = data
             this.setState({randomImage: memes[3].url, allMemes: memes})
         })
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
                    <img className="meme-view" src={this.state.randomImage} alt="meme"/>

                    {/* Meme Form */}
                    <form className="meme-form">
                        <div className="input-container">
                            <label>Top Text</label>
                            <input
                                type="text"
                                name="topText"
                                value={this.state.topText}
                                placeholder="top text"
                                onChange={this.textHandle}
                            />
                        </div>

                        <div className="input-container">
                            <label>Top Text</label>
                            <input
                                type="text"
                                name="bottomText"
                                value={this.state.bottomText}
                                placeholder="bottom text"
                                onChange={this.textHandle}
                            />
                        </div>

                        <button className="submit-button">Gen</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default BodyGenerator