
import React, { Component } from 'react';
import './HeroMain.css'

const words = [
    {
        "word": "Movies",
        "index": 0
    },
    {
        "word": "TV Sets",
        "index": 1
    },
    {
        "word": "Construction",
        "index": 2
    },
    
]

class HeroMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            keywords : words[0]
        }
    }
    componentDidMount(){
    setInterval(() => {
        
        
        let newIndex = this.state.keywords.index;
        let wordsLength = words.length-1;

        if( this.state.keywords.index !== (wordsLength) ){
            newIndex += 1;
        }else {
            newIndex=0;
        }
        this.setState({
            keywords: words[newIndex]
        })

    }, 3000);

    }
    render(){

        return (
            <div className="main">
                <div className="main-slogan">
                     <h3 className="main-slogan-phrase"> We have over 35 years of experience in foam fabrication.</h3>
                     <h3 className="main-slogan-phrase"> We bring precision, innovation, creativity and economy to your projects.</h3>
                </div>
                <div className="main-logo">
                    <img  src="./img/logoStill.JPG" alt =" Advanced Foam main logo"></img>
        <div className="main-logo-dynamic">{this.state.keywords.word}</div>
                </div>
            </div>
        );
    }
}

export default HeroMain;


