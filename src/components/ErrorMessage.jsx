import React from 'react'
import { Text, Button } from 'react-native';

const ErrorMessage = ({ message }) =>
  message
    ? <Text style={{ color: 'red' }}>Error: {message}</Text>
    : null

export default ErrorMessage