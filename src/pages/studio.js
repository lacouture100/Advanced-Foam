
import axios from 'axios';
import Banner from '../components/banner';
import Layout from '../components/layout';
import Clients from '../components/clients2';
import Hero from '../components/hero';
import { NextSeo } from 'next-seo';

const domain = 'studio';

export default function Studio({ postList }){

    return (
        <Layout domain={domain}>
                                    <NextSeo
        title={`Advanced Foam Studio Site`}
        description={`Advanced Foam Studio Site. We make everything in foam including custom movie props, columns, and more. We always have stock available.`}
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
    
    const wpCategoryFilter = 3;
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
Studio.getInitialProps = async () => {
    //Studio projects
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=3`);
            //console.log(response)
            const postList = await response.data;
            //console.log(postList)
    return {postList : postList}
}

*/