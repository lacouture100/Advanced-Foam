
import React, { Component } from 'react';
import '../../../styles/ConstructionHeroButtons.css'

const buttons = [
    {
        "name": "IN STOCK",
        "index": 0,
        "route" : '/'
    },
    {
        "name": "REDICOAT PRODUCTS",
        "index": 1
    },
    {
        "name": "CONSTRUCTION MATERIALS",
        "index": 1
    },
    {
        "name": "PRICING & ORDERING",
        "index": 2
    },
    {
        "name": "TECHNICAL INFO",
        "index": 3
    },
    {
        "name": "FAQ",
        "index": 4
    },
    
    
]

class StudioHeroButtons extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
    

    }
    render(){
        const buttonsDOM = buttons.map((value)=>(
              <button className="option-button" key={value.index}>{value.name}</button>
          ))
        return (
            <div className="main-buttons">
                {buttonsDOM}
            </div>
        );
    }
}

export default StudioHeroButtons;


