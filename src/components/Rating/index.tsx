import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const Rating = ({rating}) => {

  const arr = [1,2,3,4,5]
  // 0 to 1.4 = 1 star
  //1.5 to 2.4 = 2 star  
  // 2.5 to 3.4 = 3 star
  //3.5 to 4.4 = 4 star  
  //4.5 to 5 = 5 star

  const renderStar = () => {
        return arr?.map(star => {
          if( Math.round(rating) >= star){
            return(
              <Image key={star} style={styles.star} source={require('../../assets/star.png')}/>
            )
          }
          return(
            <Image key={star} style={styles.star} source={require('../../assets/emptyStar.png')}/>
          )
      })
  }
  
  return (
      <View style={styles.row}>
        {renderStar()}
      </View>
  );
};

export default React.memo(Rating);