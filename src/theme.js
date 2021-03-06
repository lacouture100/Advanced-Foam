import { createMuiTheme } from '@material-ui/core';
import { create } from 'domain';
import { purple,deepPurple } from '@material-ui/core/colors';

// Material UI theme definition

const theme = createMuiTheme({
    palette:{
        primary : purple,
        secondary: deepPurple
    },
    status:{
        danger:'orange'
    }   

})

export default theme;