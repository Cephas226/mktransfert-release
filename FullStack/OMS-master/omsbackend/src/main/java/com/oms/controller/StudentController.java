package com.oms.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.oms.model.Student;
import com.oms.service.StudentService;

@CrossOrigin(origins="*", maxAge=1800)
@RestController
@RequestMapping("/api")
public class StudentController {

/*	@Autowired
	private StudentService studentService;

	@GetMapping("/students")
	public ResponseEntity<List<Student>> getAllStudents() {

		try {
				List<Student> students = studentService.getAllStudents();

				if (students.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}

				return new ResponseEntity<>(students, HttpStatus.OK);

			}
			catch(Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}

	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable("id") Long id) {

		Optional<Student> student = studentService.getOneStudent(id);

		if (student.isPresent()) {
			return new ResponseEntity<>(student.get(), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/students")
	public ResponseEntity<Student> createStudent(@RequestBody Student stu) {

		try {
			Student _student = new Student(stu.getCode(), stu.getLastName(), stu.getFirstName(),
					stu.getGender(), stu.getCourse(), stu.getEmail(), stu.getPhone1(), stu.getPhone2());

			studentService.saveStudent(_student);
			return new ResponseEntity<>(_student, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable("id") Long id, @RequestBody Student s) {

		Optional<Student> student = studentService.getOneStudent(id);
		if (student.isPresent()) {
			Student _stu = student.get();
			_stu.setCode(s.getCode());
			_stu.setLastName(s.getLastName());
			_stu.setFirstName(s.getFirstName());
			_stu.setGender(s.getGender());
			_stu.setCourse(s.getCourse());
			_stu.setEmail(s.getEmail());
			_stu.setPhone1(s.getPhone1());
			_stu.setPhone2(s.getPhone2());

			studentService.updateStudent(_stu);
			return new ResponseEntity<>(_stu, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/students/{id}")
	public ResponseEntity<Student> deleteStudent(@PathVariable("id") Long id) {

		try {
			studentService.deleteStudent(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/students")
	public ResponseEntity<Student> deleteAllStudents() {

		try {
			studentService.deleteAllStudents();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}*/
  @Autowired
  private StudentService studentService;

  @GetMapping("/students")
  @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN') or hasRole('MODERATOR')")
  public Page<Student> getAllStudents(Pageable pageable){
    return studentService.findAllStudent(pageable);}

  @PostMapping("/students")
  @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
  public Student addStudent(@RequestBody Student student){
    return studentService.saveStudent(student);
  }
  @PutMapping("/students/{id}")
  @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
  public Optional<Student> updateStudent (@RequestBody Student studentRequest, @PathVariable ("id") Long Id){
    return studentService.findStudentById(Id).map(student -> {
      student.setCode(studentRequest.getCode());
      student.setLastName(studentRequest.getLastName());
      student.setFirstName(studentRequest.getFirstName());
      student.setGender(studentRequest.getGender());
      student.setEmail(studentRequest.getEmail());
      student.setPhone(studentRequest.getPhone());
      student.setCityOfResidence(studentRequest.getCityOfResidence());
      return studentService.saveStudent(student);
    });
  }
  @DeleteMapping("/students/{id}")
  @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
  public void deleteStudent(@PathVariable ("id")Long Id){
     studentService.deleteStudent(Id);
  }

  @GetMapping("/students/{id}")
  @PreAuthorize("hasRole('SUPER_ADMIN')or hasRole('ADMIN')or hasRole('MODERATOR')")
  public Optional<Student> selectOneStudent(@PathVariable ("id") Long Id){
    return studentService.findStudentById(Id);
  }
};
