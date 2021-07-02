import React from "react";
import {
  Container,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route
              path="/auth"
              exact
              component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
            />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
