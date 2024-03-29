// App.tsx
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import Search from './src/screens/Search';
import { getRecipesList } from './src/http';
import { RecipesContext, HealthyRecipesContext } from './src/components/Context';
import RecipeDetails from './src/screens/RecipeDetails';

const Stack = createStackNavigator();

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const recipesResponse = await getRecipesList('bread');
  //       setRecipes(recipesResponse.data.d);

  //       const healthyRecipesResponse = await getRecipesList('pizza');
  //       setHealthyRecipes(healthyRecipesResponse.data.d);
  //     } catch (error) {  
  //       console.log('Error fetching recipes:', error);
  //     } 
  //   };

  //   fetchRecipes();
  // }, []);

useEffect(() => {
  const fetchRecipes = async (searchKeyword) => {
    try {
      const recipesResponse = await getRecipesList(searchKeyword);
      setRecipes(recipesResponse.data.d);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  };

  fetchRecipes('bread'); // Initial fetch
  fetchRecipes('pizza'); // Initial fetch for healthy recipes
}, []);

  const BackButton = (props) => (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require('./src/assets/back.png')} />
    </Pressable>
  );

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <HealthyRecipesContext.Provider value={{ healthyRecipes, setHealthyRecipes }}>
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerLeft: () => null, gestureEnabled: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerLeft: (props) => <BackButton {...props} /> }} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ headerLeft: (props) => <BackButton {...props} /> , title: 'Recipe' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
};

const styles = StyleSheet.create({
  back: {
    width: 18,
    height: 16,
    margin: 24,
  },
});

export default App;
