package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Payment;
import com.example.demo.repositories.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	private PaymentRepository repo;
	
	public List<Payment> findAll() {
		List<Payment> list = new ArrayList<>();
		repo.findAll().iterator().forEachRemaining(list::add);
		return list;
	}
	
	public Optional<Payment> findById(int id) {
		return repo.findById(id);
	}
	
	public void add(Payment payment) {
		repo.save(payment);
	}
	
	public void update(Payment payment, int id) {
		Payment p = repo.findById(id).orElseThrow(() -> new RuntimeException("Invalid id"));
		payment.setId(p.getId());
		repo.save(payment);
	}
	
	public void deleteById(int id) {
		repo.deleteById(id);
	}
}
