import React, { Component } from 'react'
import DoctorService from '../services/DoctorService';
import Navbar from '../components/Navbar';

export default class CreateDoctor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            doctorId: this.props.match.params.doctorId,
            doctorName: '',
            hospitalName: '',
            Age:'',
            noOfCases:''


        }
        this.changeDoctorNameHandler = this.changeDoctorNameHandler.bind(this);
        this.changeHospitalNameHandler = this.changeHospitalNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeNoOfCasesHandler = this.changeNoOfCasesHandler.bind(this);
        this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
    }
    componentDidMount(){

        if(this.state.doctorId === '_add'){
            return
        }else{
        DoctorService.getDoctorById(this.state.doctorId).then((res) =>{
            let doctor = res.data;
            this.setState({doctorName: doctor.doctorName,
                hospitalName: doctor.hospitalName,
                Age:doctor.Age,
                noOfCases:doctor.noOfCases
            });
        });
    }
}
    saveOrUpdateDoctor = (e) => {
        e.preventDefault();
        let doctor = {doctorName: this.state.doctorName, hospitalName: this.state.hospitalName, Age: this.state.Age,noOfCases:this.state.noOfCases};
        console.log('doctor => ' + JSON.stringify(doctor));

        
        if(this.state.doctorId === '_add'){
            DoctorService.createDoctor(doctor).then(res =>{
                this.props.history.push('/doctor');
            });
        }else{
            DoctorService.updateDoctor(doctor, this.state.doctorId).then( res => {
                this.props.history.push('/doctor');
            });
        }
    }
    changeDoctorNameHandler= (event) => {
        this.setState({doctorName: event.target.value});
    }
    changeHospitalNameHandler= (event) => {
        this.setState({hospitalName: event.target.value});
    }
    changeAgeHandler = (event) =>{
        this.setState({Age:event.target.value});
    }
    changeNoOfCasesHandler = (event) =>{
        this.setState({noOfCases:event.target.value});
    }
    cancel(){
        this.props.history.push('/doctor');
    }
    getTitle(){
        if(this.state.doctorId === '_add'){
            return <h3 className="text-center">Add Doctor</h3>
        }else{
            return <h3 className="text-center">Update Doctor</h3>
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <br></br>
                   <div className = "container">
                   
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Doctor Name: </label>
                                            <input placeholder="Doctor Name" name="Doctor Name" className="form-control" 
                                                value={this.state.doctorName} onChange={this.changeDoctorNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Hospital Name: </label>
                                            <input placeholder="Hospital Name" name="Hospital Name" className="form-control" 
                                                value={this.state.hospitalName} onChange={this.changeHospitalNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="Age" className="form-control" 
                                                value={this.state.Age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number Of Cases: </label>
                                            <input placeholder="Number Of Cases" name="No Of Cases" className="form-control" 
                                                value={this.state.noOfCases} onChange={this.changeNoOfCasesHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDoctor}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
            </div>
        )
    }
}
