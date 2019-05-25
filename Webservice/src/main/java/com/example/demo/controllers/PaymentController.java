package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Payment;
import com.example.demo.services.PaymentService;

@RestController
@RequestMapping("/payments")
public class PaymentController {

	@Autowired
	private PaymentService srv;
	
	@GetMapping
	public List<Payment> getAll() {
		return srv.findAll();
	}
	
	@GetMapping("/{id}")
	public Payment getById(@PathVariable int id) {
		return srv.findById(id).orElseThrow(() -> new RuntimeException("Invalid Id"));
	}
	
	@PostMapping
	public void add(@RequestBody Payment payment) {
		srv.add(payment);
	}
	
	@PutMapping("/{id}")
	public void update(@RequestBody Payment payment, @PathVariable int id) {
		srv.update(payment, id);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		srv.deleteById(id);
	}
	
}
