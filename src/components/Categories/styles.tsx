import { StyleSheet } from 'react-native'
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    item:{
        fontSize:12,
        color:colors.green,
        fontWeight:'bold',
        padding:8,
        paddingHorizontal:12,
    },
    selectedItem:{
        color:colors.white,
    },
    itemContainer:{
        marginBottom:14,
        marginRight:8,
    },
    selectedItemContainer:{
        backgroundColor: colors.green,
        borderRadius:10,
    },
})

export default styles;
