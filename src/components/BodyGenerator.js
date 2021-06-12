import React, { Component } from 'react'
import Meme from './Meme'
import MemeForm from './MemeForm'

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
        this.submitHandle = this.submitHandle.bind(this)
    }

    // ---- ComponentDidMount function
    componentDidMount = () => {
        fetch('https://api.imgflip.com/get_memes')
         .then(response => response.json())
         .then(response => {
             const {data} = response
             const {memes} = data
             this.setState({randomImage: memes[3].url, allMemes: memes})
         })
    }

    // ---- Text handle function
    textHandle = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    // ---- Submit handle funcion
    submitHandle = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemes.length)
        console.log(randNum)
        const urlImg = this.state.allMemes[randNum].url
        this.setState({randomImage: urlImg})
    }

    render() {
        return (
            <div className="body-app">
                <div className="m-generator-container">
                    {/* Meme */}
                    <Meme 
                        meme={this.state.randomImage}
                        alt="meme"
                        topText={this.state.topText}
                        bottomText={this.state.bottomText}
                    />

                    {/* Meme Form */}
                    <MemeForm 
                        submitHandle={this.submitHandle}
                        textHandle={this.textHandle}
                        topText={this.state.topText}
                        bottomText={this.state.bottomText}

                    />
                </div>
            </div>
        )
    }
}

export default BodyGenerator