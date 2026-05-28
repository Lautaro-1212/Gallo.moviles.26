import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },

    tamanio:{    
        width:200,
        height:200,
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
        <View style={style.container}>
            <Caja color="verde" apagado='azul'/>
            <Caja color="rojo" apagado='azul'/>
            <Caja color="azul" apagado='verde'/>
        </View>
    );
}