import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.lightGrey,
        paddingHorizontal:6,
        marginVertical:16,
    },
    input:{
        color: colors.black,
        fontSize:14,
        flex:1,
    },
    icon:{
        width:16,
        height:16,
        marginRight:16,
        marginLeft:10,
        tintColor: colors.lightGrey,
    }
});

export default styles;