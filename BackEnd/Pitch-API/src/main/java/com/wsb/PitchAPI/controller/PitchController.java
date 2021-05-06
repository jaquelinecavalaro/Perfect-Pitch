package com.wsb.PitchAPI.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.wsb.PitchAPI.model.Pitch;
import com.wsb.PitchAPI.repository.PitchRepository;

@RestController
@RequestMapping("/pitch")
@CrossOrigin("*")
public class PitchController {

	@Autowired
	private PitchRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Pitch>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Pitch> GetById(@PathVariable long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}	
	
	@GetMapping("/texto/{texto}")
	public ResponseEntity<List<Pitch>> GetByTexto(@PathVariable String texto){
		return ResponseEntity.ok(repository.findAllByTextoContainingIgnoreCase(texto));
	}
	
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Pitch>> GetByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(repository.findAllByTextoContainingIgnoreCase(titulo));
	}
	
	@PostMapping
	public ResponseEntity<Pitch> post (@RequestBody Pitch texto){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(texto));
	}	
	
	@PutMapping
	public ResponseEntity<Pitch> put (@RequestBody Pitch texto){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(texto));
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}	
}

