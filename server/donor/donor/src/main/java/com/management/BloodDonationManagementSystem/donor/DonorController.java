package com.management.BloodDonationManagementSystem.donor;

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
@RequestMapping("/donor")
public class DonorController {

	@Autowired
	private DonorRepository don;
	
	// get all 
	@GetMapping("/donor")
	public List<Donor> getAllDonors(){
		return don.findAll();
	}		
	
	// Create  rest API
	@PostMapping("/donor")
	public Donor doneateDonor(@RequestBody Donor donor) {
		return don.save(donor);
	}
	
	// get  by id rest API
	@GetMapping("/donor/{donorId}")
	public ResponseEntity<Donor> getDonorById(@PathVariable Long donorId) {
		Donor donor = don.findById(donorId)
				.orElseThrow(() -> new ResourceNotFoundException("Donor not exist with id :" + donorId));
		return ResponseEntity.ok(donor);
	}
	
	// update  rest API
	
	@PutMapping("/donor/{donorId}")
	public ResponseEntity<Donor> updateDonor(@PathVariable Long donorId, @RequestBody Donor donorDetails){
		Donor donor = don.findById(donorId)
				.orElseThrow(() -> new ResourceNotFoundException("Donor not exist with id :" + donorId));
		
		donor.setDonorName(donorDetails.getDonorName());
    	donor.setAge(donorDetails.getAge());
    	donor.setGender(donorDetails.getGender());
    	donor.setBloodType(donorDetails.getBloodType());
    	donor.setRHType(donorDetails.getRHType());
    	donor.setOuncesOfBloodCollected(donorDetails.getOuncesOfBloodCollected());

    	
		
    	Donor updatedDonor = don.save(donor);
    	return ResponseEntity.ok(updatedDonor);
	}
	
	// delete  rest API
	@DeleteMapping("/donor/{donorId}")
	public ResponseEntity<Map<String, Boolean>> deleteDonor(@PathVariable Long donorId){
		Donor donor = don.findById(donorId)
				.orElseThrow(() -> new ResourceNotFoundException("Donor not exist with id :" + donorId));
		
		don.delete(donor);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}