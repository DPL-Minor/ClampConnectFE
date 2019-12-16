import React from 'react'
import { Text, Button } from 'react-native';

const Loading = ({ isLoading }) => isLoading && <Text>Loading...</Text>
export default Loading