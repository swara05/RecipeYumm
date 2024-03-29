import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        padding:15,
        marginBottom:30,
    },
    title:{
        color: colors.black,
        fontSize:16,
        fontWeight:'500',
    },
    icon:{
        width:24,
        height:24,
        marginLeft:16,
        tintColor: colors.black,
    }
});

export default styles;