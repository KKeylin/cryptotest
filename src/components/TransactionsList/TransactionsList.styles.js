import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    background: '#5c6674',
  },
  pagination: {
    borderBottom: '0 none',
  },
}));

export default useStyles;
