import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageWrapper: {
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
  },
  mainContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '100vh',
    height: '100%',
    width: '100%',
  },
}));

export default useStyles;
