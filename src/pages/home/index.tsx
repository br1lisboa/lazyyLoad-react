import { Container, Button } from '@mui/material';
import { HeaderComponent } from '../../components/Header/index';

export const HomePage: React.FC<{}> = () => {
    return (
        <Container maxWidth="xl">
            <HeaderComponent
                title='Hola'
                description='Bienvenido'
                element={<Button
                    variant='contained'
                    
                >
                    Continuar
                </Button>}
            />
        </Container>
    )
}

