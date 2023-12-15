import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./components/Menu";
import  NotFoundPage  from "./components/tools/NotFoundPage";


function App() {
  
  return (
    <BrowserRouter>
      
      <Menu />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;