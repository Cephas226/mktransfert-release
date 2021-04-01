package com.oms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "code")
    private String code;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "gender")
    private char gender;

    @Column(name = "country")
    private String country;

    @Column(name = "nationnality")
    private String nationnality;

    @Column(name = "site")
    private String site;

    @Column(name = "grade")
    private String grade;

    @Column(name = "type")
    private String type;

    @Column(name = "inscriptionDateAtGA")
    private String inscriptionDateAtGA;

    @Column(name = "Bithdaydate")
    private String Bithdaydate;

    @Column(name = "email", unique = true)
    private String email;

    /*@Column(name = "course")
    private String course;*/

    @Column(name = "phone", unique = true)
    private String phone;

    @Column(name = "address")
    private String address;
    @Column(name = "level")
    private String level;

    @Column(name = "books")
    private String books;



	/*@OneToMany(mappedBy="student")
	private Set<Books> books;*/

    @Column(name = "cityOfResidence")
    private String cityOfResidence;

	@Column(name = "status")
	private Boolean status=true;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "student_course",
			joinColumns = @JoinColumn(name = "student_id"),
			inverseJoinColumns = @JoinColumn(name = "course_id"))
	private Set<Courses> courses = new HashSet<>();

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "student_parent",
			joinColumns = @JoinColumn(name = "student_id"),
			inverseJoinColumns = @JoinColumn(name = "parent_id"))
	private Set<Parents> parents = new HashSet<>();

	@ManyToMany
	@JsonIgnore
	Set<PlannedCourse> plannedCourses;

	/*@ManyToOne
	@JoinColumn(name="plannedCourse_id", nullable=false)
	private PlannedCourse plannedCourse;*/


	public Long getId() {
		return id;
	}
///Users/mac/dumps/Dump20210305.sql
	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getNationnality() {
		return nationnality;
	}

	public void setNationnality(String nationnality) {
		this.nationnality = nationnality;
	}

	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getInscriptionDateAtGA() {
		return inscriptionDateAtGA;
	}

	public void setInscriptionDateAtGA(String inscriptionDateAtGA) {
		this.inscriptionDateAtGA = inscriptionDateAtGA;
	}

	public String getBithdaydate() {
		return Bithdaydate;
	}

	public void setBithdaydate(String bithdaydate) {
		Bithdaydate = bithdaydate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getBooks() {
		return books;
	}

	public void setBooks(String books) {
		this.books = books;
	}

	public String getCityOfResidence() {
		return cityOfResidence;
	}

	public void setCityOfResidence(String cityOfResidence) {
		this.cityOfResidence = cityOfResidence;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Set<Courses> getCourses() {
		return courses;
	}

	public void setCourses(Set<Courses> courses) {
		this.courses = courses;
	}

	public Set<Parents> getParents() {
		return parents;
	}

	public void setParents(Set<Parents> parents) {
		this.parents = parents;
	}

	/*public PlannedCourse getPlannedCourse() {
		return plannedCourse;
	}

	public void setPlannedCourse(PlannedCourse plannedCourse) {
		this.plannedCourse = plannedCourse;
	}*/

	public Student(String code, String lastName, String firstName, char gender, String country, String nationnality, String site, String grade, String type, String inscriptionDateAtGA, String bithdaydate, String email, String phone, String address, String level, String books, String cityOfResidence, Boolean status, Set<Courses> courses) {
		this.code = code;
		this.lastName = lastName;
		this.firstName = firstName;
		this.gender = gender;
		this.country = country;
		this.nationnality = nationnality;
		this.site = site;
		this.grade = grade;
		this.type = type;
		this.inscriptionDateAtGA = inscriptionDateAtGA;
		Bithdaydate = bithdaydate;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.level = level;
		this.books = books;
		this.cityOfResidence = cityOfResidence;
		this.status = status;
		this.courses = courses;
	}

	public Student() {
	}

	@Override
	public String toString() {
		return "Student{" +
				"code='" + code + '\'' +
				", lastName='" + lastName + '\'' +
				", firstName='" + firstName + '\'' +
				", gender=" + gender +
				", country='" + country + '\'' +
				", nationnality='" + nationnality + '\'' +
				", site='" + site + '\'' +
				", grade='" + grade + '\'' +
				", type='" + type + '\'' +
				", inscriptionDateAtGA='" + inscriptionDateAtGA + '\'' +
				", Bithdaydate='" + Bithdaydate + '\'' +
				", email='" + email + '\'' +
				", phone='" + phone + '\'' +
				", address='" + address + '\'' +
				", level='" + level + '\'' +
				", books='" + books + '\'' +
				", cityOfResidence='" + cityOfResidence + '\'' +
				", status=" + status +
				", courses=" + courses +
				", parents=" + parents +
				'}';
	}

	public Set<PlannedCourse> getPlannedCourses() {
		return plannedCourses;
	}

	public void setPlannedCourses(Set<PlannedCourse> plannedCourses) {
		this.plannedCourses = plannedCourses;
	}
}
