import {Text, View } from 'react-native';
import estilo from "./estilo";
import {Ionicons} from '@expo/vector-icons';

export default function IonIcons() {
  return (
    <View style={estilo.container}>
    <View style={estilo.familia_icones}>
    <Text style={estilo.familia_titulo}>albums</Text>
      <View style={estilo.lista_icones}>
        <Ionicons style={estilo.espaco_icones} name="albums" size={24} color="white" />
      </View> 
    </View>

    <View style={estilo.familia_icones}>
    <Text style={estilo.familia_titulo}>american-football</Text>
      <View style={estilo.lista_icones}>
        <Ionicons style={estilo.espaco_icones} name="american-football-outline" size={24} color="black" />
      </View> 
    </View>

    <View style={estilo.familia_icones}>
    <Text style={estilo.familia_titulo}>aperture</Text>
      <View style={estilo.lista_icones}>
        <Ionicons style={estilo.espaco_icones} name="aperture" size={24} color="blue" />
      </View> 
    </View>

    <View style={estilo.familia_icones}>
    <Text style={estilo.familia_titulo}>apps-sharp</Text>
      <View style={estilo.lista_icones}>
        <Ionicons style={estilo.espaco_icones} name="apps-sharp" size={24} color="purple" />
      </View> 
    </View>

    <View style={estilo.familia_icones}>
    <Text style={estilo.familia_titulo}>archive-sharp</Text>
      <View style={estilo.lista_icones}>
        <Ionicons style={estilo.espaco_icones} name="archive-sharp" size={24} color="yellow" />
      </View> 
    </View>
  </View>
);
}

