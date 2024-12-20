import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      margin: 10
    },
    titleContainer: {
      margin:10
    },
    treinoTitle: {
      color: '#34376c',
      fontSize: 32,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    scrollContainer: {
      marginLeft: 10,
      marginRight: 10,
      height: '100%'
    },
    link:{
      height: 100,
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 8,
      justifyContent: 'center',
      marginBottom: 10,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      padding: 20
    },
    linkItem:{
      fontSize: 18,
      fontWeight: '500',
      color: '#34376c',
      textAlign: 'left'
    },
    treinoLabel:{
      fontWeight: 'bold'
    }
  })