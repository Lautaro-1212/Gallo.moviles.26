import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import AcercaDeScreen from "../screens/AcercaDeScreen";
import SalirScreen from "../screens/SalirScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Principal"
        component={TabNavigator}
      />

      <Drawer.Screen
        name="Acerca de"
        component={AcercaDeScreen}
      />

      <Drawer.Screen
        name="Salir"
        component={SalirScreen}
      />
    </Drawer.Navigator>
  );
}