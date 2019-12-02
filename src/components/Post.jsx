import React from 'react'
import { Text } from 'react-native';

const Post = ({ user, text }) =>
  <Text>{user} - {text}</Text>

export default Post