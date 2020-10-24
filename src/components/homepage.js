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



Homepage.getInitialProps = async () => {
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=23`);
    //const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=16`);
            //console.log(response)
            const postList = await response.data;
            //console.log(postList)
    return {postList : postList}
}
