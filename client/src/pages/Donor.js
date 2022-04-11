import React, { Component } from "react";
import DonorService from "../services/DonorService";

export default class Donor extends Component {
  constructor(props) {
    super(props)

    this.state = {
        donors: [],

    }
    this.addDonor = this.addDonor.bind(this);
    this.editDonor= this.editDonor.bind(this);
    this.deleteDonor = this.deleteDonor.bind(this);
  }
  deleteDonor(donorId){
    DonorService.deleteDonor(donorId).then( res => {
        this.setState({donors: this.state.donors.filter(donor => donor.donorId !== donorId)});
    });
}
  editDonor(donorId){
      this.props.history.push(`/add-donor/${donorId}`);
  }
  

componentDidMount(){
  DonorService.getDonors().then((res) => {
          this.setState({ donors: res.data});
      console.log(this.state.donors);
  });
}
addDonor(){
  this.props.history.push('/add-donor/_add');
}
  render() {
    return (
      <div className="mt-40 px-auto lg:px-40">
        <div className="my-4 flex justify-center items-center text-2xl font-medium">
          <h1>Donors</h1>
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
                Donor Name
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
              Ounces of Blood Collected
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
                           this.state.donors.map(
                               donor =>
                               <tr key = {donor.donorId}>
                                   <td>{ donor.donorId }</td>
                                   <td>{ donor.donorName}</td>
                                   <td>{ donor.Age}</td>
                                   <td>{ donor.Gender}</td>
                                   <td>{ donor.bloodType}</td>
                                   <td>{ donor.RHType}</td>
                                   <td>{ donor.ouncesOfBloodCollected}</td>
                                   <td>
                                   <button onClick={ () => this.editDonor(donor.donorId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDonor(donor.donorId)} className="btn btn-danger">Delete </button>

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
