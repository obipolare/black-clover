import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/styles.css";
import Home from "./pages/home/Home";
import Characters from "./pages/characters/Characters";
import Footer from "./footer/Footer";
import MagicKnights from "./pages/magicKnights/MagicKnights";
import Curiosities from "./pages/curiosities/Curiosities";
import NotFound from "../components/pages/notFound/notfound.jsx";
import Header from "./header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="mt-12 sm:mt-16 lg:mt-16 bg-gray-50">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/magic-knights" exact component={MagicKnights} />
          <Route path="/curiosities" exact component={Curiosities} />
          <Route component={() => <NotFound />} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
