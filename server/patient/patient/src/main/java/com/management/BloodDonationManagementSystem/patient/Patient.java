package com.management.BloodDonationManagementSystem.patient;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="patient")
@Entity
public class Patient {
   
	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY)  Long patientId;
	private String patientName;
	private int Age;
	private String Gender;
	private String bloodType;
	private String RHType;
	private String caseDetails;
	private String dateRequired;
	private Boolean caseStatus;
	private int ouncesOfBloodRequired;

	
	Patient(){}
	Patient(String patientName,int Age,String Gender,String bloodType,String RHType,String caseDetails,String dateRequired,Boolean caseStatus,int ouncesOfBloodRequired){
		this.patientName = patientName;	
		this.Age = Age;
		this.Gender=Gender;
		this.bloodType = bloodType;
		this.RHType = RHType;
		this.caseDetails=caseDetails;
		this.dateRequired=dateRequired;
		this.caseStatus=caseStatus;
		this.ouncesOfBloodRequired = ouncesOfBloodRequired;
	}
	
	public Long getPatientId() {
		return patientId;
	}
	public String getPatientName() {
		return patientName;
	}
	public int getAge() {
		return Age;
	}
	public String getGender() {
		return Gender;
	}
	public String getBloodType() {
		return bloodType;
	}
	public String getRHType() {
		return RHType;
	}
	public String getCaseDetails() {
		return caseDetails;
	}
	public String getDateRequired() {
		return dateRequired;
	}
	public boolean getCaseStatus() {
		return caseStatus;
	}
	
	public int getOuncesOfBloodRequired() {
		return ouncesOfBloodRequired;
	}
	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;	
	}
	public void setAge(int Age) {
		this.Age=Age;
	}
	public void setGender(String Gender) {
		this.Gender=Gender;
	}
	public void setBloodType(String bloodType) {
		this.bloodType=bloodType;
	}
	public void setRHType(String RHType) {
		this.RHType = RHType;
	}
	public void setCaseDetails(String caseDetails) {
		this.caseDetails = caseDetails;
	}
	public void setDateRequired(String dateRequired) {
		this.dateRequired = dateRequired;
	}
	public void setCaseStatus(Boolean caseStatus) {
		this.caseStatus = caseStatus;
	}
	public void setOuncesOfBloodRequired(int ouncesOfBloodRequired) {
		this.ouncesOfBloodRequired=ouncesOfBloodRequired;
	}
	
	
	
}

