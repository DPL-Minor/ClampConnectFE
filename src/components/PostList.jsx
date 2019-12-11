import React from 'react'
import Post from './Post.jsx'
import { Text, View } from 'react-native';

const PostList = ({ posts, createPost, editPost }) =>
  <View>
    {posts.map(
      (post, index) =>

        <Post key={index} onPress={() => editPost(index, post.text + ', updated')} {...post} />

    )}
  </View>

export default PostList