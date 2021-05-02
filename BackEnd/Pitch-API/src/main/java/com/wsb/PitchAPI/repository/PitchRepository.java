package com.wsb.PitchAPI.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wsb.PitchAPI.model.Pitch;

@Repository
public interface PitchRepository extends JpaRepository<Pitch, Long> {
	public List<Pitch> findAllByTextoContainingIgnoreCase (String texto);
}