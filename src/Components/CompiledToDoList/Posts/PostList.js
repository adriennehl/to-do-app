import React, { Component } from 'react'
import PostData from '../Data/posts.json'

class PostList extends Component{
    render() {
        return(
            <div>
                {PostData.map((postDetail, index) => {
                    return <h1>{postDetail.title}</h1>
                })}
            </div>
        )
    }
}

export default PostList