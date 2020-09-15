
import Link from 'next/link'
import { Fragment } from 'react';
import axios from 'axios';
import Navigation from '../components/navigation'
import Banner from '../components/banner'




export default function Construction({ postList }){

    return (
        <Fragment>
        
        <Navigation site="construction"/>
        
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
       
        </Fragment>
        
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