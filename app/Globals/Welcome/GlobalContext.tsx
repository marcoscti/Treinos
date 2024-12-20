import React, { useState, createContext, useEffect } from "react"
import { ApiResponse, GlobalContextProps, GlobalContextValue, step, UsuarioProps, } from "@/app/types"
import { getApiData } from "../utils/api"


export const GlobalContext = createContext<GlobalContextValue | undefined>(undefined)

export default function GlobalContextProvider({ children }: GlobalContextProps) {
    const [usuario, setUsuario] = useState<UsuarioProps>({
        name: "Atualizando...", photo: "Atualizando...", capa: "Atualizando...",
    })
    const [step, setStep] = useState<step>({ step: "global" })
    
    useEffect(() => {
        getApiData()
            .then((data: ApiResponse) => {
                setUsuario({
                    name: data.usuarioData[0][1],
                    photo: data.usuarioData[1][1],
                    capa: data.usuarioData[2][1],
                })
                setStep({ step: "global" })
            })
            .catch((err) => console.error("Error fetching user data:", err))
    }, [])

    return (
        <GlobalContext.Provider value={{ usuario, setUsuario, step, setStep }}>
            {children}
        </GlobalContext.Provider>
    )
}
