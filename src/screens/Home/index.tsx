import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { RecipesContext } from '../../components/Context';
import Card from '../../components/Card';
import Categories from '../../components/Categories';
import Input from '../../components/Input';
import RecipeCard from '../../components/RecipeCard';
import Title from '../../components/Title';
import styles from './styles';
import { getRecipesList } from '../../http';

const Home = ({ navigation }) => {
  const tagList = [
    'Chinese', 'Italian', 'Japanese', 'Indian',
    'Mexican', 'Thai', 'African', 'French',
    'Greek', 'American', 'Cuban', 'Dutch',
    'Filipino', 'Malaysian', 'Spanish', 'Turkish'
  ];

  const { recipes } = useContext(RecipesContext);
  const [selectedCategory, setSelectedCategory] = useState('American');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  

  // Function to generate a random number between min and max (inclusive)
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Function to generate a random time between 30 to 60 minutes
  const generateRandomTime = () => {
    const randomMinutes = getRandomNumber(30, 60);
    return `${randomMinutes} mins`;
  };

  // Filter recipes based on the selected category keyword in the title
  useEffect(() => {
    const fetchRecipesByKeyword = async (selectedCategory) => {
      try {
        const recipesResponse = await getRecipesList(selectedCategory);
        setFilteredRecipes(recipesResponse.data.d);
      } catch (error) {
        console.log('Error fetching recipes by keyword:', error);
      }
    }; 
  
    fetchRecipesByKeyword(selectedCategory); // Fetch recipes based on the entered keyword
  }, [selectedCategory]);
    
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate('Search')} />
      <Title text="Delicious Recipes" />

      <FlatList
        horizontal
        data={recipes}
        keyExtractor={(item, index) => String(item?.id)}
        style={{ marginHorizontal: -24 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            title={item?.Title}
            onPress={() => navigation.navigate('RecipeDetails', { item })}
            image={item?.Image}
            time={generateRandomTime()}
          />
        )}
      />

      <Categories categories={tagList} selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} />

      <FlatList
        horizontal
        data={filteredRecipes}
        keyExtractor={(item, index) => String(item?.id)}
        style={{ marginHorizontal: -24 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Card
            style={index === 0 ? { marginLeft: 24 } : {}}
            title={item?.Title}
            onPress={() => navigation.navigate('RecipeDetails', { item })}
            image={item?.Image}
            time={generateRandomTime()}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
