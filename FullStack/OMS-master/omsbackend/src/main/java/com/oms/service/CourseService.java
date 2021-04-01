package com.oms.service;

import com.oms.model.Courses;
import com.oms.model.Employee;
import com.oms.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public Optional<Courses> findById(Long id){
        return courseRepository.findById(id);
    }

    public Optional<Courses> findByName(String courseName){
        return courseRepository.findCoursesByCoursesName(courseName);
    }

    public Courses saveCourse(Courses courses){
        return courseRepository.save(courses);
    }
    public Page<Courses> findAll(Pageable pageable) {
        return courseRepository.findAll( pageable);
    }
    public void deleteCourse(Long Id){
        courseRepository.deleteById(Id);
    }
}
