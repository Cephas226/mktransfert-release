package com.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.model.Student;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
  Optional<Student> findStudentById(Long id);

}
