import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { blue, grey, orange } from '@mui/material/colors'
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: orange[300],
          main: orange[500],
          dark: orange[700],
          darker: orange[900]
        },
        secondary:{
          light: orange[100],
          main: orange[300],
          dark: orange[700],
          darker: orange[900]
        },
        bgHeader:{
          main: grey[200]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          light: blue[300],
          main: blue[500],
          dark: blue[700],
          darker: blue[900]
        },
        secondary: {
          light: grey[300],
          main: grey[500],
          dark: grey[700],
          darker: grey[900]
        },
        bgHeader:{
          main: grey[900]
        }
      }
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          fontSize: '0,875rem',
          '.MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.main
            }
          }
        })
      }
    }
  }
})
export default theme
