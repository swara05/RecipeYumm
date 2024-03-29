import { StyleSheet } from 'react-native'
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:24,
    },
    image:{
        width:'100%',
        height:180,
        borderRadius:10,
        marginBottom:15,
        marginTop:10,
    },
    text:{
        alignSelf:'center'
    },
    instructionRow:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:12,
    },
    index:{
        fontSize:12,
        color:colors.green,
        marginRight:16,
    },
    instructionText:{
        fontSize:14,
        color:colors.black,
        flex:1,
    }
    

});

export default styles;