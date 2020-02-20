import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@keyframes ldsEllipsis1': {
    from: { transform: 'scale(0)', },
    to: { transform: 'scale(1)', }
  },
  '@keyframes ldsEllipsis2': {
    from: { transform: 'translate(0, 0)', },
    to: { transform: 'translate(19px, 0)', }
  },
  '@keyframes ldsEllipsis3': {
    from: { transform: 'scale(1)', },
    to: { transform: 'scale(0)', }
  },
  overlay: {
    backgroundColor: fade(theme.palette.background.light, 0.9),
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  ldsEllipsis: {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '64px',
    height: '64px',

    '& div': {
        position: 'absolute',
        top: '27px',
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        background: '#fff',
        animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',

        '&:nth-child(1)': {
          left: '6px',
          animation: '$ldsEllipsis1 0.6s infinite',
        },
        '&:nth-child(2)': {
          left: '6px',
          animation: '$ldsEllipsis2 0.6s infinite',
        },
        '&:nth-child(3)': {
          left: '26px',
          animation: '$ldsEllipsis2 0.6s infinite',
        },
        '&:nth-child(4)': {
          left: '45px',
          animation: '$ldsEllipsis3 0.6s infinite',
        },
      }
  },
}));

export default useStyles;
