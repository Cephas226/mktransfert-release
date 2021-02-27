package com.oms.controller;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

import com.oms.model.*;
import com.oms.payload.request.CreationRequest;
import com.oms.payload.response.MessageResponse;
import com.oms.service.MailService;
import com.oms.service.RoleService;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.oms.service.EmployeeService;

@CrossOrigin(origins = "*", maxAge = 1800)
@RestController
@RequestMapping("/api")
public class EmployeeController {
  private JavaMailSender javaMailSender;
  @Autowired
  private EmployeeService employeeService;

  @Autowired
  RoleService roleService;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  PasswordEncoder passwordDecoder;

  @Autowired
  private MailService notificationService;

  @Autowired
  private Employee employee;



  @Autowired
  public void MailService(JavaMailSender javaMailSender) {
    this.javaMailSender = javaMailSender;
  }


  /*	@GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees() {

      try {
          List<Employee> employees = employeeService.getAllEmployees();

          if (employees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
          }

          return new ResponseEntity<>(employees, HttpStatus.OK);

        }
        catch(Exception e) {
          return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

  /*		if (employee.isPresent()) {
        return new ResponseEntity<>(employee.get(), HttpStatus.OK);
      }
      else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }*/

  /*Ici les autorisé creé des Employees*/

  /*Selectionnez tous les employees*/
  @GetMapping("/employees")
  @PreAuthorize("hasRole('SUPER_ADMIN') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public Page<Employee> ListUsers(Pageable pageable) {
    return employeeService.findAll(pageable);
  }

  /*Selectionnez un employee*/
  @GetMapping("/employees/{id}")
  @PreAuthorize("hasRole('SUPER_ADMIN') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public Optional<Employee>  getEmployeeById(@PathVariable("id") Long id) {
    return employeeService.findById(id);
  }
  /*Update un employee*/
  @PutMapping("/employees/{id}")
  @PreAuthorize("hasRole('SUPER_ADMIN') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public Optional<Employee> updateEmployee(@RequestBody CreationRequest employeeRequest, @PathVariable ("id") Long id) {
    return employeeService.findById(id).map(employee->{
      employee.setFirstName(employeeRequest.getFirstName());
      employee.setLastName(employeeRequest.getLastName());
      employee.setGender(employeeRequest.getGender());
      employee.setJobRole(employeeRequest.getJobRole());
      employee.setDepartment(employeeRequest.getDepartment());
      employee.setEmail(employeeRequest.getEmail());
      employee.setBusinessPhone(employeeRequest.getBusinessPhone());
      employee.setPrivatePhone(employeeRequest.getPrivatePhone());
      employee.setWorkLocation(employeeRequest.getWorkLocation());
      employee.setStatus(employeeRequest.getStatus());
      employee.setPassword(employee.getPassword());
     // employee.setRoles(employeeRequest.getRoles());
      Set<String> strRoles = employeeRequest.getRole();
      Set<Role> roles = new HashSet<>();
      if (strRoles == null) {
        Role modRole = roleService.findByName(ERole.ROLE_USER)
          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(modRole);
      } else {
        strRoles.forEach(role -> {
          System.out.println(role);
          switch (role) {
            case "user":
              Role modRole = roleService.findByName(ERole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
              roles.add(modRole);
              break;
          }
          switch (role) {
            case "moderator":
              Role modRole = roleService.findByName(ERole.ROLE_MODERATOR)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
              roles.add(modRole);
              break;
          }
        });
      }
      System.out.println(employee);
         employee.setRoles(roles);
        return employeeService.saveEmployee(employee);
    });
  }

  /*Ici l'admin cree un user avec role moderateur*/
  @PostMapping("/createModerator")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<?> createModerator(@RequestBody CreationRequest creationRequest) {
    if (employeeService.existsByEmail(creationRequest.getEmail())) {
      return ResponseEntity
        .badRequest()
        .body(new MessageResponse("Error: Email is already in use!"));
    }
    Employee userRegistered = new Employee(
      creationRequest.getFirstName(),
      creationRequest.getLastName(),
      creationRequest.getGender(),
      creationRequest.getJobRole(),
      creationRequest.getDepartment(),
      creationRequest.getEmail(),
      creationRequest.getBusinessPhone(),
      creationRequest.getPrivatePhone(),
      creationRequest.getWorkLocation(),
      creationRequest.getStatus(),
      encoder.encode(creationRequest.getFirstName())
     // creationRequest.getHistorique()
    );

    Set<String> strRoles = creationRequest.getRole();
    Set<Role> roles = new HashSet<>();

    if (strRoles == null) {
      Role modRole = roleService.findByName(ERole.ROLE_MODERATOR)
        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(modRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
          case "moderator":
            Role modRole = roleService.findByName(ERole.ROLE_MODERATOR)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(modRole);
            break;
        }
      });
    }
    userRegistered.setRoles(roles);
    System.out.println(userRegistered.toString());
    employeeService.saveEmployee(userRegistered);
    return ResponseEntity.ok(new MessageResponse("Moderator registered successfully!"));
  }

  @PreAuthorize("hasRole('ADMIN')")
  @PutMapping("moderateur/{id}")
  public Optional<Employee> updateModerator(@RequestBody Employee moderatorRequest,@PathVariable ("id") Long id) {
    return employeeService.findById(id).map(moderator -> {
      moderator.setFirstName(moderatorRequest.getFirstName());
      moderator.setLastName(moderatorRequest.getLastName());
      moderator.setGender(moderatorRequest.getGender());
      moderator.setJobRole(moderatorRequest.getJobRole());
      moderator.setDepartment(moderatorRequest.getDepartment());
      moderator.setEmail(moderatorRequest.getEmail());
      moderator.setBusinessPhone(moderatorRequest.getEmail());
      moderator.setPrivatePhone(moderatorRequest.getEmail());
      moderator.setWorkLocation(moderatorRequest.getEmail());
      moderator.setStatus(moderatorRequest.getStatus());
      moderator.setPassword(moderatorRequest.getPassword());
      moderator.setRoles(moderatorRequest.getRoles());
      return employeeService.saveEmployee(moderatorRequest);
    });
  }
