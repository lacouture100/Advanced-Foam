import { createMuiTheme } from '@material-ui/core';
import { create } from 'domain';
import { purple,green } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette:{
        priamry : purple,
        secondary: green
    },
    status:{
        danger:'orange'
    }   

})

export default theme;