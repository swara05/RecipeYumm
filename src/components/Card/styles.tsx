import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        borderRadius:12,
        backgroundColor:'rgba(18, 149, 117,0.1)',
        padding:10,
        width: width * 0.4,
        height:190,
        marginVertical:32,
        marginTop:80,
        marginRight:16,
        borderWidth:0.6,
        borderColor:colors.green,
    },
    title:{
        fontSize:14,
        color: colors.grey,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:16,
        flex:1,
    },
    label:{
        color:'rgba(0, 0, 0, 0.4)',
        fontSize:11,
        marginTop:8,
        marginBottom:4,
    },
    value:{
        color:colors.grey,
        fontSize:11,
        fontWeight:'bold',
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:-60,
        alignSelf:'center',
        borderWidth:0.6,
        borderColor:colors.green,
    }
});

export default styles;