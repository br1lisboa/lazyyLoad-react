import { Container, Grid, Paper, Box, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNotification } from '../../context/Notification/notification.context';
import { LoginValidate } from '../../utils/yupValidations/validateForm';

type LoginType = {
    username: string
    password: string
}

export const Practice = () => {

    const { getError, getSuccess } = useNotification()

    const [loginData, setLoginData] = useState<LoginType>({
        username: '',
        password: ''
    })

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            /* copiame el argumento que ya esta escrito, logindata.. */
            ...loginData,
            /* lo nuevo va a ser el e.targt.name, le vamos a dar un name, que va a ser el e.target.value*/
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault()
        LoginValidate.validate(loginData)
            .then(() => {
                getSuccess(JSON.stringify(loginData))
            })
            .catch((error) => {
                getError(error.message)
            })
    }

    return (
        <Container maxWidth='sm'>
            <Grid container
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ minHeight: '90vh' }}
            >
                <Grid item>
                    <Paper sx={{ padding: '1.2em', borderRadius: "0.5em" }}>
                        <Typography variant={'h4'}>Iniciar sesion</Typography>
                        <Box component={'form'} onSubmit={handleSubmit}>
                            <TextField onChange={dataLogin} name='username' type="text" fullWidth label='email' sx={{ mt: 2, mb: 1.5 }} margin='normal' />
                            <TextField onChange={dataLogin} name='password' type="password" fullWidth label='password' sx={{ mt: 1.5, mb: 1.5 }} margin='normal' />
                            <Button fullWidth type={'submit'} color={'secondary'} variant={'contained'} sx={{ mt: 1.5, mb: 2.5 }}>Iniciar sesion</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    )
}
