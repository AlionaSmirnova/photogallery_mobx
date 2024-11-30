import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
export default StyleSheet.create({
text:{
    textAlign:'center',
    fontSize:scale(18),
    fontStyle:'italic',
    marginVertical:scale(10),
    fontWeight:'600',
    marginBottom: scale(-100),
},
layout:{
    flex:1,
    marginHorizontal:scale(10),
    justifyContent:'flex-start',
    height:'80%'
},
scrollStyles: {
    flexGrow: 1,

  },
});