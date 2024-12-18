import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    welcomeContainer: {
      position: 'relative',
      display: 'flex',
      height:200,
      width:'100%',
    },
    welcomeSubContainer:{
      position: 'absolute',
      width:'100%',
      display: 'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    imageBack:{
      width:'100%',
      height:200,
      objectFit:'cover'
    },
    welcomeText:{
      color:'#fff',
      textAlign:'center',
      padding:10,
      display:'flex',
      alignItems:'center',
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      width:250,
      zIndex:12,
      bottom:125,
      borderTopLeftRadius:150,
      borderTopRightRadius:150
    },
    userIcon:{
      height:80,
      width:80,
      borderRadius:50,
      objectFit:'cover'
    },
    userName:{
      fontWeight:500,
      color:'#fff',
      fontSize:16,
      marginTop:2
    }
  })