import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = ({title, style, time, image , onPress}) => {
  return (
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
          <Image style={styles.image} source={{ uri: `https:${image}` }} />
          <Text numberOfLines={3} style={styles.title}>{title}</Text>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{time}</Text>
      </TouchableOpacity>
  );
};

export default React.memo(Card);