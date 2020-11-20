import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Grid} from 'semantic-ui-react'
import PostCard from '../component/PostCard';
import { FETCH_POSTS_QUERY } from '../util/graphql';
export default function Register() {
    const {loading,data:{getPosts:posts}}=useQuery(FETC_POST_QUERY)
    
    return (
        <Grid columns={3} divided>
            <Grid.Row>
                <h2>Recent Posts</h2>
            </Grid.Row>
            <Grid.Row>
                {loading ? (
                    <h2>Loading Posts...</h2>
                ):(
                    posts && posts.map(post=>(

                        <Grid.Column key={post.id}>
                            <PostCard post={post} />

                        </Grid.Column>

                    ))
                )}
            </Grid.Row>

            
        </Grid>
    )
}

const FETC_POST_QUERY=gql`
   {
    getPosts{
        id body createdAt username likeCount likes{username} commentCount comments{id username createdAt body}
    }
   }

`