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
    color: 'verde' | 'azul' | 'rojo'
}

function Caja({color}: cajasProps){
    const [activo, setActivo] = useState(false);
    return(
        <>
            <Pressable onPress={() => setActivo(!activo)}>
                <View style=
                    {   
                        [
                            style.tamanio, 
                            activo ? style.blanco : style[color]
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
            <Caja color="verde"/>
            <Caja color="rojo"/>
            <Caja color="azul"/>
        </View>
    );
}