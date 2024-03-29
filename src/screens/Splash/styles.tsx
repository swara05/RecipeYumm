import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        opacity:0.8,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    container:{
        paddingVertical:30,
        paddingHorizontal:60,
    },
    logo:{
        width:120,
        height:120,
        alignSelf:'center',
        marginTop:8,
        opacity:1.0,
        tintColor: colors.black,
    },
    title:{
        color: colors.black,
        fontSize:20,
        textAlign:'center',
        fontWeight:'500',
    },
    bigTitle:{
        color: colors.green,
        fontSize:40,
        textAlign:'center',
        fontWeight:'bold',
    },
    subTitle:{
        color: colors.black,
        fontSize:16,
        textAlign:'center',
        fontWeight:'500',
        marginBottom:30,
        marginTop:20,
    }
});

export default styles;