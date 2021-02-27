package com.oms.repository;

import com.oms.model.Courses;
import com.oms.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository <Courses,Long> {
}
