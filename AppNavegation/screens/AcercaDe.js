import { View, Text, Button, StyleSheet,Image } from "react-native";

export default function AcercaDeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Este es el trabajo 5 que consiste en utilizar React Navegation y route</Text>
      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    marginBottom: 20,
  },
});