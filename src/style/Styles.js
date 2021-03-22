import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconNav: {
    marginRight: theme.spacing(1),
  },
  mainContent: {
    backgroundColor: "#fffffe",
    padding: theme.spacing(8, 0, 8),
  },
  homeButtons: {
    marginTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(8),
  },
  footer: {
    backgroundColor: "#ffff33",
  },
  images:{
    [theme.breakpoints.down('xs')]:{
      height: '100%',
      width: '100%',
    },
    width: '600px',
    height: '470px'
  },
}));

export default useStyles;
