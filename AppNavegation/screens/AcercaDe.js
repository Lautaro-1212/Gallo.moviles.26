import { View, Text, Button, StyleSheet,Image } from "react-native";

export default function AcercaDeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vacio</Text>
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