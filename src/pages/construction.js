
import Link from 'next/link'
import { Fragment } from 'react';
import axios from 'axios';
import Banner from '../components/banner'
import Layout from '../components/layout'
import Clients from '../components/clients'
import Contact from '../components/contact'


export default function Construction({ postList }){

    return (
        <Layout domain="construction">
        
        <div>
            {postList.map((e,index) => (
                <div key={index}>
                <Link  as={`/${'construction'}/${e.slug}`} href='/[domain]/[post]' >
                    <a> Navigate to {e.domain} {e.slug}</a>
                </Link>
                </div>
            ))}
        </div>
                <Banner data={postList} />
       <Clients />
       <Contact />
       
        </Layout>
        )
}

Construction.getInitialProps = async () => {
    const response = await axios.get(`https://www.construction.advancedfoam.com/wp-json/wp/v2/posts`);
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