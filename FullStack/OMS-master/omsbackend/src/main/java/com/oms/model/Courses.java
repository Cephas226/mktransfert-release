package com.oms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(	name = "courses")
public class Courses {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long IdCourses;

    @Column (name = "couresRoot")
    private String couresRoot;

    @Column (name = "coursesName")
    private String coursesName;

    @Column (name = "coursesType")
    private String coursesType;

    @Column (name = "coursesUnit")
    private String coursesUnit;

    @Column (name = "available")
    private boolean available=true;

    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "course_student",joinColumns = @JoinColumn(name = "student_id"),inverseJoinColumns = @JoinColumn(name = "course_id"))
    Set<Student> student;

   /* @JsonIgnore
    @OneToMany(mappedBy="courses")
    private Set<PlannedCourse> plannedCourse;*/
   @JsonIgnore
    @OneToMany(mappedBy="courses")
    private Set<PlannedCourse> plannedCourse;

    public Long getIdCourses() {
        return IdCourses;
    }

    public void setIdCourses(Long idCourses) {
        IdCourses = idCourses;
    }

    public String getCouresRoot() {
        return couresRoot;
    }

    public void setCouresRoot(String couresRoot) {
        this.couresRoot = couresRoot;
    }

    public String getCoursesName() {
        return coursesName;
    }

    public void setCoursesName(String coursesName) {
        this.coursesName = coursesName;
    }

    public String getCoursesType() {
        return coursesType;
    }

    public void setCoursesType(String coursesType) {
        this.coursesType = coursesType;
    }
    public String getCoursesUnit() {
        return coursesUnit;
    }

    public void setCoursesUnit(String coursesUnit) {
        this.coursesUnit = coursesUnit;
    }

    public Set<Student> getStudent() {
        return student;
    }

    public void setStudent(Set<Student> student) {
        this.student = student;
    }

    public Courses() {
    }

    public Set<PlannedCourse> getPlannedCourse() {
        return plannedCourse;
    }

    public void setPlannedCourse(Set<PlannedCourse> plannedCourse) {
        this.plannedCourse = plannedCourse;
    }

    public Courses(String couresRoot, String coursesName, String coursesType, String coursesUnit, boolean available, Set<Student> student, Set<PlannedCourse> plannedCourse) {
        this.couresRoot = couresRoot;
        this.coursesName = coursesName;
        this.coursesType = coursesType;
        this.coursesUnit = coursesUnit;
        this.available = available;
        this.student = student;
        this.plannedCourse = plannedCourse;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    @Override
    public String toString() {
        return "Courses{" +
                "couresRoot='" + couresRoot + '\'' +
                ", coursesName='" + coursesName + '\'' +
                ", coursesType='" + coursesType + '\'' +
                ", coursesUnit='" + coursesUnit + '\'' +
                ", available=" + available +
                ", student=" + student +
                ", plannedCourse=" + plannedCourse +
                '}';
    }
}
