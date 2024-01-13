import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./components/heater/Menu";
import NotFoundPage from "./components/tools/pageNotFound/NotFoundPage";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <BrowserRouter>
      
      <Menu />

      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Switch>

        <div className="push"></div>
      </main>

      <Footer />

    </BrowserRouter>
  );
}


export default App;