/*	@PostMapping("/employees")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee emp) {

		try {
			Employee _employee = new Employee(emp.getLastName(), emp.getFirstName(), emp.getGender(),
					emp.getJobRole(), emp.getEmail(), emp.getBusinessPhone(), emp.getPrivatePhone(),
					emp.getWorkLocation(), emp.getPassword());

			employeeService.saveEmployee(_employee);
			return new ResponseEntity<>(_employee, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}*/

/*
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id, @RequestBody Employee e) {

		Optional<Employee> employee = employeeService.getOneEmployee(id);
		if (employee.isPresent()) {
			Employee _emp = employee.get();
			_emp.setFirstName(e.getFirstName());
			_emp.setLastName(e.getLastName());
			_emp.setGender(e.getGender());
			_emp.setJobRole(e.getJobRole());
			_emp.setEmail(e.getEmail());
			_emp.setBusinessPhone(e.getBusinessPhone());
			_emp.setPrivatePhone(e.getPrivatePhone());
			_emp.setWorkLocation(e.getWorkLocation());
			_emp.setPassword(e.getPassword());

			employeeService.updateEmployee(_emp);
			return new ResponseEntity<>(_emp, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Employee> deleteEmployee(@PathVariable("id") Long id) {

		try {
			employeeService.deleteEmployee(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/employees")
	public ResponseEntity<Employee> deleteAllEmployees() {

		try {
			employeeService.deleteAllEmployees();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
*/
@PostMapping("/employees")
@PreAuthorize("hasRole('SUPER_ADMIN') or hasRole('MODERATOR') or hasRole('ADMIN')")
public Employee createEmployee(@RequestBody CreationRequest creationRequest) {
  System.out.println(creationRequest.toString());
  if (employeeService.existsByEmail(creationRequest.getEmail())) {
    return null;
  }
  // Create new user's account
  Employee userRegistered = new Employee(
    creationRequest.getFirstName(),
    creationRequest.getLastName(),
    creationRequest.getGender(),
    creationRequest.getJobRole(),
    creationRequest.getDepartment(),
    creationRequest.getEmail(),
    creationRequest.getBusinessPhone(),
    creationRequest.getPrivatePhone(),
    creationRequest.getWorkLocation(),
    creationRequest.getStatus(),
    encoder.encode(creationRequest.getLastName().toLowerCase())
    //creationRequest.getHistorique()
  );

/*  Set<Historique> listHistorique = creationRequest.getHistoriques();
  Set<Historique> historique = new HashSet<>();

  listHistorique.forEach(e->{
    historique.add(e);
  });*/

  Set<String> strRoles = creationRequest.getRole();
  Set<Role> roles = new HashSet<>();

  if (strRoles == null) {
    Role userRole = roleService.findByName(ERole.ROLE_USER)
      .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
    roles.add(userRole);
  } else {
    strRoles.forEach(role -> {
      System.out.println(role);
      switch (role) {
        case "admin":
          Role adminRole = roleService.findByName(ERole.ROLE_ADMIN)
            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(adminRole);

          break;
        case "moderator":
          Role modRole = roleService.findByName(ERole.ROLE_MODERATOR)
            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(modRole);

          break;
        default:
          Role userRole = roleService.findByName(ERole.ROLE_USER)
            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);
      }
    });
  }
  userRegistered.setRoles(roles);
 // userRegistered.setHistorique(historique);
  System.out.println(userRegistered.toString());
  employeeService.saveEmployee(userRegistered);
  return userRegistered;
}

  @PatchMapping("/emailEmployee")
  public String postEmail(@RequestBody String employeeEmail){
    String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    StringBuilder sb = new StringBuilder();
    Random random = new Random();
    int length = 7;
    for(int i = 0; i < length; i++) {
      int index = random.nextInt(alphabet.length());
      char randomChar = alphabet.charAt(index);
      sb.append(randomChar);
    }
    String newPassword = sb.toString();
    System.out.println(newPassword);
    employeeService.findByEmail("tot@gmail.com")
      .map(emp ->{
         emp.setPassword(encoder.encode(newPassword));
          return employeeService.saveEmployee(emp);
        }
      );
    SimpleMailMessage mail = new SimpleMailMessage();
    mail.setTo(employeeEmail);
    mail.setSubject("Test OMS password recovey");
    mail.setText("Your new password is "+newPassword);
    javaMailSender.send(mail);

      return "Email sended "+newPassword;
  }
}
