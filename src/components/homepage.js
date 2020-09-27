import Layout from '../components/layout'
import Hero from '../components/mainHero'
import Banner from '../components/mainBanner'
import Clients from '../components/clients2'

export default function Homepage({ postList }){

    return (
        <Layout >
            <Hero/>
            <Banner/>
            <Clients/>
        </Layout>
        )
}



