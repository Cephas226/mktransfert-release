package com.oms.payload.request;

import com.oms.model.Historique;

import java.util.List;
import java.util.Set;

public class CreationRequest {
  private Long id;
  private String firstName;
  private String lastName;
  private char gender;
  private String jobRole;
  private String department;
  private String email;
  private String businessPhone;
  private String privatePhone;
  private String workLocation;
  private String status;
  private String password;
  private Set<Historique> historiques;
  private Set<String> role;

  public CreationRequest(Long id, String firstName, String lastName, char gender, String jobRole, String department, String email, String businessPhone, String privatePhone, String workLocation, String status, String password,
                         Set<String> role,
                         Set<Historique> historiques
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.jobRole = jobRole;
    this.department = department;
    this.email = email;
    this.businessPhone = businessPhone;
    this.privatePhone = privatePhone;
    this.workLocation = workLocation;
    this.status = status;
    this.password = password;
    this.role = role;
    this.historiques=historiques;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
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

  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
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

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<String> getRole() {
    return role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }

  public CreationRequest() {
  }




  @Override
  public String toString() {
    return "CreationRequest{" +
      "id=" + id +
      ", firstName='" + firstName + '\'' +
      ", lastName='" + lastName + '\'' +
      ", gender=" + gender +
      ", jobRole='" + jobRole + '\'' +
      ", department='" + department + '\'' +
      ", email='" + email + '\'' +
      ", businessPhone='" + businessPhone + '\'' +
      ", privatePhone='" + privatePhone + '\'' +
      ", workLocation='" + workLocation + '\'' +
      ", status='" + status + '\'' +
      ", password='" + password + '\'' +
      ", historiques=" + historiques +
      ", role=" + role +
      '}';
  }

  public Set<Historique> getHistoriques() {
    return historiques;
  }

  public void setHistoriques(Set<Historique> historiques) {
    this.historiques = historiques;
  }
}
