
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';




export default function Construction({ postList }){
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
    return (
        <div>
            {postList.map((e,index) => (
                <div key={index}>
                <Link  as={`/${'construction'}/${e.slug}`} href='/[domain]/[post]' >
                    <a> Navigate to {e.domain} {e.slug}</a>
                </Link>
                </div>
            ))}
        </div>
        )
}

Construction.getInitialProps = async () => {
    const response = await axios.get(`https://www.construction.advancedfoam.com/wp-json/wp/v2/posts`);
            //console.log(response)
            const postList = await response.data;
    return {postList : postList}
}