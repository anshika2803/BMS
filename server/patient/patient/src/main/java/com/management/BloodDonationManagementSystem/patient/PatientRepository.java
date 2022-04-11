package com.management.BloodDonationManagementSystem.patient;


import org.springframework.data.jpa.repository.JpaRepository;


public interface PatientRepository extends JpaRepository<Patient, Long> {

}
