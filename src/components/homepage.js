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



export async function getStaticProps( {params} ) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    
    const wpCategoryFilter = 23;
    //const { post } = params;
    //console.log(`https://www.advancedfoam.com/wp-json/wp/v2/posts?slug=${params.post}`)
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}`);
    ///console.log("res: " + response)
    const postList = await response.data

    return {
      props: {postList},
    }
}
/*
Homepage.getInitialProps = async () => {
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=23`);
    //const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=16`);
            //console.log(response)
            const postList = await response.data;
            //console.log(postList)
    return {postList : postList}
}
*/