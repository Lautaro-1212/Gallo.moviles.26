import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function InicioScreen({ navigation }) {
    const producto = {nombre: 'Linterna', 
      precio: 250, 
      imagen: 'https://imgs.search.brave.com/d0sCiRtobryLlGKF8tB7f0LNf-petMaH68ZpDQLfWv8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/NjU0LzY5NC9zbWFs/bC9mbGFzaGxpZ2h0/LW5pZ2h0LWxpZ2h0/LXNhZmV0eS1pbi10/aGUtZGFyay1jYW1w/aW5nLXRyYW5zcGFy/ZW50LWJhY2tncm91/bmQtZnJlZS1wbmcu/cG5n',
      descripcion:'Linterna LED de alta potencia, ideal para camping, cortes de luz y actividades al aire libre.',
      stock:15,
      categoria:'Camping'
    }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Todos nuestros productos</Text>
      
      <View>
          <View style={{flex: 1, backgroundColor: 'red', padding: 30, alignItems:"center"}}>
            <Text style={{fontSize:20, color:'white'}}>Linterna</Text>

            <Image
              source={{uri: 'https://imgs.search.brave.com/d0sCiRtobryLlGKF8tB7f0LNf-petMaH68ZpDQLfWv8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/NjU0LzY5NC9zbWFs/bC9mbGFzaGxpZ2h0/LW5pZ2h0LWxpZ2h0/LXNhZmV0eS1pbi10/aGUtZGFyay1jYW1w/aW5nLXRyYW5zcGFy/ZW50LWJhY2tncm91/bmQtZnJlZS1wbmcu/cG5n'}}
              style={{width: 150, height:150}}
            />

            <Button
              title="Ver producto"
              onPress={() => navigation.navigate("Detalle", {datos: producto})}
            />
        </View>
      </View> 
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