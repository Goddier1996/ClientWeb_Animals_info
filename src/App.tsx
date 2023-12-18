import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./components/Menu";
import NotFoundPage from "./components/tools/NotFoundPage";
import Footer from "./components/Footer";


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