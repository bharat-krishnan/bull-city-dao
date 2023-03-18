import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette:{
        background: {
            default: 
            // '#1652f0'
            '#ffffff'
            // '#FAFAFB'
          },
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#1652f0',
            contrastText: '#ffffff'
        },
        grey: {
            light: '#ffa726',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },


    },
    typography: {
        fontFamily: [
         'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
    },
    components:{
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: 130,
                    minHeight: 130,
                    disableGutter: true
                },
            }
        }

    },


})

export default theme