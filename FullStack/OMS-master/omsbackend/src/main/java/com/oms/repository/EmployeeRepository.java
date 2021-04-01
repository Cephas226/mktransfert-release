package com.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.model.Employee;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
  Optional<Employee> findByEmail(String username);
  Boolean existsByEmail(String email);
}
