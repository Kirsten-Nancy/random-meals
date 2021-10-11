import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({recipe}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{uri: recipe.strCategoryThumb}}
        style={styles.cardImage}>
        <LinearGradient
          colors={['transparent', '#343A40']}
          locations={[0, 0.95]}
          style={styles.linearGradient}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{recipe.strCategory}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: {
    height: 250,
    width: deviceWidth - 30,
    borderRadius: 12,
    marginTop: 14,
  },
  linearGradient: {
    height: 250,
    width: deviceWidth - 30,
  },
  cardImage: {
    width: deviceWidth - 30,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardBody: {
    padding: 16,
    position: 'absolute',
    width: deviceWidth - 30,
    bottom: 0,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Card;
