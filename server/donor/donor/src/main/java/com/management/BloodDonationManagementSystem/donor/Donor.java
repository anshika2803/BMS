package com.management.BloodDonationManagementSystem.donor;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="donor")
@Entity
public class Donor {
   
	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY)  Long donorId;
	private String donorName;
	private int Age;
	private String Gender;
	private String bloodType;
	private String RHType;
	private int ouncesOfBloodCollected;

	
	Donor(){}
	Donor(String donorName,int Age,String Gender,String bloodType, String RHType,int ouncesOfBloodCollected){
		this.donorName = donorName;	
		this.Age = Age;
		this.Gender = Gender;
		this.bloodType = bloodType;
		this.RHType = RHType;
		this.ouncesOfBloodCollected = ouncesOfBloodCollected;
	}
	
	public Long getDonorId() {
		return donorId;
	}
	public String getDonorName() {
		return donorName;
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
	public int getOuncesOfBloodCollected() {
		return ouncesOfBloodCollected;
	}
	public void setDonorId(Long donorId) {
		this.donorId = donorId;
	}
	public void setDonorName(String donorName) {
		this.donorName = donorName;	
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
		this.RHType=RHType;
	}
	public void setOuncesOfBloodCollected(int ouncesOfBloodCollected) {
		this.ouncesOfBloodCollected=ouncesOfBloodCollected;
	}
		
}
