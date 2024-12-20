import React from "react"

export interface GlobalContextProps {
    children: React.ReactNode
}
export interface UsuarioProps {
        name?: string
        photo?: string
        capa?: string | undefined
}
export interface step{
    step:string
}
export interface ApiResponse {
    usuarioData: [string, string][];
}

export interface GlobalContextValue {
    usuario: UsuarioProps;
    setUsuario: React.Dispatch<React.SetStateAction<UsuarioProps>>;
    step: step;
    setStep: React.Dispatch<React.SetStateAction<step>>;
}
export interface TreinoType{
    image:string,
    title:string,
    series:number,
    performanceMin:number,
    performanceMax:number,
    sections:number,
    sectionMax:number,
    lastUpdate?:Date | string,
    planilha?:string,
    linha?:number
}