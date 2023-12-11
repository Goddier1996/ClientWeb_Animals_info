import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./components/Menu";
import Fotter from "./components/Fotter";
import  NotFoundPage  from "./components/tools/NotFoundPage";
import SearchAnimals from "./components/search/SearchAnimals";


function App() {
  return (
    <BrowserRouter>
      
      <Menu />

      <Switch>
        <SearchAnimals />
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>

      <Fotter />

    </BrowserRouter>
  );
}

export default App;