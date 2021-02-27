package com.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.model.Employee;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
  Optional<Employee> findByEmail(String username);
  Boolean existsByEmail(String email);
}
