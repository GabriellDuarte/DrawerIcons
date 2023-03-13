import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Entypo from './Componentes/Entypo/IconEntypo';
import Faether from './Componentes/Faether/IconFaether';
import IonIcons from './Componentes/IonIcons/IonIcons';
import IconAntDesign from './Componentes/AntDesign/IconAntDesign'
import IconEvilicons from './Componentes/EvilIcons/IconEvilicons';

const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Entypo' component={Entypo}/>
        <Drawer.Screen name='Faether' component={Faether}/>
        <Drawer.Screen name='IonIcons' component={IonIcons}/>
        <Drawer.Screen name='IconAntDesign' component={IconAntDesign}/>
        <Drawer.Screen name='IconEvilIcons' component={IconEvilicons}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}