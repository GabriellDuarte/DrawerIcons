import { Text, View } from "react-native";;
import estilo from "./estilo";
import {Feather} from '@expo/vector-icons';

export default function IconFaether() {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>tv</Text>
        <View style={estilo.lista_icones}>
          <Feather style={estilo.espaco_icones} name="tv" size={24} color="white" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>trash</Text>
        <View style={estilo.lista_icones}>
          <Feather style={estilo.espaco_icones} name="trash" size={24} color="black" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>toggle-left</Text>
        <View style={estilo.lista_icones}>
          <Feather style={estilo.espaco_icones} name="toggle-left" size={24} color="blue" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>trello</Text>
        <View style={estilo.lista_icones}>
          <Feather style={estilo.espaco_icones} name="trello" size={24} color="purple" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>tool</Text>
        <View style={estilo.lista_icones}>
          <Feather style={estilo.espaco_icones} name="tool" size={24} color="yellow" />
        </View> 
      </View>
    </View>
  );
}