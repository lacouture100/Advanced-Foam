import Homepage from '../components/homepage'
import Navigation from '../components/navigation'
import Head from 'next/head'
import { Fragment } from 'react'



export default function () {

    return(
    <Fragment>

    <Head>
      <title>Advanced Foam - Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="Advanced Foam" content="Advanced Foam, Inc. - 25+ years of experience in foam fabrication for the Southern California studio, packaging and construction industry." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
    </Head>

    <Navigation site="main"/>
    
    


  </Fragment>
  )
};

