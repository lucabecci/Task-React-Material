import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
import useStyles from "./style/Styles";
import theme from "./style/Theme";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Footer from "./components/Footer";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <main>
          <div className={classes.mainContent}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Task" component={Task} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
