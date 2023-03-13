import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    familia_icones:{
      backgroundColor: 'pink',
      borderRadius: 5,
      width: '90%',
      marginBottom: 15,
      padding: 10,
      flexDirection: 'row',
    },
    familia_titulo:{
      fontSize: 30,
      borderStyle: 'solid',
      borderColor: '#222',
    },
    espaco_icones:{
      margin: 5
    }
  });

export default estilo;