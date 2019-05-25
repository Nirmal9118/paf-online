package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Payment;

@Repository
public interface PaymentRepository extends CrudRepository<Payment, Integer>{
	
}
