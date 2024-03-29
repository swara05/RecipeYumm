import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import Rating from '../Rating';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeCard = ({ title, style, image, author, rating, time, onPress }) => {
  // Generate random values using useMemo
  const randomRating = React.useMemo(() => Math.random() + 4, []);
  const authorNameList = [
    'Gordon Ramsay',
    'Jamie Oliver',
    'Bobby Flay',
    'Nigella Lawson',
    'Anthony Bourdain',
    'Giada De Laurentiis',
    'Heston Blumenthal',
    'Padma Lakshmi',
    'Alton Brown',
    'Ina Garten',
    'Emeril Lagasse',
    'Guy Fieri',
    'Julia Child',
    'Rachael Ray',
    'Marcus Samuelsson',
    'Cat Cora',
    'Aarón Sánchez',
    'Vikas Khanna',
    'Gaggan Anand',
    'Massimo Bottura',
    'Christina Tosi',
    'Thomas Keller',
    'Wolfgang Puck',
    'Ming Tsai'
  ];
  const randomAuthorName = React.useMemo(() => authorNameList[Math.floor(Math.random() * authorNameList.length)], []);
  const randomTime = React.useMemo(() => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomMinutes = getRandomNumber(30, 60);
    return `${randomMinutes} mins`;
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Rating rating={randomRating} />
        </View>

        <Image style={styles.image} source={{ uri: `https:${image}` }} />
      </View>

      <View style={[styles.row, { justifyContent: 'space-between', marginTop: 8 }]}>
        <View style={styles.row}>
          <Image style={styles.authorImage} source={require('../../assets/chef.jpeg')} resizeMode='cover' />
          <Text style={styles.footerText}>By {randomAuthorName} </Text>
        </View>

        <View style={styles.row}>
          <Image style={styles.timerIcon} source={require('../../assets/timer.png')} />
          <Text style={styles.footerText}>{randomTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(RecipeCard);
