
import Link from 'next/link'
import { Fragment } from 'react';
import axios from 'axios';
import Layout from '../components/layout'
import Media from '../components/mediaQuery'
import Hero from '../components/mainHero'
import Banner from '../components/mainBanner'
import Footer from '../components/footer'
import Clients from '../components/clients2'

export default function Homepage({ postList }){

    return (
        <Layout >

        <Hero></Hero>
       <Banner></Banner>
       <Clients></Clients>
       < Footer></Footer>
        </Layout>
        )
}



