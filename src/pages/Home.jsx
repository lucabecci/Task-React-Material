import { Button, Container, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "../style/Styles";
import { Fragment, useState } from "react";
import Main from "../components/information/Main";

const Home = () => {
  const [primary, setPrimary] = useState('contained')
  const [second, setSecond] = useState('outlined')
  const classes = useStyles();

  const changeState = (e) => {
    e.preventDefault()
    if(primary === 'contained'){
      setPrimary('outlined')
      setSecond('contained')
      return
    }else {
      setPrimary('contained')
      setSecond('outlined')
      return
    }
  }
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to my task app with Material UI
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <div className={classes.homeButtons}>
          <Grid container spacing={2} justify="center" >
            <Grid item>
            <Button 
                variant={primary}
                color="primary" 
                onClick={(e) => changeState(e)} 
              >Home Section</Button>
            </Grid>
            <Grid item>
              <Button 
                variant={second}
                color="primary" 
                onClick={(e) => changeState(e)} 
              >Task Section</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Divider
        className={classes.divider}
      ></Divider>
      <Main/>
    </Fragment>
  );
};

export default Home;
