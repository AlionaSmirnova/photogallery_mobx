import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
export default StyleSheet.create({
    layout:{
flex:1,
marginHorizontal:scale(16),
marginVertical:scale(8),
justifyContent:'center',
    },
    list:{
        flex: 4,
        width: 500,
        justifyContent:'center',
        alignItems:'center'
    },
    photographer:{
fontSize:scale(13),
marginVertical:scale(4),
    },
    imgBlock:{
        height:scale(160)
    },
    welcomeText:{
        textAlign:'center',
        fontSize:scale(18),
        fontStyle:'italic',
        marginVertical:scale(10),
        fontWeight:'600',
    }
});