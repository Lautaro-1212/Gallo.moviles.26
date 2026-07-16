import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import DrawerNavigator from "./navigation/DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {login ? (
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
          />
        ) : (
          <Stack.Screen name="Login">
            {() => (
              <LoginScreen ingresar={() => setLogin(true)} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
