import Layout from '../components/layout'
import Hero from '../components/mainHero'
import Banner from '../components/mainBanner'
import WorkshopBanner from '../components/workshopBanner'
import Clients from '../components/clients2'
import axios from 'axios';
import { NextSeo } from 'next-seo';

export default function Homepage({ workshopPostList, studioPostList, constructionPostList, packagingPostList }){

    return (
        <Layout >
        <NextSeo
        title={`Advanced Foam Main Site`}
        description={`Advanced Foam Packaging Site. We make everything in foam for the Move and TV production industry, architectural projects, and custom packaging needs. We always have stock available.`}
      />
            <Hero/>
            <Banner studioData={studioPostList} constructionData={constructionPostList} packagingData={packagingPostList}/>
         
            <WorkshopBanner data={workshopPostList}/>
            <Clients/>
        </Layout>
        )
}



export async function getStaticProps( {params} ) {

    const workshopLink = `https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=23`;

    const request1 = await axios.get(workshopLink);

    // Workshop Post List Request
    let workshopPostList = request1.data;


    return {
        revalidate: 1,
      props: {workshopPostList},
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