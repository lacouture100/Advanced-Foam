import React, { Component } from 'react';
import  {useMediaQuery, useMediaQueries} from '@react-hook/media-query'


// Using multiple media queries
export default function Media( context ) {
    const {matches, matchesAny, matchesAll} = useMediaQueries({
      screen: 'screen',
      width: '(min-width: 400px)'
      
    })
   
    return (
      <div>
        Screen matched? {matches.screen ? 'Yes' : 'No'}
        Width matched? {matches.width ? 'Yes' : 'No'}
        
        All matched? {matchesAll ? 'Yes' : 'No'}
        Any matched? {matchesAny ? 'Yes' : 'No'}
      </div>
    )
  }