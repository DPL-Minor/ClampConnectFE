import React from 'react'
import { Text, Button } from 'react-native';

const Post = ({ user, text, onPress }) =>
  <>
    <Text>user: {user} - text: {text}</Text>
    <Button onPress={onPress} title="Sign In">user: {user} - text: {text}</Button>
  </>
export default Post