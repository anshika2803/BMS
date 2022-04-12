import React, { Component } from "react";
import PatientService from "../services/PatientService";

export default class Patient extends Component {
  constructor(props) {
    super(props)

    this.state = {
        patients: [],
        activePage: 15

    }
    this.addPatient = this.addPatient.bind(this);
    this.editPatient= this.editPatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
  }
  deletePatient(patientId){
    PatientService.deletePatient(patientId).then( res => {
        this.setState({patients: this.state.patients.filter(patient => patient.patientId !== patientId)});
    });
}
  editPatient(patientId){
      this.props.history.push(`/add-patient/${patientId}`);
  }
  

componentDidMount(){
  PatientService.getPatients().then((res) => {
          this.setState({ patients: res.data});
      console.log(this.state.patients);
  });
}
addPatient(){
  this.props.history.push('/add-patient/_add');
}
  render() {
    return (
      <div className="mt-40 px-auto lg:px-40">
        <div className="my-4 flex justify-center items-center text-2xl font-medium">
          <h1>PATIENTS</h1>
        </div>
        <div className = "row">
            <button className="" onClick={this.addPatient}> +Add</button>
          </div>
        <table className="min-w-full divide-y divide-gray-200 h-full ">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Patient Name
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Gender
              </th>

              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Blood Type
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                RH Type
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Case Details
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Date Required
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Case Status
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Ounces of Blood Required
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
          {
                           this.state.patients.map(
                               patient =>
                               <tr key = {patient.patientId}>
                                   <td>{ patient.patientId }</td>
                                   <td>{ patient.patientName}</td>
                                   <td>{ patient.age}</td>
                                   <td>{ patient.gender}</td>
                                   <td>{ patient.bloodType}</td>
                                   <td>{ patient.rhtype}</td>
                                   <td>{ patient.caseDetails}</td>
                                   <td>{ patient.dateRequired}</td>
                                   <td>{ `${patient.caseStatus}`}</td>
                                   <td>{ patient.ouncesOfBloodRequired}</td>
                                   <td>
                                   <button onClick={ () => this.editPatient(patient.patientId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deletePatient(patient.patientId)} className="btn btn-danger">Delete </button>

                                   </td>

                                   
                               </tr>
                           )
                       } 
          </tbody>
        </table>
        
      </div>
    );
  }
};
