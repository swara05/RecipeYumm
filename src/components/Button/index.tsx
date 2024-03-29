import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{children}</Text>
        <Image style={styles.icon} source={require('../../assets/arrow.png')}/>
    </TouchableOpacity>
  )
}

export default Button;
