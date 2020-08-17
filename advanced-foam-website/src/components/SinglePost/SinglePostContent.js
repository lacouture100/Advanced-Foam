import React from 'react'
import PropTypes from 'prop-types';

import './SinglePostContent.css';
export default function SinglePostContent(props) {
    const { post } = props;
    let excerpt = post.excerpt.rendered.toString();
    const postExcerpt = excerpt.replace(/(<([^>]+)>)/ig,"").substring(0, excerpt.indexOf('.')-1);

    return (
        <div class={"post-main"}>
            <h1 class={"post-main-title"}>{post.title.rendered}</h1>
            <h4 className="post-main-excerpt">{postExcerpt}</h4>
            <div class={"post-main-content"} dangerouslySetInnerHTML={{ __html: props.post.content.rendered }}/>
        </div>
    )
}

SinglePostContent.propTypes = { post : PropTypes.object.isRequired}
