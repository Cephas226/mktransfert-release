package com.oms.controller;

import com.oms.model.*;
import com.oms.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 1800)
@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseService courseService;

    /*Selectionnez tous les courses*/
    @GetMapping("/courses")
    @PreAuthorize("hasRole('SUPER_ADMIN') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Page<Courses> ListCourses(Pageable pageable) {
        return courseService.findAll(pageable);
    }

    @PostMapping("/courses")
    @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
    public Courses addCourse(@RequestBody Courses courses){
        return courseService.saveCourse(courses);
    }

    @GetMapping("/courses/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
    public Optional<Courses> selectOneCourse(@PathVariable ("id") Long Id){
        return courseService.findById(Id);
    }

    /*@PutMapping("/courses/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
    public Optional<Courses> updateCourse (@RequestBody Courses courseRequest, @PathVariable ("id") Long Id){
        return courseService.findById(Id).map(course -> {
            course.setCouresRoot(courseRequest.getCouresRoot());
            course.setCoursesName(courseRequest.getCoursesName());
            course.setCoursesUnit(courseRequest.getCoursesUnit());
            course.setCoursesType(courseRequest.getCoursesType());
            return courseService.saveCourse(course);
        });
    }*/
    @PutMapping("/courses/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
    public Optional<Courses> updateCourse (@RequestBody Courses courseRequest, @PathVariable ("id") Long Id){
        return courseService.findById(Id).map(course -> {
          /*  course.setCouresRoot(courseRequest.getFirstName());
            course.setLastName(courseRequest.getLastName());
            course.setJobRole(courseRequest.getJobRole());
            course.setPrivatePhone(courseRequest.getPrivatePhone());
            course.setEmail(courseRequest.getEmail());*/
            return courseService.saveCourse(courseRequest);
        });
    }
    @PatchMapping("/courses/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
    public Optional<Courses> patchCourse (@RequestBody Courses courseRequest, @PathVariable ("id") Long Id){
        return courseService.findById(Id).map(course -> {
            course.setAvailable(courseRequest.isAvailable());
            return courseService.saveCourse(course);
        });
    }
    @DeleteMapping("/courses/{id}")
    @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
    public void deleteCourse(@PathVariable ("id")Long Id){
        courseService.deleteCourse(Id);
    }
}
