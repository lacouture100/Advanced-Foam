
import React, { Component } from 'react';
import './ConstructionHero.css'
import data from '../../data/main_data'


class StudioHero extends Component{
    constructor(props){
        super(props);
        this.state = {
            keywords :  data.Construction.words[0]
        }
    }
    componentDidMount(){
    setInterval(() => {
        
        
        let newIndex = this.state.keywords.index;
        let wordsLength = data.Construction.words.length-1;

        if( this.state.keywords.index !== (wordsLength) ){
            newIndex += 1;
        }else {
            newIndex=0;
        }
        this.setState({
            keywords: data.Construction.words[newIndex]
        })

    }, 2000);

    }
    render(){

        return (
            <div className="main">
                <div className="main-slogan">
                     <h3 className="main-slogan-phrase"> We have over 35 years of experience making <div className="main-logo-dynamic">{this.state.keywords.word}</div> for architecture and construction projects.</h3>
                </div>
                
            </div>
        );
    }
}

export default StudioHero;



