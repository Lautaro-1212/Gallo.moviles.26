import { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        alignItems:'center',
        marginTop:Platform.OS === 'web' ? 300 : 200,
        marginBottom: Platform.OS === 'web' ? 0 : 100
    },

    tamanio:{    
        width:200,
        height:200,
        marginBottom: Platform.OS === 'web' ? 0 : 200
    },

    verde: {backgroundColor:'green'},

    blanco: {backgroundColor:'white'},

    azul: {backgroundColor:'blue'},

    rojo: {backgroundColor:'red'}
})

type cajasProps = {
    color: 'verde' | 'azul' | 'rojo',
    apagado: 'verde' | 'azul' | 'rojo'
}

function Caja({color, apagado}: cajasProps){
    const [activo, setActivo] = useState(true);
    return(
        <>
            <Pressable onPress={() => setActivo(!activo)}>
                <View style=
                    {   
                        [
                            style.tamanio, 
                            activo ? style[color] : style[apagado]
                        ]
                    }>
                </View>
            </Pressable>
        </>
    );
}

export default function App(){
    return(
        <ScrollView>
            <View style={style.container}>
                <Caja color="verde" apagado='azul'/>
                <Caja color="rojo" apagado='azul'/>
                <Caja color="azul" apagado='verde'/>
            </View>
        </ScrollView>
    );
}