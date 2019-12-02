import React from 'react'
import Post from './Post.jsx'
import { Text } from 'react-native';

const PostList = ({ posts }) =>
  <Text>
    {posts.map(
      (post, i) =>
        <Text key={i.toString()}>
          <Post {...post} />
        </Text>
    )}
  </Text>

export default PostList