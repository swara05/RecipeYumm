import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';
import Title from '../../components/Title';
import colors from '../../constants/colors';


const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  const ingredients = item?.Ingredients || {};
  const instructions = item?.Instructions || '';
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{ uri: `https:${item.Image}` }} />
        <Title style={styles.text} text={item?.Title} />
        <Title style={{ marginTop: 32, color:colors.green }} text='Ingredients' />
        {Object.keys(ingredients).map((key, index) => (
          <View key={key} style={styles.instructionRow}>
            <Text style={styles.index}>{parseInt(key, 10)}.</Text>
            <Text style={styles.instructionText}>{ingredients[key]}</Text>
          </View>
        ))}

        <Title style={{ marginTop: 32 , color:colors.green}} text='Instructions' />
        {/* Split the instructions text by full stops and map each segment to a new <Text> component */}
        {instructions.split('.').map((instruction, index) => (
          <Text key={index} style={[styles.instructionText, {marginTop:10,marginBottom: 5}]}>{instruction.trim()}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(RecipeDetails);
