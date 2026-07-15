import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "../screens/Inicio";
import Detalle from "../screens/Detalle";
import AcercaDe from "../screens/AcercaDe";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Detalle" component={Detalle} />
        <Tab.Screen name="AcercaDe" component={AcercaDe} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}