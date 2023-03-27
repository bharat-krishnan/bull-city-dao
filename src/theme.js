import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette:{
        background: {
            default: '#ffffff'
          },
        primary: {
            main: '#ffffff',
            contrastText: '#1E1E24'
        },
        nav: {
            main: 'rgba(255, 255, 255, .8)',
            contrastText: 'rgba(15, 13, 13, 0.6)'
        },
        secondary: {
            main: '#1652f1',
            contrastText: '#ffffff'
        },
        grey: {
            light: '#EEEEEE',
            main: '#f57c00',
            dark: '#1E1E24',
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
                    minHeight: 130
                },
            }
        },
        MuiButtonBase: {
            defaultProps: {
              disableRipple: true, 
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            body::-webkit-scrollbar {
                display: none;
              }
            html {
                overflow: hidden;
                height: 100%;
            }
            
            body {
                height: 100%;
                overflow: auto;
            }
            `,
          },

    },


})

export default theme