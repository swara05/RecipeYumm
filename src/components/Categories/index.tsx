import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';

const Categories = ({categories,selectedCategory,onCategoryPress}) => {
    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={item => String(item)}
            style={{ marginHorizontal:-18, marginTop:24}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
                const selected = selectedCategory === item;

                return(
                    <TouchableOpacity onPress={() => onCategoryPress(item)}  
                    style={[styles.itemContainer, selected ? styles.selectedItemContainer : {} ]}>
                        <Text style={[styles.item,selected? styles.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>
                );
            
            }}

        />

    );
};

export default React.memo(Categories);