import { StyleSheet , Dimensions} from "react-native";
import colors from "../../constants/colors";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor: colors.white,
        padding:10,
        width: width * 0.7,
        marginBottom:32,
        marginTop:56,
        marginRight:16,
        //ios
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity:  0.32,
        shadowRadius: 5.46,
        //Android
        elevation: 9,
    },
    title:{
        fontSize:14,
        color:colors.grey,
        fontWeight:'bold',
        flex:1,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    authorImage:{
        width:28,
        height:33,
        marginRight:8,
        borderRadius: 20,
    },
    footerText:{
        color: colors.lightGrey2,
        fontSize:11,
    },
    timerIcon:{
        width:17,
        height:17,
        marginRight:8,
        tintColor:colors.lightGrey2,
    },
    image:{
        width:75,
        height:75,
        marginRight:5,
        marginTop:-45,
        borderRadius: 80,
        marginBottom:10,
    }
});

export default styles;