import { createTheme } from '@mui/material';

export enum themePalette {
    BG = "#EDEEF5",
    MAIN_COLOR = "#f5f5f5",
    SECOND_COLOR = "#3f51b5",
    FONT_GLOBAL = "'JetBrains Mono', monospace",
    //Alert styles
    ERROR_MAIN = "#f44336",
    BG_EERROR_MAIN = "rgba(244,676,54,0.1)",
    SUCCES_MAIN = "#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"
}
const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: themePalette.BG
        },
        primary: {
            main: themePalette.MAIN_COLOR,
        },
        secondary: {
            main: themePalette.SECOND_COLOR
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em"
                }
            }
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: "0.8em",
                    fontSize: "1em"
                }
            },
            //Esto me permite apuntar a los estilos de un tipo de componente
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_EERROR_MAIN
                },
                standardSuccess: {
                    border: `1px solid ${themePalette.SUCCES_MAIN}`,
                    background: themePalette.BG_SUCCESS_MAIN
                }
            }
        }
    }
})

export default theme