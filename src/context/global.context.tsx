import * as React from 'react';
import { useNotification } from './Notification/notification.context';

type ContextProps = {
    useNotification: () => void
}

const GlobalContext = React.createContext<ContextProps | null>(null)

export const GlobalProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

    const value = { useNotification }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}