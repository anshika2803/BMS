import Home from "./pages/Home";
import Donor from "./pages/Donor";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donor" exact component={Donor} />
          <Route path="/doctor" exact component={Doctor} />
          <Route path="/patient" exact component={Patient} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
