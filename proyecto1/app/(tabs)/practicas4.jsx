import { useState } from 'react';
import { View, TextInput, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',       
    },
    
    formuario:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:300,
        marginBottom:250,
        backgroundColor:'white',
        padding:50,
        borderRadius:10,
    },

    texto:{
        fontSize:15
    },
})

function Positivo({nombre}){
   return(
        <Text style={{marginTop:20}}>Bienvenido {nombre}</Text>
   );
}

function Negativo(){
    return(
        <Text style={{marginTop:20}}>Contraseña incorrecta</Text>
    );
}

function Incompleto(){
    return(
        <Text style={{marginTop:20}}>Completar todos los campos</Text>
    );
}

export default function App() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [verficado, setVerificado] = useState(false);
  const contrasenia = '123';

  return(
    <View style={style.container }>
        <View style={style.formuario}>
            <Text style={style.texto}>Ingresá tu nombre:</Text>

            <TextInput
                style={{ borderWidth: 1, padding: 8, marginTop: 10, marginBottom:10 }}
                placeholder="Escribí aca"
                value={nombre}
                onChangeText={setNombre}
            />

            <Text style={style.texto}>Ingresa tu contraseña</Text>

            <TextInput
                style={{ borderWidth: 1, padding: 8, marginTop: 10 }}
                placeholder="Escribí aca"
                value={usuario}
                onChangeText={(usuario, nombre) => {
                    setUsuario(usuario);
                    setVerificado(usuario === contrasenia)
                }}
                secureTextEntry={true}
            />

            {
                nombre === "" || usuario === "" 
                    ? <Incompleto/> 
                    :verficado 
                        ? <Positivo nombre={nombre}/> 
                        : <Negativo/> 
            }
        </View>
    </View>
  );
}