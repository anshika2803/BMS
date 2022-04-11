import React, { Component } from "react";
import DoctorService from "../services/DoctorService";

export default class Doctor extends Component {
  constructor(props) {
    super(props)

    this.state = {
        doctors: [],
        activePage: 15

    }
    this.addDoctor = this.addDoctor.bind(this);
    this.editDoctor= this.editDoctor.bind(this);
    this.deleteDoctor = this.deleteDoctor.bind(this);
  }
  deleteDoctor(doctorId){
    DoctorService.deleteDoctor(doctorId).then( res => {
        this.setState({doctors: this.state.doctors.filter(doctor => doctor.doctorId !== doctorId)});
    });
}
  editDoctor(doctorId){
      this.props.history.push(`/add-doctor/${doctorId}`);
  }
  

componentDidMount(){
  DoctorService.getDoctors().then((res) => {
          this.setState({ doctors: res.data});
      console.log(this.state.doctors);
  });
}
addDoctor(){
  this.props.history.push('/add-doctor/_add');
}
  render() {
    return (
      <div className="mt-40 px-auto lg:px-40">
        <div className="my-4 flex justify-center items-center text-2xl font-medium">
          <h1>Doctors</h1>
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
                Name
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Hospital
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
                Patients
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
                           this.state.doctors.map(
                               doctor =>
                               <tr key = {doctor.doctorId}>
                                   <td>{ doctor.doctorId }</td>
                                   <td>{ doctor.doctorName}</td>
                                   <td>{ doctor.hospitalName}</td>
                                   <td>{ doctor.Age}</td>
                                   <td>{ doctor.noOfCases}</td>
                                   <td>
                                   <button onClick={ () => this.editDoctor(doctor.doctorId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDoctor(doctor.doctorId)} className="btn btn-danger">Delete </button>

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
