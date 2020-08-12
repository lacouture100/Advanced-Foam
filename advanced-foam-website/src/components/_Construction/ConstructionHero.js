
import React, { Component } from 'react';
import './ConstructionHero.css'

const words = [
    {
        "word": "MOVIE SETS",
        "index": 0
    },
    {
        "word": "TV SETS",
        "index": 1
    },
    {
        "word": "ARCHITECTURAL DECORATIONS",
        "index": 2
    },
    
]

class StudioHero extends Component{
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

    }, 2000);

    }
    render(){

        return (
            <div className="main">
                <div className="main-slogan">
                     <h3 className="main-slogan-phrase"> We have over 35 years of experience making <div className="main-logo-dynamic">{this.state.keywords.word}</div> for movie and TV productions.</h3>
                </div>
                
            </div>
        );
    }
}

export default StudioHero;


