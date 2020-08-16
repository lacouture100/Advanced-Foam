import React from 'react'

export default function ExamplePage(props) {
    const { post } = props;
    return (
        <div class={"page"}>
            <h1 class={"page-title"}>{post.title.rendered}</h1>
            <div class={"page-content"} dangerouslySetInnerHTML={{ __html: props.post.content.rendered }}/>
        </div>
    )
}