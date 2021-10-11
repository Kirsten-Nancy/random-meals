import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  StatusBar,
} from 'react-native';
import Card from '../components/Card';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );
      const recipeJson = await response.json();
      setRecipes(recipeJson.categories);
    } catch (error) {
      console.log('error again', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const renderItem = ({item}) => <Card recipe={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={item => item.idCategory}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
