package com.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.model.Student;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
  Optional<Student> findStudentById(Long id);
}
