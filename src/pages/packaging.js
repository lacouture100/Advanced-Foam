
import axios from 'axios';
import Banner from '../components/packagingBanner';
import Layout from '../components/layout';
import Clients from '../components/clients2';
import Hero from '../components/packagingHero';
import { NextSeo } from 'next-seo';

const domain = 'packaging';

export default function Packaging({ postList }){

    return (
        <Layout domain={domain}>
                        <NextSeo
        title={`Advanced Foam Packaging Site`}
        description={`Advanced Foam Packaging Site. We make everything in foam including custom packaging, props, and more. We always have stock available.`}
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
    
    const wpCategoryFilter = 19;
    //const { post } = params;
    //console.log(`https://www.advancedfoam.com/wp-json/wp/v2/posts?slug=${params.post}`)
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}`);
    ///console.log("res: " + response)
    const postList = await response.data

    return {
        revalidate: 1,
      props: {postList},
    }
}
    /*

Packaging.getInitialProps = async () => {
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=19`);
            //console.log(response)
            const postList = await response.data;
            //console.log(postList)
    return {postList : postList}
}

*/



/*
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadData() {
            const response = await axios.get(`https://www.construction.advancedfoam.com/wp-json/wp/v2/posts`);
            console.log(response)
            const postList = await response.data;
            setPosts(postList);
        }

        loadData();
        console.log(posts)
    }, []);
*/