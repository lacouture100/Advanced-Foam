import { useRouter } from 'next/router';
import axios from 'axios'


export default function Post({postData}) {
    const router = useRouter();
    return (
        <div>
        <h2> {router.query.domain}'s {router.query.post}</h2>
        <p>{postData.title.rendered}</p>

        <h1 className="post__title">{postData.title.rendered}</h1>
                <article
                    className="post"
                    dangerouslySetInnerHTML={{
                    __html: postData.content.rendered
                }}/>
        </div>

    )
}



Post.getInitialProps = async ( context) => {
    
    const {query} = context;
    const LINK = `https://www.${query.domain}.advancedfoam.com/wp-json/wp/v2/posts?slug=${query.post}`;
    console.log(LINK);
    const response = await axios.get(`https://www.${query.domain}.advancedfoam.com/wp-json/wp/v2/posts?slug=${query.post}`);
            //console.log(response)
            const postData = await response.data[0];
            console.log(postData.date)
    return {postData : postData}
}
