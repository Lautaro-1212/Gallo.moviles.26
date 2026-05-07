import { ReactNode } from 'react';
import { Button, Image, Platform, ScrollView, Text, ToastAndroid, View } from 'react-native';

type cardProps = {
    Nombre: string,
    URL: string,
    X: number,
    Y: number,
    alertaBoton: string,
}

const mostrarMensaje = (mensaje: string) => {
    if(Platform.OS === 'android'){
        ToastAndroid.show(
            mensaje, 
            ToastAndroid.SHORT
        );
    } else {
        alert(mensaje);
    }
}

function Cards({Nombre, URL, X, Y, alertaBoton}: cardProps){
    return(
        <View>
            <Text style={{color:'white', fontSize:20,marginLeft:90}}>{Nombre}</Text>

            <Text>{"\n"}</Text>

            <Image
            source={{uri: URL}}
            style={{width:X, height: Y}}
            />

            <Text>{"\n"}</Text>

           <Button
            title='Enviar'
            onPress={() => mostrarMensaje(alertaBoton)}
            />
        </View>
    );
}

type contedorProps = {
    children: ReactNode,
    background: string,
    justify?: 'flex-start' | 'center' | 'flex-end'
}

function Contenedor({children, background, justify}: contedorProps){
    return(
        <View style={{backgroundColor: background, padding: 20, alignItems: justify, marginBottom: 20, marginTop: 20}}>
            {children}
        </View>
    );
}

export default function App(){
    return (
        <ScrollView>
        <View
            style = {{
                flex: 1, 
                justifyContent: 'center', 
                alignItems:'center'
            }}
        >
            <Contenedor background='cornflowerblue' justify='flex-start' >
                <Cards 
                Nombre='la pulga' 
                URL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
                X = {250}
                Y = {334}
                alertaBoton='El mejor del mundo'
                />
            </Contenedor>

            <Contenedor background='red' justify='center' >
                <Cards 
                Nombre='El rojo' 
                URL='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg/250px-Escudo_del_Club_Atl%C3%A9tico_Independiente.svg.png'
                X = {250}
                Y = {264}
                alertaBoton='El papá de racing'
                />
            </Contenedor>

            <Contenedor background='blue' justify='center' >
                <Cards 
                Nombre='Hielito 🤏' 
                URL='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Escudo_de_Racing_Club_%282014%29.svg/250px-Escudo_de_Racing_Club_%282014%29.svg.png'
                X = {250}
                Y = {304}
                alertaBoton='El mas frio de Avellaneda'
                />
            </Contenedor>
        </View>
        </ScrollView>
    );
}