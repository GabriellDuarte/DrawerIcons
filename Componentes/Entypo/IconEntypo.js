import { Text, View } from "react-native";;
import estilo from "./estilo";
import { Entypo} from '@expo/vector-icons';

export default function IconEntypo() {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>arrow-long-up</Text>
        <View style={estilo.lista_icones}>
          <Entypo style={estilo.espaco_icones} name="arrow-long-up" size={24} color="white" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>app-store</Text>
        <View style={estilo.lista_icones}>
          <Entypo style={estilo.espaco_icones} name="app-store" size={24} color="black" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>bowl</Text>
        <View style={estilo.lista_icones}>
          <Entypo style={estilo.espaco_icones} name="bowl" size={24} color="blue" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>qq</Text>
        <View style={estilo.lista_icones}>
          <Entypo style={estilo.espaco_icones} name="qq" size={24} color="purple" />
        </View> 
      </View>

      <View style={estilo.familia_icones}>
      <Text style={estilo.familia_titulo}>progress-empty</Text>
        <View style={estilo.lista_icones}>
          <Entypo style={estilo.espaco_icones} name="progress-empty" size={24} color="yellow" />
        </View> 
      </View>
    </View>
  );
}