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
    const studioLink = `https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=3`;
    const constructionLink = `https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=19`;
    const packagingLink = `https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=13`;

    const request1 = await axios.get(workshopLink);
    const request2 = await axios.get(studioLink);
    const request3 = await axios.get(constructionLink);
    const request4 = await axios.get(packagingLink);

    let response1;
    let response2;
    let response3;
    let response4;
    // Workshop Post List Request
    let workshopPostList = request1.data;
    // Studio Post List Request
    let studioPostList;

    // Construction Post List Request
    let constructionPostList;

    // Packaging Post List Request
    let packagingPostList;
/*
    axios.all([request1, request2, request3,request4]).then(axios.spread((...responses) => {
        response1 = responses[0]
         response2 = responses[1]
         response3 = responses[2]
         response4 = responses[3]

        workshopPostList =  response1.data
        studioPostList =  response2.data
        constructionPostList =  response3.data
        packagingPostList = response4.data

        // use/access the results 
      })).catch(errors => {
        // react on errors.
      })
      */
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