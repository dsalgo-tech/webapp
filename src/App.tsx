import { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import Footer from "./components/Footer/Footer";
import ContainerLayout from "./layouts/ContainerLayout/ContainerLayout";
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"

const App: FC = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ContainerLayout component={<Home />} />
          </Route>
          <Route exact path="/questions">
            <ContainerLayout component={<Questions />} />
          </Route>
          <Route exact path="/contact">
            <ContainerLayout component={<Contact />} />
          </Route>
          <Route exact path="/about">
            <ContainerLayout component={<About />} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
