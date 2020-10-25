
import axios from 'axios';
import Banner from '../components/banner';
import Layout from '../components/layout';
import Clients from '../components/clients2';
import Hero from '../components/hero';

const domain = 'studio';

export default function Studio({ postList }){

    return (
        <Layout domain={domain}>
            <Hero domain={domain}/>
            <Banner data={postList} domain={domain} />
            <Clients/>
        </Layout>
    )
}

Studio.getInitialProps = async () => {
    //Studio projects
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=3`);
            //console.log(response)
            const postList = await response.data;
            //console.log(postList)
    return {postList : postList}
}

