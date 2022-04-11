package com.management.BloodDonationManagementSystem.Bms;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@EnableJpaRepositories(basePackages = {"com.management.BloodDonationManagementSystem.doctor","com.management.BloodDonationManagementSystem.donor","com.management.BloodDonationManagementSystem.patient"})
@EntityScan(basePackages = {"com.management.BloodDonationManagementSystem.doctor","com.management.BloodDonationManagementSystem.donor","com.management.BloodDonationManagementSystem.patient"})
public interface BmsRepository {

}
