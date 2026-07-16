import { View, Text, Button } from "react-native";

export default function LoginScreen({ ingresar }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 20 }}>
        Pantalla de Login
      </Text>

      <Button
        title="Iniciar sesión"
        onPress={ingresar}
      />
    </View>
  );
}