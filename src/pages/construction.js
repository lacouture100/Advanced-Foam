
import axios from 'axios';
import Banner from '../components/constructionBanner';
import ProjectsBanner from '../components/constructionProjectsBanner';
import Layout from '../components/layout';
import Clients from '../components/clients2';
import Hero from '../components/constructionHero';
import { NextSeo } from 'next-seo';

const domain = 'construction';

export default function Construction({ productsList, projectsList }){

    return (
        <Layout domain={domain}>
            <NextSeo
        title={`Advanced Foam Construction Site`}
        description={`Advanced Foam Construction Site. We make everything in foam including architectural shapes, props, and more. We always have stock available.`}
      />
            <Hero domain={domain}/>
            <Banner data={productsList} domain={domain} />
            <ProjectsBanner data={projectsList} domain={domain} />
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
    const response1 = await axios.get(`https://www.advfoam.com/wp-json/wp/v2/posts?categories=15`);
    const response2 = await axios.get(`https://www.advfoam.com/wp-json/wp/v2/posts?categories=13`);

    ///console.log("res: " + response)
    const productsList = await response1.data
    const projectsList = await response2.data

    return {
        revalidate: 1,
      props: {productsList,projectsList},
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
