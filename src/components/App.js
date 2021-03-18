import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/styles.css";
import Home from "../components/pages/home/home";
import Characters from "../components/pages/characters/characters";
import MagicKnights from "../components/pages/magicKnights/magicKnights";
import Curiosities from "../components/pages/curiosities/curiosities";
import NotFound from "../components/pages/notFound/notfound.jsx";
import Header from "./header/header.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="mt-28 sm:mt-24 lg:mt-24">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/magic-knights" exact component={MagicKnights} />
          <Route path="/curiosities" exact component={Curiosities} />
          <Route component={() => <NotFound />} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
