package com.management.BloodDonationManagementSystem.doctor;


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
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	private DoctorRepository dr;
	
	// get all 
	@GetMapping("/doctor")
	public List<Doctor> getAllDoctors(){
		return dr.findAll();
	}		
	
	// Create  rest API
	@PostMapping("/doctor")
	public Doctor dreateDoctor(@RequestBody Doctor doctor) {
		return dr.save(doctor);
	}
	
	// get  by id rest API
	@GetMapping("/doctor/{doctorId}")
	public ResponseEntity<Doctor> getDoctorById(@PathVariable Long doctorId) {
		Doctor doctor = dr.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor not exist with id :" + doctorId));
		return ResponseEntity.ok(doctor);
	}
	
	// update  rest API
	
	@PutMapping("/doctor/{doctorId}")
	public ResponseEntity<Doctor> updateDoctor(@PathVariable Long doctorId, @RequestBody Doctor doctorDetails){
		Doctor doctor = dr.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor not exist with id :" + doctorId));
		
		doctor.setDoctorName(doctorDetails.getDoctorName());
    	doctor.setHospitalName(doctorDetails.getHospitalName());
    	doctor.setAge(doctorDetails.getAge());
    	doctor.setNoOfCases(doctorDetails.getNoOfCases());
    	
		
    	Doctor updatedDoctor = dr.save(doctor);
    	return ResponseEntity.ok(updatedDoctor);
	}
	
	// delete  rest API
	@DeleteMapping("/doctor/{doctorId}")
	public ResponseEntity<Map<String, Boolean>> deleteDoctor(@PathVariable Long doctorId){
		Doctor doctor = dr.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor not exist with id :" + doctorId));
		
		dr.delete(doctor);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}