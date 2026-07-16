import React, { createContext, useState } from "react";

export const TemaContext = createContext();

export function TemaProvider({ children }) {

    const [tema, setTema] = useState("claro");

    function cambiarTema() {

        if (tema == "claro") {
            setTema("oscuro");
        } else {
            setTema("claro");
        }

    }

    return (
        <TemaContext.Provider value={{ tema, cambiarTema }}>
            {children}
        </TemaContext.Provider>
    );
}