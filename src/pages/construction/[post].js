import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
	'@global': {
	  ul: {
		margin: 0,
		padding: 0,
        listStyle: 'none',
        
	  },
    },
    postTitle : {
        margin: theme.spacing(5),
    },
    postContent : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(5),
        '& p': {
            margin: theme.spacing(2, 40,2,40),
            textAlign: 'justify',
            textJustify: 'inter-word'
        },'& img': {
            width: '500px',
            height: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            '& p': {
                margin: theme.spacing(2, 5,2,5),
                textAlign: 'justify',
            },
            '& img': {
                width: '500px',
                height: 'auto'
            }
        },
        [theme.breakpoints.down('xs')]: {
            '& p': {
                margin: theme.spacing(2),
                textAlign: 'center',
            },
            '& img': {
                alignItems: 'center',
                align: 'center',
                width: '250px',
                height: 'auto'
            }
          }
    }

}));

export default function Post({postData}) {
    const router = useRouter();
    const classes = useStyles();
    return (
        <Layout domain={'construction'}>
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



Post.getInitialProps = async ( context ) => {
    //check if the context is making a request server-side. req and res only exist/are defined server-side
    
    const {query} = context;
    // This is the construction category number in wordpress
    const wpCategoryFilter = 16;


    const LINK = `https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}&slug=${query.post}`;
    //console.log(LINK);
    const response = await axios.get(`https://www.advancedfoam.com/wp-json/wp/v2/posts?categories=${wpCategoryFilter}&slug=${query.post}`);
    //const response = await axios.get(`https://www.${query.domain}.advancedfoam.com/wp-json/wp/v2/posts?slug=${query.post}`);
            //console.log(response)
            const postData = await response.data[0];

    return {postData : postData}
}
