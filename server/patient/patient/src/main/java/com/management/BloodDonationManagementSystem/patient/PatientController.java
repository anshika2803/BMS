package com.management.BloodDonationManagementSystem.patient;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private PatientRepository pt;
	
	// get all 
	@GetMapping("/patient")
	public List<Patient> getAllPatients(){
		return pt.findAll();
	}		
	
	// Create  rest API
	@PostMapping("/patient")
	public Patient pteatePatient(@RequestBody Patient patient) {
		return pt.save(patient);
	}
	
	// get  by id rest API
	@GetMapping("/patient/{patientId}")
	public ResponseEntity<Patient> getPatientById(@PathVariable Long patientId) {
		Patient patient = pt.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + patientId));
		return ResponseEntity.ok(patient);
	}
	
	// update  rest API
	
	@PutMapping("/patient/{patientId}")
	public ResponseEntity<Patient> updatePatient(@PathVariable Long patientId, @RequestBody Patient patientDetails){
		Patient patient = pt.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + patientId));
		
		patient.setPatientName(patientDetails.getPatientName());
    	patient.setAge(patientDetails.getAge());
    	patient.setGender(patientDetails.getGender());
    	patient.setBloodType(patientDetails.getBloodType());
    	patient.setRHType(patientDetails.getRHType());
    	patient.setCaseDetails(patientDetails.getCaseDetails());
    	patient.setDateRequired(patientDetails.getDateRequired());
    	patient.setCaseStatus(patientDetails.getCaseStatus());
    	patient.setOuncesOfBloodRequired(patientDetails.getOuncesOfBloodRequired());
    	
		
    	Patient updatedPatient = pt.save(patient);
    	return ResponseEntity.ok(updatedPatient);
	}
	
	// delete  rest API
	@DeleteMapping("/patient/{patientId}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable Long patientId){
		Patient patient = pt.findById(patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + patientId));
		
		pt.delete(patient);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}