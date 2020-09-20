
import Link from 'next/link'
import { Fragment } from 'react';
import axios from 'axios';
import Banner from '../components/banner'
import Layout from '../components/layout'
import Media from '../components/mediaQuery'




export default function Homepage({ postList }){

    return (
        <Layout domain={'main'}>
        <div> Hello
        </div>
        <Media></Media>
       
       
        </Layout>
        )
}



