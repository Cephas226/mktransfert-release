package com.oms.repository;

import com.oms.model.Courses;
import com.oms.model.Employee;
import com.oms.model.PlannedCourse;
import com.oms.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CourseRepository extends JpaRepository <Courses,Long> {
    Optional<Courses> findCoursesByCoursesName(String courseName);
}
