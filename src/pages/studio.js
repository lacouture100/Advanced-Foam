
import axios from 'axios';
import Banner from '../components/banner';
import Layout from '../components/layout';
import WorkshopBanner from '../components/workshopBanner'
import Clients from '../components/clients2';
import Hero from '../components/hero';
import { NextSeo } from 'next-seo';

const domain = 'studio';

export default function Studio({ bannerPostList, postList }){

    return (
        <Layout domain={domain}>
                                    <NextSeo
        title={`Advanced Foam Studio Site`}
        description={`Advanced Foam Studio Site. We make everything in foam including custom movie props, columns, and more. We always have stock available.`}
      />
            <Hero domain={domain}/>
            <Banner data={bannerPostList} domain={domain} />
            
            <WorkshopBanner data={postList}/>
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
    const response1 = await axios.get(`https://www.advfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}`);
    ///console.log("res: " + response)
    const bannerPostList = await response1.data
    const response = await axios.get(`https://www.advfoam.com/wp-json/wp/v2/posts?categories=23`);
    ///console.log("res: " + response)
    const postList = await response.data

    return {
        revalidate: 1,
      props: {bannerPostList,postList},
            
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