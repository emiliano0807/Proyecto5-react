import { createContext, useState } from "react";


export const AppContext = createContext();

const users = [
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Ana' },
    { id: 3, name: 'Luis' },
]
const allTasks = {
    1:["Comprar"],
    2: ["Pasear al Perro", "Estuduiar React", "Tomar Cursos de Python"],
}


export const AppProvider = ({children})=>{
    const [currentUserId, setCurrentUserId] = useState(1);
    const currentUser = users.find((user)=> user.id == currentUserId);
    const tasks = allTasks[currentUserId] || [];

    const datosCompartidos = {
        users,
        currentUserId,
        setCurrentUserId,
        currentUser,
        tasks,
    }
    return (
        <AppContext.Provider value={datosCompartidos}>
            {children}
        </AppContext.Provider>
    )
}