package com.management.BloodDonationManagementSystem.doctor;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="doctor")
@Entity
public class Doctor {
   
	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY)  Long doctorId;
	private String doctorName;
	private String hospitalName;
	private int Age;
	private int noOfCases;

	
	Doctor(){}
	Doctor(String doctorName,String hospitalName,int Age,int noOfCases){
		this.doctorName = doctorName;	
		this.hospitalName = hospitalName;
		this.Age = Age;
		this.noOfCases = noOfCases;
	}
	
	public Long getDoctorId() {
		return doctorId;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public String getHospitalName() {
		return hospitalName;
	}
	public int getAge() {
		return Age;
	}
	public int getNoOfCases() {
		return noOfCases;
	}
	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;	
	}
	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}
	public void setAge(int Age) {
		this.Age=Age;
	}
	public void setNoOfCases(int noOfCases) {
		this.noOfCases=noOfCases;
	}
	
	
	
}
