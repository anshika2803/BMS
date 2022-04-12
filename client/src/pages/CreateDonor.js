import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import DonorService from '../services/DonorService';

export default class CreateDonor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            donorId: this.props.match.params.donorId,
            donorName: '',
            Age: '',
            Gender: '',
            bloodType:'',
            RHType:'',
            ouncesOfBloodCollected:''     

        }
        this.changeDonorNameHandler = this.changeDonorNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeBloodTypeHandler = this.changeBloodTypeHandler.bind(this);
        this.changeRHTypeHandler = this.changeRHTypeHandler.bind(this);
        this.changeOuncesOfBloodCollected = this.changeOuncesOfBloodCollected.bind(this);
        this.saveOrUpdateDonor = this.saveOrUpdateDonor.bind(this);
    }
    componentDidMount(){

        if(this.state.donorId === '_add'){
            return
        }else{
        DonorService.getDonorById(this.state.donorId).then((res) =>{
            let donor = res.data;
            this.setState({donorName: donor.donorName,
                Age:donor.Age,
                Gender:donor.Gender,
                bloodType:donor.bloodType,
                RHType:donor.RHType,
                ouncesOfBloodCollected:donor.ouncesOfBloodCollected
            });
        });
    }
}
    saveOrUpdateDonor = (e) => {
        e.preventDefault();
        let donor = {donorName: this.state.donorName,Age: this.state.Age,Gender: this.setState.Gender,bloodType:this.setState.bloodType,RHType:this.setState.RHType,ouncesOfBloodCollected:this.state.ouncesOfBloodCollected};
        console.log('donor => ' + JSON.stringify(donor));

        
        if(this.state.donorId === '_add'){
            DonorService.createDonor(donor).then(res =>{
                this.props.history.push('/donor');
            });
        }else{
            DonorService.updateDonor(donor, this.state.donorId).then( res => {
                this.props.history.push('/donor');
            });
        }
    }
    changeDonorNameHandler= (event) => {
        this.setState({donorName: event.target.value});
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
    changeOuncesOfBloodCollected = (event) =>{
        this.setState({ouncesOfBloodCollected:event.target.value});
    }
    cancel(){
        this.props.history.push('/donor');
    }
    getTitle(){
        if(this.state.donorId === '_add'){
            return <h3 className="text-center">Add Donor</h3>
        }else{
            return <h3 className="text-center">Update Donor</h3>
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
                                            <label> Donor Name: </label>
                                            <input placeholder="Donor Name" name="Donor Name" className="form-control" 
                                                value={this.state.donorName} onChange={this.changeDonorNameHandler}/>
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
                                            <label> Ounces Of Blood Collected: </label>
                                            <input placeholder="Ounces Of Blood Collected" name="Ounces Of Blood Collected" className="form-control" 
                                                value={this.state.ouncesOfBloodCollected} onChange={this.changeOuncesOfBloodCollectedHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDonor}>Save</button>
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
