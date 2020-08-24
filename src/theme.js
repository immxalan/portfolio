import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#40c4ff",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme