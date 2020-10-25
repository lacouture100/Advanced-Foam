import Layout from '../components/layout'
import Hero from '../components/mainHero'
import Banner from '../components/mainBanner'
import WorkshopBanner from '../components/workshopBanner'
import Clients from '../components/clients2'
import axios from 'axios';

export default function Homepage({ postList }){

    return (
        <Layout >
            <Hero/>
            <Banner/>
            <WorkshopBanner data={postList}/>
            <Clients/>
        </Layout>
        )
}

