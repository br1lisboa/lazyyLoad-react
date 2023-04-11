import * as React from 'react';
import { Notification } from '../../components';
import { useState, useContext } from 'react';
import { AlertColor } from '@mui/material/Alert';

type ContextProps = {
    getError: (msg: string) => void,
    getSuccess: (msg: string) => void
}

const NotificationContext = React.createContext<ContextProps | null>(null)

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)

    const handleClose = () => {
        setOpen(false)
    }

    const getError = (msg: string) => {
        setSeverity("error")
        setOpen(true)
        setMessage(msg)
    }

    const getSuccess = (msg: string) => {
        setSeverity("success")
        setOpen(true)
        setMessage(msg)
    }

    const value = { getError, getSuccess }

    return (
        <NotificationContext.Provider value={value}>
            <Notification
                handleClose={handleClose}
                open={open}
                severity={severity}
                message={message}
            />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext)
    if (!context) throw new Error("No existe contexto")
    return context
}