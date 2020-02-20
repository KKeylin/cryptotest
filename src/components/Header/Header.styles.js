import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    display: 'block',
    textAlign: 'center',
    marginTop: 0,
    color: theme.palette.grey.main,
  },
  address: {
    color: theme.palette.text.primary,
  },
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
  },
  entry: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `1px solid ${theme.overrides.MuiTableCell.root.borderBottom}`,
    borderRadius: '4px',
    background: theme.palette.background.light,

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
  statsItem: {
    padding: theme.spacing(1, 3),

    '&:nth-child(4)': {
      paddingRight: 0,
    },

    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 1),
      fontSize: 12,
    },
  },
  refreshButton: {
    padding: theme.spacing(1),
    backgroundColor: 'transparent',
    margin: theme.spacing(0, 2),
    fontSize: 30,

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
