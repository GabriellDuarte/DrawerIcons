import { Text, View } from 'react-native';
import estilo from "./estilo";
import {AntDesign} from '@expo/vector-icons';

export default function IconAntDesign() {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
         <Text style={estilo.familia_titulo}>dropbox</Text>
        <View style={estilo.lista_icones}>
            <AntDesign style={estilo.espaco_icones} name="dropbox" size={24} color="white" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>facebook-square</Text>
        <View style={estilo.lista_icones}>
          <AntDesign style={estilo.espaco_icones} name="facebook-square" size={24} color="black" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>dashboard</Text>
        <View style={estilo.lista_icones}>
          <AntDesign style={estilo.espaco_icones} name="dashboard" size={24} color="blue" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>zhihu</Text>
        <View style={estilo.lista_icones}>
          <AntDesign style={estilo.espaco_icones} name="zhihu" size={24} color="purple" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>file-markdown</Text>
        <View style={estilo.lista_icones}>
          <AntDesign style={estilo.espaco_icones} name="file-markdown" size={24} color="black" />
        </View> 
      </View>
    </View>
  );
}