import { Grid, Button, Container } from '@mui/material';
import { Stack } from '@mui/system';
import { useNotification } from '../../context/Notification/notification.context';
// import { useNotification } from '../../context/Notification/notification.context';

export const GestionRemitos: React.FC<{}> = () => {

    const { getError, getSuccess } = useNotification()

    function handleClickErr() {
        getError("Hola Mundo")
    }

    function handleClickSucc() {
        getSuccess("Todo ok!")
    }

    return (
        <Container>
            <Grid container direction='row' justifyContent='flex-end' sx={{ marginTop: '20px' }}>
                <Stack direction='row' spacing={2}>
                    <Grid item>
                        <Button
                            color='inherit'
                            variant='contained'
                            onClick={handleClickErr}
                        >
                            Buscar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button color='inherit' variant='contained' onClick={handleClickSucc}>
                            Traer remitos sucursal
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button color='inherit' variant='contained'>
                            Confirmar recepcion
                        </Button>
                    </Grid>

                </Stack>
            </Grid>
        </Container>
    )
}
