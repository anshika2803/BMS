import Home from "./pages/Home";
import Donor from "./pages/Donor";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateDoctor from "./pages/CreateDoctor";
import CreateDonor from "./pages/CreateDonor";
import CreatePatient from "./pages/CreatePatient";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donor" exact component={Donor} />
          <Route path="/doctor" exact component={Doctor} />
          <Route path="/patient" exact component={Patient} />
          <Route path="/patient" exact component={Patient} />
          <Route path="/add-donor/:donorId" exact component={CreateDonor} />
          <Route path="/add-doctor/:doctorId" exact component={CreateDoctor} />
          <Route path="/add-patient/:patientId" exact component={CreatePatient} />


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
