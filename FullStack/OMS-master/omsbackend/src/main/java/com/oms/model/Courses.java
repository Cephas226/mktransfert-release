package com.oms.model;

import javax.persistence.*;
import java.util.HashSet;
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

    @Column (name = "startDate")
    private String startDate;

    @Column (name = "endDate")
    private String endDate;

    @Column (name = "coursesTime")
    private String coursesTime;

    @Column (name = "coursesFrequency")
    private String coursesFrequency;

    @Column (name = "coursesUnit")
    private String coursesUnit;

    @ManyToMany
    @JoinTable(
            name = "course_student",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    Set<Student> student;

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

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getCoursesTime() {
        return coursesTime;
    }

    public void setCoursesTime(String coursesTime) {
        this.coursesTime = coursesTime;
    }

    public String getCoursesFrequency() {
        return coursesFrequency;
    }

    public void setCoursesFrequency(String coursesFrequency) {
        this.coursesFrequency = coursesFrequency;
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

    public Courses(Long idCourses, String couresRoot, String coursesName, String coursesType, String startDate, String endDate, String coursesTime, String coursesFrequency, String coursesUnit, Set<Student> student) {
        IdCourses = idCourses;
        this.couresRoot = couresRoot;
        this.coursesName = coursesName;
        this.coursesType = coursesType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.coursesTime = coursesTime;
        this.coursesFrequency = coursesFrequency;
        this.coursesUnit = coursesUnit;
        this.student = student;
    }

    public Courses() {
    }
}
