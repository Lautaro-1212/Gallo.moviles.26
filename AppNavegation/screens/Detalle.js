import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function DetalleScreen({ route, navigation }) {
  const { datos } = route.params;

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: datos.imagen }}
        style={styles.imagen}
      />

      <Text style={styles.nombre}>
        {datos.nombre}
      </Text>

      <Text style={styles.precio}>
        $ {datos.precio}
      </Text>

      <View style={styles.info}>

        <Text style={styles.tituloInfo}>Descripción</Text>

        <Text style={styles.texto}>
          {datos.descripcion}
        </Text>

        <Text style={styles.tituloInfo}>Stock</Text>

        <Text style={styles.texto}>
          {datos.stock}
        </Text>

        <Text style={styles.tituloInfo}>Categoría</Text>

        <Text style={styles.texto}>
          {datos.categoria}
        </Text>

      </View>

      <View style={styles.botones}>
        <Button
          title="Volver"
          onPress={() => navigation.goBack()}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    padding: 20,
  },

  imagen: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginTop: 20,
    marginBottom: 20,
  },

  nombre: {
    fontSize: 30,
    fontWeight: "bold",
  },

  precio: {
    fontSize: 28,
    color: "green",
    fontWeight: "bold",
    marginVertical: 15,
  },

  info: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },

  tituloInfo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  texto: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },

  botones: {
    width: "100%",
    marginTop: 30,
  },
});