import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';
import { NextSeo } from 'next-seo';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	'@global': {
	  ul: {
		margin: 0,
		padding: 0,
        listStyle: 'none',
        overflowX: 'hidden'
        
	  },
    },
    loading : {
        display: 'flex',
        //margin: theme.spacing(10,90,10,90),
        margin: theme.spacing(10,100,10),
        [theme.breakpoints.down('sm')]: {  
            margin: theme.spacing(10,50,10) 
        },
        [theme.breakpoints.down('xs')]: {  
            margin: theme.spacing(20)
        },
    },
    postTitle : {
        margin: theme.spacing(5),
    },
    figCaption : {
        display: 'flex',
        flexWrap: 'wrap',

        margin: theme.spacing(5),
    },
    postContent : {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'justify',
        alignItems: 'center',
        margin: theme.spacing(5),
        overflowX: 'hidden',
        '& figCaption' : {
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'justify',
            textJustify: 'inter-word',
            margin: theme.spacing(0, 70,2,70),
    
        },
        '& li': {
            margin: theme.spacing(2, 40,2,40),
            textAlign: 'justify',
            textJustify: 'inter-word'
        },
        '& p': {
            margin: theme.spacing(2, 70,2,70),
            minWidth:'800px',
            textAlign: 'justify',
            textJustify: 'inter-word'
        },'& img': {
            width: 'max-width',
            height: 'auto',
            alignSelf: 'center',
            margin: theme.spacing(0, 70,0,70),
        },'& iframe': {
            width: '700px',
            minHeight: '400px',
            alignSelf: 'center',
            margin: theme.spacing(0, 70,0,70),
        },
        [theme.breakpoints.down('md')]: {
            '& figCaption' : {
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'justify',
                textJustify: 'inter-word',
               
        
            },
            '& li': {
                margin: theme.spacing(2, 5,2,5),
                textAlign: 'justify',
            },
            '& p': {
            minWidth:'800px',
            textAlign: 'justify',
            textJustify: 'inter-word'
            },
            
            '& img': {
                width: '600px',
                height: 'auto'
            },
            '& iframe': {
                width: '600px',
                height: 'auto'
            }
        },
        [theme.breakpoints.down('sm')]: {
            '& figCaption' : {
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'justify',
                textJustify: 'inter-word',
               
        
            },
            '& li': {
                margin: theme.spacing(2, 5,2,5),
                textAlign: 'justify',
            },
            '& p': {
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'justify',
                textJustify: 'inter-word',
                padding: theme.spacing(2, 20,2,20),
                minWidth:'900px'

            },
            
            '& img': {
                width: '600px',
                height: 'auto'
            },
            '& iframe': {
                width: '600px',
                height: 'auto'
            }
        },
        [theme.breakpoints.down('xs')]: {
            '& figCaption' : {
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'justify',
                textJustify: 'inter-word',
            },
            '& li': {
                margin: theme.spacing(2),
                textAlign: 'center',
            },
            '& p': {  
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'justify',
                textJustify: 'inter-word',
                padding: theme.spacing(2, 20,2,20),
                minWidth:'600px'
            },
            '& img': {
                alignItems: 'center',
                align: 'center',
                width: '280px',
                height: 'auto'
            },
            '& iframe': {
                alignItems: 'center',
                align: 'center',
                width: '280px',
                height: 'auto'
            }
          }
    }

}));


export default function Post({postData}) {
    const router = useRouter();
    const classes = useStyles();

    if (!postData){return <Layout domain={'packaging'}><Grid  className={classes.loading}><CircularProgress/></Grid ></Layout>}
    return (
        <Layout domain={'packaging'}>
            <NextSeo
        title={postData.title.rendered}
        description={`${postData.excerpt.rendered}`}
      />
            <Grid >
        {/*We can access the domain with {router.query.domain} abd the query, or blog post, with {router.query.post}*/}
                <Typography variant="h3" align="center" color="textPrimary"className={classes.postTitle} >{postData.title.rendered}</Typography>
                <Grid
                    className={classes.postContent}
                    dangerouslySetInnerHTML={{
                    __html: postData.content.rendered
                }}/>
            </Grid>
        </Layout>
    )
}

  

export async function getStaticPaths() {

    const wpCategoryFilter = 14;
    const res = await axios.get(`https://www.advfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}`)
    const allPosts = await res.data;
    //console.log(allPosts);
    
    // Get the paths we want to pre-render based on posts
    const paths = allPosts.map((post) => `/packaging/${post.slug}`)
    console.log(paths)

    return {
      //paths:   allPosts.map(( post ) => `/studio/${post.slug}`) || [],
        paths,
      fallback: true,
    }
  }

  

export async function getStaticProps( {params} ) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    
    const wpCategoryFilter = 14;
    //const { post } = params;
    //console.log(`https://www.advfoam.com/wp-json/wp/v2/posts?slug=${params.post}`)
    const response = await axios.get(`https://www.advfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}&slug=${params.post}`);
    ///console.log("res: " + response)
    const postData = await response.data[0]
    //console.log("post: " + postData)
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        revalidate: 1,
      props: {postData},
    }
}
    
/*
Post.getInitialProps = async ( context ) => {
    //check if the context is making a request server-side. req and res only exist/are defined server-side
    
    const {query} = context;
    const wpCategoryFilter = 14;



    const LINK = `https://www.advfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}&slug=${query.post}`;
    console.log(LINK);
    const response = await axios.get(`https://www.advfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}&slug=${query.post}`);
    //const response = await axios.get(`https://www.${query.domain}.advfoam.com/wp-json/wp/v2/posts?slug=${query.post}`);
            //console.log(response)
            const postData = await response.data[0];

    return {postData : postData}
}

*/