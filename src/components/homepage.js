
import Link from 'next/link'
import { Fragment } from 'react';
import axios from 'axios';
import Layout from '../components/layout'
import Media from '../components/mediaQuery'
import Hero from '../components/mainHero'
import Banner from '../components/mainBanner'
import Footer from '../components/footer'

export default function Homepage({ postList }){

    return (
        <Layout >

        <Hero></Hero>
       <Banner></Banner>
       < Footer></Footer>
        </Layout>
        )
}



