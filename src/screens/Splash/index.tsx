import { View, Text, ImageBackground, Image } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'
import React from 'react'


const Splash = ({navigation}) => {

  return (
    <ImageBackground style={styles.background} source={require('../../assets/splashs.jpg')}>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/icon.png')} />
            <Text style={styles.title}>100K+ Premium Recipes</Text>
            {/* <Text style={styles.bigTitle}>Get Cooking</Text> */}
            
        </View>

        <View style={styles.container}>
            <Text style={styles.subTitle}>Simple way to find Tasty Recipe</Text>
      
            <Button onPress={() => navigation.navigate('Home')}>Start Cooking</Button>
        </View>
    </ImageBackground>
  )
}

export default Splash;