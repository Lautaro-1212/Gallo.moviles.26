import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthProvider, AuthContext } from "./AuthContext";
import { TemaProvider, TemaContext } from "./TemaContext";

function PantallaLogin() {

    const { login } = useContext(AuthContext);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Text>Pantalla Login</Text>

            <Button
                title="Iniciar Sesión"
                onPress={login}
            />

        </View>
    );
}

function PantallaInicio() {

    const { usuario, logout } = useContext(AuthContext);

    const { tema, cambiarTema } = useContext(TemaContext);

    return (

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: tema == "claro" ? "white" : "black",
            }}
        >

            <Text
                style={{
                    color: tema == "claro" ? "black" : "white",
                    marginBottom: 20,
                }}
            >
                Bienvenido {usuario.nombre}
            </Text>

            <Button
                title="Cambiar Tema"
                onPress={cambiarTema}
            />

            <View style={{ height: 15 }} />

            <Button
                title="Cerrar Sesión"
                onPress={logout}
            />

        </View>

    );
}

function AppPrincipal() {

    const { usuario } = useContext(AuthContext);

    if (usuario == null) {
        return <PantallaLogin />;
    }

    return <PantallaInicio />;
}

export default function App() {

    return (

        <TemaProvider>

            <AuthProvider>

                <AppPrincipal />

            </AuthProvider>

        </TemaProvider>

    );
}
