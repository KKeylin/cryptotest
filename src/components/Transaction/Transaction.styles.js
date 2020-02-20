import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  transactionName: {},
  fundsIn: {
    padding: theme.spacing(1),
    width: '100%',
    background: theme.palette.background.light,
    marginBottom: theme.spacing(1),

    '&:last-child': {
      marginBottom: 0,
    },
  },
  fundsOut: {
    padding: theme.spacing(1),
    width: '100%',
    background: theme.palette.background.light,
    textAlign: 'right',
    marginBottom: theme.spacing(1),

    '&:last-child': {
      marginBottom: 0,
    },
  },
  icon: {
    marginTop: '6px',
  },
  incomeBadge: {
    marginRight: theme.spacing(1),
  },
  iconsLine: {
    marginBottom: theme.spacing(1),
  },
  outcomeBadge: {
    background: '#f48fb1',
    color: '#000000',
    marginRight: theme.spacing(1),
  },
  outcomeIcon: {
    color: '#000000',
  },
  total: {
    textAlign: 'right',
    paddingBottom: theme.spacing(1),
    paddingtop: theme.spacing(1),
  },
  sum: {
    color: '#FFF',
    fontSize: '1.2rem',
  },
  primaryAddres: {
    wordWrap: 'break-word',
    textAlign: 'left',
    color: theme.palette.primary.main,
  },
  secondaryAddres: {
    wordWrap: 'break-word',
    textAlign: 'left',
    color: theme.palette.grey.main,
  },
  txValue: {
    textAlign: 'right',
  },
}));

export default useStyles;
