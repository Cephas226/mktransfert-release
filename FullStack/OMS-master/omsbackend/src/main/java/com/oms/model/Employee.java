package com.oms.model;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(	name = "employees",
  uniqueConstraints = {
    @UniqueConstraint(columnNames = "email")
  }
)
@Component
public class Employee {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;

	@Column(name="last_name")
	private String lastName;

	@Column(name="first_name")
	private String firstName;

	@Column(name="gender")
	private char gender;

	@Column(name="job_role")
	private String jobRole;

  @Column(name="department")
  private String department;

	@Column(name="email", unique=true)
	private String email;

	@Column(name="business_phone", unique=true)
	private String businessPhone;

	@Column(name="private_phone", unique=true)
	private String privatePhone;

	@Column(name="work_location")
	private String workLocation;

  @Column(name="status")
  private String status;

	@Column(name="password")
	private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(	name = "employee_roles",
    joinColumns = @JoinColumn(name = "employee_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  @OneToMany(mappedBy = "employee")
  private Set<Historique> historique = new HashSet<>();

	public Employee() {
		super();
	}
  public Employee(String firstName, String lastName, char gender, String jobRole,
                  String department, String email, String businessPhone, String privatePhone,
                  String workLocation, String status, String password
                  ) {
    super();
    this.lastName = lastName;
    this.firstName = firstName;
    this.gender = gender;
    this.jobRole = jobRole;
    this.department = department;
    this.email = email;
    this.businessPhone = businessPhone;
    this.privatePhone = privatePhone;
    this.workLocation = workLocation;
    this.password = password;
    this.status = status;
  //  this.historique=historique;
  }

  @Override
  public String toString() {
    return "Employee{" +
      "id=" + id +
      ", lastName='" + lastName + '\'' +
      ", firstName='" + firstName + '\'' +
      ", gender=" + gender +
      ", jobRole='" + jobRole + '\'' +
      ", department='" + department + '\'' +
      ", email='" + email + '\'' +
      ", businessPhone='" + businessPhone + '\'' +
      ", privatePhone='" + privatePhone + '\'' +
      ", workLocation='" + workLocation + '\'' +
      ", status='" + status + '\'' +
      ", password='" + password + '\'' +
      ", roles=" + roles +
      ", historique=" + historique +
      '}';
  }

  public Long getId() {
		return id;
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


	public String getJobRole() {
		return jobRole;
	}


	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getBusinessPhone() {
		return businessPhone;
	}


	public void setBusinessPhone(String businessPhone) {
		this.businessPhone = businessPhone;
	}


	public String getPrivatePhone() {
		return privatePhone;
	}


	public void setPrivatePhone(String privatePhone) {
		this.privatePhone = privatePhone;
	}


	public String getWorkLocation() {
		return workLocation;
	}


	public void setWorkLocation(String workLocation) {
		this.workLocation = workLocation;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  public Set<Historique> getHistorique() {
    return historique;
  }

  public void setHistorique(Set<Historique> historique) {
    this.historique = historique;
  }

}
