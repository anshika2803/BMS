import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import PatientService from '../services/PatientService';

export default class CreatePatient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientId: this.props.match.params.patientId,
            patientName: '',
            Age: '',
            Gender: '',
            bloodType:'',
            RHType:'',
            caseDetails:'',
            dateRequired:'',
            caseStatus:'',
            ouncesOfBloodRequired:''     

        }
        this.changePatientNameHandler = this.changePatientNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeBloodTypeHandler = this.changeBloodTypeHandler.bind(this);
        this.changeRHTypeHandler = this.changeRHTypeHandler.bind(this);
        this.changeCaseDetailsHandler = this.changeCaseDetailsHandler.bind(this);
        this.changeDateRequiredHandler = this.changeDateRequiredHandler.bind(this);
        this.changeCaseStatusHandler = this.changeCaseStatusHandler.bind(this);
        this.changeOuncesOfBloodRequired = this.changeOuncesOfBloodRequired.bind(this);
        this.saveOrUpdatePatient = this.saveOrUpdatePatient.bind(this);
    }
    componentDidMount(){

        if(this.state.patientId === '_add'){
            return
        }else{
        PatientService.getPatientById(this.state.patientId).then((res) =>{
            let patient = res.data;
            this.setState({patientName: patient.patientName,
                Age:patient.Age,
                Gender:patient.Gender,
                bloodType:patient.bloodType,
                RHType:patient.RHType,
                caseDetails:patient.caseDetails,
                dateRequired:patient.dateRequired,
                caseStatus:patient.caseStatus,
                ouncesOfBloodRequired:patient.ouncesOfBloodRequired
            });
        });
    }
}
    saveOrUpdatePatient = (e) => {
        e.preventDefault();
        let patient = {patientName: this.state.patientName,Age: this.state.Age,Gender: this.setState.Gender,bloodType:this.setState.bloodType,RHType:this.setState.RHType,caseDetails:this.setState.caseDetails,dateRequired:this.setState.dateRequired,caseStatus:this.setState.caseStatus,ouncesOfBloodRequired:this.state.changeOuncesOfBloodRequired};
        console.log('patient => ' + JSON.stringify(patient));

        
        if(this.state.patientId === '_add'){
            PatientService.createPatient(patient).then(res =>{
                this.props.history.push('/patient');
            });
        }else{
            PatientService.updatePatient(patient, this.state.patientId).then( res => {
                this.props.history.push('/patient');
            });
        }
    }
    changePatientNameHandler= (event) => {
        this.setState({patientName: event.target.value});
    }
    
    changeAgeHandler = (event) =>{
        this.setState({Age:event.target.value});
    }
    changeGenderHandler = (event) =>{
        this.setState({Gender:event.target.value});
    }
    changeBloodTypeHandler = (event) =>{
        this.setState({bloodType:event.target.value});
    }
    changeRHTypeHandler = (event) =>{
        this.setState({RHType:event.target.value});
    }
    changeCaseDetailsHandler= (event) => {
        this.setState({caseDetails: event.target.value});
    }
    changeDateRequiredHandler= (event) => {
        this.setState({dateRequired: event.target.value});
    }
    changeCaseStatusHandler= (event) => {
        this.setState({caseStatus: event.target.value});
    }
    changeOuncesOfBloodRequired = (event) =>{
        this.setState({ouncesOfBloodRequired:event.target.value});
    }
    cancel(){
        this.props.history.push('/patient');
    }
    getTitle(){
        if(this.state.patientId === '_add'){
            return <h3 className="text-center">Add Patient</h3>
        }else{
            return <h3 className="text-center">Update Patient</h3>
        }
    }
    render() {
        return (
            <div>
                <Navbar/>
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
                                            <label> Patient Name: </label>
                                            <input placeholder="Patient Name" name="Patient Name" className="form-control" 
                                                value={this.state.patientName} onChange={this.changePatientNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="Age" className="form-control" 
                                                value={this.state.Age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="Gender" className="form-control" 
                                                value={this.state.Gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Blood Type: </label>
                                            <input placeholder="Blood Type" name="Blood Type" className="form-control" 
                                                value={this.state.bloodType} onChange={this.changeBloodTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> RH Type: </label>
                                            <input placeholder="RH Type" name="RH Type" className="form-control" 
                                                value={this.state.RHType} onChange={this.changeRHTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Case Details: </label>
                                            <input placeholder="Case Details" name="Case Details" className="form-control" 
                                                value={this.state.caseDetails} onChange={this.changeCaseDetailsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date Required: </label>
                                            <input placeholder="Date Required" name="Date Required" className="form-control" 
                                                value={this.state.dateRequired} onChange={this.changeDateRequiredHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Case Status: </label>
                                            <input placeholder="Case Status" name="Case Status" className="form-control" 
                                                value={this.state.caseStatus} onChange={this.changeCaseStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ounces Of Blood Required: </label>
                                            <input placeholder="Ounces Of Blood Required" name="Ounces Of Blood Required" className="form-control" 
                                                value={this.state.ouncesOfBloodRequired} onChange={this.changeOuncesOfBloodRequiredHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePatient}>Save</button>
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
