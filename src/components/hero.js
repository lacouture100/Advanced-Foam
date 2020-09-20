
import React, { Component, useState, useEffect } from 'react';

const words = {
    "studio" : 
    [
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
        }
    ],
    "construction" : 
    [
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
        } 
    ]
}


export default function Hero( props ){
    const domain = props.site;
    let index = 0;

    const [word,setWord] = useState(words.studio[index].word);
    
    useEffect( async () =>{
        const interval = await setInterval(() => {
            
            if(index >= words.studio.length-1){
                index=0;
            }
            else {
                index++;
            }
            let wordsLength = words.studio.length-1;
                setWord(word =>words.studio[index].word)
        }, 2000);
        // Clear the interval to prevent a memory
       return () => clearInterval(interval);
    }, []);

        return (
            <div className="hero">
                <div className="hero__slogan">
                     <h3 className="hero__slogan-text"> We have over 35 years of experience making <div className="hero__slogan-dynamic-text">{word}</div> for architecture and construction projects.</h3>
                </div>
                
            </div>
        );
    
}



/*
Timer component
const [seconds, setSeconds] = useState(0);
  
useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(seconds => seconds + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []);

*/
