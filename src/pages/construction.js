
import axios from 'axios';
import Banner from '../components/banner';
import Layout from '../components/layout';
import Clients from '../components/clients2';
import Hero from '../components/constructionHero';
import { NextSeo } from 'next-seo';

const domain = 'construction';

export default function Construction({ postList }){

    return (
        <Layout domain={domain}>
            <NextSeo
        title={`Advanced Foam Construction Site`}
        description={`Advanced Foam Construction Site. We make everything in foam including architectural shapes, props, and more. We always have stock available.`}
      />
            <Hero domain={domain}/>
            <Banner data={postList} domain={domain} />
            <Clients/>
        </Layout>
    )
}

export async function getStaticProps( {params} ) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    
    const wpCategoryFilter = 15;
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
Construction.getInitialProps = async () => {
    //const response = await axios.get(`https://www.construction.advancedfoam.com/wp-json/wp/v2/posts`);
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=15`);
            //console.log(response)
            const postList = await response.data;
            //console.log(postList)
    return {postList : postList}
}

*/
