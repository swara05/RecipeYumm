import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles';
import Input from '../../components/Input';
import { FlatList } from 'react-native-gesture-handler';
import { RecipesContext } from '../../components/Context';
import Card from '../../components/Card';
import { getRecipesList } from '../../http';

const Search = ({navigation}) => {

  // Function to generate a random number between min and max (inclusive)
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Function to generate a random time between 30 to 60 minutes
  const generateRandomTime = () => {
    const randomMinutes = getRandomNumber(30, 60);
    return `${randomMinutes} mins`;
  };


  const { recipes} = useContext(RecipesContext)
  const [filterRecipes, setFilterRecipes] = useState(recipes);
  const [keyword, setKeyword] = useState('');

  console.log('keyword :>>', keyword)


useEffect(() => {
  const fetchRecipesByKeyword = async (searchKeyword) => {
    try {
      const recipesResponse = await getRecipesList(searchKeyword);
      setFilterRecipes(recipesResponse.data.d);
    } catch (error) {
      console.log('Error fetching recipes by keyword:', error);
    }
  }; 

  fetchRecipesByKeyword(keyword); // Fetch recipes based on the entered keyword
}, [keyword]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus onChangeText={setKeyword} value={keyword}/>

      <FlatList 
        data={filterRecipes}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item?.id)}
        renderItem={({item,index}) => (
          <Card
            title={item?.Title}
            image={item?.Image}
            onPress={() => navigation.navigate('RecipeDetails' , { item })}
            time={generateRandomTime()}
          />
        )}
        style={styles.itemContainer}
      />
    </SafeAreaView>
  )
}

export default React.memo(Search);