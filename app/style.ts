import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    treinoTitle: {
      color: '#34376c',
      fontSize: 22,
      paddingTop: 10,
      paddingBottom: 10,
      textTransform: 'uppercase',
    },
    link:{
      height: 80,
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex'
    }
  })