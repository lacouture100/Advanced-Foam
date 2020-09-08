
import React, { Component } from 'react';
import '../styles/MainHero.css'

const words = [
    {
        "word": "MOVIES",
        "index": 0
    },
    {
        "word": "TV SETS",
        "index": 1
    },
    {
        "word": "ARCHITECTURE",
        "index": 2
    },
    
]

class MainHero extends Component{
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
            <div className="main-hero">
                <div className="main-slogan">
                     <h3 className="main-slogan-phrase"> We have over 35 years of experience in foam fabrication.</h3>
                     <h3 className="main-slogan-phrase"> We bring precision, innovation, creativity and economy to your projects.</h3>
                </div>
                <div className="main-logo">
                    <img  src="/img/ui/onlyLogo.gif" 
                          alt =" Advanced Foam main logo"
                          className="main-logo-img"></img>
        <div className="main-logo-dynamic">{this.state.keywords.word}</div>
                </div>
            </div>
        );
    }
}

export default MainHero;


