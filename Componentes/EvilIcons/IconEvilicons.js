import { Text, View } from 'react-native';
import estilo from "./estilo";
import { EvilIcons} from '@expo/vector-icons';

export default function IconEvilicons() {
  return (
    <View style={estilo.container}>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>bell</Text>
        <View style={estilo.lista_icones}>
          <EvilIcons style={estilo.espaco_icones} name="bell" size={24} color="white" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>cart</Text>
        <View style={estilo.lista_icones}>
          <EvilIcons style={estilo.espaco_icones} name="cart" size={24} color="black" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>chevron-down</Text>
        <View style={estilo.lista_icones}>
          <EvilIcons style={estilo.espaco_icones} name="chevron-down" size={24} color="blue" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>credit-card</Text>
        <View style={estilo.lista_icones}>
          <EvilIcons style={estilo.espaco_icones} name="credit-card" size={24} color="purple" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>eye</Text>
        <View style={estilo.lista_icones}>
          <EvilIcons style={estilo.espaco_icones} name="eye" size={24} color="yellow" />
        </View> 
      </View>
    </View>
  );
}
