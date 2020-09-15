
import Link from 'next/link'
import { Fragment } from 'react';
import axios from 'axios';
import Banner from '../components/banner'
import Layout from '../components/layout'
import Clients from '../components/clients'
import Contact from '../components/contact'
import Hero from '../components/hero'
import Footer from '../components/footer'


export default function Construction({ postList }){

    return (
        <Layout domain="construction">
        <Hero domain="construction"/>
        
        <Banner data={postList} />
       <Clients />
       <Contact />
       <Footer />
       
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