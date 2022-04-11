package com.management.BloodDonationManagementSystem.Bms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"com.management.BloodDonationManagementSystem.doctor","com.management.BloodDonationManagementSystem.donor","com.management.BloodDonationManagementSystem.patient"})
public class BmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BmsApplication.class, args);
	}

}
