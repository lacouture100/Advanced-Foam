
import React, { Component } from 'react';
import '../../../styles/ConstructionHero.css'
import data from '../../../data/main_data'


class StudioHero extends Component{
    constructor(props){
        super(props);
        this.state = {
            keywords :  data.Construction.words[0]
        }
        this._isMounted = false;
    }

    async startImageSlides(){
        
        await setInterval(() => {
            
        
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
    componentDidMount(){
        // Wait until we have the data to start the slides
            this._isMounted = true;
            this._isMounted && this.startImageSlides();
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){

        return (
            <div className="hero">
                <div className="hero__slogan">
                     <h3 className="hero__slogan-text"> We have over 35 years of experience making <div className="hero__slogan-dynamic-text">{this.state.keywords.word}</div> for architecture and construction projects.</h3>
                </div>
                
            </div>
        );
    }
}

export default StudioHero;



