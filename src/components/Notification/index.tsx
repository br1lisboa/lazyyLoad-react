import { Alert, Snackbar } from "@mui/material"
import { AlertColor } from "@mui/material/Alert"
import Typography from "@mui/material/Typography"

type NotificationProps = {
    open: boolean,
    message: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({ open, message, severity, handleClose }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={4000}
            open={open}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
            >
                <Typography>
                    {message}
                </Typography>
            </Alert>
        </Snackbar>
    )
}
