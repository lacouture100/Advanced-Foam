
import axios from 'axios';
import Banner from '../components/banner';
import Layout from '../components/layout';
import Clients from '../components/clients2';
import Hero from '../components/packagingHero';

const domain = 'packaging';

export default function Construction({ postList }){

    return (
        <Layout domain={domain}>
            <Hero domain={domain}/>
            <Banner data={postList} domain={domain} />
            <Clients/>
        </Layout>
    )
}

Construction.getInitialProps = async () => {
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=19`);
            //console.log(response)
            const postList = await response.data;
            //console.log(postList)
    return {postList : postList}
}





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